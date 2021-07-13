function Log(obj) {
    return new Proxy(obj, {
        get: (target, key) => {
            console.log('GET=> key:', key, ' target:', target)
            return Reflect.get(target, key)
        },
        set: (target, key, value) => {
            console.log('SET=> key:', key, ' value:', value);
            Reflect.set(target, key, value);
        }
    })
}

const person = {
    name: 'Name',
    age: 30
}

const log = Log(person);
log.age // GET=> key: age  target: { name: 'Name', age: 30 }


log.age = 31; // SET=> key: age  value: 31

