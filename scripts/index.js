import { getPokemon } from "./pokemon";

const d = document;

d.addEventListener("DOMContentLoaded",e=>{
    getPokemon("#searchPokemon","#imagenPokemon","#infoPokemon","#btnSearch");
});