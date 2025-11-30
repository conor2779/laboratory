function composeSafe(...fns) {
    const listeners = { error: [] };

    const f = (x) => {
        let result = x;
        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                result = fns[i](result);
            }
            return result;
        } catch (e) {
            listeners.error.forEach(fn => fn(e));
            return undefined;
        }
    };

    f.on = (event, callback) => {
        if (listeners[event]) {
            listeners[event].push(callback);
        }
        return f;
    };

    return f;
}


const inc = x => x + 1;
const twice = x => { if(x>5) throw new Error('Too big'); return x*2; };
const f = composeSafe(inc, twice);

f.on('error', e => console.log('Ошибка:', e.message));

console.log(f(2)); 
console.log(f(6)); 
