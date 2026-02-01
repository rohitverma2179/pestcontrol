import Image from 'next/image';
const services = [
  {
    title: "Termite Pipes For New Construction",
    tagline: "Jindagi Bhar - Zero Deemak Fikar!",
    badge: ["Highly Recommended", "Popular Choice"],
    points: [
      "Permanent Life Time Protection from Termites",
      "No Future Maintenance Needed",
      "Very Affordable Prices",
      "Super-fast Recharging",
      "Compatible to all Construction Designs"
    ],
    offer: "12% Discount (For next 10 Days Booking ONLY)",
    image: "/images/termite-protection-treatment-service.png"
  },
  {
    title: "Drill Fill Seal Termite Treatment",
    tagline: "Deemak Jad Se Khatam!",
    badge: ["Most Purchased", "Most Popular For Prevention"],
    points: [
      "Rootcause Solution – Colony Elimination Technique",
      "Recommended for Reconstruction / Remodeling",
      "Integrated Method (Wall, Furniture, Soil & Pipe)",
      "Multi-Year Warranty",
      "Totally Affordable Prices"
    ],
    offer: "8% Discount (For next 10 Days Booking ONLY)",
    image: "/images/professional-bed-bug-removal.png"
  },
  {
    title: "Soil Treatment",
    tagline: "Pehle Din Se Suraksha!",
    badge: ["Time Tested"],
    points: [
      "Traditionally Most Proven Process",
      "Multi Year Plus Warranty",
      "Applicable for All Ground Based Construction",
      "IS 6313 Recommended",
      "Residual Effect Method",
      "Affordable Prices"
    ],
    offer: "5% Discount (For next 10 Days Booking ONLY)",
    image: "/images/pest-control-technician-expert-service.png"
  },
  {
    title: "Termite Pipes Refill Service",
    tagline: "Recharge Your Defenses",
    badge: [],
    points: [
      "Superfast Recharging",
      "Zero Chemical Smell",
      "30 Minutes Me Kaam Khatam",
      "Post Refill Warranty",
      "Custom Packages Available"
    ],
    offer: "8% Discount (For next 10 Days Booking ONLY)",
    image: "/images/certified-pest-control-specialist.png"
  },
  {
    title: "Spot Treatment",
    tagline: "One Time Solution",
    badge: [],
    points: [
      "Quick Treatment (Small Scale)",
      "Limited to Single Furniture",
      "Recommended for External Furniture",
      "Oil Based Solution"
    ],
    offer: "No Current Offer",
    image: "/images/cockroach-pest-management-system.png"
  },
  {
    title: "Inspection & Consultation Visit",
    tagline: "Expert Guidance",
    badge: [],
    points: [
      "Prevention Report",
      "Deep Assessment",
      "Custom Treatment Plan"
    ],
    offer: "Consultation Based",
    image: "/images/mosquito-control-prevention-safety.png"
  }
];


const Team = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="sub-title">Our Solutions</span>
          <h2 className="section-title">Termite Solutions Offered By fit India</h2>
          <p className="max-w-2xl mx-auto text-text-light">
            Scientifically proven termite protection solutions for new and existing properties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all h-full flex flex-col"
            >
              <div className="relative h-48 w-full group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-primary font-semibold mb-3">
                  {service.tagline}
                </p>

                {service.badge.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.badge.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="space-y-2 text-sm text-text-light mb-5 flex-1">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-green-50 text-green-700 text-sm font-bold p-3 rounded-lg text-center mt-auto">
                  {service.offer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
