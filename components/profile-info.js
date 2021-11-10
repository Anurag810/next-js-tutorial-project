import style from '../styles/profile.module.css'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

const ProfileInfo = ({data})  => {
    return (<div className='bg-primary lg-grid-3x1 sm-grid-1x2 round overflow-hidden elevate'>
            <div className={"bg-primary p-1 lg-p-2 pv-1 lg-pos-1_1 sm-pos-1_1 elevate " +style.card}>
                <center>
                    <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={200}
                    width={220}
                    alt="Photo"
                    />
                    <h5>{data.name}</h5>
                    <span>@{data.username}</span><br/>
                    <span>Full Stack Developer</span><br/>
                    <span>{data.address.street}, {data.address.city}</span><br/>
                </center>
            </div>
            <div className={"bg-primary p-1 lg-p-2 pv-1 lg-pos-2_1 lg-col-span-2 sm-pos-1_2 elevate " + style.card}>
                <h4>User Details</h4>
                <table>
                    <tr>
                        <th>Name:</th>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <th>Address:</th>
                        <td>{data.address.suite}, {data.address.street}. {data.address.city}</td>
                    </tr>
                    <tr>
                        <th>Phone:</th>
                        <td>{data.phone}</td>
                    </tr>
                </table>
            </div>
        </div>
        
    )
}

export default ProfileInfo