<template>
  <div>
    <div class="flex justify-between">
      <a href="#" class="text-blue-400" @click="$router.back()">< Back</a>
    </div>

    <form @submit.prevent="submitForm" class="pt-6">
      <InputCountry
        name="name"
        label="Country Name"
        :errors="errors"
        placeholder="Contry Name"
        @update:field="form.name = $event"
        :data="form.name"
      />
      <InputCountry
        name="Alpha2Code"
        label="Alpha2Code"
        :errors="errors"
        placeholder="Alpha2Code"
        @update:field="form.Alpha2Code = $event"
        :data="form.Alpha2Code"
      />
      <InputCountry
        name="Alpha3Code"
        label="Alpha3Code"
        :errors="errors"
        placeholder="Alpha3Code"
        @update:field="form.Alpha3Code = $event"
        :data="form.Alpha3Code"
      />
      <InputCountry
        name="CallingCode"
        label="CallingCode"
        :errors="errors"
        placeholder="CallingCode"
        @update:field="form.CallingCode = $event"
        :data="form.CallingCode"
      />
      <InputCountry
        name="Demonym"
        label="Demonym"
        :errors="errors"
        placeholder="Demonym"
        @update:field="form.Demonym = $event"
        :data="form.Demonym"
      />
      <InputCountry
        name="Flag"
        label="Flag"
        :errors="errors"
        placeholder="Flag"
        @update:field="form.Flag = $event"
        :data="form.Flag"
      />

      <div class="flex justify-end">
        <button class="py-2 px-4 rounded text-red-700 border mr-5 hover:border-red-700">Cancel</button>
        <button class="bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-400">Add New Contact</button>
      </div>
    </form>
  </div>
</template>

<script>
import InputCountry from "../components/InputCountry";

export default {
  name: "AddCountry",

  components: {
    InputCountry
  },

  mounted() {
    axios
      .get("/api/country/" + this.$route.params.id)
      .then(response => {
        this.form = response.data.data;

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
      form: {
        name: "",
        Alpha2Code: "",
        Alpha3Code: "",
        CallingCode: "",
        Demonym: "",
        Flag: ""
      },

      errors: null,
      loading: true
    };
  },

  methods: {
    submitForm: function() {
      axios
        .patch("/api/country/" + this.$route.params.id, this.form)
        .then(response => {
          this.$router.push(response.data.links.self);
        })
        .catch(errors => {
          this.errors = errors.response.data.errors;
        });
    }
  }
};
</script>

<style scoped>
</style>