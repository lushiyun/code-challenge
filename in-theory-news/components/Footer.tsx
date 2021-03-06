import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const handleSubmit = () => {
    window.open(
      'https://tinyletter.com/shiyunlu',
      'popupwindow',
      'scrollbars=yes,width=800,height=600'
    );
    return true;
  };

  return (
    <footer>
      <div className="newsletter">
        <h3 className="newsletter__cta">One Email. All Our Best Stories.</h3>

        {/* integrate tinyletter for newsletter subscriptions */}
        <form
          className="newsletter__form"
          action="https://tinyletter.com/shiyunlu"
          method="post"
          target="popupwindow"
          onSubmit={handleSubmit}>
          <input
            className="newsletter__input"
            type="text"
            name="email"
            id="tlemail"
            placeholder="Enter Email Address"
            aria-label="email address for newsletter"
          />
          <input type="hidden" value="1" name="embed" />
          <input
            className="newsletter__submit"
            type="submit"
            value="Subscribe"
            aria-label="subscribe to newsletter"
          />
        </form>
      </div>

      <div className="follow">
        <strong className="follow__label">Follow Us</strong>
        <ul className="follow__list">
          <li>
            <a
              href="https://twitter.com/lu_shiyun"
              target="_blank"
              rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCBDviXpjr5qNjGSQE2MEsdg?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>

      <small className="copyright">
        {new Date().getFullYear()} ©{' '}
        <a
          href="https://shiyunlu.com"
          target="_blank"
          rel="noopener noreferrer">
          Shiyun Lu
        </a>
      </small>
    </footer>
  );
};

export default Footer;
