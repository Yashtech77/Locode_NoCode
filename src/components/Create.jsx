import ComponentLib from "../components/ComponentLib"
import Canvas from "../components/Canvas";
import CodePreview from "../components/CodePreview";

const Create = () => {

    return (
        <main className="flex flex-row justify-between">
            <ComponentLib />
            <Canvas />
            <CodePreview />
        </main>
    )
}

export default Create;