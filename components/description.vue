<template>
  <section class="description">
    <div class="description--img">
      <img src="/emma-photo.png"/>
    </div>
    <div class="description--content">
      <div class="description--content--info">
        <h1>Emma</h1>
        <p>Don’t forget that for each new subscriber you refer, both you and them get <span>one free month</span> of coverage! 💙</p>
        <p> your <span>one free month</span> referral code</p>
      </div>
      <div class="description--content--btn">
        <div class="input__btn">
          <input :value="getCode" disabled/>
          <button class="is__not__radius" v-clipboard="getCode" v-clipboard:success="copyToclipboard">
            <img src="/copy-icon.svg"/>
            Copy code
          </button>
        </div>
        <a class="twitter-share-button" :href="getHref" target="_blank">
          <img src="/twitter-icon.svg"/>
          Tweet
        </a>
        <button>
          <img src="/facebook-icon.png"/>
          Share
        </button>
      </div>
      <formData></formData>
      <modal v-if="showModal" :time="modalTime"></modal>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import Clipboard from "v-clipboard";
import formData from "./form";
import modal from "./modal";

Vue.use(Clipboard);

export default {
  components: {formData, modal},
  data() {
    return {
      showModal: false,
      modalTime: 5,
      clearTimeout: null,
    }
  },
  computed: {
    getCode() {
      return this.$store.state.code
    },
    getHref() {
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.$store.state.tweetContent)}`;
    }
  },
  methods: {
    copyToclipboard({value, event}) {
      this.showModal = true;

      this.clearTimeout = setInterval(() => this.modalTime = this.modalTime - 1, 1000);
    }
  },
  updated() {
    if (this.modalTime === 0 && this.clearTimeout !== null) {
      clearInterval(this.clearTimeout);
      this.showModal = false;
      this.modalTime = 5;
      this.clearTimeout = null;
    };
  }
}
</script>

<style lang="scss" scoped>
  .description {
    display: flex;
    height: 95vh;
    margin-top: 4em;

    span {
      font-weight: 900;
    }

    &--img {
      img {
        object-fit: cover;
        width: 48px;
        height: auto;
      }
    }

    &--content {
      margin-left: 16px;

      div {
        h1 {
          font-family: Avenir;
          font-size: 16px;
          font-weight: 900;
          margin: 0 0 6px 0;
        }
        p {
          font-family: Avenir-Roman;
          font-size: 16px;
          font-weight: normal;
          line-height: 1.38;
          margin: 0 15% 15px 0;
        }
      }

      &--btn {
        display: flex;

        .input__btn {
          display: flex;

          input {
            border: none;
            font-family: Avenir;
            font-size: 16px;
            font-weight: 500;
            color: #0042da;
            padding: 13px 24px;
            border-radius: 4px;
            background-color: #edf5fe;
            width: 15em;
          }

          .is__not__radius {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            &:hover {
              cursor: url("/copy-icon.svg"), auto;
            }
          }
        }

        a {
          text-decoration: none;
        }

        button,
        a {
          display: flex;
          align-items: center;
          border: none;
          border-radius: 4px;
          background-color: #0042da;
          margin-right: 1em;
          font-family: Avenir;
          font-size: 14px;
          color: #fff;
          padding: 1em 2em;

          img {
            height: auto;
            width: 15%;
            margin-right: 1em;
          }
        }
      }
    }
  }

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
