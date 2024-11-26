import BannerCard from "./BannerCard"

// import bannercard1 from "../../../assets/images/BannerCard1.png"
// import bannercard2 from "../../../assets/images/BannerCard2.png"
// import bannercard3 from "../../../assets/images/BannerCard3.png"

function BannerCardsContainer() {
    return (
        <div className="flex justify-center ">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                <BannerCard image="bg-banner-card1" title="ویلا" />
                <BannerCard image="bg-banner-card2" title="آپارتمان" />
                <BannerCard image="bg-banner-card3" title="خانه ویلایی" />
            </div>
        </div>
    )
}

export default BannerCardsContainer