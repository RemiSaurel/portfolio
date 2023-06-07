function Lines() {
    return (
        <div className="hidden lines lg:block absolute h-full w-full">
            <div className="line w-1 h-full absolute bg-blue-900 lg:left-[140px] xl:left-[268px]"></div>
            <div className="line w-1 h-full absolute bg-blue-900 lg:right-[140px] xl:right-[268px]"></div>
            <div className="line w-full h-1 absolute top-20 bg-blue-900"></div>
            <div className="line"></div>
        </div>
    );
}

export default Lines;