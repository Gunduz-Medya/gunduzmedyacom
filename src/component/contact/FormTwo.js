import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
            Mesajınız iletildi! Teşekkür ederiz!
        </Alert>
    )
}

const FormTwo = () => {

    const form = useRef();

    const [result, showresult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yj5dgzp', 'template_hfduayo', form.current, 'WLENsTkBytC0yvItS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);


    return (
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
            <div className="form-group">
                <label>İsim</label>
                <input type="text" className="form-control" name="contact-name" required />
            </div>
            <div className="form-group">
                <label>Eposta</label>
                <input type="email" className="form-control" name="contact-email" required />
            </div>
            <div className="form-group">
                <label>Telefon</label>
                <input type="tel" className="form-control" name="contact-phone" required />
            </div>
            <div className="form-group mb--40">
                <label>Size nasıl yardımcı olabiliriz?</label>
                <textarea className="form-control" name="contact-message" rows="4"></textarea>

            </div>
            <div className="form-group">
                <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Destek Al</button>
            </div>
            <div className='form-group'>
                <p>veya doğrudan baris@gunduzmedya.com adresinden bizimle iletişime geçin.</p>
            </div>
            <div className="form-group">
                {result ? <Result /> : null}
            </div>

        </form>
    )
}

export default FormTwo;