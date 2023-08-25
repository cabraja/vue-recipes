<template>
    <div class="w-fit px-7 py-4 mx-auto rounded-xl bg-slate-50 shadow mt-[10vh]">
    <h1 class="text-xl text-center font-semibold">Create Recipes account</h1>
    <hr class="my-2"/> 


 <ValidationObserver ref="observer" v-slot="{  }" > 
    <form novalidate class="flex flex-col gap-y-4 min-w-[40vw]" @submit.prevent="submitForm">

        <div class="flex flex-col w-full">
            <label>Username:</label>
            <ValidationProvider name="Username" :rules="'required|min:4|max:16'" v-slot="{ errors }">
                <custom-input :error="errors[0]" v-model="registerForm.username" type="text" hint="Username must have between 4 and 16 characters."></custom-input>
            </ValidationProvider>
        </div>

        <div class="flex flex-col w-full">
            <label>Email:</label>
            <ValidationProvider name="Email" :rules="'required|email'" v-slot="{ errors }">
                <custom-input :error="errors[0]" v-model="registerForm.email" type="text" hint="Email is not in valid format."></custom-input>
            </ValidationProvider>
        </div>

        <div class="flex flex-col w-full">
            <label>Password:</label>
            <ValidationProvider name="Password" :rules="{ required: true,regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ }" v-slot="{ errors }">
                <custom-input :error="errors[0]" v-model="registerForm.password" type="password" hint="Must contain at least one uppercase, one lowercase characther, a nubmer and a special character."></custom-input>
            </ValidationProvider>
        </div>

        <button  type="submit" class="w-full rounded bg-purple-700 hover:bg-purple-500 transition text-white py-2">Submit</button>

        <p class="text-center"><router-link class="text-blue-400" to="/login">Login here</router-link> if you already have an account.</p>
    </form>
 </ValidationObserver>
    </div>
</template>

<script>
import CustomInput from '../components/shared/CustomInput'


export default {
    name: 'RegisterComponent',
    components:{
        CustomInput
    },
    data(){
        return{
            registerForm:{
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods:{
        submitForm(){
            this.$refs.observer.validate().then(valid => {
                if (valid) {
                    this.$store.commit('addUser', {username: this.registerForm.username, email: this.registerForm.email, password: this.registerForm.password, isAdmin:false });
                    this.$router.push('/login');
                } else {
                    console.log('Invalid field');
                }
            });
        }     
    },
}
</script>