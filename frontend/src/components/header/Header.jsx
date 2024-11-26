import react from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='head'>
            <div className='head1'>
                <div className='logo1'>
                    <div className='sublogo1'>
                        <h1><span>H</span><span>u</span><span>s</span><span>t</span><span>l</span><span>e </span></h1>
                    </div>
                    <div className='sublogo2'>
                        <h1><span>P</span>ortfolio</h1>
                    </div>
                </div>
                <div className='logo2'>
                    <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>
                    <form className='input-div' method="get" role='search'>
                        <input type='text' placeholder='Search My Project' />
                    </form>
                </div>
                <div className='logo3'>
                    <div>
                    <i className="material-icons" style={{ fontSize: '30px', color: '#000000' }}>help_outline</i>
                    </div>

                    <div>
                    <svg
                        className="inner-logo3" focusable="false" viewBox="0 0 24 24" style={{ width: '30px', height: '30px' }}
                    >
                        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                        <image
                            src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"
                            alt=""
                            style={{ width: '24px', height: 'auto', border: 'none' }}
                        />
                    </svg>
                    </div>
                    <div className='innerdiv-logo3'>
                            <i className="material-icons" style={{ fontSize: '30px', color: '#000000' }}>person</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
