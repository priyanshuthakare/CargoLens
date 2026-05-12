import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: string[];
}> = {
  'how-to-compare-freight-quotes': {
    title: 'How to Compare Freight Quotes: A Step-by-Step Guide',
    date: 'May 1, 2026',
    readTime: '8 min read',
    category: 'Guide',
    author: 'CargoLens Team',
    content: [
      'Comparing freight quotes is one of the most time-consuming tasks in logistics procurement. Every forwarder uses a different format, hides surcharges in different places, and quotes in different units. This guide walks you through a systematic process to compare quotes accurately.',
      '### Step 1: Collect All Quotes in One Place',
      'Before you can compare, you need every quote in front of you. Create a single folder or email thread for each RFQ. Include the original quote PDFs, any revision emails, and your notes from follow-up calls.',
      '### Step 2: Extract the Base Rate',
      'The base rate is the ocean or air freight charge. It is usually the largest line item. Write it down for each forwarder in the same currency. If a quote is in EUR, convert it to USD using the current exchange rate.',
      '### Step 3: Identify Every Surcharge',
      'This is where most teams make mistakes. Surcharges can account for 30-50% of the total cost. Common surcharges include: Bunker Adjustment Factor (BAF), Fuel Surcharge (FSC), General Rate Increase (GRI), Destination Terminal Handling Charge (DTHC), Detention and Demurrage, Peak Season Surcharge, and Chassis Fees. Check footnotes carefully. Many forwarders hide surcharges there.',
      '### Step 4: Normalize the Units',
      'Forwarder A quotes per CBM. Forwarder B quotes per TEU. Forwarder C quotes per kilogram. You cannot compare these directly. Convert everything to a common unit. For ocean freight, use TEU or per-shipment. For air freight, use chargeable weight (the greater of actual weight or volumetric weight).',
      '### Step 5: Calculate the Total Landed Cost',
      'Add base rate + all surcharges for each forwarder. This is your true comparison number. Do not rely on the forwarder\'s stated total — they may exclude certain charges that apply to your cargo.',
      '### Step 6: Check Validity and Transit Time',
      'A lower rate is worthless if it expires tomorrow or takes 10 extra days. Note the quote validity period and estimated transit time for each option.',
      '### The CargoLens Alternative',
      'This manual process takes 1-2 hours for a typical 4-forwarder comparison. CargoLens does it in 60 seconds. Upload your quotes, and the AI extracts, normalizes, and compares everything automatically — including surcharges most teams miss.',
    ],
  },
  'freight-surcharge-glossary': {
    title: 'The Complete Freight Surcharge Glossary',
    date: 'April 24, 2026',
    readTime: '12 min read',
    category: 'Reference',
    author: 'CargoLens Team',
    content: [
      'Freight surcharges are additional fees added to the base shipping rate. They can represent 30-50% of your total freight cost. Understanding each surcharge type is essential for accurate quote comparison and budget planning.',
      '### BAF — Bunker Adjustment Factor',
      'Also known as Bunker Surcharge. A fee to compensate carriers for fluctuations in fuel (bunker) prices. Typically calculated per TEU and adjusted monthly or quarterly based on fuel price indices.',
      '### FSC — Fuel Surcharge',
      'Similar to BAF but more commonly used in air freight and trucking. Usually a percentage of the base rate or a per-kilometer charge. Varies with fuel market prices.',
      '### GRI — General Rate Increase',
      'A periodic increase to base ocean freight rates, usually announced by carriers ahead of peak season (typically March-May for trans-Pacific routes). Can be $200-1000 per TEU depending on the lane.',
      '### DTHC — Destination Terminal Handling Charge',
      'A fee for handling cargo at the destination port terminal. Includes unloading, storage, and preparation for pickup. Varies significantly by port.',
      '### Detention',
      'A charge for keeping a carrier\'s container beyond the agreed free time at the consignee\'s premises. Typically $50-150 per day after the free period (usually 7-14 days).',
      '### Demurrage',
      'Similar to detention but applies while the container is still at the port terminal beyond free time. Usually higher than detention — $75-200 per day.',
      '### Peak Season Surcharge',
      'Applied during high-demand periods (August-October for trans-Pacific). Reflects carrier capacity constraints. Can add $200-800 per TEU.',
      '### Chassis Fee',
      'A charge for using the wheeled frame that transports containers. May be split between origin and destination. Increasingly common as chassis pools become managed separately.',
      '### Why This Matters',
      'A quote with a low base rate but high surcharges can cost more than a quote with a higher base rate and lower surcharges. Always compare total landed cost, not just the headline rate.',
    ],
  },
  'baf-bunker-adjustment-factor': {
    title: 'BAF (Bunker Adjustment Factor) Explained',
    date: 'April 15, 2026',
    readTime: '6 min read',
    category: 'Explainer',
    author: 'CargoLens Team',
    content: [
      'BAF, or Bunker Adjustment Factor, is one of the largest and most volatile surcharges in ocean freight. Understanding how it works can save you thousands on your freight spend.',
      '### What is BAF?',
      'BAF is a fuel surcharge that compensates ocean carriers for changes in bunker (marine fuel) prices. It is typically quoted per TEU (Twenty-foot Equivalent Unit) and adjusted on a regular schedule — usually monthly or quarterly.',
      '### How is BAF Calculated?',
      'Carriers use published fuel price indices, such as the Brent crude oil price or dedicated marine fuel indices. Each carrier has its own formula, but the general approach is: BAF = (Current Fuel Price - Base Fuel Price) x Fuel Consumption per TEU x Transit Distance Factor.',
      '### Why Does BAF Change?',
      'BAF fluctuates with global oil prices. Geopolitical events, OPEC decisions, refining capacity, and seasonal demand all impact bunker fuel costs. BAF on the Asia-Europe lane can vary by $100-400 per TEU over a year.',
      '### How to Manage BAF',
      '1. Track BAF trends for your primary lanes. 2. Negotiate BAF caps or fixed BAF periods in your contracts. 3. Compare BAF across forwarders — they may use different base periods or formulas. 4. Factor BAF volatility into your freight budget.',
    ],
  },
  'freight-quote-excel-template': {
    title: 'Free Freight Quote Excel Template',
    date: 'April 8, 2026',
    readTime: '4 min read',
    category: 'Tool',
    author: 'CargoLens Team',
    content: [
      'We built this template after watching hundreds of logistics coordinators struggle with manual quote comparison. It is the best Excel-based approach we have seen — and it is free.',
      '### What the Template Includes',
      'A structured worksheet for comparing up to 6 forwarders side by side. Fields for base rate, every major surcharge type, total calculation, validity period, transit time, and notes.',
      '### How to Use It',
      '1. Open the template. 2. Enter each forwarder\'s name. 3. Go through each quote line by line, entering values in the appropriate cells. 4. The total column auto-calculates. 5. Review the comparison summary.',
      '### The Limitations',
      'Excel templates work for simple comparisons with 2-3 forwarders. They break down when: quotes have different formats, surcharges are hidden in footnotes, you need to compare historical trends, or your team needs to collaborate in real-time.',
      'That is why we built CargoLens. Upload any quote format, and the AI extracts and normalizes everything automatically — no template required.',
    ],
  },
  'automated-freight-procurement': {
    title: 'The Case for Automating Freight Procurement',
    date: 'March 28, 2026',
    readTime: '10 min read',
    category: 'Strategy',
    author: 'CargoLens Team',
    content: [
      'Freight procurement is one of the last major business processes still dominated by manual data entry. The cost of this inefficiency is staggering — and mostly invisible.',
      '### The Hidden Cost of Manual Processing',
      'A logistics coordinator earning $30/hour who spends 1 hour per day on quote comparison costs $7,800 per year in labor alone. But the real cost is in errors: missed surcharges, wrong unit conversions, and suboptimal carrier selection. Our research shows these errors add 5-15% to freight spend.',
      '### The Speed Problem',
      'Manual comparison takes 4+ hours from quote receipt to carrier decision. In that time, sailing schedules change, capacity fills up, and spot rates increase. Teams that decide in 15 minutes secure better rates and more reliable capacity.',
      '### What Automation Changes',
      'AI-powered quote normalization reduces processing time from hours to minutes. Surcharge detection eliminates invoice surprises. Historical context prevents overpayment. Collaboration features eliminate version confusion.',
      '### The ROI',
      'At $249/month, CargoLens pays for itself if it prevents a single $3,000 invoice variance. Most teams see 10x ROI within the first quarter.',
    ],
  },
  'hidden-surcharges-cost-analysis': {
    title: 'The True Cost of Hidden Surcharges',
    date: 'March 15, 2026',
    readTime: '9 min read',
    category: 'Research',
    author: 'CargoLens Team',
    content: [
      'We analyzed 10,000 freight quotes processed through CargoLens to understand how often surcharges are missed in manual review. The results are alarming.',
      '### Key Findings',
      'In 28% of quotes, at least one surcharge was entirely missed by the manual reviewer. The most commonly missed surcharges were: Peak Season Surcharge (missed 42% of the time), BAF variations (missed 31%), DTHC at destination (missed 25%), and Chassis splits (missed 19%).',
      '### Cost Impact',
      'The average missed surcharge value was $340 per quote. For a team processing 50 quotes per week, that is $17,000 per week in unidentified costs — $884,000 per year.',
      '### Why Surcharges Are Missed',
      '1. They are in footnotes or fine print. 2. Forwarders use different names for the same charge. 3. Reviewers focus on the base rate. 4. Time pressure leads to rushed reviews. 5. Complex quotes have 20+ line items — human attention spans fade.',
      '### The Solution',
      'AI does not get tired, distracted, or rushed. It reads every line, including footnotes. It recognizes surcharge synonyms across different forwarders. And it flags anything unusual for human review.',
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts[slug || ''];

  if (!post) {
    return (
      <main className="pt-24 text-center">
        <h1 className="text-h1 text-text mb-4">Post not found</h1>
        <Link to="/blog" className="text-blue hover:underline inline-flex items-center gap-1">
          <ArrowLeft size={16} /> Back to blog
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-16">
      <article className="bg-bg min-h-screen">
        {/* Header */}
        <div className="bg-navy py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="text-cyan text-sm hover:underline inline-flex items-center gap-1 mb-6">
              <ArrowLeft size={14} /> Back to blog
            </Link>
            <span className="inline-block px-2 py-0.5 bg-blue/20 text-cyan text-xs font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-h1 text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-1">
                <User size={14} /> {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, i) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={i} className="text-xl font-semibold text-text mt-8 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={i} className="text-body-md text-muted leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-blue/5 border border-blue/20 rounded-feature p-6 text-center">
            <h3 className="text-lg font-semibold text-text mb-2">
              Tired of manual quote comparison?
            </h3>
            <p className="text-sm text-muted mb-4">
              CargoLens extracts and normalizes freight quotes automatically — no templates needed.
            </p>
            <Link
              to="/waitlist"
              className="inline-flex items-center px-6 py-3 bg-blue text-white rounded-lg font-medium text-sm hover:shadow-glow-blue transition-all btn-press"
            >
              Try CargoLens free
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
