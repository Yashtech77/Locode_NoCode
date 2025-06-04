import { useState } from "react";
import { componentsMap } from "./componentsMap";

const Canvas = () => {
    const [droppedComponents, setDroppedComponents] = useState([]);

    const handleDrop = (e) => {
        e.preventDefault();
        const componentKey = e.dataTransfer.getData('component');

        if (componentsMap[componentKey]) {
            setDroppedComponents((prev) => [...prev, componentKey]);
        }
    };

    return (
        <div
            className="border-2 border-red-400 w-full min-h-[90vh] p-4"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}>

            <h2 className="text-2xl bg-gray-50 p-1 rounded-xl mb-4">Canvas</h2>
            <div className="space-y-4">
                {droppedComponents.map((key, index) => {
                    const Comp = componentsMap[key];
                    return <Comp key={`${key}-${index}`} />;
                })}
            </div>
        </div>
    )
}

export default Canvas;