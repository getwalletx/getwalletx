import TestimonialCard from "./TestimonialCard";
import avatar from "../assets/test.jpg";

type Testimonial = {
  avatar: string;
  name: string;
  testimonial: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Nil Jhonson",
    avatar: `${avatar.src}`,
    testimonial:
      "No more gas fees confusion, just smooth transactions. WalletX is really helping bridge the gap for beginners.",
  },
  {
    name: "Stevie Tifft",
    avatar: `${avatar.src}`,
    testimonial:
      "WalletX is removing one of the biggest headaches in crypto by eliminating gas fees.",
  },
  {
    name: "Rifat Ahmed",
    avatar: `${avatar.src}`,
    testimonial:
      "WalletX really seems to be solving a major issue for both users and developers in web3.",
  },
  {
    name: "Kenzie Edgar",
    avatar: `${avatar.src}`,
    testimonial:
      "It’s amazing how WalletX removes the need for native tokens in DApps. ",
  },
  {
    name: "Stevie Tifft",
    avatar: `${avatar.src}`,
    testimonial:
      "Now, with WalletX, we can finally transact without worrying making this a big step forward for broader Web3 adoption.",
  },
  {
    name: "Kenzie Edgar",
    avatar: `${avatar.src}`,
    testimonial: "I love that WalletX lets you do gasless transactions ",
  },
];

const TestimonialsSection = () => {
  const chunkSize = Math.ceil(testimonials.length / 3);
  const columns = [
    testimonials.slice(0, chunkSize),
    testimonials.slice(chunkSize, chunkSize * 2),
    testimonials.slice(chunkSize * 2),
  ];

  return (
    <div
      id="testimonial"
      className="w-full bg-white px-5 py-10 sm:py-10  text-gray-800 dark:bg-slate-900"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl  sm:text-4xl font-bold mb-12 text-center">
            <i className="text-base sm:text-lg font-normal">
              What our User&apos;s have to say about us
            </i>
            <br />
            Testimonials
          </h2>
          
        </div>

        <div className="-mx-3 md:flex items-start">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="px-3 md:w-1/3">
              {column.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  avatar={testimonial.avatar}
                  name={testimonial.name}
                  testimonial={testimonial.testimonial}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
