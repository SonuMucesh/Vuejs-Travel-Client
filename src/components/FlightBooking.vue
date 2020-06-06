<template>
    <div class="SignUpForm">
        <div class="contact-clean">
            <form @submit.prevent>
                <h2 class="text-left" style="margin-top: -40px; padding-bottom: 10px; font-family: Oswald;">Passenger Details</h2>
                <div class="form-group" style="display: inline-table; margin-left: -80px">
                    <input class="form-control" type="text" name="name" v-model="input.FirstName" placeholder="First Name" />
                </div>
                <div class="form-group" style="display: inline-table; padding-left: 10px;">
                    <input class="form-control" type="text" name="name" v-model="input.LastName" placeholder="Last Name" />
                </div>
                <div class="form-group" style="display: inline-table; padding-left: 10px;">
                    <input class="form-control" type="date" placeholder="Date Of Birth">
                </div>
                <select class="form-control" id="Gender">
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <div class="form-group">
                    <input class="form-control" type="text" name="name" v-model="input.Email" placeholder="Email Address" />
                </div>
                <div class="form-group">
                    <input class="form-control" type="text" name="name" v-model="input.PhoneNumber" placeholder="Phone Number +44" />
                </div>
                <select class="form-control" >
                    <option>Passport</option>
                    <option>ID</option>
                </select>
                <div class="form-group">
                    <input class="form-control" type="text" name="name" v-model="input.BirthPlace" placeholder="Place Of Birth" />
                </div>
                <div class="form-group" style="display: inline-table; margin-left: -20px">
                    <input class="form-control" type="text" name="name" v-model="input.IssuanceLocation" placeholder="Issuance Location" />
                </div>
                <div class="form-group" style="display: inline-table; padding-left: 10px;">
                    <input class="form-control" type="text" name="name" v-model="input.IssuanceDate" placeholder="Issuance Date" />
                </div>
                <div class="form-group" style="display: inline-table; padding-left: 10px;">
                    <input class="form-control" type="text" name="name" v-model="input.PassNumber" placeholder="Number" />
                </div>
                <div class="form-group" >
                    <input class="form-control" type="date" name="name" v-model="input.ExpiryDate" placeholder="Expiry Date" />
                </div>
                <div class="form-group" >
                    <input class="form-control" type="text" name="name" v-model="input.IssuanceCountry" placeholder="Issuance Country [GB]" />
                </div>
                <div class="form-group" style="display: inline-table; margin-left: -20px;">
                    <input class="form-control" type="text" name="name" v-model="input.ValidityCountry" placeholder="Validity Country [GB]" />
                </div>
                <div class="form-group" style="display: inline-table; padding-left: 12px;">
                    <input class="form-control" type="text" name="name" v-model="input.Nationality" placeholder="Nationality [GB]" />
                </div>
                <div class="form-group" style="display: inline-table; padding-left: 10px;">
                    <input class="form-control" type="text" name="name" v-model="input.Holder" placeholder="Holder [True/False]" />
                </div>
                <div class="form-btn">
                    <button class="submit-btn" v-on:click="sendPassengerData" @submit.prevent>Book Flight</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'FlightBooking',
        data() {
            return {
                FlightConfimationData: [],
                PassengerDetails: [],
                num: 0,
                input: {
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    PhoneNumber: "",
                    Holder: "",
                    Nationality: "",
                    ValidityCountry: "",
                    IssuanceCountry: "",
                    ExpiryDate: "",
                    PassNumber: "",
                    IssuanceDate: "",
                    IssuanceLocation: "",
                    BirthPlace: "",
                }
            }
        },
        methods: {
            sendPassengerData() {
                const path = 'http://127.0.0.1:5000/flightbooking';
                const traveler = {"id": "1",
                    "dateOfBirth": "1982-01-16",
                    "name": {"firstName": "JORGE", "lastName": "GONZALES"},
                    "gender": "MALE",
                    "contact": {"emailAddress": "jorge.gonzales833@telefonica.es",
                        "phones": [{"deviceType": "MOBILE", "countryCallingCode": "34", "number": "480080076"}]},
                    "documents": [{"documentType": "PASSPORT",
                        "birthPlace": "Madrid",
                        "issuanceLocation": "Madrid",
                        "issuanceDate": "2015-04-14",
                        "number": "00000000",
                        "expiryDate": "2025-04-14",
                        "issuanceCountry": "ES",
                        "validityCountry": "ES",
                        "nationality": "ES",
                        "holder": "True"}]};

                axios.post(path, traveler)
                    .then((response) => {
                        this.FlightConfimationData = response.data
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                this.$store.commit('change3', this.FlightConfimationData);
                this.$router.push({name: 'BookingItinerary'});
            }
        },
        created() {
            this.num = this.$store.getters.flightID;
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Oswald');
    body {
        font-family: "Oswald";
    }

    .contact-clean {
        font-family: Oswald;
        display: inline-block;
        flex-wrap: wrap;
        margin-top: 20px;
        background-color: #fff;
        width: 650px;
        height: 665px;
        padding: 50px 20px;
        -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        font-size: 12px;
    }
    select.form-control {
        margin-bottom: 15px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .submit-btn{
        font-family: Oswald;
        font-size: 20px;
        display: inline-block;
        color: #fff;
        background-color: #1e62d8;
        font-weight: 700;
        padding: 10px 30px;
        border-radius: 4px;
        border: none;
        -webkit-transition: 0.2s all;
        transition: 0.2s all;
    }



</style>