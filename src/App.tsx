import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

// z5R67PY6AZ6eSaGI5;
// //
// template_bwbit6b;

export default function App() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("z5R67PY6AZ6eSaGI5");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = "service_7qhwn6u";
    const templateId = "template_bwbit6b";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current?.value,
        recipient: emailRef.current?.value,
      });
      alert("Email successfully sent. Check your inbox.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <aside></aside>
      <form className="for" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="">name</label>
          <input ref={nameRef} placeholder="Enter your name" />
        </div>
        <div className="form_group">
          <label htmlFor="">email</label>
          <input ref={emailRef} type="email" placeholder="Enter your email" />
        </div>
        <button className="btn" disabled={loading}>
          Subscribe
        </button>
      </form>
    </section>
  );
}
