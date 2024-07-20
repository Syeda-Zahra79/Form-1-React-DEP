import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
        <img className='logo' src="./no-bg-logo.png" alt="Digital Empowerment Pakistan" />
        <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
        </ul>
        <div className="logos">
                <img src="/icons/fb.png" alt="Facebook Logo" />
                <img src="/icons/insta.png" alt="Instagram Logo" />
                <img src="/icons/li.png" alt="LinkedIn Logo" />
                <img src="/icons/tw.png" alt="Twitter Logo" />
                <img src="/icons/whatsapp.png" alt="WhatsApp Logo" />
            </div>
    </footer>
  )
}

export default Footer