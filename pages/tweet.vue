<template>
  <main>
    <section>
      <h1>Ready To Tweet ? 🐦</h1>
    </section>
    <section class="tweet">
      <input ref="authId" />
      <textarea :value="tweetContent" disabled></textarea>
      <button @click="letsTweet">Tweet this 👆</button>
    </section>
  </main>
</template>

<script>
import encoreUrl from "encodeurl";
import crypto from "crypto";
import oauth from "oauth-1.0a";

export default {
  data() {
    return {
      tweetContent: `Je vous partage mon code promo qui permet de bénéficier d'un mois gratuit chez la néo-assurance Luko : ${this.$store.state.code}`
    }
  },
  methods: {
    letsTweet() {
      const oauthToken = oauth({
        consumer: { key: process.env.CONSUMER, secret: process.env.CONSUMER_SECRET },
        signature_method: 'HMAC-SHA1',
        hash_function(base_string, key) {
          return crypto
            .createHmac('sha1', key)
            .update(base_string)
            .digest('base64')
        },
      });
      const request_data = {
        url: `${this.$store.state.twitterApi}statuses/update.json`,
        method: 'POST',
        data: {status: this.tweetContent}
      };
      const token = {
        key: process.env.TOKEN,
        secret: process.env.TOKEN_SECRET
      };

      fetch(`${request_data.url}`, {
        method: request_data.method,
        mode: "no-cors",
        headers: {
          "Accept": "/",
          'Authorization': oauthToken.toHeader(oauthToken.authorize(request_data, token)).Authorization
        }
      })
      .then(data => data.json())
      .then(finalData => console.log(finalData))
      .catch(err => console.log(err));
    }
  }
}

</script>
<style lang="scss" scoped>
main {
  font-family: Avenir;
  padding: 0 15px;
  margin: 0 auto;

  section {
    h1 {
      text-align: center;
      font-size: 2em;
    }
  }

  .tweet {
    display: flex;
    flex-direction: column;

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

    textarea {
      color: #a5a4a4;
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
      width: 50%;
      margin-top: 3em;
    }

    button {
      height: 36px;
      padding: 7px 24px;
      border: none;
      border-radius: 4px;
      font-family: Avenir;
      font-size: 0.8em;
      font-weight: 900;
      color: #0042da;
      background-color: #edf5fe;
      width: 15%;
      margin-top: 1em;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
