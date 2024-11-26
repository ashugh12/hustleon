import React from 'react'
import './BodyCompo.css';
function BodyCompo() {
    return (
        <div className='body'>
            <div className='body1'>
                <div className='left'>
                    <div className='left1'>Home</div>
                    <div className='left1'>Personal Info</div>
                    <div className='left1'>Unlock Resume Data</div>
                    <div className='left1'>About</div>
                </div>
                <div className='right'>
                    <div className='right1' id='right1'>
                        <div><img src="https://www.w3schools.com/howto/img_avatar.png" alt="" /></div>
                        <div className='imageinfo'> <h1>Welcome You</h1>
                            <p>Manage your info, privacy, and security to make Google work better for you. Learn more</p></div>
                    </div>
                    {/* <div className='right1' id='tworight1'>
                        <div className='subright1'>
                            <span>
                            Privacy & personalization
                            </span>
                        See the data in your Google Account and choose what activity is saved to personalize your Google experience</div>
                        <div className='subright1'>
                            <span>
                                Security
                            </span>
                        Recommended actions found in the Security Checkup</div>
                    </div>
                    <div className='right1'>dfaddfsa</div>
                    <div className='right1'>dfa</div>
                    <div className='right1'>daf</div> */}
                </div>
            </div>
        </div>
    )
}

export default BodyCompo
