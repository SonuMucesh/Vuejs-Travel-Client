<template>
    <div>
        <label style="font-size: 35px; margin-top: 150px; padding-bottom: 20px">Discover deals in every city</label>
        <div class="row" id="Cards">
            <div class="col-sm-4">
                <div class="card text-white">
                    <img src="../assets/TokyoCard.jpg" class="card-img" >
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
                    <img src="../assets/TajMahal.jpg" class="card-img" >
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
                    <img src="../assets/NYCard.jpg" class="card-img" >
                    <div class="card-img-overlay">
                    </div>
                    <div class="card-footer text-muted">
                        <h2 style="color: black">New York, USA</h2>
                        <a href="#" class="btn btn-primary" style="background-color: transparent; color: black">Get Prices</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchPage_Cards",
    }
</script>

<style scoped>
    #Cards{
        margin-top: 10px;
        margin-left: 170px;
        margin-right: 170px;
    }
</style>
