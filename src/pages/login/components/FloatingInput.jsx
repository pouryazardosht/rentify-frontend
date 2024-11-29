//eslint-disable-next-line
function FloatingInput({ title, forTitle }) {
    return (
        <div className="relative w-full">
            <input type="text" id={forTitle} className="min-w-60 w-full bg-white block px-2.5 pb-2.5 pt-4  text-sm text-gray-900 bg-transparent rounded-2xl border-[1px] border-g8   focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label htmlFor={forTitle} className="absolute text-sm text-g5 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-4 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                {title}
            </label>
        </div>
    )
}

export default FloatingInput