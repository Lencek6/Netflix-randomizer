<template>
    <div class="v-align">
        <b-container class="flex">
            <b-row class="justify-content-center">
                <b-col class="col-md-6 col-xl-6 col-sm-6 rounded login_style">
                    <b-form @submit="onSubmit" v-if="show" class="mt-5 mb-5">
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
                                    v-model="form.email"
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
                                    v-model="form.name"
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
                                    v-model="form.pwd"
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
                                    v-model="form.pwdRep"
                                    required
                                    type="password"
                                    placeholder="Repeat password"
                            ></b-form-input>
                        </b-input-group>
                        <b-button class="mt-3 nf-red" type="submit" variant="danger">Register</b-button>
                    </b-form>
                    <router-link to="/" style="color: white">Home</router-link>
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
                form: {
                    email: '',
                    name: '',
                    pwd: '',
                    pwdRep: ''
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
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