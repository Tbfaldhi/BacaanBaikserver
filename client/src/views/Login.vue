<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="email" v-model="email" placeholder="email" />
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <button type="button" @click="login">Login</button>
        <button type="button" @click="register">Register</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                    email: "",
                    password: ""
            }
        },
        methods: {
            login() {
                console.log(this.email)
                var self = this
                event.preventDefault()
                if(this.email != "" && this.password != "") 
                axios.post('http://localhost:3000/users/login', {
                    email: this.email,
                    password: this.password
                })
                .then(response => {
                    localStorage.setItem('token', response.data.token)
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "secure" });
                })
                .catch(err => {
                swal({
                    title: "Sorry!!",
                    text: "login! failed,username or password wrong",
                    icon: "warning",
                });
                throw err
                console.log(err.response);
                //response.status(500).json(user)
                })                
            },
            register(){
                this.$router.push({ name: "register"})
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>