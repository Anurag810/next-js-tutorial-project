import Head from 'next/head'
import ProfileTodos from '../components/profile-todos'
import style from '../styles/Home.module.css'
import Layout from '../components/layout'

export const getServerSideProps = async (context) => {    
    const {param, req, resp, query} = context
    let user_id = query.user_id

    return {
      props: {user_id} // will be passed to the page component as props
    }
  }

const todo = ({user_id}) => {
    console.log(user_id)
    return (<Layout>
        <Head>
            <title>todo</title>
        </Head>
        <div className='flex-fluid bg-contrast p-modern sm-p md-p-2 lg-p-1 xl-p'>
            <div className='elevate card bg-primary pv-2h'>
                <ProfileTodos user_id={user_id} show_all={true}/>
            </div> 
        </div>
    </Layout>)
}

export default todo
