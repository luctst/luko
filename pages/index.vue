<template>
  <main>
    <description></description>
  </main>
</template>

<script>
import description from "../components/description";

export default {
  components: {description}
}
</script>

<style lang="scss" scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    margin: 0 auto;
  }
</style>
