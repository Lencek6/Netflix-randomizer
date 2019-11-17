<template>
    <div class="v-align">
        <b-container class="flex">
            <b-row class="justify-content-center">
                <b-col class="col-md-6 col-xl-6 col-sm-6 rounded login_style">
                    <h4 class="mt-5 mb-3">Register</h4>
                    <b-form @submit="onSubmit" v-if="show" class="mb-5">
                        <b-input-group
                                class="mb-3"
                                id="input-group-reg1"
                                label-for="input-reg1"
                        >
                            <b-input-group-prepend>
                                <span class="input-group-text"><unicon name="at" fill="black"></unicon></span>
                            </b-input-group-prepend>
                            <b-form-input
                                    id="input-reg1"
                                    v-model="email"
                                    type="email"
                                    required
                                    placeholder="Email"
                            ></b-form-input>
                        </b-input-group>

                        <b-input-group
                                class="mb-3"
                                id="input-group-reg2"
                                label-for="input-reg2"
                        >
                            <b-input-group-prepend>
                                <span class="input-group-text"><unicon name="user" fill="black"></unicon></span>
                            </b-input-group-prepend>
                            <b-form-input
                                    id="input-reg2"
                                    v-model="name"
                                    required
                                    placeholder="Name"
                            ></b-form-input>
                        </b-input-group>

                        <b-input-group
                                class="mb-3"
                                id="input-group-reg3"
                                label-for="input-reg3"
                        >
                            <b-input-group-prepend>
                                <span class="input-group-text"><unicon name="key-skeleton" fill="black"></unicon></span>
                            </b-input-group-prepend>
                            <b-form-input
                                    id="input-reg3"
                                    v-model="pwd"
                                    type="password"
                                    required
                                    placeholder="Password"
                            ></b-form-input>
                        </b-input-group>

                        <b-input-group id="input-group-reg4" label="" label-for="input-reg4">
                            <b-input-group-prepend>
                                <span class="input-group-text"><unicon name="key-skeleton" fill="black"></unicon></span>
                            </b-input-group-prepend>
                            <b-form-input
                                    id="input-reg4"
                                    v-model="pwdRep"
                                    required
                                    type="password"
                                    placeholder="Repeat password"
                            ></b-form-input>
                        </b-input-group>
                        <b-button class="mt-3 nf-red" type="submit" variant="danger">Register</b-button>
                    </b-form>
                    <router-link to="/" style="color: white">Back to login</router-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                email: '',
                name: '',
                pwd: '',
                pwdRep: '',
                show: true
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault()
                // Check password matching
                if (this.pwd != this.pwdRep) {
                    this.$notify({
                        group: 'onTop',
                        type: 'error',
                        title: 'Password error',
                        text: 'Provided passwords does not match!'
                    });
                } else {
                    let self = this
                    this.axios
                        .post('http://localhost:3000/register', {
                            email: this.email,
                            name: this.name,
                            pwd: this.pwd
                        })
                        .then(response => {
                            if (response.data.isCreated === true) {
                                localStorage.clear();
                                self.email = '';
                                self.name = '';
                                self.pwd = '';
                                self.pwdRep = '';
                                self.$notify({
                                    group: 'onTop',
                                    type: 'success',
                                    title: 'Registration successful',
                                    text: response.data.message
                                });
                                self.$router.push('/login')
                            } else {
                                self.$notify({
                                    group: 'onTop',
                                    type: 'error',
                                    title: 'Registration error',
                                    text: response.data.message
                                });
                            }

                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
            }
        },
        watch: {
            name: function () {
                localStorage.setItem('register.name', this.name);
            },
            email: function () {
                localStorage.setItem('register.email', this.email);
            },
            pwd: function () {
                localStorage.setItem('register.pwd', this.pwd);
            },
            pwdRep: function () {
                localStorage.setItem('register.pwdRep', this.pwdRep);
            }
        },
        mounted() {
            if (localStorage.getItem('register.name')) {
                this.name = localStorage.getItem('register.name');
            }
            if (localStorage.getItem('register.email')) {
                this.email = localStorage.getItem('register.email');
            }
            if (localStorage.getItem('register.pwd')) {
                this.pwd = localStorage.getItem('register.pwd');
            }
            if (localStorage.getItem('register.pwdRep')) {
                this.pwdRep = localStorage.getItem('register.pwdRep');
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

    .nf-red {
        background: rgba(255, 0, 3, 0.83);
    }
</style>