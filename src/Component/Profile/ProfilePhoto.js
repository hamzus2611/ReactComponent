import React from 'react'
import BENZEMA from './BENZEMA.jpg'

const ProfilePhoto = () => {
    return (
        <div >
            <div style={{ width: '10%', height: '40%' }}>
                <img src={BENZEMA} alt="img"  width="200"
            height="300"/>
            </div>

        </div>
    )
}

export default ProfilePhoto
