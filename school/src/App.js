import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Courses from "./pages/Courses";
import Registration from "./pages/Registration";
import Main from "./Main";
import Malumot from "./pages/Malumot";
import LearningCenter from "./pages/LearningCenter";
import Login from "./pages/Login";
import Xarita from "./pages/Xarita";
import SignUp from "./pages/SignUp";
import SignDown from './pages/SignDown'
// import { useEffect } from "react";
// import Category from "./pages/Category";
// import { useDispatch } from "react-redux";
// import { getTraining } from "./redux/action/action";
function App() {
  //   const dispatch=useDispatch()
  //   useEffect(()=>{
  // dispatch(()=>{getTraining()})
  //   }, [])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Courses />
        </Route>
        <Route exact path="/xarita">
          <Xarita />
        </Route>
        <Route exact path="/registration/uz">
          <Registration />
        </Route>
        <Route path="/cabinet">
          <Main />
        </Route>
        <Route path="/malumot">
          <Malumot />
        </Route>
        <Route exact path="/lcenter">
          <LearningCenter />
        </Route>
        <Route exact path="/sigup">
          {" "}
          <SignDown />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        {/* <Route exact path="/"> <Category/> </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
