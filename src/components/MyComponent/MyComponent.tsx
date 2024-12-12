import React from "react";
import { observer } from 'mobx-react-lite';

const MyComponent = observer((props: any) => {

  const { count, setCount } = props.store;

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => {
        setCount()
      }}>+</button>
    </div>
  );
})

export default MyComponent;