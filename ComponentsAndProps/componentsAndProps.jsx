function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <div>
      <Welcome name="Esther" />
      <Welcome name="Phila" />
      <Welcome name="Happy" />
    </div>
  );
}

root.render(<App />);
