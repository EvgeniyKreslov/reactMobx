import React from "react";
import { observer } from 'mobx-react-lite';

const MyComponent = observer((props: any) => {

  const { count, setCount } = props.store;

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => {
        setCount()
      }}>просто +</button>
      <button onClick={() => {
        new Promise<void>((resolve, reject) => {
          resolve();
        }).then(setCount)
      }}>async +</button>
    </div>
  );
})

export default MyComponent;