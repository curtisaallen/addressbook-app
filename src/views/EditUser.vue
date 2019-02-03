<template>
    <div class="container">
        <div class="card edit-view">
            <div class="card-header">
                <h2 class="pull-left">
                    <i aria-hidden="true" class="fa fa-address-card"></i>
                    Edit User Info
                </h2> 
                <router-link  class="pull-right btn-out" to="/">Back to Home</router-link>                 
             </div> 
            <div class="card-block">
                <h2>Add new conatact details below:</h2>
                <form @submit.prevent="onSubmit()" novalidate>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group" :class="{ 'has-error': errors.has('name') }">
                            <label for="first_name">Name<sup>*</sup>:</label>
                            <input  v-validate="'required'" v-model="name" class="form-control" id="first_name" name="name" type="text" tabindex="1" />

                                <div v-show="errors.has('name')" class="help-block">
                                    {{ errors.first('name') }}
                                </div>

                        </div>
                        <div class="form-group" :class="{ 'has-error': errors.has('email') }">
                            <label for="email">Email<sup>*</sup>:</label>
                            <input v-validate="'required'" v-model="email" class="form-control" id="email" name="email" type="text" tabindex="3" />
                                <div v-show="errors.has('email')" class="help-block">
                                    {{ errors.first('email') }}
                                </div> 
                        </div>                                                
                    </div>
                    <div class="col-md-6">
                        <div class="form-group" :class="{ 'has-error': errors.has('title') }">
                            <label for="title">Title<sup>*</sup>:</label>
                            <input v-validate="'required'" v-model="title" class="form-control" id="title" name="title" type="text" tabindex="2" />
                            <div v-show="errors.has('title')" class="help-block">
                                    {{ errors.first('title') }}
                            </div>  
                        </div>
                        <div class="form-group"  :class="{ 'has-error': errors.has('phone') }">
                            <label for="phone">Phone<sup>*</sup>:</label>
                            <input v-validate="'required'" v-model="phone" class="form-control" id="phone" name="phone" type="text"  tabindex="4" />
                            <div v-show="errors.has('phone')" class="help-block">
                                    {{ errors.first('phone') }}
                            </div>
                        </div>                                                
                    </div>
                </div>
                



                <div class="row control-button">
                    <div class="col-md-12">
                        <button class="btn btn-secondary btn-orange" type="submit" :disabled='!isComplete'>Save</button>
                        <router-link  class="btn btn-secondary btn-gray" to="/">Cancel</router-link>
                    </div>    
                </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'EditUser',
  data() {
        return {
           userId: this.$route.params.id,
           name:"",
           phone: "",
           email: "",
           title: ""
        }
  },
  created() {
        this.$store.dispatch("getUserDetails", this.userId);
        this.name = this.$store.state.userDeatils[0].name;
        this.phone = this.$store.state.userDeatils[0].phone;
        this.email = this.$store.state.userDeatils[0].email;
        this.title = this.$store.state.userDeatils[0].title;
  },
  methods: {
     onSubmit() {
         let newUser = {
                id: this.userId,
                name: this.name,
                phone: this.phone,
                email: this.email,
                title: this.title
         }
         if(!this.validate()) {
            this.$store.dispatch("editUser", newUser);
            this.$router.push('/');
         } else {
            alert('Not Submitted')
         }
     },
    validate() {
      this.$validator.validateAll()
      return this.errors.any()
    }
  },
  computed: {
    isComplete () {
        return this.name && this.email && this.phone && this.title;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.has-error input {
    border: 1px solid red;
}
.has-error .help-block {
    color:red;
}
button.btn-orange {
    margin-right: 10px;
}
</style>