<template>
    <div>
        <Navigation></Navigation>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";

    export default {
        name: 'app',
        components: {
            Navigation
        }
    }
</script>

<style>

    body {
        background: url('../public/netflixlogo.jpg') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .v-align {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }


</style>
