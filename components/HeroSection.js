const { default: Image } = require("next/image");
import image1 from "../public/img/nft_1.png";
import image2 from "../public/img/nft_2.png";
function HeroSection() {
    return (
        <section className="pt-36 md:pt-0 md:h-screen">
            <div className="container h-full grid grid-cols-1 gap-y-5 md:gap-y-0 md:grid-cols-[25%,auto,25%] gap-x-10 xl:gap-x-0 text-white place-items-center">
                <div className="-rotate-3 order-2 md:order-[unset]">
                    <div className="w-[75%] mx-auto md:w-full">
                        <Image src={image1} alt="Nft" width="512" height="512" />
                    </div>
                </div>
                <div className="text-center flex flex-col items-center justify-center order-1 md:order-[unset] mb-8 md:mb-0">
                    <h1 className="mb-8 text-5xl font-bold text-white uppercase md:text-4xl lg:text-6xl">
                        Mutant Ape Solana Club
                    </h1>
                    <button className="uppercase py-2.5 px-8 bg-secondary border border-secondary hover:bg-black duration-150 hover:text-secondary text-white text-lg font-bold">Mint Now</button>
                </div>

                <div className="rotate-3 order-3 md:order-[unset] mt-8 md:mt-0">
                    <div className="w-[75%] mx-auto md:w-full">
                        <Image src={image2} alt="Nft" width="512" height="512" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
