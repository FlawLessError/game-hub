import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "54e32307676542598d4adc914122b09d",
  },
});
