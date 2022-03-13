console.log(pokemons)
var container=document.createElement('div');
container.setAttribute('class','container')
var ulList=document.createElement('ul');
ulList.setAttribute('class', 'ullist')
for(let pokemon of pokemons){
    let liLIst=document.createElement('li');
    liLIst.setAttribute('class','liList');
    let imgEl=document.createElement('img');
    imgEl.setAttribute('src',pokemon.img);
    imgEl.setAttribute('class','imgEl');

    let idEl=document.createElement('div');
    idEl.textContent=`id: ${ pokemon.id}`
    idEl.setAttribute('class','idEl')
    let nameEl=document.createElement('h3');
    nameEl.textContent=pokemon.name;
    nameEl.setAttribute('class','nameEl')
    var multipliersEl=document.createElement('div');
    multipliersEl.setAttribute('class','multipliersel')   
    if(pokemon.multipliers==null){
        console.log("multipres yuq ekan")
    }else{
        multipliersEl.textContent=`Multipliers:${pokemon.multipliers}`.split(",").join(" va ")
    }
    let eggEl=document.createElement('div');
    eggEl.setAttribute('class','eggEl')
    if(pokemon.egg=="Not in Eggs"){
        // console.log("bu filmni eeg  yuq")
    }else{
        eggEl.textContent=`egg: ${pokemon.egg}`
    }
    let weaknessesEl=document.createElement('ul')
    weaknessesEl.textContent="weaknesses:"
    weaknessesEl.setAttribute("class","weaknesses")
   
    for(let saksiz of pokemon.weaknesses){
        let liwek=document.createElement('li');
        liwek.textContent=saksiz;
        liwek.setAttribute('class','eggEl left')
        weaknessesEl.appendChild(liwek)
    }
    let typeEl=document.createElement('ul')
    typeEl.textContent="type:"
    typeEl.setAttribute('class','weaknesses')
    for(let saksiz of pokemon.type){
        let liwek=document.createElement('li');
        liwek.textContent=saksiz;
        liwek.setAttribute('class','eggEl left')
        typeEl.appendChild(liwek)
    }
    let avg_spawnsEl=document.createElement('div');
    avg_spawnsEl.textContent=`avg_spawns: ${pokemon.avg_spawns}`
    avg_spawnsEl.setAttribute('class','eggEl')
    let candyEl=document.createElement('div');
    candyEl.textContent=`candy: ${pokemon.candy}`
    candyEl.setAttribute('class','eggEl')
    let candy_countEl=document.createElement('div');
    candy_countEl.setAttribute('class','eggEl')
    if(pokemon.candy_count==undefined){
        // console.log("")
    }else{
        candy_countEl.textContent=`candy_count: ${pokemon.candy_count}`
    }
    let heightEl=document.createElement('div');
    heightEl.textContent=`height: ${pokemon.height}` 
    heightEl.setAttribute('class','eggEl')
    let weightEl=document.createElement('div');
    weightEl.textContent=`weight: ${pokemon.weight}` 
    weightEl.setAttribute('class','eggEl')
    let numEl=document.createElement('div');
    numEl.textContent=`num: ${pokemon.num}` 
    numEl.setAttribute('class','eggEl')
    let spawn_timeEl=document.createElement('div');
    spawn_timeEl.textContent=`spawn_time: ${pokemon.spawn_time}` 
    spawn_timeEl.setAttribute('class','eggEl')

    liLIst.appendChild(imgEl);
    liLIst.appendChild(nameEl)
    liLIst.appendChild(idEl)
    liLIst.appendChild(numEl)
    liLIst.appendChild(eggEl)
    liLIst.appendChild(multipliersEl)
    liLIst.appendChild(weaknessesEl)
    liLIst.appendChild(avg_spawnsEl)
    liLIst.appendChild(candyEl)
    liLIst.appendChild(candy_countEl)
    liLIst.appendChild(heightEl)
    liLIst.appendChild(weightEl)
    liLIst.appendChild(spawn_timeEl)
    liLIst.appendChild(typeEl)

    ulList.appendChild(liLIst)
}
container.appendChild(ulList);
document.body.appendChild(container);