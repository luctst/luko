<template>
  <main>
    <section>
      <h1>Ready To Tweet ? 🐦</h1>
    </section>
    <section class="tweet">
      <input ref="authId"/>
      <textarea :value="tweetContent" disabled></textarea>
      <button @click="letsTweet">Tweet this 👆</button>
    </section>
  </main>
</template>

<script>
import encoreUrl from "encodeurl";
import crypto from "crypto";

export default {
  data() {
    return {
      tweetContent: `Je vous partage mon code promo qui permet de bénéficier d'un mois gratuit chez la néo-assurance Luko : ${this.$store.state.code}`
    }
  },
  methods: {
    letsTweet() {
      const oauthNounce = btoa(process.env.CONSUMER+ ':'+ Date.now());
      const timeStamp = Date.now();
      const oauthSignature = this.createSignature(oauthNounce, timeStamp);

      fetch(`${this.$store.state.twitterApi}statuses/update.json?include_entities=true&status=${this.tweetContent}`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          'Accept': "/",
          'Authorization': `Oauth oauth_consumer_key="${process.env.CONSUMER}, oauth_nonce="${oauthNounce}, oauth_signature="${encoreUrl(oauthSignature)}", oauth_signature_method="HMAC-SHA1",oauth_timestamp="${timeStamp}", oauth_token="${process.env.TOKEN}", oauth_version="1.0"`
        }
      });
    },
    createSignature(nounce, tmp) {
      const toEncode = [
        "include_entities=true&",
        `oauth_consumer_key=${process.env.CONSUMER}`,
        `oauth_nonce=${nounce}`,
        "oauth_signature_method=HMAC-SHA1",
        `oauth_timestamp=${tmp}`,
        `oauth_token=${process.env.TOKEN}`,
        "oauth_version=1.0",
        `&status=${this.tweetContent}`
      ];
      let signature = `POST&${encoreUrl(this.$store.state.twitterApi)}statuses/update.json?`;

      toEncode.map(string => signature += encoreUrl(string));

      const l = crypto.createHmac("sha1", `${signature}${process.env.CONSUMER_SECRET}&${process.env.TOKEN_SECRET}`).digest("base64");
      return l;
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
        font-size: .8em;
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
