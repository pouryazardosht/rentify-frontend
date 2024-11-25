import SearchBar from "./SearchBar"

function Banner() {
    return (
        <div className="flex items-center flex-col">
            <p className="text-h3 text-white">
                در <span className="text-primary">رنتیفای</span> دنبال چه ملکی هستید؟
            </p>
            <SearchBar />
        </div>
    )
}

export default Banner