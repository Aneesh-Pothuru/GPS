import axios from "axios";
import { websitePrefix } from "../api.constants";

export const deliverItem = (user, streetAddress, zipCode, state, country, product) => {
    return axios({
        url: websitePrefix + "api/deliver",
        data: {
          user: user,
          streetAddress: streetAddress,
          zipCode: zipCode,
          state: state,
          country: country,
          product: product
        },
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
      });
}