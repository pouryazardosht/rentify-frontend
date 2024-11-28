import { Link } from "react-router"
import arrowIcon from "../../../assets/icons/arrowIcon.svg"
function HomeCardsContainer() {
    return (
        <div className="mt-16">
            <div className="flex items-center justify-between">
                <p className="text-h3">
                    پر بازدید ترین ها هفته گذشته
                </p>
                <Link to="/houses" className="text-primary text-button-s flex items-center gap-2 hover:bg-tint6 px-4 py-3 rounded-lg">
                    مشاهده همه
                    <img src={arrowIcon} />
                </Link>
            </div>
        </div>
    )
}

export default HomeCardsContainer