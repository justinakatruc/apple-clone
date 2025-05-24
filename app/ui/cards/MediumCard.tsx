import Image from 'next/image';

interface MediumCardProps {
  appleIntel: boolean;
  descriptionPos: string;
  learnMore?: string;
  buy?: string;
  title: string;
  noTitle?: boolean;
  icon?: string;
  descriptions: string[];
  imageUrl: string;
}

function MediumCard({ appleIntel, descriptionPos, learnMore, buy, title, noTitle, icon, descriptions, imageUrl }: MediumCardProps) {
  return (
    <div className="relative container-w-md container-h-md cursor-pointer pt-12 pb-6 overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover object-bottom z-0"
        priority
      />

      {/* Overlay Content */}
      <div
        className={`relative z-10 h-full flex flex-col items-center ${
          descriptionPos === 'start'
        ? 'justify-start'
        : descriptionPos === 'between'
        ? 'justify-between'
        : descriptionPos === 'end'
        ? 'justify-end'
        : ''
        }`}
      >
        <div className="flex flex-col gap-3 items-center">
          {/* Title */}
          <div className="flex items-center gap-1">
        {icon && (
          <Image
            src={icon}
            alt={title}
            width={30}
            height={30}
            className="object-contain"
          />
        )}
        {!noTitle && (
          <h1 className="text-5xl font-bold text-gray-900">{title}</h1>
        )}
          </div>
          {/* Descriptions */}
          <div className="hide flex flex-col items-center text-center px-12">
        {descriptions.map((desc, index) => (
          <span key={index} className="text-2xl">
            {desc}
          </span>
        ))}
          </div>
          {/* Action Buttons */}
          <div className="flex gap-4">
        {learnMore && (
          <button className="bg-[#346fe6] text-white py-2 px-5 rounded-full hover:bg-[#3775f0] cursor-pointer">
            {learnMore}
          </button>
        )}
        {buy && (
          <button className="bg-none text-[#2e64ce] border border-[#2e64ce] py-2 px-5 rounded-full hover:bg-[#3775f0] hover:text-white cursor-pointer">
            {buy}
          </button>
        )}
          </div>
        </div>
        {/* Apple Intelligence Badge */}
        {appleIntel && (
          <span className="hide mb-8 text-lg mt-2 bg-gradient-to-r from-[#007aff] via-[#af52de] via-[#ff2d55] to-[#ff5e3a] bg-clip-text text-transparent font-[500]">
            Built for Apple Intelligence.
          </span>
        )}
      </div>
    </div>
  );
}

export default MediumCard;