<template>
    <div class="v-align">
        <b-container class="flex">
            <b-row class="justify-content-center">
                <b-col class="col-md-6 col-xl-6 col-sm-6 rounded login_style">
                    <h4 class="mt-5 mb-3">Login</h4>
                    <b-form @submit="onSubmit" v-if="show" class="mb-5">
                        <b-input-group
                                class="mb-3"
                                id="input-group-1"
                                label-for="input-1"
                        >
                            <b-input-group-prepend>
                                <span class="input-group-text"><unicon name="at" fill="black"></unicon></span>
                            </b-input-group-prepend>
                            <b-form-input
                                    id="input-1"
                                    v-model="email"
                                    type="email"
                                    required
                                    placeholder="Email"
                            ></b-form-input>
                        </b-input-group>

                        <b-input-group id="input-group-2" label="" label-for="input-2">
                            <b-input-group-prepend>
                                <span class="input-group-text"><unicon name="key-skeleton" fill="black"></unicon></span>
                            </b-input-group-prepend>
                            <b-form-input
                                    id="input-2"
                                    v-model="pwd"
                                    required
                                    type="password"
                                    placeholder="Password"
                            ></b-form-input>
                        </b-input-group>
                        <b-button class="mt-3 nf-red" type="submit" variant="danger">Login</b-button>
                    </b-form>
                    <router-link to="/register" style="color: white">Not registered yet?</router-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                pwd: '',
                show: true
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault()
                let self = this
                this.axios
                    .post('http://localhost:3000/login', {
                        email: this.email,
                        pwd: this.pwd
                    })
                    .then(response => {
                        self.$router.push('/randomizer')
                        localStorage.clear();
                        localStorage.setItem('JWT',response.data)
                    })
                    .catch(error => {
                        self.$notify({
                            group: 'onTop',
                            type: 'error',
                            title: 'Login error',
                            text: 'Invalid email or password!'
                        });
                    })
            }
        },
        watch:{
            pwd: function () {
                localStorage.setItem('login.pwd', this.pwd);
            },
            email: function () {
                localStorage.setItem('login.email', this.email);
            }
        },
        mounted(){
            if (localStorage.getItem('login.email')) {
                this.email = localStorage.getItem('login.email');
            }
            if (localStorage.getItem('login.pwd')) {
                this.pwd = localStorage.getItem('login.pwd');
            }
        }
    }
</script>
<style>
    .login_style {
        background: rgba(0, 0, 0, 0.28);
        color: white;
        margin-left: 15px;
    }
</style>