function Contact(){
    return(
        <div>
            <h1>Contact</h1>
              <p>You can reach me at:</p>
              <ul>
                <li>Email: dhara6744@gmail.com</li>
                <li>Phone: +91 97260 22673</li>
              </ul>

            <h3>Send me a message</h3>
                <form>
                   <label>Name: </label><br />
                   <input type="text" placeholder="Your name" /><br /><br />
                   <label>Message: </label><br />
                   <textarea placeholder="Your message" rows="4" cols="30" /><br /><br />
                   <button type="submit">Submit</button>
                </form>
        </div>
    )
}
export default Contact;
