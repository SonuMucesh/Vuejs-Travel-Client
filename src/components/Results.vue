<template>
    <div class="ResultsTable">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Departure Time</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Arrival Time</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <template v-for="segment in flights.itineraries">
                    <th v-for="DT in segment.segments" :key="DT"
                        scope="row">{{DT.departure.at}} </th>
                </template>
                <template v-for="segment in flights.itineraries">
                    <th v-for="Duration in segment.segments" :key="Duration"
                        scope="row">{{Duration.duration}} </th>
                </template>
                <template v-for="segment in flights.itineraries">
                    <th v-for="AT in segment.segments" :key="AT"
                        scope="row">{{AT.arrival.at}} </th>
                </template>
                <th scope="row">
                    {{flights.price.total}}
                </th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Results',
        data(){
            return{
                flights: [],
            }
        },
        methods: {
        },
        created() {
            this.flights = this.$store.getters.flights;
            console.log(this.flights)

        }
    }
</script>

<style scoped>

</style>