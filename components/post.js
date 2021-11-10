import style from '../styles/profile.module.css'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { useState, useEffect } from 'react'


const Post = ({post, title, post_id, user_id ,for_dashboard})  => {
    const [post_vissiblity, set_post_vissiblity] = useState("None")
    const [comments, set_comments] = useState([])

    useEffect(() => {
        if (! for_dashboard){
            fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
                .then(response => response.json())
                .then(data => set_comments(data));
        }
    }, []);

    return (<>
        <div id={post_id} className={!for_dashboard ? style.card + ' elevate': ''}>
            <div>
            { for_dashboard ? (
                <></>
            ) : (
                <div style={{ float: 'right' }}>
                        <a onClick = {() => {
                            {post_vissiblity == 'block'? set_post_vissiblity("None")
                            : !for_dashboard && set_post_vissiblity("block") }
                            
                        }}
                        className={utilStyles.colorInherit, utilStyles.headingSm}>
                            {post_vissiblity == 'block'? 'Hide post' : 'View post'} 
                        </a> 
                </div>
            )}
            { !for_dashboard ? (
                <h2 className={utilStyles.headingMd}>{title}</h2>
            ) : (
                <Link href={{ pathname: '/posts/user-posts', query: { user_id: user_id } }}>
                    <a>{title}</a>
                </Link>
            )}
            </div>
            <div style={{ 'display': `${post_vissiblity}`}}>
                <p>{post}</p>

                    <h2 className={utilStyles.headingSm}> Comments</h2>

                    {comments.map(comment => (
                        <>
                            <div>
                                <div className={utilStyles.lightText} style={{ fontSize: 12}}>{comment.body} </div>
                                <div className={utilStyles.lightText} style={{ float: 'right' }}>
                                    {comment.email}
                                </div>
                            </div>
                            <hr/>
                        </>

                    ))}

             </div>

        </div>
    </>
    )
}

export default Post

