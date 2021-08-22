import { useRef } from "react";

// Components
import Button from "../../UI/Library/Button/Button";

// Styles
import styles from "./contact.module.scss"

const Contact = () => {
    const formRef = useRef()

    const submitForm = (e) => {
        e.preventDefault()
        const form = formRef.current as HTMLFormElement;
        let formData = new FormData(form);

        fetch('https://formspree.io/f/mqkwgwvl', {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                form.reset()
                alert("Thanks for your submission. We'll get back to you soon.");
            });
    }

    return (
        <div className={styles.contact}>
            <div className={styles.info}>
                <h4>Contact Us</h4>
                <a href="tel:+27829254614">
                    +27 82 925 4614
                </a>
                <a href="mailto:info@promech.co.za">
                    info@promech.co.za
                </a>
                <h4>Where We Are</h4>
                <a target="blank"
                    href="https://goo.gl/maps/21aNEANJDpu4bF7x8">
                    1 Main Street, Hermon, 7308
                </a>
            </div>
            <div className={styles.form}>
                <form ref={formRef}>
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="tel" name="phone" id="phone" placeholder="Phone" />
                    <input type="text" name="company" id="company" placeholder="Company" />
                    <textarea name="message" id="message" placeholder="Your Message"></textarea>
                </form>
                <Button hollow click={submitForm} >Send Message</Button>
            </div>
        </div>
    )
}

export default Contact
