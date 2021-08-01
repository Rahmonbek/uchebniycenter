import axios from 'axios'
export default url="https://ews-backend.herokuapp.com/"
export const id="1"
export default httpsReaquest=(config)=>{
    return(
        axios({
            ...config
        })
    )
}