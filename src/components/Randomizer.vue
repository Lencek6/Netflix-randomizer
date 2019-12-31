<template>
    <div class="v-align">
        <b-container class="flex">
            <b-row class="justify-content-center">
                <b-col class="col-md-6 col-xl-6 col-sm-6 rounded login_style">
                    <div v-if="show">
                        <RandomizerResults :results="result" @reRoll="reRollMovie" @resetResults="resetQueryResults"/>
                    </div>

                    <b-form @submit="onSubmit" v-if="!show" class="mb-5">
                        <h4 class="mt-5 mb-3">Randomizer</h4>
                        <b-input-group class="mb-3" id="inputRandomize-group-1" label-for="inputRandomize-1">
                            <b-input-group-prepend>
                                <span class="input-group-text"><unicon name="play" fill="black"/></span>
                            </b-input-group-prepend>
                            <b-form-select
                                    id="inputRandomize-1"
                                    v-model="form.type"
                                    :options="typeOptions"
                            />
                            <b-input-group id="inputRandomize-group-4" class="mt-3" label-for="inputRandomize-4">
                                <b-input-group-prepend>
                                    <span class="input-group-text"><unicon name="clipboard-notes" fill="black"/></span>
                                </b-input-group-prepend>
                                <b-form-select
                                        id="inputRandomize-4"
                                        v-model="form.genre"
                                        :options="genreOptions"
                                />
                            </b-input-group>
                        </b-input-group>
                        <b-input-group :append="form.year" class="mt-3">
                            <b-form-input
                                    class="custom-range"
                                    v-model="form.year"
                                    type="range"
                                    min="1906"
                                    max="2020">
                            </b-form-input>
                        </b-input-group>
                        <b-button class="mt-3 nf-red mr-3" type="submit" variant="danger">Randomize</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import RandomizerResults from "@/components/Randomizer/RandomizerResults";

    export default {
        name: "Randomizer",
        components: {RandomizerResults},
        data() {
            return {
                genreOptions: [
                    {value: '1365', text: 'Action'},
                    {value: '7424', text: 'Anime'},
                    {value: '783', text: 'Children'},
                    {value: '31574', text: 'Classic'},
                    {value: '6548', text: 'Comedies'},
                    {value: '839', text: 'Documentaries'},
                    {value: '5763', text: 'Dramas'},
                    {value: '7462', text: 'Foreign'},
                    {value: '8711', text: 'Horror'},
                    {value: '7077', text: 'Independent'},
                    {value: '1701', text: 'Musical'},
                    {value: '8883', text: 'Romantic'},
                    {value: '1492', text: 'Sci-Fi'},
                    {value: '4370', text: 'Sports'},
                    {value: '8933', text: 'Thrillers'}
                ],
                typeOptions: [
                    {value: 'Any', text: 'Any'},
                    {value: 'Movie', text: 'Movie'},
                    {value: 'Series', text: 'Series'}
                ],
                form: {
                    type: 'Any',
                    year: '1906',
                    genre: '1365'
                },
                result: {
                    title: '',
                    year: '',
                    type: '',
                    synopsis: '',
                    image: '',
                    genre: '',
                    rating: '',
                },
                show: false,
                queryParams: '',
                queryResponse: [],
                queryResponseLength: '',
                randomNumber: 0,
            }
        },
        methods: {
            onSubmit(evt) {
                let self = this;
                this.queryParams =
                    "?q=get%3Anew500-!" + this.form.year + "," + this.form.year + "-!0,5-!0,10-!" + this.form.genre + "-!" + this.form.type + "-!Any-!Any-!gt100" +
                    "&t=ns" +
                    "&cl=all" +
                    "&st=adv" +
                    "&ob=Relevance" +
                    "&p=1" +
                    "&sa=and";
                evt.preventDefault();
                this.axios({
                    method: "GET",
                    headers: {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
                        "x-rapidapi-key": "e5cda3528amsh11c1da4827353acp1e5433jsn2ee29a3cc0c5"
                    },
                    url: "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi" + this.queryParams,

                })
                    .then((response) => {
                        // Get random item of the response list, if there is at least one item in the list
                        if (response.data.ITEMS.length > 0) {
                            self.queryResponse = response.data.ITEMS;
                            self.queryResponseLength = response.data.ITEMS.length;
                            // Get random element from items list
                            self.randomNumber = Math.floor(Math.random() * self.queryResponseLength)
                            let randomMovie = response.data.ITEMS[self.randomNumber];
                            // Write data to a result and show it in child component
                            self.result.title = randomMovie.title;
                            self.result.year = randomMovie.released;
                            self.result.type = randomMovie.type;
                            self.result.synopsis = randomMovie.synopsis;
                            self.result.image = randomMovie.image;
                            self.result.rating = randomMovie.rating;
                            // Get genre name from the select options
                            self.genreOptions.forEach(element => {
                                if (element.value === self.form.genre) {
                                    self.result.genre = element.text
                                }
                            });
                            self.show = true
                        } else {
                            // If there is no items in the list, notify user to correct query parameters
                            self.$notify({
                                group: 'onTop',
                                type: 'error',
                                title: 'Not found',
                                text: 'No movie found with desired parameters, please change them'
                            });
                        }
                    })
                    .catch((error) => {
                        // Notify user if it comes to an error on API server side
                        self.$notify({
                            group: 'onTop',
                            type: 'error',
                            title: 'Server error',
                            text: 'Ooops. Something went wrong on the server'
                        });
                    })
            },
            // Method called on event emitted from child component. It reRolls queryResponse
            reRollMovie() {
                // Make sure random number is different than before
                let tmpRandomNumber = this.randomNumber;
                do {
                    this.randomNumber = Math.floor(Math.random() * this.queryResponseLength)
                } while (this.randomNumber === tmpRandomNumber);
                // Write new data for random movie
                let randomMovie = this.queryResponse[this.randomNumber];
                this.result.title = randomMovie.title;
                this.result.year = randomMovie.released;
                this.result.type = randomMovie.type;
                this.result.synopsis = randomMovie.synopsis;
                this.result.image = randomMovie.image;
                this.result.rating = randomMovie.rating;
            },
            // Method called on event emitted from child component. It resets queryResponse and hides children component
            resetQueryResults() {
                this.queryResponse = [];
                this.queryResponseLength = 0;
                this.show = false;
            }
        }
    }
</script>

<style>
    .custom-range::-webkit-slider-thumb {
        background: #e50913 !important;
    }
</style>