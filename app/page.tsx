import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-16 pb-12 space-y-12">
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 md:left-auto md:right-auto md:mx-auto md:mt-8 md:w-auto md:max-w-5xl md:translate-x-0 md:px-8">
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

      <nav aria-label="Explore the site" className="flex flex-wrap justify-center gap-4 px-6">
        <Link
          href="/about"
          className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-600"
        >
          About
        </Link>
        <Link
          href="/articles"
          className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-600"
        >
          Articles
        </Link>
        <Link
          href="/stories"
          className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-600"
        >
          Stories
        </Link>
      </nav>

      <section className="px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Why Everything about Parenting, Relationship and Family? The Ancient Spark That Lit Our Path
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
            where Everything about Parenting, Relationship and Family comes in for new-age parents and children.
          </p>
        </div>
      </section>

    </main>
  );
}
