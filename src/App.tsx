import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent/MyComponent';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <MyComponent store={store as any}/>
    </div>
  );
}

export default App;
