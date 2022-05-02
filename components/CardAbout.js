import Image from "next/image";

function CardAbout(props) {
  const { image, subheading, text } = props;
  return (
    <div className="mx-auto max-w-sm w-[320px] p-5">
      <div className="text-center">
        <Image
          src={image}
          alt="about"
          width={184}
          height={157}
          // layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-[#008c8d] font-bold text-xl md:text-2xl text-center my-1 md:my-4">
        {subheading}
      </p>
      <p className="leading-7">{text}</p>
    </div>
  );
}

export default CardAbout;
