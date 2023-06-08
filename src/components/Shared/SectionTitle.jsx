const SectionTitle = ({ title, children }) => {
    return (
        <div className="my-8 text-center">
            <h2 className="uppercase text-3xl mb-5 pb-3 font-bold relative inline-block text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                {title}
                <span className="absolute h-1 bottom-0 left-0 w-full h-px bg-gradient-to-r from-pink-500 to-purple-500"></span>
            </h2>
            <div className="text-2xl text-purple-400 font-semibold">
                {children}
            </div>
        </div>
    )
}
export default SectionTitle;