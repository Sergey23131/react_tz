import {useState} from "react";

import {createUser} from "../../services/user-service";
import "./createUser.css";
import {Link} from "react-router-dom";

export function CreateUserForm() {

    let [value, setValue] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: ''
    });

    const {username, first_name, last_name, email, password, role} = value;

    let [errors, setErrors] = useState('');

    let userCreate = async (e) => {
        try {
            e.preventDefault();

            const user = await createUser(value);

            if (user.message) {
                throw new Error(user.message)
            } else {
                setErrors('')
            }
        } catch (e) {
            setErrors(e.message);
        }
    };

    let onChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    };

    return (
        <div>
            <form className='create-form' onSubmit={userCreate}>

                <div className='close-box'>
                    <Link to='/'>
                        <div className='close-button'/>
                    </Link>
                </div>

                <div className='title'>Create new user</div>

                <label htmlFor='username'>Username:</label>
                <input
                    id='username' required onChange={onChange} name='username' value={username} placeholder='username'
                    type='text'
                />

                <label htmlFor='first_name'>First name</label>
                <input
                    id='first_name' required onChange={onChange} name='first_name' value={first_name}
                    placeholder='first name'
                    type='text'
                />

                <label htmlFor='last_name'>Last name</label>
                <input
                    id='last_name' required onChange={onChange} name='last_name' value={last_name}
                    placeholder='last name'
                    type='text'
                />

                <label htmlFor='email'>Email</label>
                <input
                    id='email' required onChange={onChange} name='email' value={email} placeholder='email'
                    type='text'
                />

                <label htmlFor='role'>User type</label>
                <select id='role' required onChange={onChange} value={role} name='role'>
                    <option value=''/>
                    <option value='driver'>Driver</option>
                    <option value='admin'>Admin</option>
                </select>

                <label htmlFor='password'>Password</label>
                <input
                    id='password' autoComplete='on' required onChange={onChange} name='password' value={password}
                    placeholder='password' type='password'
                    />

                <button>Create</button>

                <div className='errors'>{errors}</div>
            </form>
        </div>
    )
}