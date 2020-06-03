<template>
    <div class="SignUpForm">
        <button @submit.prevent class="btn btn-primary mb-2" v-on:click="sendPassengerData">BOOK</button>
        <form class="bootstrap-form-with-validation">
            <h2 class="text-center">Bootstrap form basic</h2>
            <div class="form-group"><label for="text-input">Text Input</label><input class="form-control" type="text" id="text-input" name="text-input" /></div>
            <div class="form-group"><label for="password-input">Password Input</label><input class="form-control" type="password" id="password-input" name="password-input" /></div>
            <div class="form-group"><label for="email-input">Email Input</label><input class="form-control" type="email" id="email-input" name="email-input" /></div>
            <div class="form-group"><label for="textarea-input">Textarea </label><textarea class="form-control" id="textarea-input" name="textarea-input"></textarea></div>
            <div class="form-group"><label for="search-input">Search Input Group</label>
                <div class="input-group">
                    <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-search"></i></span></div><input class="form-control" type="search" id="search-input" name="search-input" /></div>
            </div>
            <div class="form-group"><label for="file-input">File Input</label><input type="file" id="file-input" name="file-input" /></div>
            <div class="form-group">
                <div class="form-check"><input class="form-check-input" type="checkbox" name="checkbox-input" id="formCheck-1" /><label class="form-check-label" for="formCheck-1">Checkbox</label></div>
            </div>
            <div class="form-group">
                <div class="form-check"><input class="form-check-input" type="radio" name="radio-group" id="formCheck-2" /><label class="form-check-label" for="formCheck-2">Radio</label></div>
                <div class="form-check"><input class="form-check-input" type="radio" name="radio-group" checked id="formCheck-3" /><label class="form-check-label" for="formCheck-3">Radio</label></div>
                <div class="form-check"><input class="form-check-input" type="radio" name="radio-group" id="formCheck-4" /><label class="form-check-label" for="formCheck-4">Radio</label></div>
            </div>
            <div class="form-group"><label>Static Control</label><input class="form-control-plaintext" type="text" /></div>
            <div class="form-group"><button class="btn btn-primary" type="submit">Button</button></div>
        </form>

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