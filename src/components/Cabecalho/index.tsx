import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background-color: #f9f5e7;
  color: #a7727d;
  text-align: center;
  padding: 24px 0;
`;

const H1 = styled.h1`
  margin: 0;
`;

const Header = () => (
  <HeaderWrapper>
    <H1>EBAC Jobs</H1>
  </HeaderWrapper>
);

export default Header;
