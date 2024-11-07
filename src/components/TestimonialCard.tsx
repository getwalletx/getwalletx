import Image, { StaticImageData } from "next/image";

type TestimonialCardProps = {
  avatar: string | StaticImageData;
  name: string;
  testimonial: string;
};

const TestimonialCard = ({
  avatar,
  name,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <div className="w-full mx-auto rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 text-gray-800 dark:text-gray-200 font-light mb-6">
      <div className="w-full flex mb-4 items-center">
        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
          <Image
            src={avatar}
            alt={name}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-sm uppercase text-gray-600 dark:text-gray-300">
            {name}
          </h6>
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm leading-tight">
          <span className="text-lg leading-none italic font-bold text-gray-400 dark:text-gray-500 mr-1"></span>
          {testimonial}
          <span className="text-lg leading-none italic font-bold text-gray-400 dark:text-gray-500 ml-1"></span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
