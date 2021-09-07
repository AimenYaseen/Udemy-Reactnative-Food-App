import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer tQSR2qOaCb5stL6MNtIkyNmsMdVgjrWlx1aImv4Wl-eQYiyq6_cIZ3sQ_DPr2uV_0zJpWzf-KaKLMGKsJBvg92qxmtPWKXY0cldF5Fxl3_najTbgMLkJ2j8SiNQ2YXYx",
  },
});
