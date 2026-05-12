
---

# **MASTER PRODUCT REQUIREMENTS DOCUMENT (PRD)**

## **AI-Powered Freight Quote Normalizer**

**Product Name:** *CargoLens* (Working Title)  
**Version:** 1.0  
---

## 1. PRODUCT ESSENCE

### One-Line Pitch
> *"CargoLens turns chaotic freight quotes from any format — PDFs, Excel, emails, WhatsApp — into clean, comparable data in seconds, eliminating hours of manual data entry and preventing costly surcharge surprises."*

### Product Tagline
> *"Every quote. One format. Zero typing."*

### Product Vision
To become the **universal translation layer for logistics procurement**, where any freight quote from any provider, in any format, becomes instantly structured, comparable, and actionable — enabling procurement teams to make faster, cheaper, and more informed shipping decisions.

### Product Mission
Eliminate the $12+ billion annual waste in logistics procurement caused by manual quote comparison, hidden surcharges, and format incompatibility, starting with mid-sized shippers and freight forwarders who are currently underserved by enterprise TMS solutions.

---

## 2. THE PROBLEM

### 2.1 Problem Statement
Logistics procurement teams spend **20–30% of their productive time** manually extracting, normalizing, and comparing freight quotes received in incompatible formats from multiple carriers and forwarders. This manual process is error-prone, slow, and causes costly procurement mistakes due to overlooked surcharges and inconsistent unit conversions.

### 2.2 Problem Breakdown

| Problem Dimension | Description | Business Impact |
|-------------------|-------------|-----------------|
| **Format Chaos** | Quotes arrive as PDFs, Excel files with merged cells, scanned images, email bodies, and WhatsApp messages. No two forwarders use the same template. | 1+ hours/day spent on manual data entry per coordinator |
| **Hidden Surcharges** | Critical cost components (Fuel Surcharge, BAF, GRI, detention, demurrage, chassis splits) are buried in fine print or footnotes. | 5–15% cost variance on accepted quotes vs. actual invoices |
| **Unit Inconsistency** | Rates quoted per CBM, kg, TEU, pallet, or container; currencies vary (USD, EUR, GBP, local); validity windows differ. | Apples-to-oranges comparisons leading to suboptimal carrier selection |
| **Version Confusion** | Multiple quote revisions create version control nightmares. Teams struggle to identify the "current" valid quote. | Accepted expired or superseded quotes, leading to rate disputes |
| **No Historical Context** | Quotes are processed in isolation. Teams cannot easily compare against historical rates for the same lane. | Missed opportunities to negotiate better rates based on trend data |
| **Collaboration Friction** | Procurement decisions require approval from operations, finance, and sales teams. Email-based quote sharing is slow and opaque. | Delayed decision-making, missed sailing windows, expedited freight costs |

### 2.3 Root Cause Analysis

```
┌─────────────────────────────────────────────────────────────┐
│                    ENTERPRISE TMS GAP                       │
│  (CargoWise, SAP TM, Oracle)                                │
│  • $100K–$500K/year                                         │
│  • 12–24 month implementation                               │
│  • Requires structured EDI/API data                         │
│  • Overkill for quote comparison                            │
└─────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              GENERIC PROCUREMENT TOOLS GAP                  │
│  (Coupa, Procurify, ProcureDesk)                            │
│  • $500–$2,000/month                                        │
│  • Designed for structured RFQs (not freight)               │
│  • Cannot parse PDF/Excel/WhatsApp                          │
│  • No logistics domain knowledge                            │
└─────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              MANUAL EXCEL WORKAROUND                        │
│  • 1+ hour/day per employee                                 │
│  • High error rate                                          │
│  • No audit trail                                           │
│  • No integration with execution systems                    │
└─────────────────────────────────────────────────────────────┘
```

### 2.4 Quantified Pain

| Metric | Source | Value |
|--------|--------|-------|
| Time spent on manual quote comparison | Reddit user testimony  | 1 hour/day per coordinator |
| Procurement hours wasted on "chasing clarification loops" | Industry research  | 30% of man-hours |
| Cost variance due to overlooked surcharges | Industry estimate | 5–15% of freight spend |
| Annual freight software market size | Market research  | $10.43B (procurement) + $5.79B (freight) |
| Number of freight forwarders globally (target segment) | Industry data  | 100,000+ small-to-mid-sized |

---

## 3. THE USER

### 3.1 Primary Persona: "Procurement Patty" *(End User — Not Economic Buyer)*

> **Critical distinction:** Patty is the person who feels the pain and uses the product daily. She is NOT the person who signs the purchase order. Targeting Patty with a direct sales pitch is a conversion dead-end — she will love CargoLens and spend weeks trying to get her boss to approve the spend. The product must be designed so Patty can share a comparison output with her manager that makes the ROI case automatically. See Section 3.1a for the Economic Buyer persona.

| Attribute | Detail |
|-----------|--------|
| **Name** | Patricia "Patty" Chen |
| **Age** | 32 |
| **Title** | Logistics Coordinator / Procurement Specialist |
| **Company** | Mid-sized importer/exporter or 3PL (15–100 employees) |
| **Location** | Chicago, IL (or Rotterdam, NL / Singapore) |
| **Experience** | 4–7 years in logistics |
| **Tools** | Excel (advanced), Outlook/Gmail, basic TMS or none, company ERP (SAP/NetSuite/QuickBooks) |
| **Pain Quote** | *"I spend like an hour every day just re-typing these into our master Excel sheet... because the surcharges are always hidden in the fine print."*  |

#### Daily Workflow (Before CargoLens)
1. **8:30 AM:** Check email for overnight quotes from 3 Asian forwarders (PDF attachments)
2. **9:00 AM:** Open PDF in one window, Excel master sheet in another. Manually type: origin, destination, rate, validity, FSC, BAF, detention, chassis.
3. **9:45 AM:** Receive WhatsApp message from local trucker with spot rate. Screenshot and paste into email to self.
4. **10:30 AM:** Forwarder sends revised quote (v2). Must find original quote in Excel, mark as superseded, re-enter new data.
5. **11:00 AM:** Operations manager asks for "best option for Shanghai–LA this week." Scroll through Excel, manually compare 5 quotes with different units (CBM vs. TEU vs. per-kg).
6. **2:00 PM:** Finance questions why last month's invoice was $3,200 higher than quoted rate. Dig through email to find original quote PDF. Discover "peak season surcharge" was in footnote.
7. **4:30 PM:** Email comparison table to sales team for client quote preparation. They retype everything into their own template.

#### Goals
- Reduce time spent on manual data entry by 80%
- Never miss a hidden surcharge again
- Compare quotes apples-to-apples in under 2 minutes
- Maintain audit trail for finance disputes
- Look professional to internal stakeholders and clients

#### Frustrations
- *"I feel like a data entry clerk, not a procurement professional."*
- *"Every forwarder thinks their format is the best. It's not."*
- *"I found out we overpaid $8,000 last quarter because I missed a GRI in the footnote."*
- *"My boss thinks I'm slow, but he doesn't see the manual work behind the scenes."*

---

