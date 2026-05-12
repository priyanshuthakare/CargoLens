import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const posts = [
  {
    slug: 'how-to-compare-freight-quotes',
    title: 'How to Compare Freight Quotes: A Step-by-Step Guide',
    excerpt: 'Stop missing hidden surcharges. Learn the exact process logistics teams use to compare quotes accurately and consistently.',
    date: 'May 1, 2026',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'freight-surcharge-glossary',
    title: 'The Complete Freight Surcharge Glossary',
    excerpt: 'BAF, GRI, FSC, DTHC — understand every surcharge type and how they impact your total freight cost.',
    date: 'April 24, 2026',
    readTime: '12 min read',
    category: 'Reference',
  },
  {
    slug: 'baf-bunker-adjustment-factor',
    title: 'BAF (Bunker Adjustment Factor) Explained',
    excerpt: 'Why fuel surcharges change monthly, how they are calculated, and what you should expect on your invoices.',
    date: 'April 15, 2026',
    readTime: '6 min read',
    category: 'Explainer',
  },
  {
    slug: 'freight-quote-excel-template',
    title: 'Free Freight Quote Excel Template',
    excerpt: 'Download our battle-tested template for manual quote comparison — and see why teams are switching to CargoLens.',
    date: 'April 8, 2026',
    readTime: '4 min read',
    category: 'Tool',
  },
  {
    slug: 'automated-freight-procurement',
    title: 'The Case for Automating Freight Procurement',
    excerpt: 'How mid-sized shippers are cutting procurement costs by 15% with AI-powered quote normalization.',
    date: 'March 28, 2026',
    readTime: '10 min read',
    category: 'Strategy',
  },
  {
    slug: 'hidden-surcharges-cost-analysis',
    title: 'The True Cost of Hidden Surcharges',
    excerpt: 'Our analysis of 10,000 freight quotes reveals the surcharges most commonly missed by manual review.',
    date: 'March 15, 2026',
    readTime: '9 min read',
    category: 'Research',
  },
];

export default function Blog() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <main className="pt-16">
      {/* Hero */}
      <section ref={ref} className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4"
          >
            BLOG
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h1 text-white mb-4"
          >
            Insights for logistics teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-slate-300 max-w-2xl"
          >
            Guides, explainers, and research on freight procurement, surcharge management,
            and building a modern logistics operation.
          </motion.p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-[#0a0a0f] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="bg-[#14141e] rounded-2xl border border-white/[0.06] overflow-hidden card-hover group"
              >
                <div className="p-6">
                  <span className="inline-block px-2 py-0.5 bg-blue/10 text-blue text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-white/60 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>
                <div className="px-6 py-3 border-t border-white/[0.06] bg-[#0a0a0f]/50">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm text-blue font-medium inline-flex items-center gap-1 hover:underline"
                  >
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
