import {useEffect, useState} from "react";

import {User} from "../User/User";
import { getUsers} from "../../services/user-service";
import "./users.css";

export function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [users]);

    return (
        <div className='user-box'>
            <div className='titles'>
                <p>USERNAME</p>
                <p>FIRST NAME</p>
                <p>LAST NAME</p>
                <p>EMAIL</p>
                <p className='user-roles'>USER TYPE</p>
            </div>
            {users.map((value, index) => <User key={index + 1} userInfo={value}/>)}
        </div>
    )
}