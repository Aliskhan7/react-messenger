import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Social = () => {
    return (
        <div className="social">
            <h3 className='social-title'>Social</h3>
            <ul className='social-list'>
                <li className='social-list-item'>
                    <InstagramIcon />
                    <span>kuduzow</span>
                </li>
                <li className='social-list-item'>
                    <TwitterIcon />
                    <span>kuduzow</span>
                </li>
                <li className='social-list-item'>
                    <FacebookIcon />
                    <span>kuduzow</span>
                </li>
            </ul>
        </div>
    );
};

export default Social;