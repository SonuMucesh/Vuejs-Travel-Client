<template>
  <div class="SearchPage">
      <form class="form-inline" @submit.prevent>
      <label class="sr-only" for="DepartureAirport">Name</label>
      <input type="text" v-model=input.DepartureAirport class="form-control mb-2 mr-sm-2" id="DepartureAirport" placeholder="London">
          <img alt="VueLogo" src="@/assets/logo.png">
      <label class="sr-only" for="ArrivalAirport">Name</label>
      <input type="text" v-model=input.ArrivalAirport class="form-control mb-2 mr-sm-2" id="ArrivalAirport" placeholder="Bombay">
      <button type="submit" v-on:click="getFlights" class="btn btn-primary mb-2">Search</button>
    </form>
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
      }
    }
  },
  methods: {
    getFlights(){
      const path = 'http://127.0.0.1:5000/flights?DepartureAirport='+ this.input.DepartureAirport + "&ArrivalAirport=" + this.input.ArrivalAirport;
      axios.get(path)
              .then((response) => {
                  this.flights = response.data;
                  this.$store.commit('change', this.flights.slice(0,10));
                  this.$router.push({name: 'Results'});
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
  form {
    display: inline-block;
    position: center;
      padding-top: 175px;
  }
    img{
        align-content: center;
        width: 100px;
    }
</style>
