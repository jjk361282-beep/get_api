console.log('ok');
async function call_api(){
    const rqt=await fetch("https://pokeapi.co/api/v2/pokemon/Dragonite")
    const rsp= await rqt.json()
    console.log(rsp);
    console.log('dfg');
}
call_api()

console.log(6);
