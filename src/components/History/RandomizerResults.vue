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
            <b>Genre:</b>
            {{results.genre}}
        </p>
        <img :src="results.image" height="91" width="150"/>
        <p class="mb-0">
            <b>Actors:</b>
            <span v-for="actor in results.actors">
            {{actor}}
        </span>
        </p>
        <p class="mb-0">
            <b>Directors:</b>
            <span v-for="director in results.directors">
            {{director}}
        </span>
        </p>
        <p class="mt-1 border-bottom border-top">
            {{results.synopsis}}
        </p>
        <b-button class="nf-red mr-3 mb-5" type="submit" variant="danger">Re-roll</b-button>
        <b-button class="nf-red mr-3 mb-5" type="submit" variant="danger">Add to history</b-button>
    </div>

</template>

<script>
    export default {
        name: "RandomizerResults",
        props: {
            results: {}
        }
    }
</script>

<style scoped>

</style>