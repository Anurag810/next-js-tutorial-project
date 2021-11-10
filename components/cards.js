
import Link from 'next/link'

const Cards = (props)  => {
    return (<>
            <h2>{props.name}</h2>
            <p>
                <Link href={{ pathname: '/profile', query: { user_id: props.id } }}>
                    <a>View profile</a>
                </Link>
            </p>
            <p>
                <Link href={{ pathname: '/posts/user-posts', query: { user_id: props.id } }}>
                    <a>View posts</a>
                </Link>
            </p>
            <p>
                <Link href={{ pathname: '/todo', query: { user_id: props.id } }}>
                    <a>View Todo</a>
                </Link>
            </p>
            <p>
                <Link href={{ pathname: '/albums', query: { user_id: props.id } }}>
                    <a>View Albums</a>
                </Link>
            </p>
        </>
    )
}

export default Cards
