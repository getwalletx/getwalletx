import { TeamMember } from "./TeamMember";

export function TeamSection() {
  return (
    <section
      id="team"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:bg-gray-800 py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <TeamMember
            name="John Doe"
            role="Founder & CEO"
            image="/placeholder.svg?height=200&width=200"
          />
          <TeamMember
            name="Jane Smith"
            role="CTO"
            image="/placeholder.svg?height=200&width=200"
          />
          <TeamMember
            name="Mike Johnson"
            role="Head of Product"
            image="/placeholder.svg?height=200&width=200"
          />
          <TeamMember
            name="Sarah Brown"
            role="Lead Developer"
            image="/placeholder.svg?height=200&width=200"
          />
        </div>
      </div>
    </section>
  );
}
