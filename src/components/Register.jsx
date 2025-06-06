import { Form, Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="mt-4 max-w-md mx-auto border border-gray-200 p-6 rounded-lg">
      <h2 className="text-2xl mb-4 text-center text-gray-600">
        Register
      </h2>

      <div className="space-y-4">
        <label className="text-gray-700">Email</label>
        <input
          type="text"
          placeholder="Enter email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label className="text-gray-700 mb-2">Name</label>    
        <input
          type="text"
          placeholder="Enter name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label className="text-gray-700 mb-2">Number</label>
        <input
          type="number"
          placeholder="Enter number"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label className="text-gray-700 mb-2">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label className="text-gray-700 mb-2">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button className="w-full bg-[#edf3dc] p-2 rounded">
          Register
        </button>
      </div>
      <p className="mt-3 text-center text-gray-600">
        Already have an account? <Link to="/login" className="text-blue-400">Login</Link>
      </p>
    </div>
  );
}