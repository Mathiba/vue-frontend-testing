<template>
    <div>
        <span class="help is-info"  v-if="isLoading">Loading...</span>
        <table class="table" v-else>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Content</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="client in clients">
                    <tr v-bind:key="client.id">
                        <td>{{ client.id }}</td>
                        <td>{{ client.name }}</td> 
                        <td>{{ client.email }}</td>
                        <td>{{ client.gender }}</td>
                        <td>{{ client.content }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
        <hr>
        <br><br>
        <client-form @completed="addClient"></client-form>
        
    </div>
</template>

<script>
import axios from 'axios'
import ClientForm from './ClientForm.vue'

export default {
    components: {
        ClientForm
    },
    data() {
        return {
            clients: {},
            isLoading: true,
            
        }
    },
    async created () {
        
        
        const response = await axios.get('http://localhost:8000/clients')
        this.clients = response.data
        this.isLoading = false
          
    },
    methods: {
        addClient(client) {
            this.clients.push(client)
        }
    }
}
</script>