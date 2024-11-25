import { NavLink } from "react-router"
import rentifyLogo from "../../public/rentify-logo.svg"

function Header() {
    return (
        <section className="text-white sticky flex items-center justify-between bg-slate-800">
            <div>
                <img src={rentifyLogo} alt="logo" />
            </div>
            <div className="flex items-center">
                <nav className="text-h6 flex items-center gap-6">
                    <NavLink to="/renting">
                        رهن و اجاره خانه
                    </NavLink>
                    <NavLink to="/renting">
                        مشاورین املاک
                    </NavLink>
                    <NavLink to="/blog">
                        بلاگ رنتی فای
                    </NavLink>
                    <NavLink to="/about">
                        درباره رنتی فای
                    </NavLink>
                </nav>
            </div>
            <div>
                <button>ورود|ثبت نام</button>
                <button>
                    ثبت آگهی رایگان
                </button>
            </div>
        </section>
    )
}

export default Header