### 3.1a Economic Buyer Persona: "Operations Olivia" / "CFO Chris" *(Signs the PO)*

This is the persona that actually authorizes budget. All sales materials, ROI calculators, and shareable comparison reports must be designed to land in front of this person and be immediately persuasive.

| Attribute | Detail |
|-----------|--------|
| **Title** | Operations Manager, VP of Supply Chain, or CFO |
| **Company** | Same mid-sized importer/exporter (15–100 employees) |
| **Primary Concern** | Freight spend as a % of COGS; invoice-vs.-quote variance; procurement cycle time |
| **Budget Authority** | $500–$5,000/month SaaS without executive approval |
| **Buying Trigger** | A documented instance of cost overrun due to missed surcharge, or a competitor visibly moving faster on freight decisions |
| **Key Metric They Care About** | "How much are we overpaying vs. what we quoted?" and "How long does it take us to make a carrier decision?" |
| **Pain Quote** | *"I don't understand why we're paying $3,200 more than the quote we accepted. Find out why."* |

**Implication for product:** Every comparison report exported from CargoLens must have a one-line summary: *"Total identified savings opportunity vs. highest quote: $X,XXX."* This is what Olivia or Chris forwards to justify the subscription.

| Attribute | Detail |
|-----------|--------|
| **Name** | Frank Okafor |
| **Age** | 45 |
| **Title** | Owner / Managing Director |
| **Company** | Independent freight forwarder (5–25 employees) |
| **Location** | Lagos, Nigeria (or Mumbai, India / São Paulo, Brazil) |
| **Pain Quote** | *"I send professional quotes, but my clients take days to respond because they're manually comparing with 5 other forwarders. If I could make my quotes easier to process, I'd win more business."* |

#### Use Case
- Uses CargoLens **Outbound** (future feature) to standardize his own quote templates
- Receives CargoLens-normalized comparisons from clients and can see exactly where he ranks
- Uses analytics to understand his win/loss rate by lane and seasonality

---

### 3.3 Tertiary Persona: "Operations Olivia"

| Attribute | Detail |
|-----------|--------|
| **Name** | Olivia Martinez |
| **Title** | Operations Manager |
| **Company** | Mid-sized 3PL |
| **Needs** | Approval workflow visibility, historical rate trends, integration with TMS for execution handoff |
| **Pain Quote** | *"By the time Patty finishes the comparison, the sailing schedule has changed. We need decisions in minutes, not hours."* |

---

### 3.4 User Segmentation Matrix

| Segment | Company Size | Annual Freight Spend | Current Tool | Price Sensitivity | Key Feature Needs |
|---------|-------------|---------------------|--------------|-------------------|-------------------|
| **Micro Shippers** | 1–10 employees | <$500K | Excel, email | High | Basic extraction, simple comparison |
| **Mid-Market Shippers** | 11–100 employees | $500K–$5M | Excel + basic TMS | Medium | Full normalization, collaboration, history |
| **Freight Forwarders** | 5–50 employees | N/A (service provider) | Custom templates, email | Medium | Outbound standardization, win/loss analytics |
| **Enterprise Shippers** | 500+ employees | $10M+ | Enterprise TMS + procurement suite | Low | API integration, ERP connectivity, custom rules |

**Primary Target:** Mid-Market Shippers (11–100 employees)  
**Secondary Target:** Freight Forwarders (5–50 employees)  
**Tertiary Target:** Micro Shippers (1–10 employees) via self-serve

---

## 4. THE SOLUTION

### 4.1 Solution Overview

CargoLens is an **AI-powered freight quote normalization platform** that:

1. **Ingests** quotes from any source (email, upload, API, WhatsApp, Slack)
2. **Extracts** structured data using OCR + domain-trained LLM
3. **Normalizes** lanes, units, currencies, and surcharges into a standard schema
4. **Compares** quotes side-by-side with intelligent outlier detection
5. **Collaborates** via shared workspaces, approval workflows, and annotations
6. **Integrates** with TMS, ERP, and accounting systems for seamless execution handoff

### 4.2 Core Value Proposition

> **"Turn any freight quote into structured, comparable data in under 60 seconds — eliminating manual data entry, surfacing hidden costs, and enabling faster, cheaper procurement decisions."**

### 4.3 Key Differentiators

| Differentiator | Description | Competitor Gap |
|----------------|-------------|----------------|
| **Multi-Format Ingestion** | PDF, Excel (including merged cells), Word, images, email bodies, WhatsApp, Slack | Generic procurement tools only handle structured forms |
| **Freight-Specific Extraction** | Trained on logistics terminology: FSC, BAF, GRI, detention, demurrage, chassis, DTHC, origin/destination handling | Generic AI doc extraction lacks domain knowledge |
| **Intelligent Normalization** | Converts any unit (CBM, kg, TEU, pallet) to standard; handles multi-currency with FX rates; recognizes lane equivalencies | Manual Excel workarounds or rigid enterprise templates |
| **Surcharge Surfacing** | Automatically flags and extracts all surcharges, displaying them as line items (not buried in footnotes) | Enterprise TMS assumes structured data; manual review misses items |
| **Historical Context** | Stores all quotes by lane, showing trend lines and alerting to significant rate spikes/drops | No incumbent provides lane-level historical analytics for inbound quotes |
| **Human-in-the-Loop Verification** | Low-confidence extractions flagged for user review, with learning from corrections | Fully automated solutions have accuracy anxiety; fully manual is too slow |

### 4.4 User Journey Maps

#### Journey 1: First Quote Ingestion (New User)

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   DISCOVER  │───▶│   INGEST    │───▶│   REVIEW    │───▶│   COMPARE   │
│             │    │             │    │             │    │             │
│ User signs  │    │ Forwards    │    │ AI extracts │    │ Side-by-side│
│ up, connects│    │ email with  │    │ 12 data     │    │ table with  │
│ email or    │    │ 3 PDF quotes│    │ points per  │    │ color-coded │
│ uploads PDF │    │ to CargoLens│    │ quote. 2    │    │ lowest/highest│
│             │    │ inbox       │    │ flagged for │    │             │
│             │    │             │    │ verification│    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                              │
┌─────────────┐    ┌─────────────┐    ┌─────────────┐       │
│   ARCHIVE   │◀───│   DECIDE    │◀───│  COLLABORATE│◀──────┘
│             │    │             │    │             │
│ Quote saved │    │ Selects     │    │ Shares with │
│ to lane     │    │ Carrier B,  │    │ ops manager │
│ history,    │    │ generates   │    │ via link,   │
│ triggers    │    │ PO directly │    │ gets approval│
│ rate alert  │    │             │    │ in 10 min   │
└─────────────┘    └─────────────┘    └─────────────┘
```

#### Journey 2: Daily Power User (Procurement Patty)

```
┌─────────────────────────────────────────────────────────────────────┐
│  8:30 AM  │  Patty opens CargoLens dashboard. 5 new quotes overnight │
│           │  from automated email parsing. All extracted, 1 flagged │
├─────────────────────────────────────────────────────────────────────┤
│  8:35 AM  │  Reviews flagged quote (low confidence on BAF amount).  │
│           │  Corrects $425 → $450. AI learns for this forwarder.    │
├─────────────────────────────────────────────────────────────────────┤
│  8:40 AM  │  Clicks "Compare" for Shanghai–LA lane. 6 quotes shown. │
│           │  CargoLens highlights: Carrier C has lowest base rate   │
│           │  but highest detention. Carrier A is best total cost.   │
├─────────────────────────────────────────────────────────────────────┤
│  8:45 AM  │  Adds annotation: "Carrier A valid until Friday. Need   │
│           │  decision by 2 PM." Shares link to Olivia (Operations). │
├─────────────────────────────────────────────────────────────────────┤
│  9:00 AM  │  Olivia approves. Patty clicks "Generate PO" → auto-    │
│           │  fills carrier booking form. 30 minutes total vs. 3 hrs │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 5. PRODUCT SCOPE

