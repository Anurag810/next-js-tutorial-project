import { useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const ProfileAlbum = ({user_id, show_all})  => {
    const [albums, set_albums_data] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/albums`)
            .then(response => response.json())
            .then(data => set_albums_data(data));
    
    }, []);
    
    const [display, set_display] = useState('none')
    const [image, set_image] = useState("/images/profile.jpg")
    const toggle_something = () =>{
        display=='block'? set_display('none') :set_display('block')        
    }

    
    let no_of_row = Math.ceil(albums.length/4)
    let no_of_row_md = Math.ceil(albums.length/2) 
    let col = 0
    let row = 1
    let col_md = 0
    let row_md = 1
    let lg_class = ''
    let md_class = ''
    return (<>
    <div> 
    <span className=" pt-1 -mt-3 fw-900 z-1000"style={{float: 'right'}}
        onClick={() => {toggle_something()}}
        style = {{display: `${display}`, position: 'fixed', top: "15%", right: "25%"}}>
            <h2>X</h2>
    </span>
    </div>


    <div className="flex-fluid dark p-modern p sm-p md-p-2 lg-p-1 xl-p mr-5 ml-5 round elevate z-100"
        style={{position: "fixed", top: "9%", right: "18%", width: 1000, height: 800, display: `${display}`}}
    >
        <div style={{opacity: 0.7}}>
        <Image
            priority
            src={image}
            layout = 'fill'
            
        />
        </div>
        <div className='bg-primary lg-grid-4x1 overflow-hidden elevate z-100'>
            <div className={"bg-primary lg-pos-1_1 "}
                onClick = {() => set_image("/images/profile.jpg")}
            >
                <Image
                    priority
                    src="/images/profile.jpg"
                    height={108}
                    width={108}
                />
            </div>
            <div className={"bg-primary  lg-pos-2_1 "}
                onClick = {() => set_image("/images/album.png")}
            >
                <Image
                    priority
                    src="/images/album.png"
                    height={108}
                    width={108}
                />
            </div>
            <div className={"bg-primary  lg-pos-3_1 "}
                onClick = {() => set_image("/images/profile.jpg")}
            >
                <Image
                priority
                src="/images/profile.jpg"
                height={108}
                width={108}
                />
            </div>
            <div className={"bg-primary  lg-pos-4_1 "}
                onClick = {() => set_image("/images/album.png")}
            >
                <Image
                    priority
                    src="/images/album.png"
                    height={108}
                    width={108}
                />
            </div>
        </div>
   
    </div>


    <div className='flex bg-primary pv-2h'>
            <center><h4>Albums</h4></center>
            <div className = {'bg-primary lg-grid-4x'+no_of_row+' md-grid-2x'+ no_of_row_md +' round overflow-hidden elevate'}
                onClick={() => {toggle_something()} }
            >
            {
                albums && albums.length && albums.map((album) => {
                    col = col+ 1
                    col_md = col_md + 1
                    if(col > 4){
                        col=1
                        row = row + 1
                    }
                    lg_class = 'lg-pos-'+col+'_'+row+ ' ';
                    if(col_md > 2){
                        col_md= 1
                        row_md = row_md + 1
                    }
                    md_class = 'md-pos-'+col_md+'_'+row_md+ ' ';
                    return <Link href='#'>
                        <center>
                            <div className={'bg-primary p-1 elevate pv-1 '+ lg_class + md_class +style.card}>
                                <center><Image
                                    priority
                                    src="/images/album.png"
                                    height={144}
                                    width={144}
                                    alt={album.title}
                                /></center>
                                <div>{album.title}</div>
                            </div>
                        </center>
                    </Link>
                })
            }
        </div>
    </div></>)
}

export default ProfileAlbum