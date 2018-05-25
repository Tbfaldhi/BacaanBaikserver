<template>
  <div id="">
    <h1>register</h1>
        <input type="text" name="email" v-model="email" placeholder="email" />
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <button type="button" @click="register">Register</button>
  </div>
</template>

<script>
export default {
    name: 'register',
        data() {
            return {
                    email: "",
                    password: ""
            }
        },
        methods:{
            register(){
                var self = this
                axios.post('http://localhost:3000/users/register', {
                    email: this.email,
                    password: this.password,
                })
                .then((response) => {
                    this.email= '';
                    this.password= '';
                    this.$router.replace({ name: "login" })
                })
                .catch((error) => {
                    swal({
                    title: "Sorry!!",
                    text: "use another email",
                    icon: "warning",
                });
                    console.log(error);
                });

            }
            

        }
}
</script>
<style lang="scss" scoped>
</style>