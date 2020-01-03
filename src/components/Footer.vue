<template>
    <div>
        <div class="fluid-container footer">
            <p class="text-center" v-if="showFooter">Copyright &copy 2019, Rok Lencek. All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                // By the default footer is visible on all pages
                showFooter: true
            }
        },
        // Watch route object. On its change, you can hide footer based on the route
        watch: {
            $route(to) {
                // Hide footer on history page
                this.showFooter = to.path !== "/history";
            }
        }
    }
</script>

<style scoped>

    .footer {
        position: relative;
        bottom: 0;
        width: 100%;
    }

</style>