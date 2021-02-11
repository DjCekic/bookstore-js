<template>
    <div class="container">
        <b-alert v-model="showError" variant="danger" dismissible>{{error}}</b-alert>
        <h2 style="color: white;">Login</h2>
        <b-form @submit.prevent="login">
            <b-form-input
            id="username"
            v-model="form.username"
            required
            placeholder="Enter username"
            class="inputs"
            ></b-form-input>

            <b-form-input
            id="password"
            v-model="form.password"
            required
            placeholder="Enter password"
            type="password"
            class="inputs"
            ></b-form-input>
        <b-button type="submit" variant="primary" style="float: right;">Login</b-button>
        </b-form>
        <p style="float: left; color: grey;">Don't have an account? <b-link :to="'/user/register'">Register here</b-link>.</p>
    </div>
</template>
<script>
import UserService from '../UserService';

export default {
    name: "login",
    data() {
      return {
        error: '',
        showError: false,
        form: {
          username: '',
          password: ''
        },
      }
    },
    methods: {
      async login() {
        try{
            let user = await UserService.login(this.form.username, this.form.password);
            this.$cookies.set('user', {username: user.username, id: user._id});
            this.$eventBus.$emit('logged');
            this.$router.push('/')
        }catch(err){
            this.error = "Wrong credentials.";
            this.showError = true;
        }
      },
    }
}
</script>

<style scoped>
.container {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin-top: 10%;
    width: 30%;
    padding: 3%;
}

.inputs {
    margin-bottom: 25px;
}

</style>