import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <em>
        <p>© 2021 John Yoon.</p>
      </em>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
