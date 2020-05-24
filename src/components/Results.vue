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
            <tr v-for="flight in flights" :key="flight.id">
                <template v-for="segment in flight.itineraries">
                    <th v-for="DT in segment.segments" :key="DT"
                        scope="row">{{DT.departure.at}} </th>
                </template>
                <template v-for="segment in flight.itineraries">
                    <th v-for="DTT in segment.segments" :key="DTT"
                        scope="row">{{DTT.duration}} </th>
                </template>
                <template v-for="segment in flight.itineraries">
                    <th v-for="FD in segment.segments" :key="FD"
                        scope="row">{{FD.arrival.at}} </th>
                </template>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {EventBus} from "../event-bus";
    export default {
        name: 'Results',
        data(){
            return{
                flights: [],
            }
        },
        methods: {
            get_flights() {
                EventBus.$on('FR', (value) => {
                    this.flights = value;
                    console.log(JSON.stringify(this.flights));
                })
            }
        },
        created() {
            this.get_flights();
        },
    }
</script>

<style scoped>

</style>