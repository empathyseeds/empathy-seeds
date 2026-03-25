import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="pt-24 pb-12 px-6 max-w-4xl mx-auto space-y-12">

      {/* TITLE */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-600">
          We’re here to listen and support you. Reach out to us through the options below.
        </p>
      </section>

      {/* CONTACT BLOCKS */}
      <section className="space-y-6">

        {/* COLLABORATION */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <p className="text-gray-700">
            For collaborations and integrated programmes at your institute / organisation, write to us at:
          </p>
          <a href="mailto:sales@empathyseeds.com" className="block mt-2 text-blue-600 font-medium hover:underline">
            sales@empathyseeds.com
          </a>
        </div>

        {/* COUNSELLING */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <p className="text-gray-700">
            For individual counselling, write to us at:
          </p>
          <a href="mailto:counselling@empathyseeds.com" className="block mt-2 text-blue-600 font-medium hover:underline">
            counselling@empathyseeds.com
          </a>
        </div>

        {/* GENERAL QUERY */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <p className="text-gray-700">
            For general queries, write to us at:
          </p>
          <a href="mailto:contact@empathyseeds.com" className="block mt-2 text-blue-600 font-medium hover:underline">
            contact@empathyseeds.com
          </a>
        </div>

      </section>

      {/* SOCIAL MEDIA */}
      <section className="text-center space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Connect With Us
        </h2>

        <div className="flex justify-center gap-10">

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/empathy_seeds"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-600 hover:scale-105 transition"
          >
            <FaInstagram size={20} />
            Instagram
          </a>

          {/* FACEBOOK */}
          <a
            href="https://facebook.com/educlaritycounsellor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:scale-105 transition"
          >
            <FaFacebook size={20} />
            Facebook
          </a>

        </div>
      </section>

    </main>
  );
}