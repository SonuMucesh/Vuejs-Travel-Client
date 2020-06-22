<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: white">
        <a class="navbar-brand" style="font-family: 'Calistoga'; font-size: 25px; color: #000000" v-on:click="Homepage">NILKANTH TRAVEL</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" style="color: black; font-family: 'Calistoga';">
            <li class="nav-item active">
                <a class="nav-link" href="#">Flights <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Hotels</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Car Hire</a>
            </li>
        </ul>
            <form class="form-inline my-2 my-lg-0" style="font-family: 'Calistoga'">
                <button class="btn btn-outline-dark my-2 my-sm-0" style="width: 100px" type="submit">Login</button>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar',
        methods: {
            Homepage(){
                this.$router.push({name: 'SearchPage'});
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Calistoga');
    .navbar{
        position: sticky;
        height: 60px;
        -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
    }
    .form-inline{
        color: black;
    }
</style>