### 5.0 MVP Philosophy — Ship Small, Charge Fast

> **The previous scope was too large.** An MVP that includes WhatsApp ingestion, Slack integration, approval workflows, QuickBooks integration, Elasticsearch, ClickHouse, RabbitMQ, and Kubernetes will take 9+ months to build and launch with zero paying customers. That is not an MVP — it is a Series A product being built on pre-seed resources.

**The actual MVP question:** What is the minimum set of features that makes "Procurement Patty" say "I would pay for this today"?

**Answer:** Upload a PDF or Excel quote → AI extracts the data → see it in a comparison table → export to Excel. Full stop. Everything else is roadmap.

### 5.1 In-Scope (True MVP — Months 1–3)

#### Module 1: Ingestion (Upload + Email Only)
| Feature | Description | Priority |
|---------|-------------|----------|
| **Upload Portal** | Drag-and-drop PDF, Excel, Word, image (PNG/JPG) upload. | P0 |
| **Email Auto-Parse** | Dedicated CargoLens email address. Forwards/quotes auto-processed. | P0 |

*WhatsApp and Slack ingestion are cut from MVP. Add in Month 4+ based on user demand.*

#### Module 2: AI Extraction & Normalization
| Feature | Description | Priority |
|---------|-------------|----------|
| **Core Data Extraction** | Origin, destination, incoterms, rate, validity period, currency, charge type (ocean, air, truck, rail). | P0 |
| **Surcharge Detection** | Auto-identifies and extracts: FSC, BAF, GRI, peak season surcharge, detention, demurrage, chassis, DTHC, origin handling, destination handling, customs clearance, insurance. | P0 |
| **Unit Normalization** | Converts all weight/volume units to standard (kg, CBM, TEU). Currency normalization to user preference (USD default). | P0 |
| **Confidence Scoring** | Each extraction field has 0–100% confidence. <85% flagged for review. | P0 |
| **Human-in-the-Loop UI** | Side-by-side: original document left, extracted fields right. One-click confirm/edit. | P0 |
| **Lane Standardization** | Maps free-text locations to UN/LOCODE standards. | P1 |

#### Module 3: Comparison
| Feature | Description | Priority |
|---------|-------------|----------|
| **Side-by-Side Table** | All quotes for a lane in a unified, sortable table. | P0 |
| **Total Cost Calculator** | Rolls up all line items to true total cost. Includes one-line savings summary for sharing with economic buyer. | P0 |
| **Excel Export** | One-click export. Bridge to existing workflows; reduces adoption friction. | P0 |

*Outlier detection and historical trend charts are P1 — add in Month 4.*

#### Module 4: Collaboration (Minimal)
| Feature | Description | Priority |
|---------|-------------|----------|
| **Shared Workspaces** | Team-based quote folders. Role-based access (viewer, editor, admin). | P0 |

*Approval workflows, annotations, and shareable links are cut from MVP.*

### 5.2 MVP Tech Stack (Simplified)

The original stack included Elasticsearch, ClickHouse, RabbitMQ, and Kubernetes — none appropriate for a pre-revenue MVP. Complexity is a liability before product-market fit.

| Layer | MVP Choice | What Was Cut & Why |
|-------|-----------|---------------------|
| **Frontend** | Next.js + Tailwind | Unchanged — good choice |
| **Backend** | Node.js (NestJS) + Python (FastAPI for ML) | Unchanged |
| **Database** | PostgreSQL only | ClickHouse and Elasticsearch cut — premature at MVP scale |
| **Document Storage** | AWS S3 | Unchanged |
| **Queue** | PostgreSQL-backed queue (pg-boss) | RabbitMQ/SQS adds ops overhead; pg-boss sufficient for MVP volume |
| **AI/ML** | Claude claude-sonnet-4-20250514 (extraction) + AWS Textract (OCR) | One LLM, not an ensemble |
| **Infrastructure** | AWS ECS (not EKS/Kubernetes) | ECS is dramatically simpler; migrate at Series A |
| **Monitoring** | Sentry + CloudWatch | Datadog/LogRocket are post-PMF costs |

### 5.3 Out-of-Scope (MVP)

| Feature | Rationale | Planned Phase |
|---------|-----------|---------------|
| **WhatsApp/Slack Ingestion** | Email covers 90% of MVP use cases | Month 4–5 |
| **Approval Workflows** | Important for Team tier but not Day 1 value | Month 4 |
| **Outlier Detection** | Adds value but not core to first-quote experience | Month 4 |
| **Historical Trend Charts** | Requires quote history to accumulate first | Month 5 |
| **QuickBooks/Xero Integration** | Reduces friction but doesn't create it | Month 5–6 |
| **TMS Handoff (CSV/JSON export)** | Relevant at Team tier; not Day 1 | Month 5 |
| **Carrier API Integrations** | Out of scope for Phase 1 entirely | Phase 3 |
| **Real-Time Freight Rates** | Different product category (Freightos does this) | Phase 3 |
| **Mobile Native Apps** | Responsive web only | Phase 3 |
| **Multi-Language UI** | English only for MVP | Phase 2 |
| **Elasticsearch** | PostgreSQL full-text search sufficient at MVP scale | Phase 2 |
| **ClickHouse** | No analytical query volume to justify before 10K+ quotes/day | Phase 2 |
| **Kubernetes (EKS)** | ECS sufficient; EKS adds ops complexity with no MVP benefit | Series A |

### 5.4 Future Roadmap (Post-MVP)

| Phase | Timeline | Features |
|-------|----------|----------|
| **Phase 2: Expand Ingestion & Collaboration** | Months 4–6 | WhatsApp/Slack ingestion, approval workflows, outlier detection, historical trends, QuickBooks/Xero, TMS CSV export |
| **Phase 3: Scale & Connect** | Months 7–10 | Carrier API integrations (top 20 ocean carriers), ERP integrations (NetSuite, SAP), advanced analytics, Elasticsearch/ClickHouse |
| **Phase 4: Intelligence** | Months 11–16 | Predictive rate forecasting, automated RFP generation, AI negotiation assistant |
| **Phase 5: Network Effects** | Months 17–24 | CargoLens for Forwarders (outbound standardization), benchmarking network, marketplace dynamics |

---

## 6. NON-NEGOTIABLES (Product Principles)

