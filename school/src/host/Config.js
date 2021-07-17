import {url} from './Host'
export default getGroups=()=>{
    var config={
        url:url,
        method:'g'
    }

    return(httpRequest(config))
}