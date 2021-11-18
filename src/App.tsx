import { Button, Layout } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addTodoItem, removeTodoItem } from './redux/app/actions';
import { AppStore } from './redux/app/reducer';
// import { AppActions } from './redux/app/types';
import { RootStore } from './redux/store';

const Wrapper = styled(Layout)`
  background-color: violet;
  height: 100vh;
`;

const Input = styled.input``;

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector<RootStore, AppStore['todos']>((store) => store.app.todos);
  // const count = useSelector<RootStore, AppStore['counter']>((store) => store.app.counter);

  const [todoInput, setTodoInput] = useState('');

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodoItem({ name: todoInput, id: Date.now() }));
    setTodoInput('');
  };

  const handleRemove = (idItem: number) => {
    dispatch(removeTodoItem({ id: idItem }));
  };

  return (
    <Wrapper>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>
        <Input onChange={handleOnChangeInput} value={todoInput} />
        <Button onClick={handleAddTodo} shape="circle">
          Add Todo
        </Button>

        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.name}
            <Button onClick={() => handleRemove(todo.id)}>X</Button>
          </div>
        ))}

        {/* {count} */}
        {/* <Button onClick={handleRemoveTodo} shape="circle">
          -
        </Button> */}
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Wrapper>
  );
};

export default App;
