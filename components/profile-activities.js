import style from '../styles/profile.module.css'
import Post from './post'
import Link from 'next/link'
import ProfileTodos from './profile-todos'
import { useEffect, useState } from 'react'

const ProfileActivities = ({user_id})  => {

    const [posts, set_posts] = useState([])
    const [notification, set_notification] = useState([])

    

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
            .then(response => response.json())
            .then((data) => {
                set_posts(data)
                let post_id = data[1].id
                fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
                .then(response => response.json())
                .then(comments => set_notification(comments));
            });
            
    }, []) 

    return (<div className = 'bg-primary lg-grid-3x1 sm-grid-1x3 round overflow-hidden mb-1 elevate'>
        <div className={" bg-primary p-1  pv-1 lg-pos-1_1 sm-pos-1_1 elevate " + style.card}>
            <h4>Notifications</h4>
            {get_elements(notification, undefined, "Notification")}
        </div>
        <div className={" bg-primary p-1  pv-1  sm-pos-1_2  lg-pos-2_1 elevate " + style.card}>
            <h4>Posts</h4>
            {get_elements(posts, user_id, 'Post')}
            <div style={{float:'right'}}>
                <Link href={{ pathname: '/posts/user-posts', query: { user_id: user_id } }}>
                    <h6><a>← View all</a></h6>
                </Link>
            </div>
        </div>
        <div className={" bg-primary p-1  pv-1 lg-pos-3_1 sm-pos-1_3 elevate " + style.card}>
            <h4>Todo</h4>
            <ProfileTodos user_id={user_id} show_all={false}/>
        </div>
    </div>)
}

const get_elements = (data, user_id, ele_for ) => {
    let count = 1
    return (<>{data.map((item)=>{
        if(count > 5){
            return ''
        }
        count = count + 1
        if (ele_for == 'Post'){
            return (<Post post={item.body} title={item.title} user_id={user_id} post_id={item.id} for_dashboard={true}/>)
        } else if(ele_for == 'Notification'){
            return <div>
                <span>
                    <span><a className="fw-300">{item.email}</a> commented on your post</span>
                </span>
                <br/>
            </div>
        }
    })}</>)
}

export default ProfileActivities