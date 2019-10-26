<template>
    <b-container class="movie-card mb-3">
        <b-row align-v="center">
            <b-col class="col-md-1 col-sm-1 col-lg-1">
                <b-button
                        class="btn-collapse"
                        :class="showCollapse ? 'collapsed' : null"
                        :aria-expanded="showCollapse ? 'true' : 'false'"
                        aria-controls="collapse"
                        @click="triggerCollapse()"
                >
                    <unicon :name="dropDownIcon" fill="red"></unicon>
                </b-button>
            </b-col>
            <b-col class="col-md-1 col-sm-1 col-lg-1">
                <slot name="id">
                </slot>
            </b-col>
            <b-col class="col-md-10 col-sm-6 col-lg-6">
                <slot name="title">
                </slot>
            </b-col>
            <b-col class="col-md-3 col-sm-3 col-lg-3">
                <slot name="date">
                </slot>
            </b-col>
            <b-col class="col-md-1 col-sm-1 col-lg-1">
                <b-button class="btn-delete">
                    <unicon name="trash" fill="red"></unicon>
                </b-button>
            </b-col>
        </b-row>
        <b-collapse id="collapse" v-model="showCollapse">
            <b-row class="mt-2">
                <b-col class="col-md-12">
                    <slot name="image">
                    </slot>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-12">
                    <slot name="desc">
                    </slot>
                </b-col>
            </b-row>
        </b-collapse>
    </b-container>
</template>

<script>
    export default {
        name: "MovieCard",
        data() {
            return {
                showCollapse: false,
                dropDownIcon: 'angle-down'
            }
        },
        methods: {
            triggerCollapse(){
                this.showCollapse = !this.showCollapse
                if(this.showCollapse === true)
                    this.dropDownIcon = 'angle-up'
                else
                    this.dropDownIcon = 'angle-down'
            }
        }
    }
</script>

<style scoped>
    .movie-card {
        background: rgba(0, 0, 0, 0.28);
        color: white;
    }
    .btn-collapse,.btn-delete{
        border: none !important;
        outline: 0;
        background-color: transparent
    }
    .btn-delete:focus,.btn-delete:active,.btn-collapse:focus,.btn-collapse:active {
        outline: none !important;
        box-shadow: none !important;
        background-color: transparent !important;
        border: none !important
    }
    img{
        border:white;
    }
</style>