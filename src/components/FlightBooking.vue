<template>
    <div class="SignUpForm">
        <button class="btn btn-primary mb-2" v-on:click="sendPassengerData">BOOK</button>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'FlightBooking',
        data() {
            return {
                PassengerDetails: [],
                num: 0,
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
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        },
        created() {
            this.num = this.$store.getters.flightID;
        }
    }
</script>

<style scoped>

</style>