import { Button, Layout } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import icon from './edit.png';
import { addTodoItem, editTodoItem, removeTodoItem } from './redux/app/actions';
import { AppStore, TodoItem } from './redux/app/reducer';
// import { AppActions } from './redux/app/types';
import { RootStore } from './redux/store';

const ContentCenter = styled(Layout.Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WrapTodo = styled.div``;

const Wrapper = styled(Layout)`
  background-color: violet;
  height: 100vh;
`;

const Input = styled.input`
  margin-bottom: 20px;
  margin-right: 20px;
`;

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding-bottom: 10px;
  border-bottom: dashed 1px #7a7a7a;
  &:last-child {
    border-bottom: solid 1px black;
  }
`;

const P = styled.p`
  width: 70%;
  margin: 0;
  font-size: 1.2em;
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  padding: 5px;
  margin-right: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.7);
    border-radius: 10px 0 10px 0;
  }
`;

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector<RootStore, AppStore['todos']>((store) => store.app.todos);

  const [todoInput, setTodoInput] = useState('');
  const [isEditing, setIsEditing] = useState<number>(0);
  const [editableTodoInput, onEditableTodoInputChange] = useState('');

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodoItem({ name: todoInput, id: Date.now() }));
    setTodoInput('');
  };

  const handleRemove = (todo: TodoItem) => {
    dispatch(removeTodoItem(todo));
  };

  const handleEditingInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onEditableTodoInputChange(e.target.value);
  };

  const handleEditTodo = (todo: TodoItem) => {
    setIsEditing(todo.id);
    onEditableTodoInputChange(todo.name);
  };

  const handleSetChanges = () => {
    dispatch(editTodoItem({ id: isEditing, name: editableTodoInput }));
    setIsEditing(0);
  };

  return (
    <Wrapper>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>
        <ContentCenter>
          <WrapTodo>
            <div>
              <Input onChange={handleOnChangeInput} value={todoInput} />
              <Button onClick={handleAddTodo} shape="circle">
                Add Todo
              </Button>
            </div>
            {todos.map((todo) => (
              <Todo key={todo.id}>
                {isEditing === todo.id ? (
                  <div>
                    <Input onChange={handleEditingInput} value={editableTodoInput} />
                    <Button onClick={() => handleSetChanges()}>&#10004;</Button>
                  </div>
                ) : (
                  <>
                    <P>{todo.name}</P>
                    <div>
                      <Img src={icon} onClick={() => handleEditTodo(todo)} />
                      <Button onClick={() => handleRemove(todo)}>X</Button>
                    </div>
                  </>
                )}
              </Todo>
            ))}
          </WrapTodo>
        </ContentCenter>
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Wrapper>
  );
};

export default App;
