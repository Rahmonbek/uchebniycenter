import axios from "axios"
import { idT, url } from "../../host/Host"

export const trainingReducer=(state={}, action)=>{
switch(action.type){
case "GET":
axios.get(`${url}/api/training/${idT}`).then(res=>{return(res.data)}).catch(err=>{return(state)})
default:
return(state)

}
}