These are immutable constraints that guide all product decisions. Violating any of these requires executive approval.

| # | Principle | Implication |
|---|-----------|-------------|
| **N1** | **Accuracy over Speed** | A fast but wrong extraction is worse than a slow but correct one. Human verification is mandatory for low-confidence fields. |
| **N2** | **Freight Domain Depth** | Every feature must demonstrate understanding of logistics workflows. No generic "document AI" without freight-specific logic. |
| **N3** | **Zero Data Lock-In** | Users can export ALL data (quotes, history, analytics) at any time in standard formats (CSV, Excel, JSON). No proprietary formats. |
| **N4** | **Privacy by Design** | No quote data used to train models without explicit opt-in. Customer data is isolated (single-tenant storage per customer). |
| **N5** | **5-Minute Time-to-Value** | New user must ingest first quote and see comparison within 5 minutes of signup. No complex configuration required. |
| **N6** | **Transparent Pricing** | No hidden fees, no "contact sales" for standard tiers. Pricing page shows all costs upfront. |
| **N7** | **Human-in-the-Loop Always Available** | Even at 99% accuracy, users can always review, correct, and override AI extractions. AI augments, never replaces, human judgment. |

---

## 7. SUCCESS METRICS & KPIs

### 7.1 North Star Metric
> **"Quotes Normalized Per Week"** — The total number of quotes successfully ingested, extracted, and made comparable by all active users in a given week.

**Why:** Directly measures core value delivery. Correlates with time saved, cost avoided, and user engagement.

### 7.2 Metric Hierarchy

```
                    ┌─────────────────────┐
                    │   NORTH STAR        │
                    │ Quotes Normalized   │
                    │    Per Week         │
                    └──────────┬──────────┘
                               │
           ┌───────────────────┼───────────────────┐
           ▼                   ▼                   ▼
    ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
    │  INPUT      │     │  THROUGHPUT │     │  OUTPUT     │
    │  Metrics    │     │  Metrics    │     │  Metrics    │
    │             │     │             │     │             │
    │ • Quotes    │     │ • Extraction│     │ • Time Saved│
    │   Ingested  │     │   Accuracy  │     │   Per Quote │
    │ • Active    │     │ • Avg. Time │     │ • Cost      │
    │   Users     │     │   to Process│     │   Variance  │
    │ • Email     │     │ • Human     │     │   Reduced   │
    │   Connects  │     │   Corrections│    │ • POs       │
    │             │     │   Needed    │     │   Generated │
    └─────────────┘     └─────────────┘     └─────────────┘
```

### 7.3 Detailed KPIs

#### Input Metrics (Growth & Adoption)

| KPI | Definition | Target (M6) | Target (M12) |
|-----|-----------|-------------|--------------|
| **Monthly Signups** | New user registrations | 150 | 500 |
| **Activation Rate** | % of signups who ingest first quote within 48 hours | 60% | 70% |
| **Email Connect Rate** | % of users who connect email inbox (vs. manual upload only) | 50% | 65% |
| **Weekly Active Users (WAU)** | Users who normalize ≥1 quote in a week | 200 | 800 |
| **DAU/MAU Ratio** | Daily active / monthly active (stickiness) | 25% | 35% |

#### Throughput Metrics (Product Performance)

| KPI | Definition | Target (M6) | Target (M12) |
|-----|-----------|-------------|--------------|
| **Extraction Accuracy** | % of fields correctly extracted without human correction (weighted by field importance) | 85% | 92% |
| **Avg. Processing Time** | Time from ingestion to structured output (including human verification) | 3 min | 90 sec |
| **Human Correction Rate** | % of quotes requiring user correction | 40% | 20% |
| **Confidence Score Distribution** | % of fields with >90% confidence | 60% | 80% |
| **System Uptime** | Platform availability | 99.9% | 99.95% |

#### Output Metrics (Business Value)

| KPI | Definition | Target (M6) | Target (M12) |
|-----|-----------|-------------|--------------|
| **Time Saved Per Quote** | User-reported or measured time reduction vs. manual process | 15 min | 20 min |
| **Cost Variance Detection** | % of quotes where CargoLens surfaced a surcharge missed in manual review | 25% | 30% |
| **Decision Speed** | Time from quote receipt to procurement decision | 4 hrs | 1 hr |
| **User NPS** | Net Promoter Score | +30 | +50 |
| **Net Revenue Retention** | (Starting MRR + Expansion - Churn) / Starting MRR | 110% | 120% |

#### Financial Metrics

| KPI | Definition | Target (M6) | Target (M12) |
|-----|-----------|-------------|--------------|
| **Monthly Recurring Revenue (MRR)** | Total monthly subscription revenue | $15,000 | $75,000 |
| **Average Revenue Per User (ARPU)** | MRR / paying customers | $250 | $280 |
| **Customer Acquisition Cost (CAC)** | Total sales+marketing spend / new customers | $800 | $600 |
| **Lifetime Value (LTV)** | ARPU × gross margin × average customer lifetime | $4,500 | $6,000 |
| **LTV:CAC Ratio** | LTV / CAC | 5.6:1 | 10:1 |
| **Gross Margin** | (Revenue - COGS) / Revenue | 75% | 80% |
| **Payback Period** | Months to recover CAC | 3.2 | 2.1 |
| **Churn Rate** | % of customers lost monthly | <5% | <3% |

---

## 8. USER EXPERIENCE & INTERFACE

### 8.1 Information Architecture

```
CargoLens
├── Dashboard
│   ├── Incoming Quotes Queue
│   ├── Recent Comparisons
│   ├── Lane Alerts (rate spikes/drops)
│   └── Quick Actions
├── Ingestion
│   ├── Email Inbox (connected accounts)
│   ├── Upload Center
│   └── Integration Settings
├── Quotes
│   ├── All Quotes (filterable: lane, date, forwarder, status)
│   ├── Needs Review (low confidence)
│   ├── By Lane (Shanghai–LA, Rotterdam–NYC, etc.)
│   └── Archive
├── Compare
│   ├── Active Comparisons
│   ├── Side-by-Side View
│   ├── Historical Trends
│   └── Export Options
├── Workspaces
│   ├── Team Members
│   ├── Approval Workflows
│   └── Shared Folders
├── Analytics
│   ├── Spend Overview
│   ├── Forwarder Performance
│   ├── Lane Trends
│   └── Savings Tracker
└── Settings
    ├── Account
    ├── Billing
    ├── Integrations (TMS, ERP, Accounting)
    ├── Data Export
    └── API Keys
```

### 8.2 Key Screen Specifications

#### Screen 1: Dashboard (Primary Landing)

| Element | Specification |
|---------|--------------|
| **Layout** | Three-column: Queue (left), Main Feed (center), Quick Stats (right) |
| **Queue** | List of unprocessed quotes with source (email icon, upload icon), forwarder name, lane preview, confidence score color (green/yellow/red) |
| **Main Feed** | "Start Comparison" CTA, recent activity timeline, lane alerts |
| **Quick Stats** | Quotes this week, time saved this month, top forwarders, average savings |
| **Empty State** | Friendly illustration + "Forward your first quote to [unique@cargolens.io]" |

