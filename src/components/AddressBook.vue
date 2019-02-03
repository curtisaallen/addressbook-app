<template>
  <div  class="card">
      <Header />
        <FilterTerm @filter="onFilter" />   
          <div class="card-block">
                <table class="table table-bordered">
                    <TableHeader />
                    <User v-bind:users="getUsers" />
                </table>
           </div>
        </div>
</template>

<script>
import Header from '../views/Header.vue'
import TableHeader from '../views/TableHeader.vue'
import User from '../components/User.vue'
import FilterTerm from '../components/FilterTerm.vue'

export default {
  name: 'AddressBook',
    components: {
    Header,
    TableHeader,
    User,
    FilterTerm
  },
  data () {
    return {
        filterTerm: '',
        users: this.$store.state.users,
    }
  },
  computed: {
    getUsers() {
        return this.$store.state.users.filter(user => {
            return user.name[0].toLowerCase().includes(this.filterTerm.toLowerCase())
        });    
    }
  },
  methods: {
    onFilter(value) {  
       (value === 'All') ? this.filterTerm = '' : this.filterTerm = value; 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>