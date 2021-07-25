
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import Registration from './pages/Registration';
import Main from './Main';
import Malumot from './pages/Malumot';
function App() {
  return (
    <BrowserRouter>    
      <Switch>    
      <Route exact path="/"><Courses/></Route>
      <Route exact path="/cabinet/registration/uz"><Registration/></Route>
      <Route path="/cabinet/"><Main/></Route>
      



      
      </Switch>
      </BrowserRouter>
  );
}

export default App;
