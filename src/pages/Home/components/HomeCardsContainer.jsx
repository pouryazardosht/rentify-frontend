import { Link } from "react-router"
import arrowIcon from "../../../assets/icons/arrowIcon.svg"
import { useEffect, useState } from "react"
import api from '../../../service/api.config';
import HomeCard from "./HomeCard";

function HomeCardsContainer() {
    const [houses, setHouses] = useState([])
    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const res = await api.get("/house/list")
                setHouses(res.houses)
            }
            catch (error) {
                console.log(error.message);
            }
        }
        fetchHouses()
    }, [])
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
            <div>
                {houses.map((house) => (
                    <HomeCard key={house.id} id={house.id} title={house.title} />
                )
                )}
            </div>
        </div>
    )
}

export default HomeCardsContainer