import Image from "next/image";

function CardValue(props) {
  const { image, title, children } = props;
  return (
    <div className="mx-auto md:w-[320px] px-5 py-5 md:py-0">
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
      <p className="text-[#384359] font-bold text-lg text-center my-1 md:my-3">
        {title}
      </p>
      <p className="text-sm md:text-base leading-7 md:leading-7">{children}</p>
    </div>
  );
}

export default CardValue;
