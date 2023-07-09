import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Headers, Menu, Music, News, Politic, Sport } from '../../pages';
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element ={<Headers/>}>
        <Route path='/' element ={<Menu/>}/>
        <Route path='/music' element ={<Music/>}/>
        <Route path='/news' element ={<News/>}/>
        <Route path='/politic' element ={<Politic/>}/>
        <Route path='/sport' element ={<Sport/>}/>
      </Route>
    </Routes>
   </Router>
  )
};

export default App;
