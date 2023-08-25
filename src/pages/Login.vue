<template>
    <div class="w-fit px-7 py-4 mx-auto rounded-xl bg-slate-50 shadow mt-[10vh]">
    <h1 class="text-xl text-center font-semibold">Login to Recipes</h1>
    <hr class="my-2"/> 

<ValidationObserver ref="observer" v-slot="{  }" > 
    <form novalidate class="flex flex-col gap-y-4 min-w-[40vw]" @submit.prevent="submitForm">
        <div class="flex flex-col w-full">
            <label>Email:</label>
            <ValidationProvider name="Email" :rules="'required|email'" v-slot="{ errors }">
                <custom-input :error="errors[0]" v-model="loginForm.email" type="text"></custom-input>
            </ValidationProvider>
        </div>

        <div class="flex flex-col w-full">
            <label>Password:</label>
            <ValidationProvider name="Password" :rules="{ required:true,regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ }" v-slot="{ errors }">
                <custom-input :error="errors[0]" v-model="loginForm.password" type="password"></custom-input>
            </ValidationProvider>
        </div>

        <button  type="submit" class="w-full rounded bg-slate-600 hover:bg-slate-400 transition text-white py-2">Submit</button>

        <div v-if="errorMsg" class="w-full py-2 text-center text-rose-500 bg-rose-100 border-[1px] border-rose-500 rounded">{{errorMsg}}</div>

        <p class="text-center"><router-link class="text-blue-400" to="/register">Register here</router-link> if you do not have an account.</p>
    </form>
</ValidationObserver>
    </div>
</template>

<script>
import CustomInput from '../components/shared/CustomInput'

export default {
    name: 'LoginComponent',
    components:{
        CustomInput
    },
    data(){
        return{
            loginForm:{
                email: '',
                password: ''
            },
            errorMsg:''
        }
    },
    methods:{
         submitForm(){
            this.$refs.observer.validate().then(valid => {
                if (valid) {
                    const user = this.$store.state.users.filter(user => user.email == this.loginForm.email && user.password == this.loginForm.password)

                    if(user.length > 0){
                        const userObj = {username: user.username, email:user.email, password:user.password, isAdmin:user.isAdmin};
                        localStorage.setItem('user', userObj);
                        this.$router.push('/');
                    }
                    else{
                        this.errorMsg = 'Invalid credentials'
                    }
                } else {
                    console.log('Invalid data');
                }
            });
        }       
    },
}
</script>