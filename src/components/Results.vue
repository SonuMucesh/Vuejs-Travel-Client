<template>
    <div class="ResultsTable">
        <div v-for="flight in flights" :key="flight.id" class="card">
            <div class="card-header">
                <h3>£{{flight.price.total}}</h3>
            </div>
            <div class="card-body">
                <div class="card-title">
                    <template v-for="segment in flight.itineraries">
                        <h7 v-for="DDT in segment.segments" :key="DDT" >Departure: {{DDT.departure.at.substring(11,)}} At: {{DDT.departure.iataCode}}</h7>
                    </template>
                </div>
                <template v-for="segment in flight.itineraries">
                    <h7 v-for="DT in segment.segments" :key="DT" >Arrival: {{DT.arrival.at.substring(11,)}} At: {{DT.arrival.iataCode}}</h7>
                </template>
                <div class="card-text">
                    <template v-for="segment in flight.itineraries">
                        <h8 v-for="Duration in segment.segments" :key="Duration">{{Duration.duration}} </h8>
                    </template>
                </div>
                <a href="#" class="btn btn-primary">BUY</a>
            </div>
        </div>
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