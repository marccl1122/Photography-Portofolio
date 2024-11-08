import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Work with me:</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required /> {/* Basic validation */}
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /> {/* Basic validation */}

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea> {/* Basic validation */}
        
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
