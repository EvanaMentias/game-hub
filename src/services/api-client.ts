import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "53bd023fd72840c7a91642ba0780a7b1",
  },
});
