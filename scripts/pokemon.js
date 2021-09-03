const d=document;
    const button = d.getElementById("btnSearch");
     
        button.addEventListener("click",(e) =>{
    
        const pokeImage = d.getElementById("imagenPokemon"); //Image to be filled
        const pokeDetails = d.getElementById("infoPokemon"); // details to be filled

        const pokemon = d.getElementById("searchPokemon").value; //Pokemon to be search
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        xhttp.send();

           xhttp.onreadystatechange = function (){ 
            if (this.readyState == 4 && this.status == 200)
            {
               
                const returnedData = JSON.parse(this.responseText);
                    
                    //console.log(`Choosed Pokemon ${returnedData.name}`);
                    pokeImage.setAttribute("src",returnedData.sprites.front_default);
                    pokeDetails.innerText = returnedData.name;
                   
            }
            }


      });

// export function getPokemon(searchPokemon, imageControl, details, btnsearch){
//     const button = d.getElementById(btnsearch);

//     button.addEventListener("click",(e) =>{
//     //    if (e.target.matches(btnsearch)) {

//         const pokeImage = d.getElementById(imageControl); //Image to be filled
//         const pokeDetails = d.getElementById(details); // details to be filled

//         const pokemon = d.getElementById(searchPokemon).value; //Pokemon to be search
//         console.log(pokemon);

//         let xhttp = new XMLHttpRequest();
//         xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//         xhttp.send();

//         xhttp.onreadystatechange = function (){ 
//             if (this.readyState == 4 && this.status == 200)
//             {
//                 const returnedData = JSON.parse(this.responseText);
//                     console.log(returnedData);
//                     pokeImage.setAttribute("src",returnedData.sprites.front_default);
//                     pokeDetails.innerHTML = returnedData.name;
//                     // d.querySelector(pokeDetails).innerHTML = returnedData.name;
//             }
//             }
//         // }
// } )
// }