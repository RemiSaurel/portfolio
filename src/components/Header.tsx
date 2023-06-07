function Header () {
    return <div className="font-bold">
        <div className="hidden sm:block absolute top-8 sm:left-[120px] lg:left-[212px] xl:left-[340px]">
            <a href="#home">rémi</a>
            <div className="absolute w-full bottom-0 -z-10 -right-1 h-2 bg-green-800 rounded"></div>
        </div>
        <div className="hidden sm:block absolute top-8 right-[120px] lg:right-[212px] xl:right-[340px]">
            <div className="flex gap-6">
                <div className="w-fit">
                    <a href="#home">
                        home
                    </a>
                    <div className="relative w-full bottom-2 -z-10 -right-2 h-2 bg-green-800 rounded"></div>
                </div>
                <div>
                    <a href="#skills">skills</a>
                    <div className="relative w-full bottom-2 -z-10 -right-2 h-2 bg-green-800 rounded"></div>
                </div>
                <div>
                    <a href="#projects">projects</a>
                    <div className="relative w-full bottom-2 -z-10 -right-2 h-2 bg-green-800 rounded"></div>
                </div>
                <div>
                    <a href="#education">education</a>
                    <div className="relative w-full bottom-2 -z-10 -right-2 h-2 bg-green-800 rounded"></div>
                </div>
            </div>
        </div>
    </div>;
}

export default Header;