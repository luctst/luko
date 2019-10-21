<template>
  <div class="modal">
      <div>
        <p>{{this.$store.state.code}} has been copied !! <span>👍</span> closed in {{time}}s</p>
      </div>
  </div>
</template>

<script>
export default {
  props: ["time"]
}
</script>

<style lang="scss" scoped>
.modal {
    width: fit-content;
    margin: auto;
    align-self: flex-end;

    div {
      padding: 14px 16px;
      border-radius: 4px;
      color: #fff;
      background-color: #4caf50;

      p {
        font-family: Avenir, Helvetica, sans-serif;
        font-size: .875rem;
        margin: 0;
      }
    }
  }
</style>
