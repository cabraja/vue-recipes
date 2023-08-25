<template>
    <main class="flex flex-col md:flex-row items-center md:items-start w-full">
        <random-meal></random-meal>
        <categories></categories>
    </main>
</template>

<script>
import {checkIfLogged} from '../libs'
import RandomMeal from '../components/homepage/RandomMeal.vue'
import Categories from '../components/homepage/Categories.vue'

export default{
    name: 'HomeComponent',
    components: {
        RandomMeal,
        Categories
    },
    beforeCreate(){
        if(checkIfLogged()){
            this.$router.push('/login');
        }
    }
}
</script>