import {httpsRequest, idT, url} from './Host'

export const getTraining=()=>{
    var config={
        url:`${url}/api/training/${idT}/`,
        method:'get'
    }

    return(httpsRequest(config))
}
export const getCategory=()=>{
    var config={
        url:`${url}/api/category/`,
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

export const editGroup=(data, id)=>{
    console.log(data)
    var config={
        url:`${url}/api/group/${id}/`,
        method:'patch',
        data:data
    }

    return(httpsRequest(config))
}

export const editTeacher=(data, id)=>{
    console.log(data)
    var config={
        url:`${url}/api/teacher/${id}`,
        method:'put',
        data:data
    }

    return(httpsRequest(config))
}
export const editStudent=(data, id)=>{
    var config={
        url:`${url}/api/student/${id}/`,
        method:'put',
        data:data
    }

    return(httpsRequest(config))
}
export const deleteGroupC=(id)=>{
   
    var config={
        url:`${url}/api/group/${id}/`,
        method:'delete',
        
    }

    return(httpsRequest(config))
}
export const deleteTeacher=(id)=>{
   
    var config={
        url:`${url}/api/teacher/${id}/`,
        method:'delete',
        
    }

    return(httpsRequest(config))
}
export const deleteStudent=(id)=>{
   
    var config={
        url:`${url}/api/student/${id}/`,
        method:'delete',
        
    }

    return(httpsRequest(config))
}
export const createStudent=(data)=>{
    console.log(data)
    var config={
        url:`${url}/api/student/`,
        method:'post',
        data:data
    }

    return(httpsRequest(config))
}
export const createTeacher=(data)=>{
    var config={
        url:`${url}/api/teacher/`,
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
export const getTeacher=(id)=>{
    var config={
        url:`${url}/api/teacher/${id}/`,
        method:'get'
    }

    return(httpsRequest(config))
}
export const getStudents=()=>{
    var config={
        url:`${url}/api/student/`,
        method:'get'
    }

    return(httpsRequest(config))
}
export const getGroups=()=>{
    var config={
        url:`${url}/api/group/`,
        method:'get'
    }

    return(httpsRequest(config))
}