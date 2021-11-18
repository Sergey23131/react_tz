import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {getUserByID, updateUser, deleteUser} from "../../services/user-service";
import "./updateUser.css"


export function UpdateUserForm(props) {
    const {location: {state: id}} = props;

    let [value, setValue] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        role: ''
    });

    const {username, first_name, last_name, email, role} = value;

    let [errors, setErrors] = useState('');

    useEffect(() => {
        getUserByID(id).then(value => setValue({...value}))
    }, [id]);

    let userUpdate = async (e) => {
        try {
            e.preventDefault();

            const user = await updateUser({first_name, last_name}, id);

            if (user.message) {
                throw new Error(user.message)
            } else {
                setErrors('Something went wrong')
            }
        } catch (err) {
            setErrors(err.message)
        }
    };

    let onChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    };

    let removeUser = async () => {
        if (role === 'admin') {
            alert('Access denied, admin cant be removed');
        } else {
          await deleteUser(id);
        }
    }

    return (
        <form className='update-form' onSubmit={userUpdate}>

            <div className='close-box'>
                <Link to='/'>
                    <div className='close-button'/>
                </Link>
            </div>

            <div className='title'>{first_name} {last_name}</div>

            <label htmlFor='username'>Username:</label>
            <input
                id='username' required onChange={onChange} name='username' value={username} placeholder='username'
                type='text'
                disabled
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
                disabled
            />

            <label htmlFor='role'>User type</label>
            <select id='role' required onChange={onChange} value={role} name='role' disabled>
                <option value={role}>{role}</option>
            </select>

            <label htmlFor='password'>Password</label>
            <input
                id='password' autoComplete='on' required onChange={onChange} name='password' value={'********'}
                type='password'
                disabled
            />

            <div className='buttons'>
                <button className='pink-btn' onClick={() => removeUser()}>Delete</button>
                <button className='blue-btn'>Save</button>
            </div>

            <div className='errors'>{errors}</div>
        </form>
    )
}