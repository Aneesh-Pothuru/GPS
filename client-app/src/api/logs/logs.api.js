import axios from "axios";
import { websitePrefix } from "../api.constants";

export const checkLogs = (key) => {
    const form = new FormData();
    form.append("key", key);
    return axios({
        url: websitePrefix + "api/logs",
        method: "POST",
        data: form,
        headers: {  "Content-Type": "multipart/form-data" },
        mode: "cors",
      });
}