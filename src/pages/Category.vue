<template>
    <main class="flex flex-col md:flex-row items-center md:items-start w-full">
        <spinner v-if="loading"></spinner>
         <p v-if="errorMsg" class="text-center mt-[10%]">{{errorMsg}}</p>
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
        if(checkIfLogged()){
            this.$router.push('/login');
        }
    },
    mounted(){
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$route.params.categoryName}`)
        .then(res => {
            this.meals = res.data.meals;
            console.log(this.meals);
        })
        .catch(() => this.errorMsg = 'Error occured, try later')
        .finally(() => this.loading = false)
    },
}
</script>