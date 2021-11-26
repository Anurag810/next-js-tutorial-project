import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import LayoutSideBar from './navbar'
import Link from 'next/link'

const name = 'Anurag Mishra'
export const siteTitle = 'This is me'

export default function Layout({ children, home}) {
  return (<div className="flex-fluid p-modern ">
    <LayoutSideBar/>
    <div className="elevate bg-contrast ml-5 mr-5">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Still Learning"
        />
      </Head>
      { home ? (
                <></>
            ) : (
      <header>
        <center>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
      </center>
      </header>
      )}
      <main>{children}</main>
      { home ? (
          <></>
        ) : (
        <div className='flex ml-2'>
          <Link href="/">
            <h6><a>← Back to home</a></h6>
          </Link>
        </div>
      )}
    </div>
  </div>)
}