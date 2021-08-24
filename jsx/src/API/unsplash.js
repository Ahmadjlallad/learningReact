import axios from "axios";
export default axios.create({
  // * base URL for all requests
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID vTZ3fhav1TidpRsWgFIux7UH1dcpYIBCYOE7OnJo-1s`,
  },
});
