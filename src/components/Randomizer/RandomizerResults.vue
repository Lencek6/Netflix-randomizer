<template>
    <div>
        <h4 class="mb-0 mt-5 border-bottom">
            {{results.title}}
        </h4>
        <p class="mb-0 mt-1">
            <b>Year:</b>
            {{results.year}}
        </p>
        <p class="mb-0">
            <b>Type:</b>
            {{results.type}}
        </p>
        <p class="mb-0">
            <b>Genre:</b>
            {{results.genre}}
        </p>
        <img :src="results.image" height="182" width="130"/>
        <p class="mb-0">
            <b>Rating:</b>
            {{results.rating}}
        </p>
        <p class="mt-1 border-bottom border-top">
            {{results.synopsis}}
        </p>
        <b-button class="nf-red mr-3 mb-5" type="submit" variant="danger" @click="reRoll">Re-roll</b-button>
        <b-button v-if="JWTcheck" class="nf-red mr-3 mb-5" type="submit" variant="danger">Add to history</b-button>
        <p>
            <router-link class="mb-5" to="" style="color: white" @click.native="resetResults">Back to Randomizer
            </router-link>
        </p>
    </div>

</template>

<script>
    export default {
        name: "RandomizerResults",
        props: {
            results: {}
        },
        data() {
            return {
                // JWTcheck is used to show/hide button "Add to history", based on login status of the user
                JWTcheck: false
            }
        },
        methods: {
            // Emit reRoll event to a parent component
            reRoll() {
                this.$emit('reRoll')
            },
            // Emit reset results event to a parent component
            resetResults() {
                this.$emit('resetResults')
            }
        },
        mounted() {
            // If user is logged in show button "Add to History"
            if (localStorage.getItem('JWT') != null)
                this.JWTcheck = true
        }
    }
</script>

<style scoped>

</style>