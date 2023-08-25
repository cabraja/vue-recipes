<template>
    <div>
        <spinner v-if="loading"></spinner>
        <p v-if="errorMsg">{{errorMsg}}</p>

        <div v-if="meal" class="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start gap-4">
            <div class="shadow-lg bg-white rounded-xl md:w-[50%] p-4">
                <div class="w-full overflow-hidden rounded-xl">
                    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover h-full w-full hover:scale-110 transition">
                </div>
            </div>

            <div class="w-full shadow-lg rounded-xl bg-white md:w-[50%] p-5">
                <h2 class="font-bold text-2xl mb-2">{{meal.strMeal}}</h2>
                <div>
                    <p class="text-neutral-700"><span class="font-semibold text-neutral-900">Category</span>: {{meal.strCategory}}</p>
                    <p class="text-neutral-700"><span class="font-semibold text-neutral-900">Origin</span>: {{meal.strArea}}</p>
                </div>

                <hr class="mt-1 mb-2" />
                <p class="text-neutral-500">{{meal.strInstructions}}</p>

                <a :href="meal.strYoutube" class="flex flex-row items-center hover:bg-slate-200 transition rounded-full py-1 px-4 mt-2 w-fit" target="_blank">Watch instructions on <i class="fa-brands fa-youtube text-4xl ms-2 text-red-600 hover:text-red-400 mt-2 transition"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Spinner from '../components/shared/Spinner.vue'

export default {
    name: 'MealComponent',
    components:{
        Spinner
    },
    data(){
        return{
            meal: null,
            loading: true,
            errorMsg: '',
        }
    },
    mounted(){
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`)
            .then(res => this.meal = res.data.meals[0])
            .catch(() => this.errorMsg = 'Error on the server.')
            .finally(() => this.loading = false)
    },

}
</script>