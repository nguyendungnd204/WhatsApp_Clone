import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";


export const checkUser = async ({email}) => {
    try {
        const res = await axios.post(CHECK_USER_ROUTE, {email});
        return res.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}