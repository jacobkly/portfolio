import { useState } from 'react';
import Header from '../../components/Header/Header';
import './contact.css';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, message });
    };

    return (
        <div id="contact">
            <div id="header"><Header section="Contact" left={31} /></div>
            <div id="contact-container">
                <div id="contact-intro">
                    <p className="barlow-light">Have a question or request for me?</p>
                    <p className="barlow-light">Contact me with the form below or via email icon!</p>
                </div>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div id="name-container">
                        <input
                            type="text"
                            id="form-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            className="barlow-light"
                        />
                    </div>
                    <div id="email-container">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="barlow-light"
                        />
                    </div>
                    <div id="message-container">
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message"
                            className="barlow-light"
                        />
                    </div>
                    <div id="bottom-container">
                        <a href="mailto:klymenkojacob@gmail.com" className="email-link">
                            <img src="/images/email.png" alt="Email Icon" className="email-icon" />
                            <span className="email-text barlow-regular">klymenkojacob@gmail.com</span>
                        </a>
                        <button type="submit" className="barlow-light">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;