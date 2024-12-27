import { useState } from 'react';
import Header from '../../components/Header/Header';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        const templateParams = {
            to_name: import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL,
            from_name: name,
            from_email: email,
            message: message
        };

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID!,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY!
            );
            console.log('Email sent successfully:', result);
            alert('Your message has been sent!');

            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.log('Error sending email:', error);
            alert('There was an issue sending your message. Please try again.');
        }
    };

    return (
        <div id="contact">
            <div id="header"><Header section="Contact" left={31} /></div>
            <div id="contact-container">
                <div id="contact-intro">
                    <p className="barlow-light">Have a question or want to work together?</p>
                    <p className="barlow-light">Contact me with the form below or via email icon!</p>
                </div>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="form-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="barlow-light"
                    />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="barlow-light"
                    />
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        className="barlow-light"
                    />
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