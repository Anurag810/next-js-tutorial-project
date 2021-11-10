import Head from 'next/head'
import Cards from '../components/cards'
import style from '../styles/Home.module.css'

  
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {users},
  }
}

const Home = ({users}) => {
  let no_of_row = Math.ceil(users.length/5)
    let no_of_row_md = Math.ceil(users.length/2) 
    let col = 0
    let row = 1
    let col_md = 0
    let row_md = 1
    let lg_class = ''
    let md_class = ''
  return (<>   
      <Head>
        <title>My book</title>
      </Head>
        <div className={'bg-primary lg-grid-5x'+no_of_row+' md-grid-2x'+ no_of_row_md +' round overflow-hidden elevate'}>
            {users.map(user => {
              col = col+ 1
              col_md = col_md + 1
              if(col > 5){
                  col=1
                  row = row + 1
              }
              lg_class = 'lg-pos-'+col+'_'+row+ ' ';
              if(col_md > 2){
                  col_md= 1
                  row_md = row_md + 1
              }
              md_class = 'md-pos-'+col_md+'_'+row_md+ ' ';
              return (<div className={'bg-primary p-1  elevate pv-1 '+ lg_class + md_class +style.card}>
                <Cards name={user.name} id={user.id}/>
              </div>)
            })}
        </div>
    </>)
}

export default Home;