#### Screen 2: Extraction Review (Human-in-the-Loop)

| Element | Specification |
|---------|--------------|
| **Layout** | Split-pane: Original document (left 50%), Extracted data (right 50%) |
| **Document Viewer** | Zoom, pan, page navigation. Click on any field in document to highlight corresponding extraction field. |
| **Extraction Form** | Pre-filled fields with confidence badges. Red border = <85% confidence. Yellow = 85–95%. Green = >95%. |
| **Correction UI** | Inline editing. Dropdowns for standard values (locations, currencies, incoterms). Free-text for rates. |
| **Actions** | "Confirm & Save", "Confirm & Compare", "Mark as Duplicate", "Request Clarification" (auto-email forwarder) |
| **Learning Indicator** | "CargoLens learned from your correction. Future quotes from [Forwarder X] will be more accurate." |

#### Screen 3: Comparison View

| Element | Specification |
|---------|--------------|
| **Layout** | Full-width table. Fixed header. Horizontal scroll for many quotes. |
| **Columns** | Forwarder | Base Rate | FSC | BAF | DTHC | Detention | Demurrage | Other | **Total Cost** | Validity | Actions |
| **Row Grouping** | By charge type (ocean freight, surcharges, destination charges, etc.) |
| **Highlighting** | Lowest total cost = green background. Highest = red. Outliers = yellow warning icon with tooltip. |
| **Annotations** | Speech bubble icon on cells with team comments. |
| **Actions** | "Select Winner" (triggers approval workflow), "Add to RFP", "Export", "Share" |

---

## 9. TECHNICAL ARCHITECTURE

### 9.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              CLIENT LAYER                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │   Web App   │  │  Email Bot  │  │  Mobile Web │  │   API       │   │
│  │  (React)    │  │  (Parse)    │  │ (Responsive)│  │  (REST)     │   │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘   │
└─────────┼────────────────┼────────────────┼────────────────┼──────────┘
          │                │                │                │
          └────────────────┴────────────────┴────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                           API GATEWAY (Kong/AWS)                        │
│                     Auth, Rate Limiting, Routing                        │
└─────────────────────────────────────────────────────────────────────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    ▼                ▼                ▼
        ┌───────────────┐  ┌───────────────┐  ┌───────────────┐
        │  INGESTION    │  │  PROCESSING   │  │   BUSINESS    │
        │   SERVICE     │  │   ENGINE      │  │   LOGIC       │
        │               │  │               │  │               │
        │ • Email parse │  │ • OCR         │  │ • Comparison  │
        │ • File store  │  │ • LLM extract │  │ • Workflow    │
        │ • Queue mgmt  │  │ • Normalize   │  │ • Analytics   │
        └───────┬───────┘  └───────┬───────┘  └───────┬───────┘
                │                  │                  │
                └──────────────────┼──────────────────┘
                                   │
                                   ▼
        ┌─────────────────────────────────────────────────────────┐
        │                    DATA LAYER                           │
        │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
        │  │ PostgreSQL  │  │    Redis    │  │   S3/MinIO  │    │
        │  │ (Quotes,    │  │  (Cache,    │  │  (Documents,│    │
        │  │  Users)     │  │   Sessions) │  │   Exports)  │    │
        │  └─────────────┘  └─────────────┘  └─────────────┘    │
        │  ┌─────────────┐  ┌─────────────┐                      │
        │  │ Elasticsearch│  │  ClickHouse │                      │
        │  │  (Search)   │  │ (Analytics) │                      │
        │  └─────────────┘  └─────────────┘                      │
        └─────────────────────────────────────────────────────────┘
```

### 9.2 AI/ML Pipeline

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   INPUT     │───▶│  DOCUMENT   │───▶│  EXTRACTION │───▶│ NORMALIZATION│
│             │    │  PROCESSING │    │             │    │             │
│ PDF, Excel, │    │ • OCR       │    │ • Layout    │    │ • Unit      │
│ Image,      │    │   (Tesseract│    │   analysis  │    │   conversion│
│ Email,      │    │   + AWS     │    │ • Table     │    │ • Currency  │
│ WhatsApp    │    │   Textract) │    │   detection │    │   FX rates  │
│             │    │ • Format    │    │ • Named     │    │ • Lane      │
│             │    │   detection │    │   entity    │    │   mapping   │
│             │    │ • Image     │    │   recognition│   │ • Surcharge │
│             │    │   cleanup   │    │ • Freight   │    │   taxonomy  │
│             │    │             │    │   domain    │    │             │
│             │    │             │    │   LLM       │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └──────┬──────┘
                                                                  │
┌─────────────┐    ┌─────────────┐    ┌─────────────┐           │
│   OUTPUT    │◀───│  CONFIDENCE │◀───│  VALIDATION │◀──────────┘
│             │    │   SCORING   │    │             │
│ Structured  │    │ • Rule-based│    │ • Cross-field│
│ JSON quote  │    │   checks    │    │   consistency│
│ object with │    │ • Historical│    │ • Rate range │
│ confidence  │    │   comparison│    │   validation │
│ scores      │    │ • Model     │    │ • Duplicate  │
│             │    │   ensemble  │    │   detection  │
└─────────────┘    └─────────────┘    └─────────────┘
```

### 9.3 Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS, TanStack Query | SSR for SEO, excellent DX, responsive design |
| **Backend** | Node.js (NestJS) + Python (FastAPI for ML) | NestJS for enterprise patterns, Python for AI/ML |
| **Database** | PostgreSQL 16 (primary), Redis (cache/sessions) | ACID compliance, JSONB for flexible quote schemas, Redis for speed |
| **Document Storage** | AWS S3 (production), MinIO (local dev) | Durability, CDN integration |
| **Search** | Elasticsearch | Full-text search across quote metadata |
| **Analytics** | ClickHouse | Columnar storage for fast analytical queries |
| **Queue** | RabbitMQ / AWS SQS | Reliable async processing for document pipeline |
| **AI/ML** | OpenAI GPT-4o (extraction), AWS Textract (OCR), spaCy (NER), scikit-learn (outlier detection) | Best-in-class LLM for complex extraction, AWS for scalable OCR |
| **Infrastructure** | AWS EKS (Kubernetes), Docker, Terraform | Scalability, infrastructure-as-code |
| **Monitoring** | Datadog, PagerDuty, LogRocket | Full observability, user session replay |

### 9.4 Security & Compliance

| Requirement | Implementation |
|-------------|----------------|
| **Data Encryption** | AES-256 at rest, TLS 1.3 in transit |
| **Authentication** | OAuth 2.0 + SSO (Google, Microsoft), optional MFA |
| **Authorization** | RBAC (Role-Based Access Control) with workspace isolation |
| **Audit Logging** | Immutable audit trail for all quote access, modification, export |
| **SOC 2 Type II** | Target certification by Month 9 |
| **GDPR Compliance** | Data residency options (EU/US), right to deletion, data portability |
| **Email Security** | Dedicated subdomains per customer, SPF/DKIM/DMARC, no email content retained beyond extraction |

---

## 10. DATA MODEL

