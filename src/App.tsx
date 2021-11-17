/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, Layout } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addItemAction, removeItemAction } from './redux/app/actions';
import { AppStore, TodoItem } from './redux/app/reducer';
import { RootStore } from './redux/store';

const Wrapper = styled(Layout)`
  background-color: violet;
  height: 100vh;
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
  const [input, onInputChange] = useState({ itemName: '' });
  const dispatch = useDispatch();
  const todoItems = useSelector<RootStore, AppStore['todoItems']>((store) => store.app.todoItems);
  const doneItems = useSelector<RootStore, AppStore['todoItems']>((store) => store.app.doneItems);
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
  // const addToDone = (item: TodoItem) => {
  //   dispatch(addToDoneAction(item));
  // };
  return (
    <Wrapper>
      <h1 style={{ textAlign: 'center' }}>Things to do:</h1>
      {todoItems.length > 0 ? (
        todoItems.map((item) => (
          <div onClick={() => removeItem(item)} key={item.id}>
            {item.itemName}
          </div>
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
