import "../styles/FooterComponent.css";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year
  return (
    <footer className="footer">
      <div>
        Sign up for our newsletter{" "}
        <input type="email" placeholder="Email address" />
        <button type="submit">Submit</button>
      </div>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We provide top-notch services to meet your needs.</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Main St, City, State</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
