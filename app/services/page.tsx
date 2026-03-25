export default function Services() {
  const services = [
    "Parenting guidance for children aged 1 to 13 years.",
    "Career guidance for students from 8th to 12th grade.",
    "Guidance on personality development for students from 8th to 12th grade.",
    "Educational guidance to improve study habits and achieve academic improvement.",
    "Guidance to improve the Emotional Intelligence of both children and parents.",
    "Guidance to improve thinking abilities.",
    "Guidance on raising strong-willed children.",
    "Guidance for parents regarding their own emotional health.",
    "Strategic parenting for full-time working parents.",
    "Seminars for school children regarding overall development and well-being.",
    "Guidance on conscious parenting and positive discipline.",
    "Calm parenting techniques through Emotional Intelligence."
  ];

  return (
    <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto space-y-12">

      {/* TITLE */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Services – A Harvest Of Help
        </h1>
      </section>

      {/* SERVICES GRID */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 
                       hover:bg-blue-50 hover:shadow-md hover:border-blue-200 
                       transition duration-300 cursor-pointer"
          >
            <p className="text-gray-700 text-sm leading-relaxed">
              ✓ {service}
            </p>
          </div>
        ))}

      </section>

    </main>
  );
}