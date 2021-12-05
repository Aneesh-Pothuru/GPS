import axios from "axios";
import { websitePrefix } from "../api.constants";

export const deliverItem = (user, streetAddress, zipCode, state, country, product) => {
    const form = new FormData();
    form.append("username", user);
    form.append("productName", product);
    form.append("streetAddress", streetAddress);
    form.append("zipCode", zipCode);
    form.append("state", state);
    form.append("country", country);
    return axios({
        url: websitePrefix + "api/deliver",
        data: form,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
      });
}