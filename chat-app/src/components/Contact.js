import React from "react";
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = { online: props.online }
    }
    render() {
        return (
            <div className="Contact">
                <img src={this.props.avatar} alt={this.props.name} className="avatar"></img>
                <div>
                    <div className="name">{this.props.name}</div>
                    <div className="status">
                        <div
                            onClick={event => {
                                const newOnline = !this.state.online;
                                this.setState({ online: newOnline });
                            }}>
                            {
                                (this.state.online)
                                    ? <div className="status-text"><span className="status-online"></span>Online</div>
                                    : <div className="status-text"><span className="status-offline"></span>Offline</div>
                            }
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
};

export default Contact;