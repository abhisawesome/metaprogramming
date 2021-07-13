const Access = (obj) => {
    return new Proxy(obj, {
        get: (target, key) => {
            const value = Reflect.get(target, key);
            if (value === undefined) {
                return 'Not'
            } else {
                
                if (typeof value === 'object') {
                    return Access(value);
                } else {
                    return value
                }
            }
        }
    })
}

const sample = {
    name: 'hai',
    value: {
        name: {
            name: 'sample'
        }
    }
}

const access = Access(sample);

console.log(access.name); // hai
console.log(access.value.name.name) // sample
console.log(access.notInObject) // Not