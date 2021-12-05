import axios from "axios";
import { websitePrefix } from "../api.constants";

export const deliverItem = (user, product) => {
    return axios({
        url: websitePrefix + "api/deliver/" + user + "/" + product,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
      });
}