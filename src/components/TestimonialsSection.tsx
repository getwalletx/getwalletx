import TestimonialCard from "./TestimonialCard";

type Testimonial = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // avatar: string | any;
  name: string;
  testimonial: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Anukuls",
    testimonial:
      "WalletX is the best solution for crypto users who want to transact without gas fees.",
  },
  {
    name: "Leo Jhon",
    testimonial:
      "Surely WalletX is about to rewrite history of the crypto worlds gas system with its gasless system.",
  },
  {
    name: "Nil Jhonson",
    testimonial:
      "No more gas fees confusion, just smooth transactions. WalletX is really helping bridge the gap for beginners.",
  },
  {
    name: "Dev Mukherji",
    testimonial:
      "WalletX removes the need for native tokens in DApps. This really opens up Web3 to non-technical users who don’t want to stress about maintaining gas fees!",
  },
  {
    name: "Rifat Ahmed",
    testimonial:
      "WalletX really seems to be solving a major issue for both users and developers in web3.",
  },
  {
    name: "Akash Rana",
    testimonial:
      "Tbh, you guys approach to covering gas fees is just what Web3 needs!",
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
                  // avatar={testimonial.avatar}
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
