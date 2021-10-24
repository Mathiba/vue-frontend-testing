<template>
    <form @submit.prevent="onSubmit">
        <span class="help is-danger" v-text="errors"></span>

        <div class="row">
            <div class="col-md-3">
                <div class="contact-info">
                    <h2>Contact Us</h2>
            <!--<div class="field">
                <div class="control">-->
                </div>
            </div>
            <div class="col-md-9">
                <div class="contact-form">
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="name">Name:</label>
                        <div class="col-sm-10">
                            <input class="input" type="text" placeholder="enter client name..." v-model="name" @keydown="errors = ''" required>
                        </div>
                    </div> 
                    <div class="form-group">  
                        <label class="control-label col-sm-2" for="email">Email:</label>
                        <div class="col-sm-10">
                            <input class="input" type="email" placeholder="enter client email..." v-model="email" @keydown="errors = ''" required>
                        </div>
                    </div> 
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="gender">Gender:</label>
                        <div class="col-sm-10">
                            M<input class="input" value='Male' type="radio" v-model="gender" @keydown="errors = ''" required>
                            
                        </div>
                        <div class="col-sm-10">
                            F<input class="input" value='Female' type="radio" v-model="gender" @keydown="errors = ''" required>
                            
                        </div>
                    </div> 
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="comment">Content:</label>
                        <div class="col-sm-10">
                            <textarea class="input" rows="4" cols="50" v-model="content" @keydown="errors = ''" required>enter client content</textarea>
                        </div>
                    </div>     
                    <div class="col-sm-offset-2 col-sm-10"> 
                        <button class="button is-primary" v-bind:class="{ 'is-loading' : isLoading }">Add Client</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            name: '',
            email: '',
            gender: '',
            content: '',
            errors: '',
            isLoading: false
        }
    },
    methods: {
        onSubmit() {
            this.isLoading = true
            this.postClient()
        },
        async postClient() {
            axios.post('http://localhost:8000/clients', this.$data)
                .then(response => {
                    this.name = ''
                    this.email = ''
                    this.gender = ''
                    this.content =''
                    this.isLoading = false
                    this.$emit('completed', response.data)
                })
                .catch(error => {
                    // handle authentication and validation errors here
                    this.errors = error.response.data.errors
                    this.isLoading = false
                })
        }
    }
}
</script>