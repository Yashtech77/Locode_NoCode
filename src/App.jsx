import Navbar from "./components/Navbar";
import ComponentLib from "./components/ComponentLib";
import Canvas from "./components/Canvas";
import CodePreview from "./components/CodePreview";

function App() {

  return (
    <div>
      <Navbar/>

      <div className="flex flex-row justify-between">
        <ComponentLib />
        <Canvas />
        <CodePreview />
      </div>

    </div>
  )
}

export default App;
