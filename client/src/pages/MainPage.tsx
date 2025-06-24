import HeroSection from "../components/HeroSection"
import Brands from "../components/Brands"
import ShowCase from "../components/ShowCase"

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <Brands />
      <ShowCase name="On Sale" filter_type="on_sale" />
      <ShowCase name="Top Selling" filter_type="top_selling" />


      <section className="w-full max-w-6xl mx-auto px-4 py-12 bg-gray-50 rounded-xl">
        <h2 className=" integral demibold text-4xl font-bold text-center mb-8 md:mb-12 text-black">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="flex w-full gap-5 flex-col md:flex-row md:flex-wrap ">
          <div className="mb-5 flex flex-col md:flex-row gap-5 w-full ">
            <div onClick={() => window.location.href = `/shop/Casual`}
              className={"relative h-64 rounded-xl overflow-hidden cursor-pointer w-full flex justify-around bg-white hover:scale-103 transition-transform duration-300"}
            >
              <img
                src="https://m.media-amazon.com/images/I/71BAtCZmsvL._UY1100_.jpg"
                alt='Casual style'
                className=" h-full object-cover duration-500 "
              />
              <div className="absolute bg-white bg-opacity-20  " />
              <div className="absolute top-6 left-6">
                <h3 className="text-xl font-bold text-black">
                  Casual
                </h3>
              </div>
            </div>

            <div
              onClick={() => window.location.href = `/shop/Formal`} className={"relative h-64 rounded-xl overflow-hidden cursor-pointer md:w-3/2 flex justify-around bg-white hover:scale-103 transition-transform duration-300"}
            >
              <img
                src='https://nagahomme.com/cdn/shop/files/MSU374-007_4.png?v=1745837089'
                alt='Formal style'
                className=" h-full object-cover  duration-500   "
              />
              <div className="absolute bg-white bg-opacity-20  " />
              <div className="absolute top-6 left-6">
                <h3 className="text-xl font-bold text-black">
                  Formal
                </h3>
              </div>
            </div>
          </div>

          <div className="mb-5 flex flex-col md:flex-row gap-5 w-full ">

            <div
              onClick={() => window.location.href = `/shop/Party`} className={"relative h-64 rounded-xl overflow-hidden cursor-pointer w-full flex justify-around bg-white hover:scale-103 transition-transform duration-300"}
            >
              <img
                src="https://i5.walmartimages.com/seo/HSMQHJWE-White-Collar-Shirt-Men-Mens-Cut-Dress-Shirts-Men-S-Summer-Casual-Top-Solid-Color-Fashion-Half-Sleeve-Button-Stand-Blouse-Silk-Short-Fo_baa60719-9581-4e8b-a333-f0bc36fa9033.d411a58106309a4c3a49e4f441502b62.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF&odnDynImageQuality=10&format=avif"
                alt='Party style'
                className=" h-full object-cover  duration-500  "
              />
              <div className="absolute bg-white bg-opacity-20 -hover:bg-opacity-30 transition-all " />
              <div className="absolute top-6 left-6">
                <h3 className="text-xl font-bold text-black">
                  Party
                </h3>
              </div>
            </div>

            <div
              onClick={() => window.location.href = `/shop/Gym`} className={"relative h-64 rounded-xl overflow-hidden cursor-pointer md:w-3/4 flex justify-around bg-white hover:scale-103 transition-transform duration-300"}
            >
              <img
                src="https://img.clevup.in/352617/trendy-mens-round-neck-half-sleeve-gym-tshirt72-1707827180931_SKU-5101_0.jpg?width=600&format=webp"
                alt='Gym style'
                className=" h-full object-cover  duration-500   "
              />
              <div className="absolute bg-white bg-opacity-20 -hover:bg-opacity-30 transition-all" />
              <div className="absolute top-6 left-6">
                <h3 className="text-xl font-bold text-black">
                  Gym
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainPage