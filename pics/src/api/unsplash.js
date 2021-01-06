import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 0B9cg611sQWEWf3HBRlT6Hwz4LqKMyn-pcam2QAM930"
  }
});
