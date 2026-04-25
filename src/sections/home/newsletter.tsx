import { useState } from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="bg-coffee py-20 md:py-24">
      <div className="container-main max-w-[520px] text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-warm-white mb-4">
            Join the Inner Circle
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-body text-sm text-[rgba(250,250,248,0.7)] mb-8">
            Early access to collections, studio notes, and members-only pieces.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {submitted ? (
            <div className="flex flex-col items-center gap-3 animate-fade-in-up">
              <div className="w-12 h-12 rounded-full border-2 border-sage flex items-center justify-center">
                <Check className="w-6 h-6 text-sage stroke-[2]" />
              </div>
              <p className="font-body text-base text-warm-white">
                Welcome to the circle
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent border-b border-bronze-light text-warm-white placeholder:text-[rgba(250,250,248,0.4)] px-0 py-3 font-body text-sm outline-none focus:border-warm-white transition-colors"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-warm-white text-[#1A1410] px-8 py-3 font-body text-xs uppercase tracking-[0.06em] font-medium hover:bg-bronze-light transition-colors disabled:opacity-70"
              >
                {loading ? '...' : 'Subscribe'}
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
