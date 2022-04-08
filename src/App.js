import Navbar from "./components/navbar/Navbar";

function App() {
  console.log("%cApp.js", 'background: black; color: white;')

  return (
    <div className="box-border">
      <Navbar />
    </div>
  );
}

export default App;