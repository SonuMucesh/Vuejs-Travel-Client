<template>
    <div class="ResultsTable">
        <div class="section-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-pull-7">
                        <div class="booking-form" v-for="flight in flights" :key="flight.id">
                            <div class="row">
                                <div class="card">
                                    <div class="card-body" style="width: 65rem;display: block;margin: auto;">
                                        <h2 class="card-title" style="margin-left: -800px">
                                            <template v-for="segment in flight.itineraries">
                                                    <img v-for="DDT in segment.segments" :key="DDT" :src="`https://daisycon.io/images/airline/?width=150&height=75&color=ffffff&iata=${DDT.operating.carrierCode}`">
                                            </template>
                                        </h2>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <template v-for="segment in flight.itineraries">
                                                        <h4 v-for="DDT in segment.segments" :key="DDT" >Departure: {{DDT.departure.at.substring(11,)}}</h4>
                                                    </template>
                                                </div>
                                                <div class="col-md-2" style="">
                                                    <img src="@/assets/TicketPlane.png" style="width: 50px;height: 50px;display: block;margin: auto;" />
                                                </div>
                                                <div class="col-md-2">
                                                    <template v-for="segment in flight.itineraries">
                                                        <h4 v-for="DT in segment.segments" :key="DT" >Arrival: {{DT.arrival.at.substring(11,)}}</h4>
                                                    </template>
                                                </div>
                                                <div class="col-md-2" style="align-content: center;display: block;margin: auto;">
                                                    <h1 style="margin-top: -10px; font-size: 20px; margin-left: -350px">£{{flight.price.total}}</h1>
                                                    <template>
                                                        <button class="btn btn-primary" type="button" v-on:click="flightbook" style="font-size: 15px; width: 100px; margin-left: -350px">Select</button>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="margin: auto;display: block;"></div>
                            </div>
                        </div>
                    </div>
                </div>
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
                flightLogoUrl: "https://daisycon.io/images/airline/?width=300&height=150&color=ffffff&iata=",
                image: "",
            }
        },
        methods: {
            flightbook(){
                this.$store.commit('change2', 0);
                this.$router.push({name: 'FlightBooking'});
            },
        },
        created() {
            this.flights = this.$store.getters.flights;
            console.log(this.flights)

        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Righteous');
    *
    .booking-form {
        font-family: Righteous;
        margin-left: 12px;
        background-color: #fff;
        width: 700px;
        padding: 30px 20px;
        border-radius: 4px;
        font-size: 18px;
        margin-top: -20px;
    }
    img{
        margin-top: -20px;
        background-color: transparent;
    }

</style>