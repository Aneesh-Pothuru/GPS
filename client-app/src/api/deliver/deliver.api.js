import axios from "axios";
import { websitePrefix } from "../api.constants";

export const deliverItem = (user, item) => {
    return axios({
        url: websitePrefix + "api/deliver/" + user + "/" + item,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
      });
}