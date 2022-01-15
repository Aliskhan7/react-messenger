import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from "@mui/material/Avatar";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function Messages(props) {

    return (
        <div className='messages'>
            <div className="messages-header">
                <SearchIcon/>
                <div className="messages-header__name">
                    Кудузов Альви
                </div>
                <SettingsIcon/>
            </div>
            <div className="messages-content">
                <div className="chat-left">
                    <div className="messages-content__received">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div className="messages-content__received-text">
                            <p>Привет, как дела?</p>
                            <span>13:00</span>
                        </div>
                    </div>
                </div>
                <div className="messages-content__notification">
                    Пропущенный вызов
                </div>
                <div className="chat-right">
                    <div className='chat-right__items'>
                        <div className="messages-content__sent">
                            <p>Привет, нормально. Как у тебя?</p>
                            <span>13:00</span>
                        </div>
                        <div className="messages-content__sent">
                            <p>Привет, нормально. Как у тебя?</p>
                            <span>13:00</span>
                        </div>
                        <div className="messages-content__sent">
                            <p>Привет, нормально. Как у тебя?</p>
                            <span>13:00</span>
                        </div>
                        <div className="messages-content__sent">
                            <p>Привет, нормально. Как у тебя?</p>
                            <span>13:00</span>
                        </div>
                        <div className="messages-content__sent">
                            <p>Привет, нормально. Как у тебя?</p>
                            <span>13:00</span>
                        </div>
                        <div className="messages-content__sent">
                            <p>Привет, нормально. Как у тебя?</p>
                            <span>13:00</span>
                        </div>
                        <div className="messages-content__sent">
                            <p>Привет, нормально. Как у тебя?</p>
                            <span>13:00</span>
                        </div>
                        <div className="messages-content__sent">
                            <p>Привет, нормально. Как у тебя?</p>
                            <span>13:00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="messages-send">
                <input type="text" placeholder='Напишиете сообщение...'/>
                <div className="messages-send__icons">
                    <AttachFileIcon/>
                    <SendIcon/>
                </div>
            </div>
        </div>
    );
}

export default Messages;