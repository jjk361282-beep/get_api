const btn=document.querySelector('.pokemon_btn')
const name_poke=document.querySelector('#pokemon')


btn.addEventListener('click',async ()=>{
    // console.log(`pokemon/${name_poke.value}`);
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${name_poke.value}`)
        .then(rps=>rps.json())
        .then(data=>console.log(data.sprites.back_default))
        .catch(error=>console.error(error))
}
)

