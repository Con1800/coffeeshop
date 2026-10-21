

const About = () => {
    return (
        <section className="container mx-auto">
            <div className="grid grid-cols-3 grid-rows-3 lg:mt-26 mt-16 px-0">
                <div className="bg-[#6f4e37] h-40 flex items-center justify-center">
                    <span className="text-white text-4xl tracking-wide">COFFEE</span>
                </div>
                <div className="bg-[#FFF8E7] h-40 row-start-2 col-start-2 flex items-center justify-center">
                    <span className="text-black text-4xl tracking-wider text-bold">SHOP</span>
                </div>

                <div className="bg-[#F8C8DC] h-40 row-start-3 col-start-3"></div>
                <div className="bg-[#FFF8E7] h-40 row-start-3 col-start-1">
                </div>

            </div>
            <section className="py-20 px-6 md:px-20 mt-26">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Optional small heading */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#6F4E37] mb-6">
                    Our Story
                    </h2>

                    {/* Main paragraph */}
                    <p className="text-[#4E342E] text-lg md:text-xl leading-relaxed md:leading-loose">
                    What started as brewing cups in our kitchen turned into late-night talks about opening our own little café. 
                    <span className="block mt-4 font-semibold">
                        Not for money. Not for fame. Just for fun.
                    </span>
                    <span className="block mt-4">
                        A place where friends could sit, relax, and feel at home.
                    </span>
                    </p>

                    {/* Optional cute accent line */}
                    <div className="mt-8 w-24 h-1 mx-auto bg-[#F8C8DC] rounded-full"></div>
                </div>
            </section>

            
        </section>
    )
   
}

export default About
