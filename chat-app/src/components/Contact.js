import React from "react";
import PropTypes from 'prop-types';
import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.avatar} alt={props.contactFirstName} className="avatar"></img>
            <div>
                <div className="name">{props.contactFirstName + ' ' + props.contactLastName}</div>
                <div className="status">
                    {
                        (props.isConnect)
                            ? <div className="status-text"><span className="status-online"></span>Online</div>
                            : <div className="status-text"><span className="status-offline"></span>Offline</div>
                    }
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    contactFirstName: PropTypes.string.isRequired,
    contactLastName: PropTypes.string.isRequired,
    isConnect: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
};

export default Contact;