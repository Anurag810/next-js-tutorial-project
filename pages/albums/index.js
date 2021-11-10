import Head from 'next/head'
import ProfileAlbum from '../../components/profile-album'
import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Image from 'next/image'

export const getServerSideProps = async (context) => {    
    const {param, req, resp, query} = context
    let user_id = query.user_id

    return {
      props: {user_id} // will be passed to the page component as props
    }
  }

const album = ({user_id}) => {
    return (<>
      <Layout>
        <Head>
            <title>Albums</title>
        </Head>
        <div className='flex-fluid bg-contrast p-modern p sm-p md-p-2 lg-p-1 xl-p'>
                <ProfileAlbum user_id={user_id} show_all={true}/>
        </div>
    </Layout></>)
}

export default album