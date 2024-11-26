import BannerCard from "./BannerCard"

// import bannercard1 from "../../../assets/images/BannerCard1.png"
// import bannercard2 from "../../../assets/images/BannerCard2.png"
// import bannercard3 from "../../../assets/images/BannerCard3.png"

function BannerCardsContainer() {
    return (
        <div className="flex items-center gap-8">
            <BannerCard image="bg-banner-card1" title="ویلا" />
            <BannerCard image="bg-banner-card2" title="آپارتمان" />
            <BannerCard image="bg-banner-card3" title="خانه ویلایی" />
        </div>
    )
}

export default BannerCardsContainer