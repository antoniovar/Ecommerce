import '../styles/Footer.css'

function Footer(){
  return(
    <div className="footer-container">
      <span className='left-text'>Created by <i className="fa-brands fa-github" /><span> </span><a className='github' href='https://github.com/antoniovar'>antoniovar</a></span>
      <span className='right-text'><i className="fa-regular fa-copyright" /> All rights reserved</span>
    </div>
  );
}

export default Footer;