import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Switch,Route} from "react-router-dom"
import AddEdit from './components/AddEdit';
import ListRecord from './components/ListRecod';
import View from './components/View';
import APIDATA from './components/APIDATA';
import Listapi from './components/Listapi';
import Viewapi from './components/Viewapi';
import Add from './components/Add'
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        {/* <Route exact path="/" component={ListRecord}/> Viewapi*/}
        <Route exact path="/" component={Add}/>
        {/* <Route exact path="/" component={AddEdit}/> */}
        <Route exact path="/update/:id" component={Add}/>
        <Route exact path="/view/:id" component={View}/>
        <Route exact path="/APIDATA" component={APIDATA}/>
        <Route exact path="/Listapi" component={Listapi}/>
        <Route exact path="/Viewapi" component={Viewapi}/>
      </Switch>
    </div>
  );
}

export default App;
