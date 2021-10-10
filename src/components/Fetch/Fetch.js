import axios from "axios";


const instance = axios.create({
    baseURL: "https://pixabay.com/api/",
    
});

const createParams = (params) => {
    return {
        params
    }
};

const  getPosts = async(page = 1, per_page = 3, q = "cat" )=> {
    return instance.get("?key=23372923-aa63da10459dab2a89fc14fe7", createParams({q, per_page, page}));
}
export default getPosts