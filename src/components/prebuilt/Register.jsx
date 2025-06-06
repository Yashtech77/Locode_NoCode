import Email from "./Email"
import Button from "./Button"
import Password from "./Password"

const Register = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
      <h2 className="text-2xl font-light mb-4 text-canter text-gray-600">
        Register
      </h2>

      <div className="space-y-4">
        <input type="text" />
        <Email/>
        <Password/>
        <Button/>
      </div>
    </div>
  )
}

export default Register