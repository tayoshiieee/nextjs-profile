import Image from "next/image";

function CardValue(props) {
  const { image, title, children } = props;
  return (
    <div className="mx-auto max-w-[320px] px-5 py-5 md:py-0">
      <div className="text-center">
        <Image
          src={image}
          alt="value1"
          width={184}
          height={157}
          // layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-[#384359] font-bold text-lg text-center my-3 tracking-wider">
        {title}
      </p>
      <p className="max-w-[320px] text-sm md:text-base leading-7">{children}</p>
    </div>
  );
}

export default CardValue;
