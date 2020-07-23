import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubSquare,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
      <FooterContainer className = "main-footer">
          <div className = "footer-mid">
        <div className = "container">
            <div className = "row" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <a href="https://github.com/katielin42" class = "social"> <FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>
                <a href="https://www.linkedin.com/in/katie-lin-070925184/" class = "social"> <FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
                </div>
            </div>
            </div>
        </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-mid{
    background: var(--mainDark);
    color: var(--mainWhite);
    padding-top: 2rem;
    padding-bottom: 2rem;
}

`;