import { pokemons } from "./pokemons.js";




const ota = document.getElementById("ota")
const input = document.getElementById("input")
const select = document.getElementById("select")
const selects = document.getElementById("selects")


function pokimons(malumot) {
    ota.innerHTML = ``
    malumot.map(pokimon => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
         <h2>${pokimon.name}</h2>
            <img src="${pokimon.img}" alt=""> <br>
            <button>${pokimon.type}</button>
            <h3>candy count:${pokimon?.candy_count || 0}</h3>
            <h3>${pokimon.weight}</h3>
            <h4>${pokimon.weaknesses}</h4>
            <div class="p-id">${pokimon.num}</div>
            <div class="time">${pokimon.spawn_time}</div>
            `;

        ota.appendChild(div);
    });
}

pokimons(pokemons);

input.addEventListener("input", () => {


    const qidiruv = pokemons.filter(e =>
        e.name.toLowerCase().includes(input.value.toLowerCase()));
    pokimons(qidiruv);
})

select.addEventListener("change", () => {
    if (select.value == "All") {
        pokimons(pokemons);
    } else {
        const turi = pokemons.filter(t =>
            t.weaknesses.toString().includes(select.value));
        pokimons(turi)
    }
})


selects.addEventListener("change",()=>{
    if(selects.value=="A-Z"){
        const sp=pokemons.sort((a,b)=> a.name.localeCompare(b.name))
        pokimons(sp);
    }else{
        const sp=pokemons.sort((a,b)=> b.name.localeCompare(a.name))
        pokimons(sp);
    }
    
})

