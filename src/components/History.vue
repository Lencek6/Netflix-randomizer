<template>
    <div>
        <h4 class="v-align mb-3 mt-4" style="height: 5vh; color: white">
            <transition name="fade"><p v-if="showTransition">History ({{movies.length}} movies)</p></transition>
        </h4>
        <MovieCard v-for="movie in movies" :key="movie.id" @removeMovie="removeMovie(movie.title, movie.released)">
            <span slot="title">{{movie.title}} ({{movie.released}})</span>
            <span slot="date">{{parseDate(movie.createdAt)}}</span>
            <img slot="image" :src="movie.image" height="182" width="130"/>
            <span slot="desc">{{movie.synopsis}}</span>
        </MovieCard>
        <div v-if="movies.length===0" class="v-align mb-3 mt-4" style="height: 78vh; color: white">
            At the moment there are no movies on your history list.
        </div>
    </div>
</template>

<script>
    import MovieCard from "@/components/History/MovieCard";

    export default {
        data() {
            return {
                movies: {},
                showTransition: false
            }
        },
        components: {MovieCard},
        // On mount get movies for logged in user from back-end
        mounted() {
            let config = {
                headers: {
                    Authorization: localStorage.getItem('JWT')
                }
            };
            let data = {};
            let self = this;
            this.axios
                .post('http://localhost:3000/movies/history', data, config)
                .then(response => {
                    self.movies = response.data[0].movies;
                    // Show transition element with movie details after data is loaded from backend
                    self.showTransition = true
                })
                .catch(error => {
                    console.log(error)
                })
        },
        methods: {
            parseDate: function (date) {
                return date.substring(0, 10)
            },
            // Remove movie from back-end and front-end
            removeMovie(title, released) {
                let config = {
                    headers: {
                        Authorization: localStorage.getItem('JWT')
                    }
                };
                // Data send to a back-end
                let data = {
                    title: title,
                    year: released,
                    action: 'Delete'
                };
                let self = this;
                this.axios
                    .post('http://localhost:3000/movies/addremove', data, config)
                    .then(response => {
                        // Delete movie from front-end
                        self.movies = self.movies.filter(function (value) {
                            return value.title != title
                        });
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
        }
    }
</script>
<style scoped>

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1.5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

</style>