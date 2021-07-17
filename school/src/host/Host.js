import axios from 'axios'
export default url="http://192.168.43.80:1111/api/group/"

export default httpsReaquest=(config)=>{
    return(
        axios({
            ...config
        })
    )
}