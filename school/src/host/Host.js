import axios from 'axios'
export default url="https://ews-backend.herokuapp.com/"
export id="1"
export default httpsReaquest=(config)=>{
    return(
        axios({
            ...config
        })
    )
}