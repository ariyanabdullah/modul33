const loadPlayer=(names)=>{
    const url=`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${names}`; 
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPlayer(data.player))
}

 
const displayPlayer=players=>{
    // console.log(players)

    const playerContainer=document.getElementById('player-container')
    playerContainer.innerText='';
 
    players.forEach(player => {
        console.log(player)
         const makePlayer=document.createElement('div')
         makePlayer.classList.add('col')
         makePlayer.innerHTML=`


                   <div class="card">
                        <img src="${player.strThumb ? player.strThumb :'This player has no image' }" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Name:${player.strPlayer}</h5>
                            <p class="card-text">${player.strDescriptionEN.slice(0,100)}</p>
                            <button onclick="playerId(${player.idPlayer})"   class=" btn btn-primary"> See More </button>
                        </div>
                    </div>



         `
         playerContainer.appendChild(makePlayer)
    });

}




// for search buttton:

const searchPlayer=()=>{
    const searchField=document.getElementById("src-field")
    const searchText=searchField.value;
    loadPlayer(searchText);
    searchField.value='';
}

// for player details

const playerId=idPlayer=>{

    // console.log(idPlayer)

 
    const url=`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${idPlayer}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>playerDetails(data.players))
  

}


const playerDetails=playerInformations=>{
     console.log(playerInformations)
    const playerInfo=document.getElementById("player-dtls")
      
    playerInformations.forEach(info => {
              
        console.log(info)

        const makeDetails=document.createElement('div')
    makeDetails.classList.add('col')
    makeDetails.innerHTML=`
    
    <div class="card">
    <img src="${info.strThumb ? info.strThumb :'This player has no image' }" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">${info.strDescriptionEN.slice(0,100)}</p> 
    </div>
  </div>
    
    `;
    playerInfo.appendChild(makeDetails)



   });
    
}