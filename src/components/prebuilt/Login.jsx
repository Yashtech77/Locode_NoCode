import Email from "./Email";
import Password from "./Password";
import Button from "./Button";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      alert(`Email: ${email}, Password: ${password}`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
      <h2 className="text-2xl font-light mb-4 text-center text-gray-600">
        Login
      </h2>

      <div className="space-y-4">
        <Email
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
          required={true}
          width="100%"
          borderColor="#e5e7eb"
          borderRadius="8px"
          id="demo-email"
        />

        <Password
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
          required={true}
          width="100%"
          borderColor="#e5e7eb"
          borderRadius="8px"
          showToggle={true}
          id="demo-password"
        />

        <div className="flex gap-3">
          <Button
            text="Sign In"
            onClick={handleSubmit}
            type="button"
            variant="primary"
            size="medium"
            loading={loading}
            width="100%"
            borderRadius="8px"
            id="demo-signin"
          />
        </div>

      </div>
    </div>
  );
};

export default Login;