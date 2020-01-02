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
        <vue-load-image>
            <img slot="image" :src="results.image" height="182" width="130" style="border: solid; border-width: 1px;"/>
            <div slot="preloader" style="height: 182px; width: 130px"
                 class="d-flex justify-content-center align-items-center">
                <div class="spinner-border loader-nf-red" role="status">
                </div>
            </div>
        </vue-load-image>
        <p class="mb-0">
            <b>Rating:</b>
            {{results.rating}}
        </p>
        <p class="mt-1 border-bottom border-top">
            {{results.synopsis}}
        </p>
        <b-button class="nf-red mr-3 mb-5" type="submit" variant="danger" @click="reRoll">Re-roll</b-button>
        <b-button v-if="JWTcheck" class="nf-red mr-3 mb-5" type="submit" variant="danger" @click="addToHistory">Add to
            history
        </b-button>
        <p>
            <router-link class="mb-5" to="" style="color: white" @click.native="resetResults">Back to Randomizer
            </router-link>
        </p>
    </div>

</template>

<script>
    import VueLoadImage from 'vue-load-image'

    export default {
        components: {
            VueLoadImage
        },
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
            },
            // Add movie to history list
            addToHistory() {
                let config = {
                    headers: {
                        Authorization: localStorage.getItem('JWT')
                    }
                };
                // Data send to a back-end
                let data = {
                    title: this.results.title,
                    image: this.results.image,
                    synopsis: this.results.synopsis,
                    rating: this.results.rating,
                    type: this.results.type,
                    year: this.results.year,
                    action: 'Add'
                };
                let self = this;
                this.axios
                    .post('http://localhost:3000/movies/addremove', data, config)
                    .then(response => {
                        self.$notify({
                            group: 'onTop',
                            type: response.data.type,
                            title: response.data.title,
                            text: response.data.message
                        });
                    })
                    .catch(error => {
                        // Notify user about server problem
                        self.$notify({
                            group: 'onTop',
                            type: 'error',
                            title: 'Server problem',
                            text: 'Sorry, we are fixing it. Thank you for your patience'
                        });
                    })
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
    .loader-nf-red {
        color: rgba(255, 0, 3, 0.83) !important;
    }
</style>