export default function Services() {
  const services = [
    "Import Services",
    "Export Services",
    "Logistics & Distribution",
    "Business Consultation",
  ];

  return (
    <section id="services" className="section">
      <h2 className="text-3xl text-center mb-10">Our Services</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="card text-center">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}