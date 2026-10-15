"use client"

import { useRef } from "react";

// Components
import Button from "../../UI/Library/Button/Button";

// Styles
import styles from "./contact.module.scss"

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null)

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
                <a href="tel:+27714741650">
                    +27 71 474 1650
                </a>
                <a href="mailto:info@promech.co.za">
                    info@promech.co.za
                </a>
                <h4>Where We Are</h4>
                <a target="blank"
                    href="https://maps.app.goo.gl/cgMpy4fiYCX3XKb29">
                    13 Lanzerac St, Vredenberg, Cape Town, 7530
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
