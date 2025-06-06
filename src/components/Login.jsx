import { Form } from "react-router-dom";

export default function Login() {
  return (
    <div className="mt-4 max-w-md mx-auto border border-gray-200 p-6 rounded-lg">
      <h2 className="text-2xl mb-4 text-center text-gray-600">
        Login
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button className="w-full bg-[#edf3dc] p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}