<template>
    <div class="ResultsTable" style="padding-top: 20px">
        <div class="section-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-pull-7">
                        <div class="booking-form" v-for="flight in flights" :key="flight.id">
                            <div class="row">
                                <div class="card">
                                    <div class="card-body" style="width: 65rem;display: block;margin: auto; margin-top: 10px">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <template v-for="segment in flight.itineraries">
                                                        <img v-for="DDT in segment.segments" :key="DDT" :src="`https://daisycon.io/images/airline/?width=140&height=70&color=ffffff&iata=${DDT.operating.carrierCode}`" style="padding-bottom: 28px">
                                                    </template>
                                                </div>
                                                <div class="col-md-2" style="">
                                                    <template v-for="segment in flight.itineraries">
                                                        <h4 v-for="DDT in segment.segments" :key="DDT" style="padding-bottom: 40px">{{DDT.departure.at.substring(11,16)}}</h4>
                                                    </template>
                                                </div>
                                                <div class="col-md-2">
                                                    <template v-for="segment in flight.itineraries">
                                                        <h5 v-for="DT in segment.segments" :key="DT" style="margin-left: -315px; padding-bottom: 22px; margin-top: 30px">{{DT.departure.iataCode}}</h5>
                                                    </template>
                                                </div>
                                                <div class="col-md-2" style="margin-left: -160px;">
                                                    <template v-for="segment in flight.itineraries">
                                                        <h5 v-for="DDT in segment.segments" :key="DDT" style="margin-bottom: 40px; margin-top: 10px; margin-left: -100px">{{(DDT.duration).substring(2,3)}}H {{(DDT.duration).substring(4,7)}}</h5>
                                                    </template>
                                                </div>
                                                <div class="col-md-2" style="margin-left: -120px">
                                                    <template v-for="segment in flight.itineraries">
                                                        <img v-for="DDT in segment.segments" :key="DDT" id="Plane" src="../assets/AirplaneWithLine.png" width="70px" style="margin-top: 0px;padding-bottom: 35px;">
                                                    </template>
                                                </div>
                                                <div class="col-md-2">
                                                    <template v-for="segment in flight.itineraries">
                                                        <h4 v-for="DT in segment.segments" :key="DT" style="padding-bottom: 40px; margin-left: -70px">{{DT.arrival.at.substring(11,16)}}</h4>
                                                    </template>
                                                </div>
                                                <div class="col-md-2">
                                                    <template v-for="segment in flight.itineraries">
                                                        <h5 v-for="DT in segment.segments" :key="DT" style="margin-left: -385px; padding-bottom: 22px; margin-top: 30px">{{DT.arrival.iataCode}}</h5>
                                                    </template>
                                                </div>
                                                <div class="col-md-2" style="align-content: center;display: block;margin: auto;">
                                                    <h1 style="margin-top: -50px; font-size: 20px; margin-right: -420px;">£{{flight.price.total}}</h1>
                                                    <template>
                                                        <button class="btn btn-primary" type="button" v-on:click="flightbook(flight.id)" style="font-size: 15px; width: 100px; margin-right: -420px; margin-top: -150px">Select</button>
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
            }
        },
        methods: {
            flightbook(ID){
                console.log(ID);
                this.$store.commit('change2', ID);
                this.$router.push({name: 'FlightBooking'});
            },
        },
        created() {
            this.flights = this.$store.getters.flights;
            console.log(JSON.stringify(this.flights[0]))
            // console.log(JSON.stringify(this.flights[0].itineraries[0].segments[0].arrival.at).substring(12,20).replace(":","").replace(":",""))


        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Righteous');
    @import url('https://fonts.googleapis.com/css?family=Calistoga');
    *
    .booking-form {
        font-family: Righteous;
        font-weight: bold;
        margin-left: 12px;
        background-color: #fff;
        width: 840px;
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