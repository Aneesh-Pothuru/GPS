import axios from "axios";
import { websitePrefix } from "../api.constants";

export const checkLogs = (user) => {
    return axios({
        url: websitePrefix + "api/logs/" + user,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
      });
}