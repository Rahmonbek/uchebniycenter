import GLOBAL from "../pages/Token";
import { httpsRequest, url } from "./Host";

export const getTraining = () => {
  var config = {
    url: `${url}/api/training/${GLOBAL.id}/`,
    method: "get",
  };

  return httpsRequest(config);
};
export const getAttendance = () => {
  var config = {
    url: `${url}/api/attendance/`,
    method: "get",
  };

  return httpsRequest(config);
};
export const getTrainingS = () => {
  var config = {
    url: `${url}/api/training/`,
    method: "get",
  };

  return httpsRequest(config);
};
export const getCategory = () => {
  var config = {
    url: `${url}/api/category/`,
    method: "get",
  };

  return httpsRequest(config);
};
export const createGroup = (data) => {
  console.log(data);
  var config = {
    url: `${url}/api/group/`,
    method: "post",
    data: data,
  };

  return httpsRequest(config);
};

export const editGroup = (data, id) => {
  console.log(data);
  var config = {
    url: `${url}/api/group/${id}/`,
    method: "patch",
    data: data,
  };

  return httpsRequest(config);
};

export const editTeacher = (data, id) => {
  var config = {
    url: `${url}/api/teacher/${id}/`,
    method: "put",
    data: data,
  };

  return httpsRequest(config);
};
export const editStudent = (data, id) => {
  var config = {
    url: `${url}/api/student/${id}/`,
    method: "put",
    data: data,
  };

  return httpsRequest(config);
};
export const editDavomat = (data, id) => {
  var config = {
    url: `${url}/api/attendance/${id}/`,
    method: "put",
    data: data,
  };

  return httpsRequest(config);
};
export const deleteGroupC = (id) => {
  var config = {
    url: `${url}/api/group/${id}/`,
    method: "delete",
  };

  return httpsRequest(config);
};
export const deleteTeacher = (id) => {
  var config = {
    url: `${url}/api/teacher/${id}/`,
    method: "delete",
  };

  return httpsRequest(config);
};
export const deleteStudent = (id) => {
  var config = {
    url: `${url}/api/student/${id}/`,
    method: "delete",
  };

  return httpsRequest(config);
};
export const createStudent = (data) => {
  console.log(data);
  var config = {
    url: `${url}/api/student/`,
    method: "post",
    data: data,
  };

  return httpsRequest(config);
};
export const createTeacher = (data) => {
  var config = {
    url: `${url}/api/teacher/`,
    method: "post",
    data: data,
  };

  return httpsRequest(config);
};
export const createDavomat = (data) => {
  var config = {
    url: `${url}/api/attendance/`,
    method: "post",
    data: data,
  };

  return httpsRequest(config);
};
export const getTeachers = () => {
  var config = {
    url: `${url}/api/teacher/`,
    method: "get",
  };

  return httpsRequest(config);
};
export const getTeacher = (id) => {
  var config = {
    url: `${url}/api/teacher/${id}/`,
    method: "get",
  };

  return httpsRequest(config);
};
export const getStudents = () => {
  var config = {
    url: `${url}/api/student/`,
    method: "get",
  };
  return httpsRequest(config);
};

export const getGroups = () => {
  var config = {
    url: `${url}/api/group/`,
    method: "get",
  };
  return httpsRequest(config);
};

export const createLogin = (data) => {
  var config = {
    url: `${url}/auth/login/`,
    method: "post",
    data: data,
  };
  return httpsRequest(config);
};

export const createRegister = (data) => {
  var config = {
    url: `${url}/api/register/`,
    method: "post",
    data: data,
  };
  return httpsRequest(config);
};
export const editTraining = (data, id) => {
  var config = {
    url: `${url}/api/training/${id}/`,
    method: "put",
    data: data,
  };
  return httpsRequest(config);
};
export const editTrainings = (data, id) => {
  var config = {
    url: `${url}/api/training/${id}/`,
    method: "patch",
    data: data,
  };
  return httpsRequest(config);
};

export const verify = (data) => {
  var config = {
    url: `${url}/api/verify/`,
    method: "post",
    data: data,
  };
  return httpsRequest(config);
};
