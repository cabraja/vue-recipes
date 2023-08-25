<template>
    <header class="w-full px-5 py-3 bg-slate-800 flex flex-row items-center justify-between">
        <div class="w-fit">
            <h1 class="font-bold text-xl py-1 px-2 rounded text-white">Recipe <span class="bg-[#ffa31a] h-full rounded px-2 pb-[2px]">Hub</span></h1>
        </div>

        <nav class="text-white flex flex-row items-center">
            <ul class="px-4">Recipes</ul>
            <ul class="px-4">Contact</ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'NavbarComponent',
    data(){
        return{
            
        }
    }
}
</script>