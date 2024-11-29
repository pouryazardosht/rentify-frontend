import { Link } from "react-router";
import darkLogo from "../../assets/darkLogo.svg";
import FloatingInput from "./components/FloatingInput";
import loginPic from "../../assets/images/login pic.png";
import { useState } from "react";
function Login() {
    const [isOwner, setIsOwner] = useState(true);
    return (
        <section className="bg-tint6 flex items-center p-4 justify-evenly">
            <div
                className="bg-white rounded-2xl flex flex-col items-center justify-center py-5 px-20 h-[calc(100vh-2rem)]">
                <Link className="rounded-xl p-2 hover:bg-tint6" to='/'>
                    <img src={darkLogo} alt="logo" />
                </Link>
                <p className="text-h3 mt-10 ">
                    ورود | ثبت نام
                </p>
                <div className="flex flex-col items-center gap-4 mt-8">
                    <div className="w-full flex items-center bg-g10 text-g5 rounded-2xl p-1">
                        <button
                            onClick={() => {
                                setIsOwner(true);
                            }}
                            className={(isOwner ? "bg-white text-black" : "") + " w-2/4 py-3 rounded-xl"}>
                            مالک | مستاجر
                        </button>
                        <button
                            onClick={() => {
                                setIsOwner(false);
                            }}
                            className={(!isOwner ? "bg-white text-black" : "") + " w-2/4 py-3 rounded-xl"}>
                            آژانس املاک
                        </button>
                    </div>
                    <div className="flex flex-col items-center gap-6 md:flex-row">
                        <FloatingInput
                            title="نام"
                            forTitle="fName"
                        />
                        <FloatingInput
                            title="نام خانوادگی"
                            forTitle="lName" />
                    </div>
                    {!isOwner && <FloatingInput title="نام دفتر" />}
                    <FloatingInput
                        title="تلفن همراه"
                        forTitle="phoneNumber"
                    />
                    <div className="flex items-center gap-2 w-full">
                        <input
                            className="accent-primary appearance-auto w-4 h-4 border-[1px] border-g6 checked:border"
                            id="conditions"
                            type="checkbox"
                        />
                        <label className="text-g6 text-caption-lg" htmlFor="conditions">
                            با قوانین
                            <Link className="text-primary hover:text-shade1" to='/'> رنتیفای </Link>
                            موافق هستم
                        </label>
                    </div>
                    <button
                        className="bg-primary text-white w-full py-3 hover:bg-shade1 disabled:bg-g10 rounded-lg mt-8">
                        تایید و دریافت کد
                    </button>
                </div>
            </div>
            <div className="hidden lg:block">
                <img src={loginPic} alt="login" />
            </div>
        </section>
    )
}

export default Login