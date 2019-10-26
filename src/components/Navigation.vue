<template>
    <b-container class="mt-2">
        <b-row align-v="center" align-h="around">
            <b-col>
                <b-button class="btn-navi" v-b-toggle.collapse-navi>
                    <unicon name="list-ul" fill="#e50913"></unicon>
                </b-button>
            </b-col>
            <b-col>
                <b-collapse id="collapse-navi">
                    <router-link to="/randomizer" style="color: white">RANDOMIZE</router-link>
                </b-collapse>
            </b-col>
            <b-col>
                <b-collapse id="collapse-navi">
                    <router-link to="/history" style="color: white">HISTORY</router-link>
                </b-collapse>
            </b-col>
            <b-col cols="auto">
                <router-link to="/login">
                    <unicon name="home" fill="#b1060f"></unicon>
                </router-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Navigation"
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