
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import Registration from './pages/Registration';
import Main from './Main';

function App() {
  return (
    <BrowserRouter>    
      <Switch>    
      <Route exact path="/"><Courses/></Route>
      <Route exact path="/registration/uz"><Registration/></Route>
      <Route exact path="/main/uz"><Main/></Route>
      



      
      </Switch>
      </BrowserRouter>
  );
}

export default App;
