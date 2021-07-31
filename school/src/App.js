import {BrowserRouter,Switch, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import Registration from './pages/Registration';
import Main from './Main';
import Malumot from './pages/Malumot';
import LearningCenter from './pages/LearningCenter'
import Login from './pages/Login'
import Xarita from './pages/Xarita';
function App() {
  return (
    <BrowserRouter>    
      <Switch>    
      <Route exact path="/"><Courses/></Route>
      <Route exact path="/xarita"><Xarita/></Route>
      <Route exact path="/registration/uz"><Registration/></Route>
      <Route path="/cabinet/"><Main/></Route>
      <Route path="/malumot"><Malumot/></Route>
      <Route exact path="/lcenter"> <LearningCenter/> </Route>
      <Route exact path="/login"> <Login/> </Route>
      



      
      </Switch>
      </BrowserRouter>

    );
}

export default App;
