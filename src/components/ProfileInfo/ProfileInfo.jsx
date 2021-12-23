import React from 'react';
import Avatar from "@mui/material/Avatar";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import VideocamIcon from "@mui/icons-material/Videocam";
import MailIcon from "@mui/icons-material/Mail";

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <Avatar className='profile-avatar' alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            <div className='profile-names'>
                <h3 className='profile-name'>Кудузов Ахмад</h3>
                <p className='profile-nick-name'>@kuduzov</p>
            </div>
            <ul className='profile-icons-list'>
                <li className='icons-list-item'><PhoneEnabledIcon/></li>
                <li className='icons-list-item'><VideocamIcon/></li>
                <li className='icons-list-item'><MailIcon/></li>
            </ul>
        </div>
    );
};

export default ProfileInfo;