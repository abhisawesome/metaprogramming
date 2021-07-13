const Log = (obj, onChange) => {
    return new Proxy(obj, {
        set: (target, key, value) => {
            Reflect.set(target, key, value);
            onChange({ key, value })
        }
    })
}


const person = {
    name: 'Name',
    age: 30
}


const log = Log(person, (value) => {
    console.log(value);
})

log.age = 31;           // { key: 'age', value: 31 }
log.name = 'New Name'   // { key: 'name', value: 'New Name' }