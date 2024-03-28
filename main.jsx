import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Counter Example</h1>
      <Counter initialValue={0} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));