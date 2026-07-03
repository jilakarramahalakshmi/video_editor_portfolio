function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
    <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="contact-form"
>
  <input
    type="hidden"
    name="access_key"
    value="34535d24-ca83-4a96-9c1f-2ef8598965e1"
  />
  

  <input
    type="text"
    name="name"
    placeholder="your name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="your email"
    required
  />

  <textarea
    name="message"
    placeholder="your message"
    rows="5"
    required
  ></textarea>

  <button type="submit">
    Send Message
  </button>
</form>
      
       

      <div className="contact-links">
<a href="https://wa.me/918121173907">
  <button>WhatsApp Me</button>
</a>

<a
  href="https://instagram.com/shri_shanmukha_creative_works"
  target="_blank"
>
  <button>Instagram</button>
</a>

      </div>
    </div>
  );
}

export default Contact;