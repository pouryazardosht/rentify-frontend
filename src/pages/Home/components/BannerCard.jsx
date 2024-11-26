import leftArrow from "../../../assets/icons/left arrow.svg";

//eslint-disable-next-line
function BannerCard({ image, title }) {
    return (
        <div className={`${image} flex flex-col justify-end  w-[376px] h-[360px] p-2 rounded-2xl`}>
            <div className="flex items-center justify-between px-4 py-3 gap-9 bg-white rounded-lg">
                <div>
                    <p className="text-h6 text-black">{title}</p>
                    <p className="text-body-1xs text-g6">+۱۰۰ ملک</p>
                </div>
                <button className="rounded-full bg-primary p-3 hover:bg-shade1">
                    <img src={leftArrow} alt="arrow" />
                </button>
            </div>
        </div>
    )
}

export default BannerCard