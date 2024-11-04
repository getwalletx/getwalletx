import TestimonialCard from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <TestimonialCard
          name="Alice Johnson"
          role="DeFi Enthusiast"
          content="WalletX has revolutionized my DeFi experience. No more worrying about gas fees!"
        />
        <TestimonialCard
          name="Bob Smith"
          role="dApp Developer"
          content="Integrating WalletX SDK into our dApp was a breeze. Our users love the gasless transactions!"
        />
        <TestimonialCard
          name="Carol Williams"
          role="Crypto Trader"
          content="As a frequent trader, WalletX has saved me a fortune in gas fees. Highly recommended!"
        />
      </div>
    </section>
  );
}
