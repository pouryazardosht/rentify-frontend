import housePic from "../../../assets/images/housepic.png";
import locationPoint from "../../../assets/icons/locationPoint.svg"
import tomanIcon from "../../../assets/icons/tomanIcon.svg";
import { Link } from "react-router";

function HomeCard({ id, title, mortgageAmount, rentAmount, address, kind }) {

    return (
        <Link to={"/house/" + id} className="rounded-2xl bg-white flex flex-col hover:scale-[0.98] active:scale-[0.97]">
            <img className="rounded-t-2xl" src={housePic} alt="pic" />
            <div className="px-4 py-3 flex flex-col items-start gap-3">
                <div className="flex items-center gap-2">
                    <p
                        className={(
                            kind === "خانه ویلایی" ? "bg-[#D67114]" :
                                kind === "آپارتمان" ? "bg-success" :
                                    kind === "ویلا" ? "bg-shade2" : "")
                            + " text-[14px] font-medium text-white rounded-xl py-1 px-2"
                        }>
                        {kind}
                    </p>
                    <div className="flex items-center gap-1">
                        <img src={locationPoint} alt="locationPoint" />
                        <p className="text-g3 font-light text-[15px]">
                            {address}
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-sm">{title}</p>
                </div>
                <div className="flex items-center bg-g10 text-[16px] p-1 rounded-lg gap-7">
                    <div className="flex items-center gap-2">
                        <p>
                            رهن
                        </p>
                        <div className="bg-white rounded-md p-2 flex justify-center gap-[3px] items-center text-xs">
                            <p>
                                {mortgageAmount.toLocaleString()}
                            </p>
                            <img src={tomanIcon} alt="toman" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p>
                            اجاره
                        </p>
                        <div className="bg-white rounded-md p-2 flex items-center justify-center gap-[3px] text-xs">
                            <p>
                                {rentAmount.toLocaleString()}
                            </p>
                            <img src={tomanIcon} alt="toman icon" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default HomeCard