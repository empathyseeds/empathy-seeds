export default function About() {
  return (
    <main className="pt-24 pb-12 px-6 max-w-5xl mx-auto space-y-16">
      {/* TOP SECTION: IMAGE + INTRO */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Snehal Patil More"
            className="w-[70%] max-w-sm h-auto rounded-2xl shadow-md"
          />
        </div>

        {/* INTRO */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Snehal Patil More
          </h1>

          <p className="mt-2 text-blue-600 font-medium">
            Educational Counselor | Emotional Well-being Coach | Parenting Expert
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Mrs. Snehal Patil More is a distinguished Educational Counselor and Career Guide dedicated to fostering
            academic and emotional growth. As an Emotional Well-being Coach and Parenting Expert, she specializes in
            supporting both parents and children within the formative 1-to-15 age group. As a mother of two sons, she
            brings a unique blend of professional expertise and firsthand parental insight to her practice, allowing
            her to connect deeply with the families she guides.
          </p>
        </div>
      </section>

      {/* ACADEMIC SECTION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Academic & Research Excellence
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Snehal&apos;s professional journey began in academia, where she served as a University Professor in the
          Department of Computer Science. Her contributions span the pillars of higher education: teaching,
          examination, assessment, and rigorous research.
        </p>

        <p className="text-gray-600 leading-relaxed">
          A certified & licenced Coach Practitioner in Emotional Intelligence! These certificates are approved by the
          ICF (International Coach Federation) & IAPCCT (International Association of Professional Coaches,
          Counselors and Therapists).
        </p>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-800 font-medium">Published Author</p>
          <p className="text-gray-600 text-sm mt-1">
            Co-authored a Computer Science textbook with a reputed international publishing house.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-800 font-medium">Researcher</p>
          <p className="text-gray-600 text-sm mt-1">
            Frequently presents her findings at National and International conferences and maintains a strong
            portfolio of publications in prestigious International Research Journals.
          </p>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Bridging Technology and Psychology
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Driven by a profound interest in child psychology and a zest for understanding the &quot;emotional world&quot; of
          children, Snehal transitioned her expertise toward school-level education. Her academic credentials reflect
          this multidisciplinary mastery:
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-sm space-y-2 text-gray-600">
          <p>Diploma in Child Psychology</p>
          <p>Bachelor of Education (B.Ed.)</p>
          <p>Master of Science in Computer Science</p>
          <p>Bachelor of Science in Computer Science</p>
        </div>
      </section>

      {/* PROFESSIONAL IMPACT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Professional Impact
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Snehal has solidified her practical expertise through an internship in Counseling Psychology with Podar
          International School and advanced certifications in Career Counseling. Her professional footprint includes
          impactful roles with:
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-sm text-gray-600 space-y-2">
          <p>Mentoria Pvt. Ltd. (Career Counselor)</p>
          <p>Army Public School, OTA Gaya (Career Counselor)</p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Personal Philosophy & Creative Pursuits
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Beyond her professional accolades, Snehal is a lifelong learner who believes in creating empathetic learning
          environments. She is a true connoisseur of the arts, finding inspiration in painting and photography. Her
          keen observational skills are further honed by exploring human psychology through diverse genres of cinema
          and real-life experiences.
        </p>

        <div className="bg-blue-50 p-6 rounded-2xl italic text-gray-700">
          &quot;I view myself as a knowledge-builder, dedicated to understanding the human psyche and nurturing the next
          generation with empathy and insight.&quot; - Snehal
        </div>
      </section>
    </main>
  );
}
