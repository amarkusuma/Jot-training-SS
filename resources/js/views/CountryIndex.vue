<template>
  <CountryList endpoint="/api/country" />
</template>

<script>
import CountryList from "../components/CountryList";

export default {
  name: "CountryIndex",

  components: {
    CountryList
  }
};
</script>

<style scoped>
</style>