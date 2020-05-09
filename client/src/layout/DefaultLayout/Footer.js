
import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
  /* background-color: red; */
  border: solid 1px;
  color: white;
  text-align: center;
  color: #bbb;
  font-size: 0.9em;
  padding: 4em 2em;
  text-align: center;
`;

// import './DefaultHeader.css';

export const Footer1 = () => {
  return (
    <Footer>
        <div class="copyright">
            © Untitled. All rights reserved. Images: <a href="http://unsplash.com">Unsplash</a>. Design: <a href="http://templated.co">TEMPLATED</a>.
        </div>
    </Footer>
  )
}