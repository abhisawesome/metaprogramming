const hero = {
    health: 100
}

const proxy = new Proxy(hero,{
    get:(target,key)=>{
        if(target.health >50){
            return 'OK';
        }else{
            return "Not OK"
        }
    }
})

console.log(proxy.get) // OK