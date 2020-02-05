<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="flex justify-between">
        <a href="#" class="text-blue-400" @click="$router.back()">< Back</a>
        <div class="relative">
          <router-link
            :to="'/country/' + country.id + '/edit'"
            class="px-4 py-2 rounded text-green-500 border border-green-500 text-sm font-bold mr-2"
          >Edit</router-link>
          <a
            href="#"
            class="px-4 py-2 border border-red-500 rounded text-sm font-bold text-red-500"
            @click="modal = ! modal"
          >Delete</a>

          <div
            v-if="modal"
            class="absolute bg-blue-900 text-white rounded-lg z-20 p-8 w-64 right-0 mt-2 mr-6"
          >
            <p>Are you sure you want to delete this record?</p>

            <div class="flex items-center mt-6 justify-end">
              <button class="text-white pr-4" @click="modal = ! modal">Cancel</button>
              <button
                class="px-4 py-2 bg-red-500 rounded text-sm font-bold text-white"
                @click="destroy"
              >Delete</button>
            </div>
          </div>
        </div>
        <div
          v-if="modal"
          class="bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10"
          @click="modal = ! modal"
        ></div>
      </div>

      <div class="flex items-center pt-6">
        <UserCircle :name="country.name" />

        <p class="pl-5 text-xl">{{ country.name }}</p>
      </div>

      <p class="pt-6 text-gray-600 font-bold uppercase text-sm">Alpha2 Code</p>
      <p class="pt-2 text-blue-400">{{ country.Alpha2Code }}</p>

      <p class="pt-6 text-gray-600 font-bold uppercase text-sm">Alpha3 Code</p>
      <p class="pt-2 text-blue-400">{{ country.Alpha3Code }}</p>

      <p class="pt-6 text-gray-600 font-bold uppercase text-sm">Calling Code</p>
      <p class="pt-2 text-blue-400">{{ country.CallingCode }}</p>

      <p class="pt-6 text-gray-600 font-bold uppercase text-sm">Demonym</p>
      <p class="pt-2 text-blue-400">{{ country.Demonym }}</p>

      <p class="pt-6 text-gray-600 font-bold uppercase text-sm">Flag</p>
      <p class="pt-2 text-blue-400">{{ country.Flag }}</p>
    </div>
  </div>
</template>

<script>
import UserCircle from "../components/UserCircle";

export default {
  name: "ContryShow",

  components: {
    UserCircle
  },

  mounted() {
    axios
      .get("/api/country/" + this.$route.params.id)
      .then(response => {
        this.country = response.data.data;

        this.loading = false;
      })
      .catch(error => {
        this.loading = false;

        if (error.response.status === 404) {
          this.$router.push("/country");
        }
      });
  },

  data: function() {
    return {
      loading: true,
      modal: false,
      country: null
    };
  },

  methods: {
    destroy: function() {
      axios
        .delete("/api/country/" + this.$route.params.id)
        .then(response => {
          this.$router.push("/country");
        })
        .catch(error => {
          alert("Internal Error. Unable to delete country.");
        });
    }
  }
};
</script>

<style scoped>
</style>