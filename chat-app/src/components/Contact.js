import React from "react";
import PropTypes from 'prop-types';
import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.avatar} alt={props.name} className="avatar"></img>
            <div>
                <div className="name">{props.name}</div>
                <div className="status">
                    {
                        (props.online)
                            ? <div className="status-text"><span className="status-online"></span>Online</div>
                            : <div className="status-text"><span className="status-offline"></span>Offline</div>
                    }
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
};

export default Contact;