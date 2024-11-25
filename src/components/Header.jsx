import { Link, NavLink } from "react-router"
import plusIcon from "../assets/icons/plus.svg"

function Header() {
    return (
        <section className="text-white flex items-center justify-between z-10">
            <Link to="/">
                <img src="/rentify-logo.svg" alt="logo" />
            </Link>

            <nav className="text-h6 flex items-center gap-6 ">
                <NavLink to="renting">رهن و اجاره خانه</NavLink>
                <NavLink to="renting">مشاورین املاک</NavLink>
                <NavLink to="blog">بلاگ رنتی فای</NavLink>
                <NavLink to="about">درباره رنتی فای</NavLink>
            </nav>
            <div className="flex items-center gap-4">
                <button>ورود|ثبت نام</button>
                <button className="bg-primary rounded-lg px-2 py-3 hover:bg-shade1 flex items-center gap-2">
                    <img src={plusIcon} alt="pluse" />
                    ثبت آگهی رایگان
                </button>
            </div>
        </section>
    )
}

export default Header