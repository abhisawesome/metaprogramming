const hero  = {
    health: 100
}


Object.defineProperty(hero,'status',{
    get: ()=>{
        if(this.health >50){
            return 'OK';
        }else{
            return "Not OK"
        }
    }
})

console.log(hero.status)