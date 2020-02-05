<template>
  <div>
    <form @submit.prevent="submitForm">
      <InputCountry
        name="name"
        label="Country Name"
        :errors="errors"
        placeholder="Contry Name"
        @update:field="form.name = $event"
      />
      <InputCountry
        name="Alpha2Code"
        label="Alpha2Code"
        :errors="errors"
        placeholder="Alpha2Code"
        @update:field="form.Alpha2Code = $event"
      />
      <InputCountry
        name="Alpha3Code"
        label="Alpha3Code"
        :errors="errors"
        placeholder="Alpha3Code"
        @update:field="form.Alpha3Code = $event"
      />
      <InputCountry
        name="CallingCode"
        label="CallingCode"
        :errors="errors"
        placeholder="CallingCode"
        @update:field="form.CallingCode = $event"
      />
      <InputCountry
        name="Demonym"
        label="Demonym"
        :errors="errors"
        placeholder="Demonym"
        @update:field="form.Demonym = $event"
      />
      <InputCountry
        name="Flag"
        label="Flag"
        :errors="errors"
        placeholder="Flag"
        @update:field="form.Flag = $event"
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

      errors: null
    };
  },

  methods: {
    submitForm: function() {
      axios
        .post("/api/country", this.form)
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