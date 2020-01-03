<template>
    <div class="mt-3 ml-5 d-flex justify-content-between">
        <div id="flex-1">
            <router-link to="" @click.native="rerender">
                <unicon name="bars" fill="#e50913"/>
            </router-link>
        </div>
        <div id="flex-2" v-if="extendBurger">
            <router-link to="/randomizer" style="color: white; font-size: 15px" @click.native="closeBurger"><b>RANDOMIZER</b>
            </router-link>
        </div>
        <div id="flex-3" v-if="extendBurger">
            <router-link v-if="render" to="/history" style="color: white; font-size: 15px"
                         @click.native="closeBurger"><b>HISTORY</b></router-link>
        </div>
        <div id="flex-4" v-if="extendBurger">
            <router-link v-if="!render" to="/login" style="color: white; font-size: 15px"
                         @click.native="closeBurger"><b>LOGIN</b></router-link>
        </div>
        <div id="flex-5" class="mr-5" v-if="extendBurger">
            <router-link v-if="render" @click.native="logOut" to="/login">
                <unicon name="exit" fill="#b1060f"/>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                render: '',
                name: '',
                // By default burger navigation is closed
                extendBurger: false
            }
        },
        methods: {
            // Logout user - remove token from localstorage and relocate user to login page
            logOut() {
                localStorage.removeItem('JWT');
                this.render = !this.render;
                this.extendBurger = false;
                this.$router.push('/login')
            },
            // Open/Close burger navigation. Optionally if any notifications are active, clean them
            rerender() {
                this.render = !!localStorage.getItem('JWT');
                this.extendBurger = !this.extendBurger;
                this.$notify({
                    group: 'onTop',
                    clean: true
                })
            },
            // Close burger navigation - Called when any navigation route is clicked
            closeBurger() {
                this.extendBurger = false;
            }
        },
        mounted() {
            this.render = !!localStorage.getItem('JWT')
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

    .heey {
        display: flex !important;
        justify-content: space-around !important;
    }
</style>