import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 100px);
`;

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <Link to="/">Landing page</Link>
    <Link to="/dashboard">Dashboard</Link>
    <StyledMain>{children}</StyledMain>
  </>
);

export default Layout;