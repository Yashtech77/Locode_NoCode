const CodePreview = () => {
  return (
    <div className="border-2 border-blue-300 w-[30%] p-4">
        <div className="h-[60vh]">
            <h1 className="text-2xl mb-4 bg-gray-50 p-1 rounded-xl">Source Code</h1>
            <div>
                Code
            </div>
        </div>
        <div className="h-[25vh]">
            <h1 className="text-2xl mb-4 bg-gray-50 p-1 rounded-xl">customise with ai</h1>
            <input type="text" placeholder="prompt"></input>
        </div>
    </div>
  )
}

export default CodePreview;