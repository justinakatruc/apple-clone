function IphoneHero() {
  return (
    <div className="bg-[url(/hero_iphone_family__fuz5j2v5xx6y_mediumtall_2x.jpg)] bg-size-[1300px] bg-position-[center] w-svw container-h-lg cursor-pointer pt-16 overflow-hidden">
      <div className="h-full items-center flex flex-col gap-3">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-5xl font-bold text-gray-900">iPhone</h1>
          <div className="flex flex-col items-center">
            <span className="text-2xl">Meet the iPhone 16 family.</span>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#346fe6] text-white py-2 px-5 rounded-full hover:bg-[#3775f0] cursor-pointer">Learn More</button>
            <button className="bg-none text-[#2e64ce] border border-[#2e64ce] py-2 px-5 rounded-full hover:bg-[#3775f0] hover:text-white cursor-pointer">Shop iPhone</button>
          </div>
        </div>
        <span className="mb-12 text-lg mt-2 bg-gradient-to-r from-[#007aff] via-[#af52de] via-[#ff2d55] to-[#ff5e3a] bg-clip-text text-transparent font-[500]">
          Built for Apple Intelligence.
        </span>
      </div>
    </div>
  );
}

export default IphoneHero;