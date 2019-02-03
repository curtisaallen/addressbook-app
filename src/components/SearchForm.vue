<template>
    <div  class="col-lg-12 search-form">
        <h2>Address Book {{search}}</h2>
        <div  class="input-group">
            <input  class="form-control" v-model="search" placeholder="Filter Contacts By First Name" type="text" />
            <span  class="input-group-btn">
                <button @click="getSearchTerm"   class="btn btn-secondary" type="button">
                    Search
                </button>
            </span>
        </div>
    </div> 
</template>

<script>

export default {
  name: 'SearchForm',
    data () {
        return {
          search: ""
        }
    },
    methods: {
        getSearchTerm() {
            this.$emit('searched', this.search)
            this.search = "";
        }
    },
    computed: {
        searchTerm() {
            return this.$emit('searched', this.search)
        }   
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>