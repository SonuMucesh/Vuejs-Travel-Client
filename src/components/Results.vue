<template>
    <div class="ResultsTable">
        <div class="card" v-for="flight in flights" :key="flight.id">
            <div class="card-body" style="width: 65rem;display: block;margin: auto;">
                <h2 class="card-title" style="position: center;">
                    <template v-for="segment in flight.itineraries">
                        <h7 v-for="DDT in segment.segments" :key="DDT" >{{DDT.operating.carrierCode}}</h7>
                    </template>
                </h2>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <template v-for="segment in flight.itineraries">
                                <h2 v-for="DDT in segment.segments" :key="DDT" >Departure: {{DDT.departure.at.substring(11,)}}</h2>
                            </template>
                        </div>
                        <div class="col-md-3" style="display: initial;margin: auto;"><img src="@/assets/TicketPlane.png" style="width: 80px;height: 80px;display: block;margin: auto;" /></div>
                        <div class="col-md-3">
                            <template v-for="segment in flight.itineraries">
                                <h2 v-for="DT in segment.segments" :key="DT" >Arrival: {{DT.arrival.at.substring(11,)}}</h2>
                            </template>
                        </div>
                        <div class="col-md-3 offset-md-1" style="align-content: center;display: block;margin: auto;">
                            <h1 style="align-items: center;">£{{flight.price.total}}</h1><button class="btn btn-primary" type="button">BUY</button></div>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin: auto;display: block;"></div>
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