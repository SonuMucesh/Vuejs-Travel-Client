<template>
    <div id="booking" class="section">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4" id="Slogan">Discover The World Like It's Your Home!</h1>
                </div>
                <div class="section-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-md-pull-7">
                                <div class="booking-form">
                                    <form @submit.prevent>
                                        <div id="Radios">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Return">
                                                <label class="form-check-label" for="inlineCheckbox1">Return</label>
                                            </div>
                                            <div class="form-check form-check-inline" style="padding-left: 20px">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="OneWay">
                                                <label class="form-check-label" for="inlineCheckbox2">One Way</label>
                                            </div>
                                            <div class="form-check form-check-inline" style="padding-left: 20px">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Multi-City">
                                                <label class="form-check-label" for="inlineCheckbox3">Multi-City</label>
                                            </div>
                                        </div>
                                        <div id="TopForm" @submit.prevent>
                                            <form class="form-row">
                                                <div class="form-group col-md-4">
                                                    <span class="form-label" style="margin-right: 220px">From</span>
                                                    <vue-bootstrap-typeahead
                                                            v-model="input.DepartureAirport"
                                                            :data="Airports"
                                                            size="lg"
                                                            placeholder="Enter A Departure"
                                                    />
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <span class="form-label" style="margin-right: 220px">Destination</span>
                                                    <vue-bootstrap-typeahead
                                                            v-model="input.ArrivalAirport"
                                                            :data="Airports"
                                                            size="lg"
                                                            placeholder="Enter A Destination"
                                                    />
                                                </div>
                                                <div class="form-group col-md-4" style="margin-top: -7px">
                                                    <span class="form-label" style="margin-right: 220px">Departing - Returning</span>
                                                    <b-dropdown id="dropdown-form" text="Enter  Dates" variant="outline-dark" ref="dropdown" class="m-2">
                                                        <b-dropdown-form>
                                                            <input class="form-control" v-model="input.DepartureDate" type="date" required>
                                                        </b-dropdown-form>
                                                    </b-dropdown>
                                                </div>
                                            </form>
                                        </div>
                                        <div id="BottomForm" @submit.prevent>
                                            <form class="form-row">
                                                <div class="form-group col-md-4" style="margin-top: 18px">
                                                    <b-dropdown id="dropdown-form" text="Passengers" variant="outline-dark"  ref="dropdown" class="m-2">
                                                        <b-dropdown-form>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-4">
                                                                    <label>Adults</label>
                                                                    <input type="text" class="form-control" placeholder="0">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label>Children</label>
                                                                    <input type="text" class="form-control" placeholder="0">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label>Infants</label>
                                                                    <input type="text" class="form-control" placeholder="0">
                                                                </div>
                                                            </div>
                                                        </b-dropdown-form>
                                                    </b-dropdown>
                                                </div>
                                                <div class="form-group col-md-4" @submit.prevent>
                                                    <span class="form-label" style="margin-right: 220px">Cabin Class</span>
                                                    <select class="form-control" style="height: 50px; font-family: 'Calistoga'">
                                                        <option>Economy</option>
                                                        <option>Premium Economy</option>
                                                        <option>Business Class</option>
                                                        <option>First Class</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-4" @submit.prevent>
                                                    <button class="submit-btn" v-on:click="getFlights" @keypress="getFlights">Search Flights</button>
                                                </div>
                                            </form>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <label style="font-size: 35px; margin-top: 150px; padding-bottom: 20px">Discover deals in every city</label>
                <div class="row" id="Cards">
                    <div class="col-sm-4">
                        <div class="card text-white">
                            <img src="./TokyoCard.jpg" class="card-img" >
                            <div class="card-img-overlay">
                            </div>
                            <div class="card-footer text-muted">
                                <h2 style="color: black">Tokyo, Japan</h2>
                                <a href="#" class="btn btn-primary" style="background-color: transparent; color: black">Get Prices</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card text-white">
                            <img src="./TajMahal.jpg" class="card-img" >
                            <div class="card-img-overlay">
                            </div>
                            <div class="card-footer text-muted">
                                <h2 style="color: black">Agra, India</h2>
                                <a href="#" class="btn btn-primary" style="background-color: transparent; color: black">Get Prices</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card text-white">
                            <img src="./NYCard.jpg" class="card-img" >
                            <div class="card-img-overlay">
                            </div>
                            <div class="card-footer text-muted">
                                <h2 style="color: black">New York, USA</h2>
                                <a href="#" class="btn btn-primary" style="background-color: transparent; color: black">Get Prices</a>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="page-footer font-small stylish-color-dark pt-4" style="margin-top: 200px">
                    <div class="container text-center text-md-left">
                        <div class="row">
                            <div class="col-md-4 mx-auto">
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
                                <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <hr class="clearfix w-100 d-md-none">
                            <div class="col-md-2 mx-auto">
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#!">Cities</a>
                                    </li>
                                    <li>
                                        <a href="#!">City Breaks</a>
                                    </li>
                                    <li>
                                        <a href="#!">Plan Your Trip</a>
                                    </li>
                                    <li>
                                        <a href="#!">Countries</a>
                                    </li>
                                </ul>
                            </div>
                            <hr class="clearfix w-100 d-md-none">
                            <div class="col-md-2 mx-auto">
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            <hr class="clearfix w-100 d-md-none">
                            <div class="col-md-2 mx-auto">
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <ul class="list-unstyled list-inline text-center py-2">
                        <li class="list-inline-item">
                            <h5 class="mb-1">Register for free</h5>
                        </li>
                        <li class="list-inline-item">
                            <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
                        </li>
                    </ul>
                    <hr>
                    <div class="footer-copyright text-center py-3">© 2020 Copyright: Sonu</div>
                </footer>
            </div>
        </div>