### 10.1 Core Entities

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│    WORKSPACE    │       │      USER       │       │     QUOTE       │
│                 │       │                 │       │                 │
│ id (UUID)       │◄──────┤ id (UUID)       │       │ id (UUID)       │
│ name            │       │ email           │       │ workspace_id    │
│ plan_tier       │       │ role            │       │ source_type     │
│ created_at      │       │ workspace_id    │       │ source_ref      │
│ settings        │       │ last_login      │       │ forwarder_id    │
└─────────────────┘       └─────────────────┘       │ lane_id         │
         ▲                                          │ status          │
         │                                          │ raw_document_url│
         │                                          │ extracted_data  │
         │                                          │ confidence      │
         │                                          │ created_at      │
         │                                          │ valid_until     │
         └──────────────────────────────────────────┘

┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│     LANE        │       │    FORWARDER    │       │  COMPARISON     │
│                 │       │                 │       │                 │
│ id (UUID)       │       │ id (UUID)       │       │ id (UUID)       │
│ workspace_id    │       │ workspace_id    │       │ workspace_id    │
│ origin_locode   │       │ name            │       │ lane_id         │
│ dest_locode     │       │ email_domain    │       │ quote_ids[]     │
│ origin_name     │       │ contact_info    │       │ winner_quote_id │
│ dest_name       │       │ avg_response_time│      │ status          │
│ mode (sea/air)  │       │ win_rate        │       │ created_by      │
│ created_at      │       │ created_at      │       │ created_at      │
└─────────────────┘       └─────────────────┘       └─────────────────┘
```

### 10.2 Quote Extracted Data Schema (JSONB)

```json
{
  "quote_id": "uuid",
  "extraction_version": "1.2.0",
  "confidence": {
    "overall": 0.94,
    "fields": {
      "origin": 0.98,
      "destination": 0.97,
      "base_rate": 0.95,
      "fsc": 0.88,
      "validity": 0.99
    }
  },
  "route": {
    "origin": {
      "raw": "Shanghai, China",
      "normalized": "CNSHA",
      "name": "Shanghai"
    },
    "destination": {
      "raw": "Los Angeles, CA",
      "normalized": "USLGB",
      "name": "Long Beach"
    },
    "mode": "FCL",
    "incoterm": "FOB"
  },
  "charges": [
    {
      "type": "ocean_freight",
      "description": "Ocean Freight",
      "amount": 1200.00,
      "currency": "USD",
      "unit": "TEU",
      "quantity": 2,
      "total": 2400.00
    },
    {
      "type": "surcharge",
      "subtype": "baf",
      "description": "Bunker Adjustment Factor",
      "amount": 425.00,
      "currency": "USD",
      "unit": "TEU",
      "quantity": 2,
      "total": 850.00
    }
  ],
  "totals": {
    "subtotal": 3250.00,
    "currency": "USD",
    "basis": "per_shipment"
  },
  "validity": {
    "start": "2026-05-01",
    "end": "2026-05-15",
    "timezone": "America/New_York"
  },
  "terms": {
    "transit_time": "14-16 days",
    "free_time": "7 days",
    "detention": "USD 150/day after free time"
  },
  "forwarder": {
    "name": "Global Freight Solutions",
    "email": "quotes@globalfreight.com",
    "contact": "John Smith"
  }
}
```

---

## 11. PRICING & PACKAGING

### 11.1 Pricing Tiers

| Feature | **Free** | **Starter** | **Professional** | **Team** | **Enterprise** |
|---------|----------|-------------|------------------|----------|----------------|
| **Price** | $0/month | $79/month | $249/month | $499/month | Custom |
| **Users** | 1 | 1 | 3 | 15 | Unlimited |
| **Quotes/Month** | 10 | 150 | Unlimited | Unlimited | Unlimited |
| **Ingestion** | Upload only | Upload + Email | + WhatsApp/Slack | + API | + Custom integrations |
| **Extraction** | Standard | Standard | + Advanced surcharges | + Custom fields | + Custom training |
| **Comparison** | Basic table | Basic table | + Outlier detection | + Historical trends | + Benchmarking |
| **Collaboration** | — | — | Shared workspace | Approval workflows | SSO, audit logs |
| **Integrations** | Excel export | Excel export | + QuickBooks/Xero | + TMS/ERP APIs | + Custom ERP |
| **Support** | Community | Email (48h) | Email (24h) | Priority chat | Dedicated CSM |
| **AI Learning** | Standard | Standard | + Forwarder-specific | + Workspace-specific | + Private model |

### 11.2 Pricing Rationale & Psychology

**Why a Free Tier is Non-Negotiable**

"Procurement Patty" will not expense $79/month — let alone $249/month — before she has processed her own quotes and seen the comparison table work on her real data. The free tier is not charity; it is the sales motion. Every user who processes 10 quotes for free and sees the magic is a conversion waiting to happen. Removing the free tier adds a sales step that kills top-of-funnel.

**Pricing Anchors**

- **vs. Enterprise TMS:** CargoLens Professional at $249/month is 97% cheaper than CargoWise or SAP TM ($100K–$500K/year). This anchor should appear explicitly on the pricing page.
- **vs. Manual Cost:** Per-quote cost at Professional tier with 200 quotes/month = $1.25/quote. Manual cost = $12.50/quote (25 min @ $30/hr). **10x ROI**. This framing — not feature lists — is what gets a PO signed.
- **vs. Old Starter ($99 + 50-quote cap):** The previous Starter tier was the worst of both worlds — high enough to trigger budget approval, with a usage cap that punishes active users in week one. The new $79 Starter with 150 quotes/month removes that friction entirely.

**Land & Expand Path**

Free (1 user, feel the product) → Starter (solo operator, daily use) → Professional (growing team, full surcharge detection) → Team (departmental rollout, approval workflows) → Enterprise (multi-site, custom integrations).

**What We Are NOT Doing**

- No "contact sales" for standard tiers. All pricing is public and transparent (Non-Negotiable N6).
- No annual-only plans at launch. Monthly billing until we have NPS data to justify locking customers in.

---

## 12. GO-TO-MARKET STRATEGY

### 12.1 Launch Phases

| Phase | Timeline | Focus | Tactics |
|-------|----------|-------|---------|
| **Validation** | Weeks 1–4 | 20 customer discovery calls | Reddit outreach (r/logistics, r/SupplyChainLogistics), LinkedIn DMs to logistics coordinators. Listen only — no pitching. Goal: confirm problem frequency and willingness to pay. |
| **Wizard of Oz** | Weeks 4–8 | 5 paying design partners | Manually extract real quotes into a clean Google Sheet for real prospects. Charge $50–$100. If they won't pay for a human doing it, they won't pay for software. This is the fastest market test possible. |
| **Alpha** | Month 2–3 | 10 design partners on real product | Free access for ongoing feedback. Iterate aggressively. Do not build features unused in this phase. |
| **Beta** | Month 4–5 | 50 early adopters, first paid conversions | Product Hunt, logistics newsletters, webinar series. Gate: 10 paying customers before Beta ends. |
| **GA** | Month 6 | Public launch | SEO content, paid search, partnership announcements. Do not launch publicly until ≥10 paying customers and NPS >30. |
| **Scale** | Month 7–12 | 200+ customers | Channel partners, industry events, case studies. |

### 12.2 Channel Strategy

| Channel | Tactic | Expected CAC | Volume |
|---------|--------|--------------|--------|
| **Organic Community** | Active participation in r/logistics, r/SupplyChainLogistics, LinkedIn groups. Share free Excel templates that "upgrade" to CargoLens. | $0 | High |
| **Content SEO** | Blog posts: "How to compare freight quotes," "Freight surcharge glossary," "Excel template for quote comparison." | $50 | Medium |
| **Product Hunt** | Launch with "Freight Quote Normalizer" positioning. Target logistics community upvotes. | $100 | Medium |
| **Paid Search** | Google Ads: "freight quote comparison software," "compare shipping quotes," "freight procurement tool." | $400 | Medium |
| **Partnerships** | Integration partnerships with GoFreight, Freightview, QuickBooks. Co-marketing webinars. | $200 | Low-Medium |
| **Industry Events** | TPM (Trans-Pacific Maritime), CSCMP EDGE. Booth + speaking slot. | $800 | Low |
| **Outbound SDR** | Targeted outreach to logistics coordinators at mid-sized importers (LinkedIn Sales Nav). | $600 | Medium |

### 12.3 Messaging Framework

> **Critical shift from v0.1:** The original messaging led with Patty's time savings ("stop retyping"). This is an efficiency pitch — it gets Patty excited and then stuck trying to get budget approved. The primary message must be an ROI pitch that lands with the economic buyer (Operations Manager, CFO) on first contact.

| Audience | Primary Message | Secondary Message | Proof Point |
|----------|----------------|-------------------|-------------|
| **CFOs/Owners** *(economic buyer — lead here)* | "Cut freight procurement costs by 15% — eliminate the gap between quoted and invoiced rates." | "Your team is approving quotes with hidden surcharges. CargoLens catches them automatically." | "$8K saved in one quarter from a single missed GRI" |
| **Operations Managers** *(economic buyer)* | "Make carrier decisions in minutes, not hours. Never miss a sailing window again." | "Your coordinators spend 20+ hours/month retyping quotes. That stops on Day 1." | "Decision time: 4 hours → 15 minutes" |
| **Logistics Coordinators** *(end user — drives adoption)* | "Stop being a data entry clerk. Compare any quote format in 60 seconds." | "Never miss a hidden surcharge again. CargoLens reads the fine print so you don't have to." | "Save 20+ hours/month" |
| **Freight Forwarders** *(secondary market)* | "Win more business with instantly comparable quotes." | "Reduce client response time from days to hours." | "40% faster client decisions" |

---

## 13. RISK REGISTER

| ID | Risk | Likelihood | Impact | Mitigation | Owner |
|----|------|------------|--------|------------|-------|
| R1 | **AI extraction accuracy <80% at launch** | Medium | Critical | Human-in-the-loop mandatory; aggressive training on 1,000+ real quotes before launch; continuous learning pipeline | CTO |
| R2 | **Incumbent TMS adds quote normalization** | Medium | High | Speed to market; freight-specific depth; mid-market focus incumbents ignore | CEO |
| R3 | **Forwarders resist (fear of transparency)** | Low | Medium | Target shippers/procurement teams, not forwarders; position as "procurement efficiency" not "forwarder comparison" | CPO |
| R4 | **Data privacy concerns block enterprise deals** | Medium | High | SOC 2 Type II by Month 9; single-tenant option; EU data residency; clear DPA | CTO |
| R5 | **Customer churn due to low usage** | Medium | High | Activation onboarding (5-min time-to-value); weekly digest emails; customer success outreach at Day 7, 30, 60 | CCO |
| R6 | **Email parsing reliability issues** | Medium | High | Dedicated email infrastructure (Mailgun/SendGrid); fallback manual upload; 99.9% uptime SLA | CTO |
| R7 | **Market smaller than projected** | Low | Medium | Diversify into adjacent verticals (trucking quotes, warehousing RFQs, customs brokerage) | CEO |
| R8 | **Key person dependency (AI/ML lead)** | Medium | Medium | Documented model training pipeline; cross-training; consultant relationships | CTO |

---

## 14. COMPETITIVE ANALYSIS

### 14.1 Direct Competitors

| Competitor | Strength | Weakness | Our Advantage |
|------------|----------|----------|---------------|
| **ProQsmart** | General AI quote extraction | Not freight-specific; no logistics domain knowledge | Deep freight taxonomy, lane normalization, surcharge detection |
| **Hyperscience** | Enterprise document AI | $50K+ minimum; not logistics-focused | Mid-market pricing; freight-specific; 5-min setup |
| **Rossum** | Invoice/document extraction | Generic; requires heavy customization | Pre-trained on freight quotes; zero-config for logistics |

### 14.2 Indirect Competitors

| Competitor | Strength | Weakness | Our Advantage |
|------------|----------|----------|---------------|
| **Freightos** | Live spot rates, marketplace | Only their network rates; doesn't normalize inbound quotes | Any quote from any forwarder; procurement tool, not marketplace |
| **GoFreight** | Mid-market TMS | Quote comparison is manual; no AI extraction | AI-powered ingestion; complements rather than replaces TMS |
| **Excel + Email** | Free, familiar | Slow, error-prone, no collaboration, no history | 10x faster, accurate, collaborative, analytical |

### 14.3 Competitive Positioning Map

```
                    HIGH COMPLEXITY
                         │
     CargoWise (SAP)     │     Coupa / Ariba
     (Enterprise TMS)    │     (Enterprise Procurement)
                         │
    ─────────────────────┼─────────────────────
    LOW PRICE            │            HIGH PRICE
                         │
     Excel/Email         │     ★ CARGOLENS ★
     (Manual)            │     (Mid-Market AI)
                         │
     Google Docs         │
                         │
                    LOW COMPLEXITY
