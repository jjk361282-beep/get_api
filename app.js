const btn=document.querySelector('.pokemon_btn')
const name_poke=document.querySelector('#pokemon')
const info=document.querySelector('.info')
const img=document.querySelector('#img_pokemon')
const ch1=document.querySelector('.choix1')
const ch2=document.querySelector('.choix2')
ch1.addEventListener('click',async ()=>{
    const nb_ale= Math.floor(Math.random() * (1349 - 2 + 1)) + 2; 
    fetch(`https://pokeapi.co/api/v2/pokemon/${nb_ale}`)
        .then(rps=>{
            console.log(rps.ok);
            
            if (!rps.ok) {
                throw new Error ('pokemon inexsitant')
            }
            return rps.json()
        }
        )
        .then(data=>
            {
                img.src=data.sprites.back_default
                img.classList.remove('hidden')
                info.textContent=`name: ${data.name}`
            })
        .catch(error=>console.error(error))
})

btn.addEventListener('click',async ()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${name_poke.value}`)
        .then(rps=>{
            console.log(rps.ok);
            
            if (!rps.ok) {
                throw new Error ('pokemon inexsitant')
            }
            return rps.json()
        }
        )
        .then(data=>
            {
                img.src=data.sprites.back_default
                img.classList.remove('hidden')
                info.textContent=`name: ${data.name}`
            })
        .catch(error=>console.error(error))
}
)

