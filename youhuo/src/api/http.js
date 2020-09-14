import axios from "axios"

export const get=(url,params)=>{
    return axios.get(url,{params})
}

export const post=()=>{
    return axios.post(url,params)
}
