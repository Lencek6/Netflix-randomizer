<template>
    <b-container class="mt-2">
        <b-row align-v="center" align-h="around">
            <b-col>
                <b-button class="btn-navi" v-b-toggle.collapse-navi>
                    <unicon name="bars" fill="#e50913"></unicon>
                </b-button>
            </b-col>
            <b-col>
                <b-collapse id="collapse-navi">
                    <router-link to="/randomizer" style="color: white" v-b-toggle.collapse-navi>RANDOMIZE</router-link>
                </b-collapse>
            </b-col>
            <b-col v-if="isLoggedIn()">
                <b-collapse id="collapse-navi">
                    <router-link to="/history" style="color: white" v-b-toggle.collapse-navi>HISTORY</router-link>
                </b-collapse>
            </b-col>
            <b-col v-if="isLoggedIn() === false">
                <b-collapse id="collapse-navi">
                    <router-link to="/login" style="color: white" v-b-toggle.collapse-navi>LOGIN</router-link>
                </b-collapse>
            </b-col>
            <b-col cols="auto">
                <router-link to="/randomizer">
                    <unicon name="home-alt" fill="#b1060f"></unicon>
                </router-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Navigation",
        methods:{
            isLoggedIn(){
                return !!localStorage.getItem('JWT');
            }
        }
    }
</script>

<style scoped>
    .btn-navi,.btn-home {
        border: none !important;
        outline: 0 !important;
        background-color: transparent !important;
    }
    .btn-navi:focus, .btn-navi:active, .btn-home:focus, .btn-home:active {
        outline: none !important;
        box-shadow: none !important;
        background-color: transparent !important;
        border: none !important
    }
</style>