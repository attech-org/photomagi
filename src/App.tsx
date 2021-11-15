import { Layout } from 'antd';
import styled from 'styled-components';

const Wrapper = styled(Layout)`
  background-color: violet;
  height: 100vh;
`;

const App: React.FunctionComponent = () => (
  <Wrapper>
    <Layout.Header>Header</Layout.Header>
    <Layout.Content>Content</Layout.Content>
    <Layout.Footer>Footer</Layout.Footer>
  </Wrapper>
);

export default App;
