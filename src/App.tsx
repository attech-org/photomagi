import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: violet;
`;

const App: React.FunctionComponent = () => (
  <Wrapper>
    <header className="App-header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </Wrapper>
);

export default App;
