import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import FavoriteList from './components/notes/FavoriteList';
import NoteDetails from './components/notes/NoteDetails';
import EditNote from './components/notes/EditNote';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={FavoriteList} />
        <Route path='/note/:id' component={NoteDetails} />
        <Route path='/editnote/:id' component={EditNote} />
      </Switch>
    </Router>
  );
}

export default App;
