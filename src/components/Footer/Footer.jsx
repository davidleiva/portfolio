import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Developed with: 
          <div style={{backgroundColor: 'white', padding: '12px', width: '300px', margin: '20px auto'}}><img alt="Gatsby-React" src={"/react-gatsby.png"} style={{width: '138px'}}/></div>
        </p>
        <p>
          <a href="https://github.com/cobidev/gatsby-simplefolio" rel="noreferrer" target="_blank" style={{color: '#ffb677', textDecoration: 'underline'}}>gatsby-simplefolio</a>
        </p>
        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
