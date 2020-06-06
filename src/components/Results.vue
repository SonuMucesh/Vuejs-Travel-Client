<template>
    <div class="ResultsTable">
        <div style="margin: auto;display: inline-block;"></div>
        <section class="container" v-for="flight in flights" :key="flight.id">
            <div class="row">
                <article class="card fl-left">
                    <section class="date">
                        <template v-for="segment in flight.itineraries">
                            <h2 v-for="DDT in segment.segments" :key="DDT" >{{DDT.operating.carrierCode}}</h2>
                        </template>
                    </section>
                    <section class="card-cont">
                        <template v-for="segment in flight.itineraries">
                            <h2 v-for="DDT in segment.segments" :key="DDT" >Departure: {{DDT.departure.at.substring(11,)}}</h2>
                        </template>
                        <div class="even-date">
                            <i class="fa fa-calendar"></i>
                            <time>
                                <template v-for="segment in flight.itineraries">
                                    <h2 v-for="DT in segment.segments" :key="DT" >Arrival: {{DT.arrival.at.substring(11,)}}</h2>
                                </template>
                                <h1 style="align-items: center;">£{{flight.price.total}}</h1>
                            </time>
                        </div>
                        <div class="even-info">
                            <i class="fa fa-map-marker"></i>
                            <p>*Price Subject To Booking Time</p>
                        </div>
                        <a v-on:click="flightbook">Book</a>
                    </section>
                </article>
            </div>
        </section>
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
            flightbook(){
                this.$store.commit('change2', 0);
                this.$router.push({name: 'FlightBooking'});
            }
        },
        created() {
            this.flights = this.$store.getters.flights;
            console.log(this.flights)

        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Oswald');
    *
    {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box
    }

    body
    {
        background-color: #dadde6;
        font-family: arial
    }

    .container
    {
        width: 100%;
        margin-left: 550px;
    }

    .row{overflow: hidden}

    .card
    {
        display: block;
        width: 49%;
        background-color: #fff;
        color: black;
        margin-bottom: 10px;
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        border-radius: 4px;
        position: relative
    }
    .card + .card{margin-left: 2%}

    .date
    {
        display: table-cell;
        width: 25%;
        position: relative;
        text-align: center;
        border-right: 2px dashed #dadde6
    }

    .date:before,
    .date:after
    {
        content: "";
        display: block;
        width: 30px;
        height: 30px;
        background-color: #DADDE6;
        position: absolute;
        top: -15px ;
        right: -15px;
        z-index: 1;
        border-radius: 50%
    }

    .date:after
    {
        top: auto;
        bottom: -15px
    }

    .date h2
    {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: black;
    }

    .date time span{display: inline-block}

    .date time span:first-child
    {
        color: #2b2b2b;
        font-weight: 600;
        font-size: 250%
    }

    .date time span:last-child
    {
        text-transform: uppercase;
        font-weight: 600;
        margin-top: -10px
    }

    .card-cont
    {
        display: table-cell;
        width: 75%;
        font-size: 85%;
        padding: 10px 10px 30px 50px
    }

    .card-cont h3
    {
        color: #3C3C3C;
        font-size: 130%
    }

    .card-cont > div
    {
        display: table-row
    }

    .card-cont .even-date i,
    .card-cont .even-info i,
    .card-cont .even-date time,
    .card-cont .even-info p
    {
        display: table-cell
    }

    .card-cont .even-date i,
    .card-cont .even-info i
    {
        padding: 5% 5% 0 0
    }

    .card-cont .even-info p
    {
        padding: 30px 50px 0 0
    }

    .card-cont .even-date time span
    {
        display: block
    }

    .card-cont a
    {
        display: inline-block;
        text-decoration: none;
        width: 80px;
        height: 30px;
        background-color: #D8DDE0;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 2px;
        position: absolute;
        right: 10px;
        bottom: 10px
    }

    .row:last-child .card:first-child .card-cont a
    {
        background-color: #037FDD
    }

    .row:last-child .card:last-child .card-cont a
    {
        background-color: #F8504C
    }

    @media screen and (max-width: 860px)
    {
        .card
        {
            display: block;
            float: none;
            width: 100%;
            margin-bottom: 10px
        }

        .card + .card{margin-left: 0}

        .card-cont .even-date,
        .card-cont .even-info
        {
            font-size: 75%
        }
    }


</style>