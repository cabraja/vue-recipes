<template>
    <main class="flex flex-col md:flex-row items-center md:items-start w-full">
        <spinner v-if="loading"></spinner>
         <p v-if="errorMsg" class="text-center mt-[10%]">{{errorMsg}}</p>

         <div v-if="meals" class="flex flex-row items-center justify-between flex-wrap gap-4">
            <div v-for="meal in meals" :key="meal.idMeal" class=" bg-white rounded-xl shadow-lg p-5 w-[30%]" @click="goToMeal(meal.idMeal)">
                <div class="w-full overflow-hidden rounded-xl">
                    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover h-full w-full hover:scale-110 transition">
                </div>
                <h6 class="font-semibold text-xl mt-2">{{meal.strMeal}}</h6>
            </div>
         </div>
    </main>
</template>

<script>
import {checkIfLogged} from '../libs'
import Spinner from '../components/shared/Spinner.vue'
import axios from 'axios'

export default{
    name: 'CategoryComponent',
    components: {
        Spinner
    },
    data(){
        return{
            meals: [],
            loading: true,
            errorMsg: ''
        }
    },
    beforeCreate(){
        if(!checkIfLogged()){
            this.$router.push('/login');
        }
    },
    mounted(){
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$route.params.categoryName}`)
        .then(res => {
            this.meals = res.data.meals;
        })
        .catch(() => this.errorMsg = 'Error occured, try later')
        .finally(() => this.loading = false)
    },
    methods:{
        goToMeal(id){
            this.$router.push(`/meal/${id}`);
        }
    }
}
</script>