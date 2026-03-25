"use client";

export default function Articles() {
  const articles = [
    {
      title: "The Architecture Of Our Thoughts",
      content: `Empathy Seeds promotes parenting with a spiritual and holistic approach.

Stop saying "Think Positive"; Practice "Thinking Real."

Children should learn to seek the truth and find optimal solutions that are applicable to real-time problems.

Our consciousness is what distinguishes us from other animals. While there are many ways in which humans differ from animals, the most significant is the brain. Human brains have the unique ability to think, reason, solve problems, perform complex tasks, communicate effectively, analyze, and more.

A child's thinking ability can be shaped if we direct their thoughts in the right way. A child's development is largely influenced by their ability to think. Making optimal decisions in life can be achieved through logical and critical thinking. Strong thinking skills help improve academic excellence as well as enhance vital life skills.

Parenting is a skill, and everyone who becomes a parent, or wants to become one, needs to acquire it. Like any other skill development program, we should learn and develop our parenting techniques to experience stress-free parenting, remembering that there is no such thing as "perfect parenting."

Every individual is unique, and because every child has different emotional needs and every parent has unique life experiences, every parent-child relationship requires personalized guidance.

Empathy Seeds provides a structure where parenting grows through uniqueness and unity. Our goal is to help you protect your individual identity while developing your parenting skills, which we achieve by nurturing your emotional intelligence.

From the decision to become a parent to developing that tiny human into a socially accepted and successful individual, the journey is a series of multiple tasks, choices, and milestones.

It involves major aspects of a parent's life, taking them on a journey guided by their emotions. Without learning parenting skills, parents often feel frustrated, lost, stressed, and burdened most of the time.

Raising another human is a very precious, valuable, and responsible undertaking. Therefore, we should learn parenting skills so that we can contribute effectively toward society and the universe.`,
    },
    {
      title: "Family: The Quiet Soil Where We First Take Root",
      content: `A child's first educational institution is their family. The family is where a child learns the most important life lessons. Children go through various experiences, such as dealing with different emotions, learning habits, behavioral changes, mannerisms, ethics, rituals, routines, and beliefs. They also learn about cultural aspects, building relations, understanding different aspects of human behavior, daily living challenges, language, and much more. Learning about life is made easier by observing and imitating family members.

Therefore, parenting plays the most significant role in a child's life. Parenting is a skill that requires patience and practice. It is an acquired skill that can be learned over time; it is a continuous process that should be improved by learning as you go.

Consciousness is a crucial component of parenting; hence the term "Conscious Parenting". Consciousness is required because it allows parents to be completely aware of their own emotions, behaviors, past experiences, present actions, and thought processes. By taking a mindful approach, parents gain a better understanding of their children. This fosters a healthy relationship between a child and their parent, which ultimately promotes healthy child development.`,
    },
    {
      title: "Holistic Development for Children: Own True Shape",
      content: `In today's fast-paced world of technology, it is easy to lose sight of our children's well-being. Children are often struggling with homework, assignments, school activities, extra-curricular activities, tuitions, sports, family engagements, and other commitments. In addition to this, school examinations and competitive tests keep children stressed and tired.

Children often forget to take care of themselves. But what if there were a way to feel more energized, focused, and healthier without adding extra stress to the mix?

To truly thrive and achieve overall development, we need a holistic approach, one that includes mindful eating, stress management, proper rest, and intentional self-care. These elements work together to support both a child's physical and mental health, which is essential in today's world.

A healthy child is a productive human.

How can we achieve this?

- Morning water ritual: A simple hydration ritual to wake up the digestive system.
- Healthy morning drink: Milk, herbal tea, or fresh juice.
- Breakfast: A light, high-protein meal.
- Balanced Meals: Focus on meals that create energy and provide balanced nutrition, carbohydrates, proteins, minerals, vitamins, iron, etc.
- Moderation: Reduce sweet or salty food items, such as chocolates and chips.
- Sleep Routine: Maintain 7-8 hours of sleep for better hormonal balance and physical rest.
- Weekend Plan: Develop a plan to achieve effective time management.
- Weekly Progress Check: Regularly review your goals and growth.`,
    },
    {
      title: "Parenting Challenges in the Indian Context",
      content: `- Sustaining traditional values: Balancing respect for elders with achieving academic excellence.
- Dealing with modern realities: Managing digital addiction and other contemporary issues.
- Nuclear family isolation: Addressing the lack of a traditional support system.
- The need for Emotional Intelligence: Navigating cut-throat competition for school admissions, Olympiads, and grades.
- The "Hurdle-Free" urge: Managing the desire of Indian parents to clear every obstacle from their child's path.
- Resilience and setbacks: Helping children who are low in resilience learn to handle setbacks.
- Pressure on mothers: Supporting working mothers who often feel the entire burden of "Perfect Parenting".
- Reactive parenting: Addressing stressful work hours that lead to angry or frustrated parenting.
- Self-Regulation: Helping parents regulate their own emotional health before regulating their child's.
- The Clash of Generations: Breaking the cycle of "Control" and replacing it with "Connection".`,
    },
    {
      title: 'The "Calm-Parent" Logic',
      content: `In India, "IQ" has been the priority for 50 years. However, parents are beginning to realize that a child with a 99% score but zero stress-management skills will struggle in the real world.

A child's brain cannot learn when it is in a state of fear or stress. Teaching parents Emotional Intelligence will help children learn and succeed in a healthy way. Parenting is a skill; everyone who becomes a parent, or wants to become a parent, needs to acquire this skill. Like any other skill development program, we should learn and develop our parenting skills to ensure stress-free parenting.

According to "Calm-Parent" logic, a child's brain cannot learn effectively when it is in a state of fear or stress. Therefore, teaching parents emotional intelligence will help the child learn and succeed in a healthy way.`,
    },
  ];

  return (
    <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Articles & Insights
        </h1>
      </section>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => {
          const preview = `${article.content.substring(0, 150)}...`;

          return (
            <details
              key={article.title}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition duration-300"
            >
              <summary className="list-none cursor-pointer touch-manipulation [&::-webkit-details-marker]:hidden">
                <h2 className="font-semibold text-gray-900 text-lg leading-snug">
                  {article.title}
                </h2>

                <div className="mt-4 text-gray-700 text-sm leading-relaxed group-open:hidden">
                  {preview.split("\n").map((line, index) => (
                    <span key={`${article.title}-preview-${index}`} className="block mb-2">
                      {line}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-gray-700 text-sm leading-relaxed hidden group-open:block">
                  {article.content.split("\n").map((line, index) => (
                    <span key={`${article.title}-full-${index}`} className="block mb-2">
                      {line}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-blue-600 text-sm font-medium hover:underline">
                  <span className="group-open:hidden">Read More</span>
                  <span className="hidden group-open:inline">Show Less</span>
                </div>
              </summary>
            </details>
          );
        })}
      </section>
    </main>
  );
}
