import Head from 'next/head'
import Image from 'next/image'
import ProfileInfo from '../components/profile-info'
import ProfileActivities from '../components/profile-activities'
import ProfileAlbum from '../components/profile-album'
import Layout from '../components/layout'

export const getServerSideProps = async (context) => {    
    const {param, req, resp, query} = context
    let user_id = query.user_id

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    const data = await res.json()
  
    return {
      props: {data, user_id} // will be passed to the page component as props
    }
  }

const profile = ({data, user_id}) => {
    console.log(user_id)
    return (<Layout home={true}>
        <Head>
            <title>Profile</title>
        </Head>
        <div className='flex-fluid bg-contrast p-modern sm-p md-p-2 lg-p-1 xl-p  mr-5 '>
            <div >
                <ProfileInfo data={data} />
            </div>
            <div>
                <ProfileActivities user_id={user_id}/>
            </div>    
            <div>
                <center>
                    <ProfileAlbum user_id={user_id}/>
                </center>
            </div>    
        </div> 
    </Layout>)
};

export default profile