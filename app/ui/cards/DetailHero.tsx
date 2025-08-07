interface DetailHeroProps {
  bannerText: string;
  itemName: string;
  buttonText: string;
  itemPrice: string;
  imageUrl: string[];
  primaryColor: string;
  secondaryColor: string;
}

function DetailHero({ bannerText, itemName, buttonText, itemPrice, imageUrl, primaryColor, secondaryColor }: DetailHeroProps) {
  console.log("colors", primaryColor, secondaryColor);
  return (
    <div style={{ backgroundColor: primaryColor }} className="flex items-center justify-center flex-col text-white">
      <div style={{ backgroundColor: secondaryColor }} className={`w-full text-center py-4`}>
        <p className="text-sm">{bannerText}</p>
      </div>
      <div className="w-[1500px] h-[900px] cursor-pointer overflow-hidden flex justify-center items-center">
        <div style={{ backgroundImage: `url(${imageUrl[0]})` }} className={`bg-cover bg-position-[center] w-full h-full cursor-pointer overflow-hidden flex flex-col items-center justify-between`}>
          <div className="items-center flex flex-col">
            <div className="flex flex-col gap-3 items-center mt-36">
              <h1 className="text-2xl font-semibold">{itemName}</h1>
            </div>
            <div className="w-[840px] h-[340px] cursor-pointer overflow-hidden flex justify-center items-center mt-[-120px]">
              <div style={{ backgroundImage: `url(${imageUrl[1]})` }}
                  className="bg-cover bg-position-[center] w-full h-full cursor-pointer overflow-hidden">
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-40">
            <div className="flex flex-col items-center">
              <button className="bg-[#346fe6] text-white py-2 px-4 rounded-full hover:bg-[#3775f0] cursor-pointer">{buttonText}</button>
            </div>
            <span className="text-lg mt-2 font-semibold">
              {itemPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailHero;