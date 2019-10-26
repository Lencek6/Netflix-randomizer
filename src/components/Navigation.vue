<template>
    <b-container class="mt-2">
        <b-row align-v="center">
            <b-col class="col-2 col-md-2 col-lg-2 col-xl-2 mr-4">
                <b-button class="btn-navi" variant="danger" v-b-toggle.collapse-navi>
                    <unicon name="list-ul" fill="black"></unicon>
                </b-button>
            </b-col>
            <b-col class="col-4 col-md-4 col-lg-4 col-xl-4">
                <b-collapse id="collapse-navi">
                    <router-link to="/randomizer" style="color: white">Randomizer</router-link>
                </b-collapse>
            </b-col>
            <b-col class="col-4 col-md-4 col-lg-4 col-xl-4">
                <b-collapse id="collapse-navi">
                    <router-link to="/history" style="color: white">History</router-link>
                </b-collapse>
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
    #inline {
        display: inline-flex;
    }

    .btn-navi {
        border: none !important;
        outline: 0;
        background: rgba(255, 0, 3, 0.83);
    }

    .btn-navi:focus, .btn-navi:active {
        outline: none !important;
        box-shadow: none !important;
        border: none !important;
        background: rgba(255, 0, 3, 0.83);
    }
</style>