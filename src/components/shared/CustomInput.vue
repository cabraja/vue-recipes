<template>
    <div class="flex flex-col w-full">
        <input :type="type" v-model="localValue" class="border-[1px] border-slate-300 rounded text-lg py-1 px-3 w-full">
        <span v-if="error" class="text-red-600 text-sm">{{hint || error}}</span>
    </div>
</template>

<script>
export default {
    name: 'CustomInputComponent',
    props: {
        type:{
            type:String
        },
        error:{
            type:String
        },
        value:{
            required: false,
            type:String
        },
        hint:{
            required:false,
            type: String
        }
    },
    data(){
        return{
            localValue: ''
        }
    },
    mounted(){
        this.localValue = this.value;
    },
    watch:{
        localValue: function() {
            this.$emit("input",this.localValue);
        },
        value: function() {
            this.localValue = this.value
        }
    }
    
}
</script>