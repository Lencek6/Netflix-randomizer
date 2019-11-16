<template>
    <div class="v-align">
        <b-container class="flex">
            <b-row class="justify-content-center">
                <b-col class="col-md-6 col-xl-6 col-sm-6 rounded login_style">

                    <div v-if="!show">
                        <RandomizerResults :results="results"></RandomizerResults>
                    </div>

                    <b-form @submit="onSubmit" v-if="show" class="mb-5">
                        <h4 class="mt-5 mb-3">Randomizer</h4>
                        <b-input-group class="mb-3" id="inputRandomize-group-1" label-for="inputRandomize-1">
                            <b-input-group-prepend>
                                <span class="input-group-text"><unicon name="play" fill="black"></unicon></span>
                            </b-input-group-prepend>
                            <b-form-input
                                    id="inputRandomize-1"
                                    v-model="form.type"
                                    required
                                    placeholder="Type"
                            ></b-form-input>
                        </b-input-group>
                        <b-input-group class="mb-3" id="inputRandomize-group-2" label-for="inputRandomize-2">
                            <b-input-group-prepend>
                                <span class="input-group-text"><unicon name="users-alt" fill="black"></unicon></span>
                            </b-input-group-prepend>
                            <b-form-input
                                    id="inputRandomize-2"
                                    v-model="form.actor"
                                    required
                                    placeholder="Actor name"
                            ></b-form-input>
                        </b-input-group>
                        <b-input-group id="inputRandomize-group-3" label="" label-for="inputRandomize-3">
                            <b-input-group-prepend>
                                <span class="input-group-text"><unicon name="user-exclamation" fill="black"></unicon></span>
                            </b-input-group-prepend>
                            <b-form-input
                                    id="inputRandomize-3"
                                    v-model="form.director"
                                    required
                                    placeholder="Director name"
                            ></b-form-input>
                        </b-input-group>
                        <b-input-group :append="form.year" class="mt-3">
                            <b-form-input
                                    class="custom-range"
                                    v-model="form.year"
                                    type="range"
                                    min="1906"
                                    max="2019">
                            </b-form-input>
                        </b-input-group>
                        <b-input-group id="inputRandomize-group-4" class="mt-3" label-for="inputRandomize-4">
                            <b-input-group-prepend>
                                <span class="input-group-text"><unicon name="clipboard-notes" fill="black"></unicon></span>
                            </b-input-group-prepend>
                            <b-form-input
                                    id="inputRandomize-4"
                                    v-model="form.genre"
                                    required
                                    placeholder="Genre"
                            ></b-form-input>
                        </b-input-group>
                        <b-button class="mt-3 nf-red mr-3" type="submit" variant="danger">Randomize</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import RandomizerResults from "@/components/History/RandomizerResults";
    export default {
        name: "Randomizer",
        components: {RandomizerResults},
        data() {
            return {
                form: {
                    type: '',
                    actor: '',
                    director: '',
                    year: '1906',
                    genre: ''
                },
                results: {
                    title: 'Better call Saul',
                    year: '2015',
                    actors: ['Bob Odenkirk,', 'Rhea Seehorn,', 'Jonathan Banks'],
                    directors: ['Vince Gilligan,', 'Peter Gould'],
                    genre: 'Crime, Drama',
                    synopsis: 'The trials and tribulations of criminal lawyer, Jimmy McGill, in the time leading up to establishing his strip-mall law office in Albuquerque, New Mexico.',
                    image: 'https://images-na.ssl-images-amazon.com/images/I/81+HloHHyuL._RI_.jpg'
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                this.show = !this.show
            }
        }
    }
</script>

<style>
    .custom-range::-webkit-slider-thumb{
        background: #e50913 !important;
    }
</style>