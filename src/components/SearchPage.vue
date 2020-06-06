<template>
    <div id="booking" class="section">
        <div class="section-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-md-push-5">
                        <div class="booking-cta">
                            <h1>Discover The World Like It's Your Home!</h1>
                            <p>Flight is the process by which an object moves through an atmosphere (or beyond it, as in the case of spaceflight) without contact with the surface.
                                This can be achieved by generating aerodynamic lift associated with propulsive thrust, aerostatically using buoyancy, or by ballistic movement.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-md-pull-7">
                        <div class="booking-form">
                            <form @submit.prevent>
                                <div class="form-group">
                                    <span class="form-label">From</span>
                                    <input class="form-control" type="text" v-model="input.DepartureAirport" placeholder="Enter a Departure">
                                </div>
                                <div class="form-group">
                                    <span class="form-label">Destination</span>
                                    <input class="form-control" type="text" v-model="input.ArrivalAirport" placeholder="Enter a destination">
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <span class="form-label">Departure</span>
                                            <input class="form-control" v-model="input.DepartureDate" type="date" required>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <span class="form-label">Arrival</span>
                                            <input class="form-control" v-model="input.ArrivalDate" type="date" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <span class="form-label">Adults</span>
                                            <select class="form-control">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                            <span class="select-arrow"></span>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <span class="form-label">Children</span>
                                            <select class="form-control">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                            <span class="select-arrow"></span>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <span class="form-label">Infant</span>
                                            <select class="form-control">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                            <span class="select-arrow"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-btn">
                                    <button class="submit-btn" v-on:click="getFlights" @keypress="getFlights" @submit.prevent>Check availability</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
  name: 'SearchPage',
  data() {
    return {
      flights: [],
      input: {
          DepartureAirport: "",
          ArrivalAirport: "",
          DepartureDate: "",
          ArrivalDate: "",
          Passengers: "",
      }
    }
  },
  methods: {
    getFlights(){
      const path = 'http://127.0.0.1:5000/flights?DepartureAirport='+ this.input.DepartureAirport + "&ArrivalAirport=" + this.input.ArrivalAirport;
      console.log(this.DepartureAirport)
      axios.get(path)
              .then((response) => {
                  this.flights = response.data;
                  this.$store.commit('change', this.flights.slice(0,10));
                  this.$router.push({name: 'Results'});
                  console.log(JSON.stringify(response.data[0]))
              })
              .catch((error) => {
    console.error(error);
  });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Oswald');
    body {
        font-family: "Oswald";
    }
    .section {
        position: relative;
        height: 92vh;
    }

    .section .section-center {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    #booking {
        font-family: "Oswald";
        background-size: cover;
        background-position: center;
    }

    #booking::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }

    .booking-form {
        background-color: #fff;
        width: 420px;
        padding: 50px 20px;
        -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        font-size: 18px;
    }

    .booking-form .form-group {
        position: relative;
        margin-bottom: 30px;
    }

    .booking-form .form-control {
        background-color: #ebecee;
        border-radius: 4px;
        border: none;
        height: 40px;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #3e485c;
        font-size: 14px;
    }

    .booking-form .form-control::-webkit-input-placeholder {
        color: rgba(62, 72, 92, 0.3);
    }

    .booking-form .form-control:-ms-input-placeholder {
        color: rgba(62, 72, 92, 0.3);
    }

    .booking-form .form-control::placeholder {
        color: rgba(62, 72, 92, 0.3);
    }

    .booking-form input[type="date"].form-control:invalid {
        color: rgba(62, 72, 92, 0.3);
    }

    .booking-form select.form-control {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .booking-form select.form-control+.select-arrow {
        position: absolute;
        right: 0px;
        bottom: 4px;
        width: 32px;
        line-height: 32px;
        height: 32px;
        text-align: center;
        pointer-events: none;
        color: rgba(62, 72, 92, 0.3);
        font-size: 14px;
    }

    .booking-form select.form-control+.select-arrow:after {
        content: '\279C';
        display: block;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .booking-form .form-label {
        display: inline-block;
        color: #3e485c;
        font-weight: 700;
        margin-bottom: 6px;
        margin-left: 7px;
    }

    .booking-form .submit-btn {
        display: inline-block;
        color: #fff;
        background-color: #1e62d8;
        font-weight: 700;
        padding: 14px 30px;
        border-radius: 4px;
        border: none;
        -webkit-transition: 0.2s all;
        transition: 0.2s all;
    }

    .booking-form .submit-btn:hover,
    .booking-form .submit-btn:focus {
        opacity: 0.9;
    }

    .booking-cta {
        margin-top: 80px;
        margin-bottom: 30px;
    }

    .booking-cta h1 {
        font-size: 52px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 700;
    }

    .booking-cta p {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8);
    }
</style>
