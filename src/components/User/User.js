import {Link} from "react-router-dom";
import "./user.css"

export function User({userInfo}) {
    const {username, first_name, last_name, email, role} = userInfo;

    return (
        <Link to={{pathname: '/update', state: userInfo._id}}>
            <div className='user'>
                <div>{username}</div>
                <div>{first_name}</div>
                <div>{last_name}</div>
                <div>{email}</div>
                <div className='user-roles'>{role}</div>
            </div>
        </Link>
    )
}