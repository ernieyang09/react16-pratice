import React , { Component, useState, useEffect } from 'react';


function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(1)
    document.title = `You click ${count} times`;
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


class App extends Component {

  componentDidMount() {
    this.test()
  }

  test = () => {
    console.log(123)
  }

  render() {
    return (
      <div>
        <div>Hello World!!</div>
        <Example />
      </div>
    )
  }
}

export default App;
