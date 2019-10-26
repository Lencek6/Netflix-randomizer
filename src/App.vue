<template>
    <div>
        <Navigation></Navigation>
        <div>
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";
    import Footer from "@/components/Footer";

    export default {
        name: 'app',
        components: {
          Footer,
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
