<template>
    <div class="w-full md:w-[50%] p-5">

        <spinner v-if="loading"></spinner>
        <p v-if="errorMsg" class="text-center mt-[10%]">{{errorMsg}}</p>

        <div v-if="categories" class="w-full bg-white rounded-xl shadow-lg p-5 flex flex-row flex-wrap gap-4 justify-evenly">
            <div @click="navigate(cat.strCategory)" v-for="cat in categories" class="rounded-full w-fit bg-cover bg-center px-6 py-2 border-2 overflow-hidden border-slate-400 relative group cursor-pointer" :key="cat.idCategory" :style="{ backgroundImage: `url(${cat.strCategoryThumb})` }">
                <div class="cat-wrapper absolute top-0 left-0 bg-neutral-700 opacity-40 group-hover:opacity-90 transition w-full h-full z-10"></div>
                <p class="text-center relative text-white z-20">{{cat.strCategory}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Spinner from '../shared/Spinner.vue'

export default {
  components: { Spinner },
    name: 'CategoriesComponent',
    data(){
        return{
            categories:[],
            loading: true,
            errorMsg: ''
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
        }
    }

}
</script>