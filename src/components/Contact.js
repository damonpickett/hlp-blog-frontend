
const Contact = () => {

   return (
    <div className='contact-page'>
        <div className='contact-form'>
            <h2>Contact Form</h2>
            <form action="https://formsubmit.co/damon.pickett@gmail.com" method="POST">
                <input type='text' name='name' placeholder='Your name'/>
                <input type="email" name="email" placeholder="Your email address" required/>
                <textarea name="message" rows="15" placeholder="How can I help you?"></textarea>
                <button type="submit" >Send</button>
            </form>
        </div>
    </div>
   )
};

export default Contact;

