"use client";

type Story = {
  title: string;
  content: string;
};

export default function Stories() {
  // Add your stories here (same format as Articles).
  const stories: Story[] = [
    {
      title: "The Ocean Within",
      content: `Sometimes, I still see that little girl inside me who looked at everything with curiosity, always lost in her own thoughts. Even though she was born into a well-to-do family, she was always searching for something. Despite being surrounded by people, she always felt a profound sense of loneliness.

Parents, siblings, uncles, friends - there were many people in her life. Since she always achieved top grades in school, she was a favorite among her teachers. Yet, she constantly felt that no one would truly love or understand her. She always wished for someone who could feel the depth of the ocean of emotions surging within her soul.

As she grew older, the need for someone to understand her feelings became more prominent, and her desire for love grew stronger. Her happiness began to depend more on others making her happy than on her own internal life. As the years passed, the void of loneliness in her mind grew even larger. Among the new friends and acquaintances she met, she was always searching for that one person who would love her just the way she wanted.

Then one day, by a stroke of fate, a boy stood before her. She felt that this boy would finally understand her and her emotional world. Because she was looking at him through the lens of her own desires, she felt his every action was exactly what she had wished for. She believed she had found her "right person" - someone in whose life she would be the priority. She decided to marry him and moved far away from home. This was the emotional world of that little girl until marriage. I was now trying to build a life with a man of my own choice.

Within just a few days of marriage, however, I began to feel that loneliness again. My husband's love didn't seem to reach me. On paper, my life seemed to be going perfectly well. I couldn't understand why, even though my husband was a good person, my loneliness would not leave me. I shared my feelings with him and tried to establish a dialogue, but the emptiness remained.

Suddenly, I realized I was pregnant. It felt strange; I thought, "My own emotional world is still so confused, how will I take care of another soul?". After the birth of my child, I realized that I was no longer just on the side of receiving love, but on the side of giving it. I wanted to give my child so much love. A conflict began in my mind: on one side was my own hunger for love, and on the other was my desire as a mother to fulfill my child's hunger for love. In the struggle between these opposing emotions, my emotional state suffered. My love for my child was as vast as the sky, yet a deep void remained from my own unmet needs.

As days passed, I realized that my baby loved me unconditionally. That thought comforted me. I felt that, finally, there was someone in whose life I was the priority. Someone loved me completely. But this was merely a temporary balm for the wounds in my heart. The loneliness still peeked through occasionally, and my head would spin with intrusive thoughts. I was suffering immensely, wondering why my mind could not find peace when everything in life seemed "fine".

Then one day, I sat down and reviewed my entire life, starting from childhood. I realized that for all these years, I had expected love and happiness to come from others. I had been searching for happiness outside of myself and, most importantly, I had neglected my own soul. My happiness, my joy, and my love were within me all along, but I had ignored them. The day I realized this, my search ended. I understood that I am complete within myself. I do not need anyone else's validation to feel whole.

The little girl who was once lost, searching for an "ocean of emotions" in others, finally found that ocean within herself. I started loving myself, attending to my own needs, and giving myself the priority I once expected from others. My loneliness didn't vanish because the world changed; it vanished because I changed the way I looked at myself. Now, I am not just a mother or a wife hungry for love; I am a woman who is a source of love for herself and everyone around her.`,
    },
    {
      title: "The Awakening of Compassion",
      content: `Arin, my six-year-old son, has always been a meat lover; he simply craves the taste. Recently, he joined me on a trip to the local butcher shop for the first time. He was buzzing with excitement, thrilled not only by the prospect of buying meat but by the grown-up responsibility of being allowed to accompany me.

However, the moment we stepped into the shop, his demeanor shifted. As he watched and observed the environment, his joy evaporated. Standing before the counter, he looked visibly uncomfortable. I watched his body language change - his head seemed heavy with questions, and his face was clouded with a sudden, deep sadness. I was taken aback; I initially assumed the metallic smell of blood or the raw environment was simply overwhelming for him.

We bought the meat and began our ride home on the bike. We hadn't gone far when Arin spoke, his voice firm: "I will never eat meat again."

I was shocked. "Why, baby?" I asked, surprised that such a dedicated meat-lover would make such a claim.

"I saw them take the lives of the sheep," he replied softly. "I felt the sheep's hurt and pain. I don't like the idea of hurting them just so we can enjoy a meal. Mumma, we shouldn't eat mutton because the sheep suffers. How can we be happy by killing them? It's bad manners."

I was speechless. As a mother, part of me wasn't ready to see him display such heavy maturity at such a tender age. While I struggled to find the "perfect" response in that moment, my heart swelled with pride. I was witnessing his thoughtfulness, his compassion, and his deeply empathetic soul.

I took a breath and said, "Arin, it makes me so happy to see how thoughtful and kind you are. Showing empathy toward animals is a beautiful sign of humanity. For now, take your time and listen to your heart. You are still young, and if you change your mind in the future, that is perfectly okay. We grow through our experiences, and our opinions can change as we learn. Our thoughts should flow with life and always remain true to who we are."

Children naturally absorb behaviors and habits from the world around them. Depending on the environment we provide, they learn how to think and act. This experience reminded me that providing a nurturing, thought-provoking environment from early childhood is essential for raising a truly conscious human being.`,
    },
  ];

  return (
    <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Stories
        </h1>
      </section>

      {stories.length === 0 ? (
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="font-semibold text-gray-900 text-lg leading-snug">
              Stories coming soon
            </h2>
            <p className="mt-4 text-gray-700 text-sm leading-relaxed">
              We&apos;ll share real stories here soon. Send me your stories and I&apos;ll add
              them in the same format as the Articles page.
            </p>
          </div>
        </section>
      ) : (
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stories.map((story) => {
            const preview = `${story.content.substring(0, 150)}...`;

            return (
              <details
                key={story.title}
                className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition duration-300"
              >
                <summary className="list-none cursor-pointer touch-manipulation [&::-webkit-details-marker]:hidden">
                  <h2 className="font-semibold text-gray-900 text-lg leading-snug">
                    {story.title}
                  </h2>

                  <div className="mt-4 text-gray-700 text-sm leading-relaxed group-open:hidden">
                    {preview.split("\n").map((line, index) => (
                      <span
                        key={`${story.title}-preview-${index}`}
                        className="block mb-2"
                      >
                        {line}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 text-gray-700 text-sm leading-relaxed hidden group-open:block">
                    {story.content.split("\n").map((line, index) => (
                      <span
                        key={`${story.title}-full-${index}`}
                        className="block mb-2"
                      >
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
      )}
    </main>
  );
}
