import { componentsMap } from "./componentsMap";

const ComponentLib = () => {

  return (
    <div className="border-r border-gray-100 shadow-sm w-[20%] p-4">
        <h1 className="text-2xl bg-gray-50 p-1 rounded-xl mb-4">Components</h1>
        <ul className="space-y-2">
        {Object.keys(componentsMap).map((key) => (
          <li
            key={key}
            draggable
            onDragStart={(e) => e.dataTransfer.setData('component', key)}
            className="cursor-move p-2 bg-gray-100 rounded hover:bg-gray-200">
            {key}
          </li>
        ))}
        </ul>
    </div>
  )
}

export default ComponentLib;