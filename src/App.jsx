import React, { useState, useEffect } from "react";
import "./App.css";

// function Helloworld (props){
//   console.log(props)
//   return(

//     <div id="hello">
//        <h3>{props.subtitle}</h3>
//     {props.text}</div>
//   )
// }
/////////////////
const Helloworld = (props) => {
  const [show, setShow] = useState(true);

  const toggleshow = () => {
    setShow(!show);
  };

  useEffect(() => {
    console.log("me monte");

    return () => {
      console.log("chao");
    };
  }, []);

  useEffect(() => {
    console.log("cambie el show", show);
  }, [show]);

  if (show) {
    return (
      <div id="hello">
        <h3>{props.subtitle}</h3>
        {props.text}
        <button onClick={toggleshow}>toggle Show </button>
      </div>
    );
  }
  return (
    <div>
      <h1>property are not defined</h1>
      <button onClick={toggleshow}>toggle Show </button>
    </div>
  );
};
///////////////////
// class Helloworld extends React.Component {
//   state = {
//     show: true,
//   };

//   toggleshow = () => {
//     this.setState({ show: !this.state.show });
//   };

//   componentWillMount() {
//     console.log("voy a montarme");
//   }
//   componentDidMount() {
//     console.log("montado");
//   }
//   render() {
//     if (this.state.show) {
//       return (
//         <div id="hello">
//           <h3>{this.props.subtitle}</h3>
//           {this.props.text}
//           <button onClick={this.toggleshow}>toggle Show </button>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h1>this property are not defined</h1>
//           <button onClick={this.toggleshow}>toggle Show </button>
//         </div>
//       );
//     }
//   }
// }

const App = () => {
  const [showApp, setShowApp] = useState(true);

  return (
    <div className="App">
      this is my component:{" "}
      {showApp && <Helloworld text="hola kevin" subtitle="hey" />}
      <button onClick={() => setShowApp(!showApp)}>toggle Show app </button>
      {/* <Helloworld text="hola mundo" subtitle="que hay" />
      <Helloworld text="Hello!" subtitle="Ingles" /> */}
    </div>
  );
};

export default App;
