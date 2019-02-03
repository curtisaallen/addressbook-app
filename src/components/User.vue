<template>
<tbody>
    <template v-if="users.length != 0">
        <tr v-for="user in users" :key="user.id">
            <td>{{user.name}}</td>
            <td>{{user.phone}}</td>
            <td>{{user.email}}</td>
            <td>
                <router-link  class="btn-orange" :to="`/details/${user.id}`">View</router-link>
                <router-link class="btn-gray"  :to="`/edit/${user.id}`">Edit</router-link>
                <a class="btn-gray" @click="removeUser(user.id)">Delete</a>
            </td>
        </tr>
    </template>
    <template v-else>
        <tr>
            <td colspan="4">
                No Users Found
            </td>
        </tr>
    </template>    
</tbody>
</template>

<script>

export default {
  name: 'User',
  props: ['users'],
  methods: {
      removeUser(id){
          this.$store.dispatch("removeUser", id);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>