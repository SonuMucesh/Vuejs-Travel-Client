<template>
    <div>
        <h1>{{Data}}</h1>

    </div>
</template>

<script>
    export default {
        name: 'BookingItinerary',
        data() {
            return{
                Data: [],
            }
        },
        methods: {
        },
        created() {
            this.Data = this.$store.getters.FlightConfimationData;
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Oswald');
</style>