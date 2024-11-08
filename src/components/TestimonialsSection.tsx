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
      className="w-full bg-white px-5 py-16 md:py-24 text-gray-800 dark:bg-slate-900"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-neutral-900 dark:text-white">
            What people are saying.
          </h1>
          <h3 className="text-xl md:text-2xl mb-8 md:mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          </div>
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
