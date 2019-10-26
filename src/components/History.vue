<template>
    <div class="mt-5">
    <MovieCard v-for="movie in movies" :key="movie.id">
        <span slot="id">{{movie.id}}</span>
        <span slot="title">{{movie.title}} ({{movie.released}})</span>
        <span slot="date">{{parseDate(movie.createdAt)}}</span>
        <img slot="image" :src="movie.image" height="91" width="162"/>
        <span slot="desc">{{movie.synopsis}}</span>
    </MovieCard>
    </div>
</template>

<script>
    import MovieCard from "@/components/History/MovieCard";
    export default {
        data(){
            return{
                movies: {},
                user: 'lencek@outlook.com'
            }
        },
        components: {MovieCard},
        mounted (){
            let self = this
            this.axios
                .get('http://localhost:3000/movies?user='+ self.user)
                .then(response => {
                    self.movies = response.data[0].movies
                })
                .catch(error => {
                    console.log(error)
                })
        },
        methods: {
            parseDate: function(date){
                return date.substring(0,10)
            }
        }
    }
</script>
<style>

</style>