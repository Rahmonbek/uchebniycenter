import {httpsRequest, url} from './Host'

export const getGroups=()=>{
    var config={
        url:`${url}/api/group`,
        method:'get'
    }

    return(httpsRequest(config))
}
export const createGroup=(data)=>{
    console.log(data)
    var config={
        url:`${url}/api/group/`,
        method:'post',
        data:data
    }

    return(httpsRequest(config))
}
export const getTeachers=()=>{
    var config={
        url:`${url}/api/teacher/`,
        method:'get'
    }

    return(httpsRequest(config))
}