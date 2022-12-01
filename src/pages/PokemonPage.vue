<template lang="">
    <div class="container">
        <h1 v-if="!pokemon">Espere por favor ...</h1>
        <div v-else="pokemon" class="card me-auto ms-auto" style="width: 30rem;">
            <div class="card-header">
                <h2 class="fw-bold">¿Quién es este pokémon?</h2>
            </div>
            <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
            <div class="card-body">
                <PokemonOptions :pokemons="pokemonArr" @selectionPokemon="checkAnswer($event)"/>
                <template v-if="showAnswer">
                    <h2 class="fade-in mt-2">{{ message }}</h2>
                    <button  @click="newGame()" class="btn btn-primary" >
                        Nuevo Juego
                    </button>
                </template>
                
            </div>
        </div>
    </div>
   
   
    
</template>
<script>

import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions'


export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer(selectedId) {
            this.showPokemon = true
            this.showAnswer = true

            if (selectedId === this.pokemon.id) {
                this.message = `Correcto, ${this.pokemon.name}`
            }
            else {
                this.message = `Oops, era ${this.pokemon.name}`
            }
        },
        newGame() {
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    },
}
</script>
