<template>
    <div class="mt-5">
        <MovieCard v-for="movie in movies" :key="movie.id" @removeMovie="removeMovie(movie.title, movie.released)">
            <span slot="title">{{movie.title}} ({{movie.released}})</span>
            <span slot="date">{{parseDate(movie.createdAt)}}</span>
            <img slot="image" :src="movie.image" height="182" width="130"/>
            <span slot="desc">{{movie.synopsis}}</span>
        </MovieCard>
    </div>
</template>

<script>
    import MovieCard from "@/components/History/MovieCard";

    export default {
        data() {
            return {
                movies: {}
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
                    self.movies = response.data[0].movies
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
<style>

</style>