import Post from '../../components/post'
import Head from 'next/head'
import Layout from '../../components/layout'

export const getServerSideProps = async (context) => {    
    const {param, req, resp, query} = context
    let user_id = query.user_id

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
    const data = await res.json()

  
    return {
      props: {data, user_id}
    }
  }



const UserPosts = ({data, user_id})  => {
    return <Layout>
        <Head>
            <title>User Posts</title>
        </Head>
          <div className="flex-fluid bg-contrast p-modern sm-p md-p-2 lg-p-1 xl-p">
          <div className="bg-primary pv-2h"> 
          {data.map(post => (
            
            <Post key={post.id} post={post.body} title={post.title} post_id={post.id} user_id={user_id}/>  
          ))}
          </div>
        </div>
        
    </Layout>
};

export default UserPosts;