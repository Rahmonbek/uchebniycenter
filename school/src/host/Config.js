import {url} from './Host'
export default getGroups=()=>{
    var config={
        url:url,
        method:'get'
    }

    return(httpRequest(config))
}