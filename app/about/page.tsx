import MathRain from '@/components/MathRain';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <MathRain />
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-24">
        {/* Name + Photo Section */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="flex-1">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
              Haotian Yang
            </h1>
            <p className="font-mono text-sm text-gray-500 mb-1">
              preferred: <span className="text-teal-400">Sora</span>
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4E03AQF5Y3mMl2XZBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1733055428609?e=1748476800&v=beta&t=a3cXJEr1oiE1NkJCXaqiOBNwNFAj6NG35xH-0IkPl9s"
              alt="Haotian Yang"
              width={180}
              height={180}
              className="rounded-full border-2 border-white/10"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4 text-gray-400 leading-relaxed mb-12">
          <p>
            Born in Harbin, China. Currently based in Milan — boring, but Bocconi&apos;s here and so is the work.
          </p>
          <p>
            First-year undergraduate studying Economics Management and Computer Science (BEMACS) at Bocconi University. 
            My research so far has focused on the statistical limits of financial network recovery: when T/N is small, 
            even the best estimators fail, and T/N dominates almost everything else you might try.
          </p>
          <p>
            Broadly interested in complex systems, network science, financial econometrics, and the math that connects them. 
            Open to research internships in any of these areas, and aiming for a PhD in statistics or financial mathematics down the line.
          </p>
        </div>

        {/* Research Interests */}
        <div className="mb-12">
          <h2 className="text-white font-semibold text-lg mb-4">Research Interests</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Financial networks & transfer entropy",
              "High-dimensional time series",
              "Information-theoretic limits",
              "Complex systems & network science",
              "Quantitative finance / HF"
            ].map((interest, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Collaboration Note */}
        <div className="mb-12 p-6 border border-white/10 rounded-lg bg-black/30">
          <p className="text-gray-400 leading-relaxed">
            <span className="text-white font-medium">Open to collaboration.</span> If you&apos;re working on something 
            at the intersection of networks, statistics, and finance — feel free to reach out.
          </p>
        </div>

        {/* Personal Section */}
        <div className="pt-8 border-t border-white/8">
          <h3 className="text-white font-medium text-sm mb-3">Outside Research</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            When not doing research: craft beer, poker, hardcore punk and metalcore (current obsession: Fear and Loathing in Las Vegas), 
            J-rock, and Japan — visits often, possibly moving to Tokyo.
          </p>
        </div>
      </div>
    </div>
  );
}
