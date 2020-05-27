import React from "react";
import './Contact.css';

const name = 'Alexandre';
const isLoggedIn = true;
const image = "https://avatars1.githubusercontent.com/u/47487590?s=460&u=6425b74b23778dcf23383383f1b38840de263285&v=4";

function Contact() {
    return (
        <div className="Contact">
            <img src={image} alt="Alex" className="avatar"></img>
            <div>
                <div className="name">{name}</div>
                <div className="status">
                    {
                        (isLoggedIn)
                            ? <div className="status-text"><span className="status-online"></span>Online</div>
                            : <div className="status-text"><span className="status-offline"></span>Offline</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Contact;