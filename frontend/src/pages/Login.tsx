import { Button } from "@/components/ui/button"

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-12 border-l border-gray-300 h-64"></div>
      <div>
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <Button
            type="submit"
            className="w-full  text-white py-2 px-4 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600"
          >
            Login
          </Button>
        </form>
      </div>
      <div>
        <img
          src="/login-illustration.png"
          alt="Login Illustration"
          className="w-64 h-64 mb-8"
        />
      </div>
    </div>
  )
}

export default Login
