import { EditOutlined, CheckOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addItemAction, removeItemAction, submitItemAction } from './redux/app/actions';
import { AppStore, TodoItem } from './redux/app/reducer';
import { RootStore } from './redux/store';

const Wrapper = styled(Layout)`
  background-color: violet;
  height: 100vh;
`;
const DeleteButton = styled(Button)`
  margin-left: 10px;
`;
const EditButton = styled(DeleteButton)``;
const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
`;
// const App: React.FunctionComponent = () => {
//   const dispatch = useDispatch();
//   const count = useSelector<RootStore, AppStore['counter']>((store) => store.app.counter);

//   const handleInc = () => {
//     dispatch(increaseCounter(1));
//   };

//   const handleDec = () => {
//     dispatch(decreaseCounter(1));
//   };

//   return (
//     <Wrapper>
//       <Layout.Header>Header</Layout.Header>
//       <Layout.Content>
//         <Button onClick={handleInc} shape="circle">
//           +
//         </Button>
//         {count}
//         <Button onClick={handleDec} shape="circle">
//           -
//         </Button>
//       </Layout.Content>
//       <Layout.Footer>Footer</Layout.Footer>
//     </Wrapper>
//   );
// };

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector<RootStore, AppStore['todoItems']>((store) => store.app.todoItems);
  const doneItems = useSelector<RootStore, AppStore['doneItems']>((store) => store.app.doneItems);
  const [input, onInputChange] = useState({ itemName: '' });
  const [editableItemId, onEditableItemIdChange] = useState<number>();
  const [itemInput, onItemInputChange] = useState<TodoItem>();
  const addItem = (itemName: string | null) => {
    if (itemName) {
      const item = {
        itemName,
        id: Date.now(),
      };
      dispatch(addItemAction(item));
      onInputChange({ itemName: '' });
    }
  };
  const removeItem = (item: TodoItem) => {
    dispatch(removeItemAction(item));
  };

  const isEditHandler = (id: number) => {
    onEditableItemIdChange(id);
    onItemInputChange(todoItems.find((item) => id === item.id));
  };

  const submitEdits = () => {
    onEditableItemIdChange(undefined);
    dispatch(submitItemAction(itemInput));
  };
  return (
    <Wrapper>
      <h1 style={{ textAlign: 'center' }}>Things to do:</h1>
      {todoItems.length > 0 ? (
        todoItems.map((item) => (
          <ListWrapper key={item.id}>
            {editableItemId === item.id ? (
              <input
                type="text"
                value={itemInput?.itemName}
                onChange={(e) => onItemInputChange({ id: item.id, itemName: e.target.value })}
              />
            ) : (
              <li>{item.itemName}</li>
            )}
            {editableItemId !== item.id ? (
              <EditButton size="small" onClick={() => isEditHandler(item.id)} shape="circle">
                <EditOutlined />
              </EditButton>
            ) : (
              <EditButton onClick={() => submitEdits()}>
                <PlusOutlined />
              </EditButton>
            )}
            {editableItemId !== item.id && (
              <DeleteButton size="small" onClick={() => removeItem(item)} shape="circle">
                <CheckOutlined />
              </DeleteButton>
            )}
          </ListWrapper>
        ))
      ) : (
        <h3>There are not any things to do yet</h3>
      )}
      <input
        type="text"
        placeholder="type a thing to do"
        value={input.itemName}
        onChange={(e) => onInputChange({ ...input, itemName: e.target.value })}
      />
      <Button onClick={() => addItem(input.itemName)} type="primary">
        Add
      </Button>
      <h1 style={{ textAlign: 'center' }}>Done:</h1>
      {doneItems.map((item) => (
        <div key={item.id}>{item.itemName}</div>
      ))}
    </Wrapper>
  );
};

export default App;
