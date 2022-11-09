import { IJob } from './../models';
import axios from "axios";

let dataUrl: string = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

export const getJobs = async () => {
    const res = await axios.get<IJob[]>(dataUrl)
    return res;
}

