import React from 'react';
import { Navbar } from './Navbar';

const ContactUs = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div>
            <div>

                <Navbar></Navbar>
                <div className="container mt-5 " col='4' md='6' style={{
                    maxWidth: '40%',
                    padding: '20px',
                    margin: "2em",
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    float: "right",

                }}>

                    <h2 className="mb-3">Contact Us</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input className="form-control" type="text" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" required />
                        </div>
                        <button className="btn btn-danger" type="submit">
                            {formStatus}
                        </button>
                    </form>
                </div>
                <div className="container mt-5 " col='4' md='6' style={{}}>
                    <div
                        id="google-map"
                        ref={googleMapRef}
                        style={{ width: "400px", height: "300px" }}
                    />
                </div>
            </div>

        </div>

    )
}
export { ContactUs };