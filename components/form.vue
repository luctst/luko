<template>
  <section>
    <p>
      You can also send
      <span>one free month</span> via email, separate emails with semicolon « ; »
    </p>
    <textarea :placeholder="textAreaExemple" @input="onChange"></textarea>
    <div>
      <button>
        <img src="send-icon.svg" />
        Send {{mailToSend}} mail
      </button>
      <button @click="displayOnClick">Done</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      textAreaExemple: "amelie.dupont@gmail.com ; jeanmichel@gmail.com",
      mailToSend: 0
    };
  },
  methods: {
    displayOnClick() {
      console.log("Done well played !! 👏👏");
    },
    onChange(e) {
      if (e.target.value === "") {
          this.mailToSend = 0;
      }

      if (e.target.value !== "" && !e.target.value.includes(";")) {
          this.mailToSend = e.target.value.split(';').length;
      }

      if (e.target.value.includes(";")) {
        this.mailToSend = e.target.value.split(';').length;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 36px;

  span {
    font-weight: 900;
  }

  p {
    font-family: Avenir-Roman;
    font-size: 16px;
    line-height: 1.38;
  }

  textarea {
    color: #020202;
    font-family: Avenir;
    height: 128px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    resize: none;
    padding: 12px 0 0 20px;
    width: 97%;
    border-radius: 4px;
    border: solid 1px #dddddd;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    button {
      height: 36px;
      padding: 7px 24px;
      border: none;
      border-radius: 4px;
      font-family: Avenir;
      font-size: 0.8em;
      font-weight: 900;

      &:hover {
        cursor: pointer;
      }
    }

    button:first-child {
      display: flex;
      align-items: center;
      color: #fff;
      background-color: #bdbfc3;

      img {
        height: auto;
        width: 15%;
        margin-right: 15px;
      }
    }

    button:last-child {
      color: #0042da;
      background-color: #edf5fe;
    }
  }
}
</style>
