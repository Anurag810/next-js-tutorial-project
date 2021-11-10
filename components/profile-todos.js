import { useEffect, useState } from 'react'
import Link from 'next/link'
import style from '../styles/profile.module.css'

const ProfileTodos = ({user_id, show_all})  => {
    const [todo, set_todo] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/todos`)
            .then(response => response.json())
            .then(data => set_todo(data));
    
    }, []);
    let count = 0
    return (<div>
        {todo.map((todo) => {
            if (!show_all && count > 5 ){
                return
            }
            count = count + 1
             return <>
                <div className = { show_all ? style.card + ' elevate': ''}>
                    <div><input type="checkbox" checked={todo.completed}  value=""/> {todo.title}</div>
                </div>
                {show_all ? (
                    <div className="mr-3 -mt-5" style={{float: 'right'}}>
                        <span className={todo.completed ?'c-semantic-primary': 'c-semantic-success'}>
                            {todo.completed ? 'Completed' : 'Pending'}
                        </span>
                    </div>
                ): ''}
            </>

        })}

        {show_all ? '':(
        <div style={{float:'right'}}>
            <Link href={{ pathname: '/todo', query: { user_id: user_id } }}>
                <h6><a>← View all</a></h6>
            </Link>
        </div>
        )}

    </div>)
}

export default ProfileTodos