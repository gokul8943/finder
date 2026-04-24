import loginImg from "@/assets/Home/Gemini_Generated_Image_ljtmi6ljtmi6ljtm.png"
import AuthForm from "@/components/AuthForm"

const Login = () => {
  return (
    <div className="min-h-screen flex w-full overflow-hidden bg-cover bg-center bg-no-repeat items-center justify-center"
      style={{ backgroundImage: `url(${loginImg})` }}
    >
      <div>
        <AuthForm />
      </div>
    </div>
  )
}

export default Login
