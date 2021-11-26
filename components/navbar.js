import Image from 'next/image'

const LayoutSideBar = ({user_id, show_all})  => {
    return (<div className='bg-semantic-primary lg-grid-12x1 sm-grid-2x1 md-grid-2x1 overflow-hidden elevate z-100'>
    <div className="lg-pos-1_1 sm-pos-1_1  md-pos-1_1 ">
        <Image
            priority
            src="/images/icon.svg"
            height={50}
            width={50}
            alt = 'logo'
        />
    </div>
    <div className="lg-pos-2_1 lg-col-span-11 sm-pos-2_1 md-pos-2_1">
        <center>
            <div className = 'lg-pt-1 sm-p-1'>
                <input type="text" placeholder='Type Anything...' ></input>
            </div>
        </center>
    </div>
</div>)
}

export default LayoutSideBar;