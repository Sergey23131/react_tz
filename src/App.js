import './App.css';
import {Users} from "./components/Users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//import {} from "./components/CreateUserForm/CreateUser";
import {UpdateUserForm} from "./components/UpdateUserForm/UpdateUser";
import {CreateUserForm} from "./components/CreateUserForm/CreateUser";


export default function App() {
    return (
        <Router>
            <div className='App'>
                <div className='main-box'>
                    <Link to='/create'>
                        <button className='button-create'>Create</button>
                    </Link>
                    <div className={'menu'}>
                        <div className='main-info'>
                            <Users/>
                        </div>
                        <div className='form'>
                              <Switch>
                            <Route path='/create'><CreateUserForm/></Route>
                            <Route path='/update' component={UpdateUserForm}/>
                        </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}
