import searchIcon from '../../../assets/icons/search.svg';
function SearchBar() {
    return (
        <div className="flex items-center my-8">
            <div className="bg-white rounded-s-[64px] flex items-center py-5 gap-8 px-7 text-button-lg">
                <select className="select  max-w-xs bg-transparent ">
                    <option>تهران</option>
                    <option>شیراز</option>
                    <option>اصفهان</option>
                    <option>رشت</option>
                    <option>تبریز</option>
                </select>
                <select className="select w-full max-w-xs bg-transparent">
                    <option>نوع ملک</option>
                    <option>ویلا</option>
                    <option>آپارتمان</option>
                    <option>خانه ویلایی</option>
                </select>
                <select className="select w-full max-w-xs bg-transparent">
                    <option>نوع قرارداد</option>
                    <option>رهن</option>
                    <option>اجاره</option>
                </select>
            </div>
            <button
                className="py-8 px-7 bg-primary rounded-e-[64px] text-white text-button-s flex items-center hover:bg-shade1 gap-1">
                <img src={searchIcon} alt="search" />
                جستجو
            </button>
        </div >
    )
}

export default SearchBar