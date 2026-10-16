"use client"

import { useRef, useState } from "react";

// Components
import Button from "../../UI/Library/Button/Button";

// Styles
import styles from "./contact.module.scss"

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);
    formData.append("subject", "New contact form submission");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
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
        <form onSubmit={onSubmit}>
          <input type="text" name="name" id="name" placeholder="Name" required />
          <input type="email" name="email" id="email" placeholder="Email" required />
          <input type="tel" name="phone" id="phone" placeholder="Phone" />
          <input type="text" name="company" id="company" placeholder="Company" />
          <textarea name="message" id="message" placeholder="Your Message" required></textarea>
          {status === "sent" ?
            <p>Thanks for your message! We'll get back to you soon.</p>
            : status === "error" ?
              <p>Something went wrong. Please try again.</p>
              :
              <Button hollow type="submit" disabled={status === "sending"}>Send Message</Button>
          }
        </form>
      </div>
    </div>
  )
}

export default Contact
