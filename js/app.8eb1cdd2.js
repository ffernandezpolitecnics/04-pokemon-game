(function(){"use strict";var e={4309:function(e,o,n){var t=n(9242),r=n(3396);function s(e,o,n,t,s,i){const a=(0,r.up)("PokemonPage");return(0,r.wg)(),(0,r.j4)(a)}var i=n(7139);const a={class:"container"},c={key:0},m={key:1,class:"card me-auto ms-auto",style:{width:"24rem"}},u=(0,r._)("div",{class:"card-header"},[(0,r._)("h3",{class:"fw-bold"},"¿Quién es este pokémon?")],-1),d={class:"card-body"},p={class:"badge text-bg-primary me-2 mt-2"},l={class:"badge text-bg-danger"},h={class:"fade-in mt-2"};function k(e,o,n,t,s,k){const f=(0,r.up)("PokemonPicture"),w=(0,r.up)("PokemonOptions");return(0,r.wg)(),(0,r.iD)("div",a,[s.pokemon?((0,r.wg)(),(0,r.iD)("div",m,[u,(0,r.Wm)(f,{pokemonId:s.pokemon.id,showPokemon:s.showPokemon},null,8,["pokemonId","showPokemon"]),(0,r._)("div",d,[(0,r.Wm)(w,{pokemons:s.pokemonArr,onSelectionPokemon:o[0]||(o[0]=e=>k.checkAnswer(e))},null,8,["pokemons"]),s.showAnswer?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r._)("span",p,"Aciertos "+(0,i.zw)(s.aciertos)+" - "+(0,i.zw)(s.percentA)+"%",1),(0,r._)("span",l,"Errores "+(0,i.zw)(s.errores)+" - "+(0,i.zw)(s.percentE)+"%",1),(0,r._)("h2",h,(0,i.zw)(s.message),1),(0,r._)("button",{onClick:o[1]||(o[1]=e=>k.newGame()),class:"btn btn-primary"}," Nuevo Juego ")],64)):(0,r.kq)("",!0)])])):((0,r.wg)(),(0,r.iD)("h1",c,"Espere por favor ..."))])}const f={class:"pokemon-container mt-2"},w=["src"],g=["src"];function v(e,o,n,t,s,i){return(0,r.wg)(),(0,r.iD)("div",f,[n.showPokemon?((0,r.wg)(),(0,r.iD)("img",{key:1,src:i.imgSrc,class:"fade-in",alt:"pokemon"},null,8,g)):((0,r.wg)(),(0,r.iD)("img",{key:0,src:i.imgSrc,class:"hidden-pokemon",alt:"pokemon"},null,8,w))])}var y={props:{pokemonId:{type:Number,required:!0},showPokemon:{type:Boolean,required:!0,default:!1}},computed:{imgSrc(){return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`}}},b=n(89);const P=(0,b.Z)(y,[["render",v],["__scopeId","data-v-7c8e70eb"]]);var A=P;const _={class:"list-group disabled"},O=["onClick"];function D(e,o,n,t,s,a){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("ul",_,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.pokemons,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id,onClick:o=>a.select(e.id),class:(0,i.C_)(["list-group-item list-group-item-action",{active:e.id==s.selectedId}])},(0,i.zw)(e.name),11,O)))),128))])])}var I={props:{pokemons:{type:Array,required:!0}},data(){return{selectedId:null,isActive:!0}},methods:{select(e){null==this.selectedId&&(this.selectedId=e,this.$emit("selectionPokemon",e))}}};const j=(0,b.Z)(I,[["render",D]]);var x=j,S=n(4311);const $=S.Z.create({baseURL:"https://pokeapi.co/api/v2/pokemon"});var C=$;const M=()=>{const e=Array.from(Array(650));return e.map(((e,o)=>o+1))},z=async()=>{const e=M().sort((()=>Math.random()-.5)),o=await E(e.splice(0,4));return o},E=async([e,o,n,t]=[])=>{const r=[C.get(`/${e}`),C.get(`/${o}`),C.get(`/${n}`),C.get(`/${t}`)],[s,i,a,c]=await Promise.all(r);return[{name:s.data.name,id:s.data.id},{name:i.data.name,id:i.data.id},{name:a.data.name,id:a.data.id},{name:c.data.name,id:c.data.id}]};var Z=z,q={components:{PokemonPicture:A,PokemonOptions:x},data(){return{pokemonArr:[],pokemon:null,showPokemon:!1,showAnswer:!1,message:"",aciertos:0,errores:0,percentA:0,percentE:0}},methods:{async mixPokemonArray(){this.pokemonArr=await Z();const e=Math.floor(4*Math.random());this.pokemon=this.pokemonArr[e]},checkAnswer(e){this.showPokemon=!0,this.showAnswer=!0,e===this.pokemon.id?(this.aciertos+=1,this.message=`Correcto, ${this.pokemon.name}`):(this.errores+=1,this.message=`Oops, era ${this.pokemon.name}`),this.percentA=Math.round(this.aciertos/(this.aciertos+this.errores)*100),this.percentE=100-this.percentA},newGame(){this.showPokemon=!1,this.showAnswer=!1,this.pokemonArr=[],this.pokemon=null,this.mixPokemonArray()}},mounted(){this.mixPokemonArray()}};const T=(0,b.Z)(q,[["render",k]]);var G=T,H={name:"App",components:{PokemonPage:G}};const N=(0,b.Z)(H,[["render",s]]);var W=N;n(2166);(0,t.ri)(W).mount("#app")}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var s=o[t]={exports:{}};return e[t](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(o,t,r,s){if(!t){var i=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],s=e[u][2];for(var a=!0,c=0;c<t.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](t[c])}))?t.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(u--,1);var m=r();void 0!==m&&(o=m)}}return o}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[t,r,s]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var r,s,i=t[0],a=t[1],c=t[2],m=0;if(i.some((function(o){return 0!==e[o]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var u=c(n)}for(o&&o(t);m<i.length;m++)s=i[m],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},t=self["webpackChunk_04_pokemon_game"]=self["webpackChunk_04_pokemon_game"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(4309)}));t=n.O(t)})();
//# sourceMappingURL=app.8eb1cdd2.js.map