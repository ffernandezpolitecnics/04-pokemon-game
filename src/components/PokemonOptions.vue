<template lang="">
    <!-- <div class="options-container"> -->
    <div>
        <ul class="list-group">
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selectionPokemon', pokemon.id)" class="list-group-item list-group-item-action">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
       
    <!-- </div> -->
</template>
<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
/* ul {
    list-style-type: none;
} */

/* li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
} */

/* li:hover {
    background-color: rgba(0, 0, 0, 0.05);
} */

/* .options-container {
    display: flex;
    justify-content: center;
} */
</style>