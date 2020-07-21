import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
      <FooterContainer className = "main-footer">
          <div className = "footer-mid">
        <div className = "container">
            <div className = "row">
                <div className = "col-md">
                   <li>Github</li>
                </div>
                <div className = "col-md">
                    <li>LinkedIn</li>
                </div>
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