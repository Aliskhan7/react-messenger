import React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';



function Contact(props) {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: -1,
                left: -1,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));


    return (
        <div className='content-dialog'>
            <div className="dialog-search">
                <input type="search" placeholder='Поиск контакта'/>
            </div>
            <div className="dialog-contacts">
                <div className="dialog-contacts__item contact">
                    <div className="contact-icon">
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </StyledBadge>
                    </div>
                    <div className="contact-text">
                        <div className="contact-text__name">
                            <p>Кудузов Ахмад</p>
                        </div>
                        <div className="contact-text__message">
                            <span>Приходите сегодня на урок</span>
                        </div>
                    </div>
                    <div className="contact-time">
                        <span>9:00</span>
                    </div>
                </div>
                <div className="dialog-contacts__item contact">
                    <div className="contact-icon">
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </StyledBadge>
                    </div>
                    <div className="contact-text">
                        <div className="contact-text__name">
                            <p>Кудузов Альви</p>
                        </div>
                        <div className="contact-text__message">
                            <span>Не приходите сегодня на урок</span>
                        </div>
                    </div>
                    <div className="contact-time">
                        <span>9:00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;