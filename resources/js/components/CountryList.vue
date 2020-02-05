<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="countries.length === 0">
        <p>
          No contacts yet.
          <router-link to="/add/country">Get Started ></router-link>
        </p>
      </div>

      <div v-for="country in countries">
        <router-link
          :to="'/country/' + country.data.id"
          class="flex items-center border-b border-gray-400 p-4 hover:bg-gray-100"
        >
          <UserCircle :name="country.data.name" />

          <div class="pl-4">
            <p class="text-blue-400 font-bold">{{ country.data.name }}</p>
            <p class="text-gray-600">{{ country.data.Alpha2Code }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UserCircle from "./UserCircle";

export default {
  name: "CountrysList",

  components: {
    UserCircle
  },

  props: ["endpoint"],

  mounted() {
    axios
      .get(this.endpoint)
      .then(response => {
        this.countries = response.data.data;

        this.loading = false;
      })
      .catch(error => {
        this.loading = false;

        alert("Unable to fetch countries.");
      });
  },

  data: function() {
    return {
      loading: true,
      countries: null
    };
  }
};
</script>

<style scoped>
</style>