```

---

## 15. FINANCIAL PROJECTIONS

### 15.0 TAM Reality Check

> **The original PRD cited 100,000+ freight forwarders as the market. This is wrong in two ways:** (1) Forwarders send quotes — they are not the primary buyer. (2) Citing a large number of entities without a bottoms-up penetration analysis is not TAM analysis, it's wishful thinking.

**Bottoms-up TAM (Primary Segment: Mid-Market Shippers):**
- Mid-sized importers/exporters globally (15–100 employees, $500K–$5M annual freight spend): ~35,000–50,000 companies
- Reachable in English-speaking markets at launch (US, UK, AU, SG): ~15,000–20,000 companies
- Realistic 3-year penetration at our stage: 1–3% = 150–600 customers
- This is still a viable market. Y1 target of 150 customers = 0.75–1% penetration. Achievable. Y3 target of 1,500 customers = ~8–10% penetration. Aggressive — requires strong NRR and expansion into secondary segments (freight forwarders, enterprise).

**The projections below are not revised — they remain aspirational targets. What changes is the honesty about what it will take to hit them:** lower churn than most B2B SaaS, strong word-of-mouth within logistics communities, and successful expansion from Mid-Market into Freight Forwarders by Year 2.

### 15.1 3-Year Revenue Model

| Year | Customers | ARPU | MRR | ARR | Churn | Expansion Revenue |
|------|-----------|------|-----|-----|-------|-------------------|
| **Y1** | 150 | $200 | $30,000 | $360,000 | 5%/mo | 10% |
| **Y2** | 500 | $240 | $120,000 | $1,440,000 | 4%/mo | 15% |
| **Y3** | 1,200 | $275 | $330,000 | $3,960,000 | 3%/mo | 20% |

*ARPU revised down slightly from v0.1 to reflect the new Free tier reducing initial conversion value and the new $79 Starter replacing the $99 entry point.*

### 15.2 Unit Economics

| Metric | Y1 | Y2 | Y3 |
|--------|-----|-----|-----|
| **CAC** | $800 | $600 | $450 |
| **LTV** | $3,840 | $5,760 | $8,250 |
| **LTV:CAC** | 4.8:1 | 9.6:1 | 18.3:1 |
| **Payback Period** | 4.0 months | 2.5 months | 1.6 months |
| **Gross Margin** | 72% | 78% | 82% |
| **Net Revenue Retention** | 105% | 115% | 125% |

### 15.3 Funding Requirements

| Round | Amount | Timing | Use of Funds |
|-------|--------|--------|--------------|
| **Pre-Seed** | $500K | Month 0 | MVP development (simplified stack), 2 engineers, 1 PM, cloud infrastructure |
| **Seed** | $2M | Month 6 | Team expansion (4 engineers, 2 sales, 1 CS), SOC 2, marketing. Gate: must have ≥25 paying customers before raising. |
| **Series A** | $8M | Month 18 | Scale GTM, enterprise features, international expansion. Gate: must have ≥150 paying customers and NRR >110% before raising. |

---

## 16. APPENDICES

### Appendix A: Glossary of Freight Terms

| Term | Definition |
|------|------------|
| **BAF** | Bunker Adjustment Factor — fuel surcharge for ocean freight |
| **CBM** | Cubic Meter — volume measurement |
| **DTHC** | Destination Terminal Handling Charge |
| **FSC** | Fuel Surcharge |
| **GRI** | General Rate Increase — periodic base rate increase |
| **FCL** | Full Container Load |
| **LCL** | Less than Container Load |
| **TEU** | Twenty-foot Equivalent Unit — standard container measure |
| **Incoterm** | International Commercial Terms (FOB, CIF, DDP, etc.) |
| **UN/LOCODE** | United Nations Code for Trade and Transport Locations |

### Appendix B: User Interview Guide (Template)

1. *"Walk me through the last time you received a freight quote. What happened step-by-step?"*
2. *"How long does it typically take you to compare quotes from 3 different forwarders?"*
3. *"Tell me about a time you missed a surcharge or fee. What was the impact?"*
4. *"What tools do you use today? What do you love/hate about each?"*
5. *"If you had a magic wand, what would your quote comparison process look like?"*
6. *"What would make you pay $299/month for this?"*

### Appendix C: Regulatory Considerations

- **GDPR (EU):** Data processing agreement, right to erasure, data portability
- **CCPA (California):** Consumer privacy rights disclosure
- **SOC 2 Type II:** Security, availability, processing integrity, confidentiality
- **ITAR/EAR (US):** If handling defense-related freight, export control compliance

### Appendix D: Integration Specifications

| System | Integration Type | Data Flow | Priority |
|--------|-----------------|-----------|----------|
| **QuickBooks** | OAuth API | Quotes → Bills/POs | P1 |
| **Xero** | OAuth API | Quotes → Bills | P1 |
| **GoFreight** | REST API | Normalized quote → TMS booking | P2 |
| **NetSuite** | RESTlet/SuiteTalk | Quotes → Purchase Orders | P2 |
| **SAP** | OData/API | Quotes → Procurement module | P3 |
| **Slack** | Webhook/Bot | Notifications, approvals | P2 |
| **Microsoft Teams** | Bot Framework | Notifications, approvals | P3 |

### Appendix E: Pre-Build Customer Validation Protocol

> **This appendix did not exist in v0.1. It is now a required gate before engineering resources are committed.** The core risk is building for 6+ months without a paying customer. This protocol is designed to surface that failure mode in weeks, not months.

#### Stage 1: Discovery (Weeks 1–4)
**Goal:** Confirm that the problem is frequent, painful, and that someone will pay to fix it.

**Method:** 20 customer discovery calls with logistics coordinators and operations managers. Sourced from: r/logistics, r/SupplyChainLogistics, LinkedIn (search: "logistics coordinator" + "freight procurement"), and personal network.

**Script (do not pitch — only ask):**
1. *"Walk me through the last time you received a freight quote. What happened step-by-step?"*
2. *"How long does it typically take you to compare quotes from 3 different forwarders?"*
3. *"Tell me about a time you missed a surcharge or fee. What was the impact?"*
4. *"What tools do you use today? What do you love/hate about each?"*
5. *"How many people at your company touch freight quotes?"*
6. *"If this problem were solved, what would it be worth to your company per month?"*

**Pass criteria to proceed to Stage 2:**
- ≥15 of 20 people describe the manual quote comparison problem unprompted
- ≥10 of 20 can name a specific dollar amount or time lost
- ≥8 of 20 say they'd pay something when asked directly

#### Stage 2: Wizard of Oz Test (Weeks 4–8)
**Goal:** Validate willingness to pay before writing a line of code.

**Method:** Find 5 prospects from Stage 1 who expressed the strongest pain. Offer to manually extract and normalize their next 3 real quotes into a clean comparison sheet. Charge $50–$100 upfront via Stripe.

**Why this works:** If someone will pay $50 for a human to do what CargoLens will automate, the product will sell. If they won't pay $50, the pricing is wrong or the problem isn't painful enough.

**Pass criteria to proceed to MVP build:**
- ≥3 of 5 pay upfront without significant friction
- At least 1 prospect says something equivalent to *"Can I get this every week?"*
- Zero prospects say *"I'll just keep using Excel"* after seeing the output

#### Stage 3: Alpha Gate (Month 3)
Before entering Beta or taking on marketing spend, the product must demonstrate:
- ≥10 users have processed ≥5 quotes each
- Extraction accuracy ≥80% without human correction (on real user quotes, not test data)
- At least 3 users have shared the comparison output with their manager
- NPS ≥20 among Alpha users

**If these gates are not met, do not proceed to public launch. Fix the product.**

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 0.1 | 2026-05-07 | Product Strategy | Initial draft | Pending |
| 0.2 | 2026-05-08 | Product Strategy | Revised pricing model (added free tier, rebalanced tiers); updated GTM buyer targeting (Operations Manager / CFO as primary economic buyer); corrected TAM framing (bottoms-up, realistic penetration); slimmed MVP scope (cut premature infrastructure complexity); added pre-build customer validation protocol | Pending |

---

**Document Control:** This PRD is a living document. All changes require review by Product, Engineering, and Design leads. Major scope changes require executive sign-off.
