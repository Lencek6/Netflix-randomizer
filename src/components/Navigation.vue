<template>
    <b-container class="mt-2">
        <b-row align-v="center" align-h="around">
            <b-col>
                <b-button @click="rerender" class="btn-navi" v-b-toggle.collapse-navi>
                    <unicon name="bars" fill="#e50913"></unicon>
                </b-button>
            </b-col>
            <b-col>
                <b-collapse id="collapse-navi">
                    <router-link to="/randomizer" style="color: white; font-size: 15px" v-b-toggle.collapse-navi><b>RANDOMIZER</b></router-link>
                </b-collapse>
            </b-col>
            <b-col v-if="render">
                <b-collapse id="collapse-navi">
                    <router-link to="/history" style="color: white; font-size: 15px" v-b-toggle.collapse-navi><b>HISTORY</b></router-link>
                </b-collapse>
            </b-col>
            <b-col v-if="!render">
                <b-collapse id="collapse-navi">
                    <router-link to="/login" style="color: white; font-size: 15px" v-b-toggle.collapse-navi><b>LOGIN</b></router-link>
                </b-collapse>
            </b-col>
            <b-col cols="auto" v-if="render" class="mr-5">
                <router-link @click.native="logOut" to="/login">
                    <unicon name="exit" fill="#b1060f"></unicon>
                </router-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                render: '',
                name: ''
            }
        },
        methods: {
            logOut() {
                localStorage.removeItem('JWT')
                this.render = ! this.render
                this.$router.push('/login')
            },
            rerender(){
                this.render = !! localStorage.getItem('JWT')
            }

        },
        mounted() {
            this.render = !! localStorage.getItem('JWT')
        }
    }
</script>

<style scoped>
    .btn-navi, .btn-home {
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