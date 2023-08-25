<template>
    <div class="w-full md:w-[50%] p-5">
        <spinner v-if="loading"></spinner>
        <p v-if="errorMsg" class="text-center mt-[10%]">{{errorMsg}}</p>

        <div v-if="meal" class="w-full bg-white rounded-xl shadow-lg p-5">
            <div class="w-full overflow-hidden rounded-xl">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover h-full w-full hover:scale-110 transition">
            </div>

            <div class="flex flex-col mt-2">
                <h3 class="font-bold text-2xl mb-2">{{meal.strMeal}}</h3>
                <div>
                    <p class="text-neutral-700"><span class="font-semibold text-neutral-900">Category</span>: {{meal.strCategory}}</p>
                    <p class="text-neutral-700"><span class="font-semibold text-neutral-900">Origin</span>: {{meal.strArea}}</p>
                </div>
                <hr class="mt-1 mb-2" />
                <p class="text-neutral-500">{{meal.strInstructions}}</p>
                
                <a :href="meal.strYoutube" target="_blank"><i class="fa-brands fa-youtube text-4xl text-red-600 hover:text-red-400 mt-2 transition"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Spinner from '../shared/Spinner.vue'

export default {
  components: { Spinner },
    name: 'RandomMealComponent',
    data(){
        return{
            meal:null,
            loading: true,
            errorMsg: ''
        }
    },
    mounted(){
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => {
            this.meal = res.data.meals[0];
        })
        .catch(() => this.errorMsg = 'Error occured, try later')
        .finally(() => this.loading = false)
    }

}
</script>