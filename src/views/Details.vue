<template>
    <div class="container">
        <div class="card detail-view">
            <div class="card-header">
                <h2 class="pull-left">
                    <i aria-hidden="true" class="fa fa-address-card"></i>
                    Contacts Details
                </h2> 
                <router-link  class="pull-right btn-out" to="/">Back to Home</router-link>                 
            </div> 
            <div class="card-block">
                <h2>View conatact details below:</h2>
  
            <table class="table table-bordered">
                <tbody>
                    </tbody><thead>
                      <tr>
                          <th>Contact Info:</th>
                          <th></th>
                      </tr>    
                    </thead>    
                    <tbody>
                    <tr v-for="user in userDetails" :key="user.id">
                        <td>Name: {{user.name}}</td>
                        <td>Phone: {{user.phone}}</td>
                    </tr>
                    <tr v-for="user in userDetails" :key="user.id + 1">
                        <td>Email: {{user.email}}</td>
                        <td>Title: {{user.title}}</td>
                    </tr>
                </tbody>
                </table>

                <div class="row control-button">
                    <div class="col-md-12">
                        <router-link  class="btn btn-secondary btn-orange" to="/">View All Contacts</router-link>
                    </div>    
                </div>

            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Details',
  data() {
        return {
          userId: this.$route.params.id,
          isloading: true,
        }
  },
  created() {
       this.$store.dispatch("getUserDetails", this.userId);
  },
  computed: {
        userDetails() {
         return this.$store.state.userDeatils;
       }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>