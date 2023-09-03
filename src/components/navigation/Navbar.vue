<template>
    <header class="w-full px-5 py-3 bg-slate-800 flex flex-row items-center justify-between">
        <div class="w-fit">
            <h1 class="font-bold text-xl py-1 px-2 rounded text-white">Recipe <span class="bg-[#ffa31a] h-full rounded px-2 pb-[2px]">Hub</span></h1>
        </div>

        <nav v-if="displayNav" class="text-white flex  flex-col items-end md:flex-row md:items-center text-sm md:text-base">
            <router-link class="md:px-4" to="/">Homepage</router-link>
            <div class="relative my-2">
                <p class="cursor-pointer" @click="toggleCategories()">Categories <i :class="{'rotate-180':displayCats}"  class="fa-solid fa-chevron-down transition"></i></p>
                <div v-if="displayCats" class="absolute top-[100%] left-0 bg-white rounded shadow p-3 flex flex-col items-start text-slate-700 z-50">
                    <router-link v-for="cat in categories" :key="cat.strCategory" :to="'/category/'+cat.strCategory" class="text-sm hover:bg-slate-200 transition rounded px-2 py-1">{{cat.strCategory}}</router-link>
                </div>
            </div>
            <button @click="logout()" class="rounded text-white bg-red-500 hover:bg-red-300 transition px-3 py-2 ms-4">
                Logout
            </button>
        </nav>
    </header>
</template>

<script>
import axios from 'axios'

export default {
    name: 'NavbarComponent',
    data(){
        return{
            categories:[],
            loading:true,
            errorMsg: '',
            displayCats: false
        }
    },
    mounted(){
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => {
            this.categories = res.data.categories;
        })
        .catch(() => this.errorMsg = 'Error occured, try later')
        .finally(() => this.loading = false)
    },
    methods:{
        navigate(category){
            this.$router.push('/category/'+category);
            this.displayCats = false;
        },
        toggleCategories(){
            this.displayCats = !this.displayCats;
        },
        logout(){
            localStorage.clear();
            this.$store.commit('hideNav');
            this.$router.push('/login');
        }
    },
    computed:{
        displayNav(){
            return this.$store.state.displayNav;
        }
    }
}
</script>