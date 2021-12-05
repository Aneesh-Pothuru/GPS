import axios from "axios";
import { websitePrefix } from "../api.constants";

export const addInventory = (name, weight, width, len, height) => {
    const form = new FormData();
    form.append("name", name);
    form.append("weight", weight);
    form.append("width", width);
    form.append("len", len);
    form.append("height", height);
    return axios({
        url: websitePrefix + "api/inventory/add",
        data: form,
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        mode: "cors",
      });
}

export const getInventory = () => {
    return axios({
        url: websitePrefix + "api/inventory/products",
        method: "GET",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
    })
}
