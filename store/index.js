import Vuex from "vuex";

export default () => {
  return new Vuex.Store({
    state: {
      code: "SHARETHELOVE+5WMXM",
      twitterApi: "https://api.twitter.com/1.1/",
      tweetContent: "Je vous partage mon code promo qui permet de bénéficier d'un mois gratuit chez la néo-assurance Luko :SHARETHELOVE+5WMXM"
    }
  })
};
