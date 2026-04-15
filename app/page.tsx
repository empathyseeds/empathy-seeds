export default function Home() {
  return (
    <main className="pt-16 pb-12 space-y-20">

     {/* VIDEO SECTION */}
<section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="block w-full h-auto"
  >
    <source src="/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>
      
      {/* HERO SECTION */}
<section className="text-center mt-10 px-6 max-w-3xl mx-auto">

  <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-800">
    Helping Students Feel Understood,  
    Supported, and Confident
  </h1>

  <p className="mt-4 text-gray-600 text-base md:text-lg">
    A safe and confidential space for students and parents to share concerns, 
    understand emotions, and find the right direction forward.
  </p>

  <div className="mt-6 flex justify-center gap-4 flex-wrap">
    
    <a 
      href="/get-help" 
      className="bg-blue-500 text-white px-6 py-2 rounded-xl shadow-sm hover:bg-blue-600 transition"
    >
      Get Help
    </a>

    <a 
      href="/services" 
      className="border border-gray-300 px-6 py-2 rounded-xl hover:bg-gray-100 transition"
    >
      View Services
    </a>

  </div>

</section>

      {/* TRUST SECTION */}
<section className="text-center px-6 max-w-4xl mx-auto">

  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
    A Safe & Confidential Space
  </h2>

  <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
    Every concern shared is treated with empathy, care, and complete confidentiality.  
    Whether you are a student facing challenges or a parent seeking guidance,  
    you are not alone.
  </p>

  <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">

    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-medium text-gray-800">Confidential Support</h3>
      <p className="text-gray-600 mt-1">
        Your thoughts and concerns are kept private and respected.
      </p>
    </div>

    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-medium text-gray-800">Student-Focused</h3>
      <p className="text-gray-600 mt-1">
        Helping students manage emotions, stress, and personal growth.
      </p>
    </div>

    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-medium text-gray-800">Parent Guidance</h3>
      <p className="text-gray-600 mt-1">
        Supporting parents in understanding and guiding their children.
      </p>
    </div>

  </div>

</section>

{/* SERVICES SECTION */}
<section className="px-6 max-w-5xl mx-auto">

  <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
    How I Can Help
  </h2>

  <div className="mt-10 grid md:grid-cols-3 gap-6">

    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800">
        Student Counselling
      </h3>
      <p className="text-gray-600 text-sm mt-2">
        Support for emotional challenges, academic stress, confidence, and overall well-being.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800">
        Parent Guidance
      </h3>
      <p className="text-gray-600 text-sm mt-2">
        Helping parents understand their children better and build strong, supportive relationships.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800">
        Emotional & Personal Growth
      </h3>
      <p className="text-gray-600 text-sm mt-2">
        Building confidence, resilience, and emotional awareness for long-term growth.
      </p>
    </div>

  </div>

  <section className="mt-16 space-y-10">
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
        The Seeds We&apos;ve Sworn to Tend
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        To guide parents toward peaceful, joyful, mindful, and empathetic parenting through Emotional
        Intelligence. We believe in the holistic development of children, which leads them to become future
        generation leaders and empathetic souls. We are here for parents and children alike, helping them plant
        the foundational skills of empathy and emotional awareness in young minds.
      </p>
    </div>

    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
        Why Empathy Seeds? The Ancient Spark That Lit Our Path
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Every child is the leader of his or her own life and can make a significant difference in society through
        productive small actions. Thinking is an essential part of our everyday lives. A good thinker makes wise
        choices, takes sound decisions, and makes life successful in their own way.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Traditional systems or school systems do not focus on building thinking skills. Thinking is not an inborn
        talent; we need to develop that skill and practice it in our daily lives. Our life is a sequence of
        actions in the form of decisions; therefore, every action is a choice made or a decision taken. While
        traditional parenting coexists with traditional educational systems, education has evolved in the new
        world of technology. Consequently, our parenting must also evolve to meet the needs of the times. This is
        where Empathy Seeds comes in for new-age parents and children.
      </p>
    </div>
  </section>

  {/* FINAL CTA SECTION */}
<section className="mt-20 px-6 max-w-4xl mx-auto text-center">

  <div className="bg-blue-50 rounded-2xl py-10 px-6">

    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
      Take the First Step Towards Understanding & Growth
    </h2>

    <p className="mt-4 text-gray-600">
      Share your concerns in a safe and confidential space.  
      We are here to listen, understand, and support you.
    </p>

    <div className="mt-6">
      <a 
        href="/get-help" 
        className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600 transition"
      >
        Share Your Concern
      </a>
    </div>

  </div>

</section>

</section>

    </main>
  );
}