</template>

<script>
  import axios from 'axios';
  import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
  import AirportsJsonFile from "../Airports"
  export default {
      name: 'SearchPage',
      components: {
          VueBootstrapTypeahead
      },
      data() {
          return {
              flights: [],
              Airports: [],
              AirportsJson: AirportsJsonFile,
              input: {
                  DepartureAirport: "",
                  ArrivalAirport: "",
                  DepartureDate: "",
                  ArrivalDate: "",
              }
          }
      },
      methods: {
          getFlights() {
              const path = 'http://127.0.0.1:5000/flights?DepartureAirport=' + this.input.DepartureAirport.toUpperCase().substring(0,3) + "&ArrivalAirport=" + this.input.ArrivalAirport.toUpperCase().substring(0,3) + "&DDate=" + this.input.DepartureDate;
              axios.get(path)
                  .then((response) => {
                      this.flights = response.data;
                      this.$store.commit('change', this.flights.slice(0, 20));
                      this.$router.push({name: 'Results'});
                      //console.log(JSON.stringify(response.data[0]))
                  })
                  .catch((error) => {
                      console.error(error);
                  });
          },
      },
      created() {
          for (var i=0 ; i < AirportsJsonFile.length ; i++) {
              this.Airports.push( AirportsJsonFile[i].code  + ": " + AirportsJsonFile[i].name);
          }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Righteous');
    .jumbotron {
        font-family: 'Righteous';
        background-image: url("Jumbo.jpg");
        background-position: center;
        background-size: cover;
        height: 520px;
    }
    #Slogan{
        display: table;
        font-size: 30px;
        margin-top: 15px;
        margin-left: 12px;
    }
    .booking-form {
        margin-left: 12px;
        background-color: #fff;
        width: 850px;
        padding: 30px 20px;
        -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        font-size: 18px;
    }
    #Radios {
        display: table;
        padding-bottom: 15px;
    }
    .booking-form .submit-btn {
        display: inline-block;
        color: #fff;
        background-color: #1e62d8;
        font-weight: 700;
        margin-top: 25px;
        width: 260px;
        height: 50px;
        padding: 10px 40px;
        border-radius: 4px;
        border: none;
        -webkit-transition: 0.2s all;
        transition: 0.2s all;
    }
    select{
        font-family: 'Calistoga';
    }
    #dropdown-form{
        height: 100%;
        width: 100%;
        width: 250px;
        height: 50px;
    }
    #Cards{
        margin-top: 10px;
        margin-left: 170px;
        margin-right: 170px;
    }

</style>
