import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { login } = useAuth();
    const location = useLocation();
    const navigation = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value

        let from = location?.state?.from?.pathname || "/";

        try {
            const { data } = await login(username, password);
            toast.success("Login Successfully")
            if (data.user.role === "admin") {
                navigation("/dashboard");
            } else {
                navigation(from);
            }
        } catch (error) {
            console.log(error?.response?.data);
        }
    };
    
    return (
        <div className="min-h-[680px] max-w-7xl mx-auto space-y-5 pb-10 px-2 lg:py-10 rounded-xl my-5 bg-[#005697] text-white">
            <div className="flex flex-col justify-center items-center py-5 space-y-10">
                <h3 className="py-2 lg:py-5 text-center lg:text-[55px] font-bold">
                    Вход
                </h3>
                <form className="flex flex-col gap-10 text-black" onSubmit={onSubmit}>
                    <input
                        className="text-[33px] placeholder:font-semibold font-sans px-6 py-3.5"
                        type="text"
                        placeholder="Логин"
                        name="username"
                    />
                    <input
                        className="text-[33px] placeholder:font-semibold font-sans px-6 py-3.5"
                        type="text"
                        placeholder="Пароль"
                        name="password"
                    />
                    <input
                        className="bg-white cursor-pointer text-black py-2 rounded-3xl border border-black font-semibold mt-5"
                        type="submit"
                        value="Войти"
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;
