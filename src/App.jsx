import { useState } from "react";
import "./App.css";

// A HOC that adds a border to any component
function withBorder(WrappedComponent) {
  return function NewComponent(props){
    return (
      <div style={{ border: '2px solid blue', padding: '10px' }}>
        <WrappedComponent {...props} />
      </div>
    );
  }
}


// Simple component without border
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
// Create a new component with border
const GreetingWithBorder = withBorder(Greeting);

function App() {
  return (
    <>
      <div>
        <h1>R</h1>
        <Greeting name="John" />
        <GreetingWithBorder name="Jane" />
      </div>
    </>
  );
}

export default App;

