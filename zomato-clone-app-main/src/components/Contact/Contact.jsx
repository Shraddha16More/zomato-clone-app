import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={`${styles.contact} `}>
      <div className={`${styles.contactForm} my-40`}>
        <h1 className={styles.contactHeading}>
          Get In <span>Touch</span>
        </h1>
        <form action="" className={styles.form}>
          <div className="userName">
            <input
              className={styles.username}
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div>
            <input className={styles.email} type="email" placeholder="Email" />
          </div>
          <div>
            <input
              className={styles.mobile}
              type="text"
              placeholder="Mobile Number"
            />
          </div>
          <select className={styles.find} name="find" id="find">
            <option id="find" value="" disabled={true}>
              How did you find us?
            </option>
            <option id="find" value="Google">
              Google
            </option>
            <option id="find" value="Google">
              Play Store
            </option>
            <option id="find" value="Google">
              Apple Store
            </option>
          </select>
        </form>
      </div>
    </div>
  );
}
