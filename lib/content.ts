import type { LucideIcon } from "lucide-react";
import { Bot, ChartNoAxesCombined, FileText, Mail, Megaphone, Search, Share2, Workflow } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  includes: string[];
  challenge: string;
  benefits: string;
  suitableFor: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "ai-strategy",
    title: "AI-powered digital marketing strategy",
    short: "A focused roadmap connecting your goals, audience, channels, and practical AI opportunities.",
    includes: ["Business and audience review", "Channel priorities", "90-day action roadmap", "Measurement plan"],
    challenge: "Marketing feels scattered, reactive, or disconnected from the outcomes your business needs.",
    benefits: "A clearer order of operations, better-informed decisions, and a practical plan your team can follow.",
    suitableFor: "Owners who need direction before investing more time or budget in marketing.",
    icon: ChartNoAxesCombined,
  },
  {
    slug: "seo-local",
    title: "Search engine optimization & local visibility",
    short: "Improve how your business is found when potential customers search for the services you provide.",
    includes: ["Search and website review", "On-page recommendations", "Local profile optimization", "Content opportunities"],
    challenge: "The right people cannot easily find your business in search or local results.",
    benefits: "A stronger search foundation, more relevant visibility, and clearer paths from discovery to enquiry.",
    suitableFor: "Service businesses, local companies, and established websites that need more qualified discovery.",
    icon: Search,
  },
  {
    slug: "social-media",
    title: "Social media marketing & content planning",
    short: "Build a sustainable content rhythm that supports trust, visibility, and real business conversations.",
    includes: ["Channel and audience focus", "Content pillars", "Editorial calendar", "Reusable content workflows"],
    challenge: "Posting is inconsistent, time-consuming, or disconnected from a clear marketing goal.",
    benefits: "More consistent communication, less content guesswork, and a repeatable planning process.",
    suitableFor: "Businesses that want a credible social presence without being online all day.",
    icon: Share2,
  },
  {
    slug: "paid-advertising",
    title: "Paid advertising campaign management",
    short: "Plan and manage focused campaigns built around relevant audiences, clear offers, and useful data.",
    includes: ["Campaign planning", "Audience and message development", "Landing-page review", "Ongoing optimization"],
    challenge: "Ad spend is difficult to evaluate, campaigns lack focus, or traffic is not turning into meaningful action.",
    benefits: "More disciplined testing, clearer reporting, and stronger alignment between ads and customer intent.",
    suitableFor: "Businesses with a validated offer and budget available for structured testing.",
    icon: Megaphone,
  },
  {
    slug: "content-marketing",
    title: "AI-assisted content marketing",
    short: "Use AI responsibly to accelerate research, planning, drafting, and repurposing while keeping your voice human.",
    includes: ["Content strategy", "AI-supported workflows", "Editorial standards", "Repurposing system"],
    challenge: "Creating useful content takes too long, or rushed content sounds generic and inconsistent.",
    benefits: "A more efficient production process and stronger quality control without handing your brand voice to a tool.",
    suitableFor: "Small teams that need to produce helpful content consistently with limited resources.",
    icon: FileText,
  },
  {
    slug: "email-automation",
    title: "Email marketing & marketing automation",
    short: "Create thoughtful follow-up journeys that keep leads informed and reduce repetitive manual work.",
    includes: ["List and journey mapping", "Welcome and nurture sequences", "Automation setup", "Performance review"],
    challenge: "New leads go quiet, follow-up depends on memory, or email communication has no clear sequence.",
    benefits: "More reliable follow-up, timely communication, and a better experience for potential customers.",
    suitableFor: "Businesses that collect enquiries, leads, or subscribers and need a consistent follow-up process.",
    icon: Mail,
  },
  {
    slug: "lead-generation",
    title: "Lead generation & conversion optimization",
    short: "Strengthen the journey from first visit to qualified enquiry by removing friction and clarifying the next step.",
    includes: ["Customer journey review", "Offer and CTA refinement", "Landing-page recommendations", "Conversion tracking plan"],
    challenge: "Marketing creates attention, but too few visitors take the next meaningful action.",
    benefits: "A clearer value proposition, easier enquiry paths, and better insight into where leads are lost.",
    suitableFor: "Businesses with traffic or audience attention that is not consistently becoming enquiries.",
    icon: Workflow,
  },
  {
    slug: "ai-tools",
    title: "AI tools consulting & workflow implementation",
    short: "Choose and introduce AI tools based on real work your business needs to improve—not trends alone.",
    includes: ["Workflow discovery", "Tool evaluation", "Implementation guidance", "Team playbooks and training"],
    challenge: "Too many tools promise quick wins, but it is unclear which are useful, safe, or worth learning.",
    benefits: "A smaller, more purposeful toolset and workflows that save time without sacrificing oversight.",
    suitableFor: "Owners and teams who want practical AI adoption with clear human review points.",
    icon: Bot,
  },
];

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string };

export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  kicker: string;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "practical-ways-small-businesses-can-use-ai-in-marketing",
    title: "Practical Ways Small Businesses Can Use AI in Their Marketing",
    summary: "A grounded guide to choosing useful AI tasks, keeping human judgment in the loop, and building simple workflows that save time.",
    category: "AI for Marketing",
    publishedAt: "2026-09-18",
    readingTime: "8 min read",
    kicker: "Start with the work, not the tool",
    blocks: [
      { type: "p", text: "AI can be useful for a small business, but only when it solves a real problem. The most productive starting point is not asking which tool is most impressive. It is identifying repetitive marketing work, slow handoffs, or blank-page tasks where a capable assistant could help you move faster." },
      { type: "p", text: "Think of AI as a first-pass collaborator. It can organize information, produce options, and turn a rough idea into a workable draft. Your knowledge of customers, context, quality, and brand voice remains the part that makes the output valuable." },
      { type: "h2", text: "1. Turn customer questions into a content plan" },
      { type: "p", text: "Your inbox, sales calls, reviews, and support conversations already contain useful content ideas. Gather recurring questions and ask an AI assistant to group them by topic, buyer stage, and urgency. From there, create a simple monthly plan using the strongest questions as article, email, and social post topics." },
      { type: "callout", title: "Practical example", text: "A local accounting firm could group questions into getting started, ongoing bookkeeping, and tax preparation, then build one useful content theme around each group." },
      { type: "h2", text: "2. Repurpose one strong idea across channels" },
      { type: "p", text: "Small teams often create content once and move on. AI can help reshape a useful article, webinar, or customer guide into several formats. Ask for a short email, three social angles, a checklist, and a script outline—but review each version for accuracy and adapt it to the channel rather than publishing the same wording everywhere." },
      { type: "h2", text: "3. Improve first drafts without losing your voice" },
      { type: "p", text: "Use AI to organize rough notes, suggest clearer headings, or identify unanswered questions. Give it a short voice guide with examples of phrases you use and avoid. Then edit the draft yourself. A good workflow removes friction from writing; it should not remove the perspective that makes your business credible." },
      { type: "ul", items: ["Provide the audience, purpose, and desired action before requesting a draft.", "Ask the tool to flag assumptions instead of filling gaps with invented facts.", "Check names, product details, links, and claims before publishing.", "Save strong instructions as a repeatable brief for future content."] },
      { type: "h2", text: "4. Prepare better customer research" },
      { type: "p", text: "AI can summarize interview notes, organize survey responses, and highlight patterns in language. Remove personal or sensitive information first, and treat the output as a set of hypotheses to verify. The goal is to see what deserves a closer look, not to let a model decide what customers believe." },
      { type: "h2", text: "5. Create more consistent lead follow-up" },
      { type: "p", text: "Map the common steps after someone submits an enquiry. AI can help draft acknowledgement emails, prepare call notes, or personalize a follow-up template using information the lead has chosen to share. Automation should make communication more timely while preserving an easy path to a real person." },
      { type: "h2", text: "Choose one workflow and measure it" },
      { type: "p", text: "Pick a task that happens often, has a clear owner, and is easy to review. Document how long it takes today and what quality looks like. Test the AI-supported version for several cycles, then compare time saved, corrections needed, and whether the final work is actually more useful." },
      { type: "ol", items: ["Define the task and the business reason for improving it.", "Create an input template and a review checklist.", "Run a small test with non-sensitive information.", "Record what worked, what failed, and what still needs human judgment.", "Standardize the workflow only after it proves useful."] },
      { type: "h2", text: "Keep sensible boundaries" },
      { type: "p", text: "Do not paste confidential customer information, passwords, private contracts, or sensitive business data into tools without understanding their data controls. Keep human review for public claims, customer communication, regulated topics, and decisions that affect people. A simple rule helps: automate preparation and repetition; keep accountability with a person." },
      { type: "p", text: "The best small-business AI strategy is usually modest and specific. One well-designed workflow that the team trusts can create more value than a collection of tools no one uses consistently." },
    ],
  },
  {
    slug: "digital-marketing-plan-for-small-business",
    title: "How to Build a Digital Marketing Plan for Your Small Business",
    summary: "A step-by-step framework for turning business goals into focused audiences, messages, channels, actions, and measurements.",
    category: "Marketing Strategy",
    publishedAt: "2026-08-27",
    readingTime: "10 min read",
    kicker: "A plan you can actually use",
    blocks: [
      { type: "p", text: "A useful marketing plan is a decision-making tool, not a long document that sits in a folder. It should tell you whom you are trying to reach, what you want them to understand, where you will communicate, what happens next, and how you will learn from the response." },
      { type: "p", text: "For a small business, focus matters more than volume. A narrow plan that the team can execute and review will usually be more useful than trying to appear on every channel at once." },
      { type: "h2", text: "Step 1: Start with one business outcome" },
      { type: "p", text: "Choose a meaningful outcome for the next quarter, such as increasing qualified consultation enquiries, filling places for a service, or generating repeat purchases from existing customers. Avoid goals such as “post more” or “go viral.” Those describe activity, not business value." },
      { type: "callout", title: "Make it operational", text: "Write the goal in a sentence: We want more of this type of customer to take this action because it supports this business priority." },
      { type: "h2", text: "Step 2: Define the customer situation" },
      { type: "p", text: "Describe the people most likely to need the offer now. Focus on the situation that creates demand: the trigger, the problem they are trying to solve, what they have already tried, and what might delay a decision. Real sales conversations and customer questions are stronger inputs than a fictional persona filled with demographic detail." },
      { type: "ul", items: ["What changed recently that makes the problem important?", "What outcome are they hoping to achieve?", "What are they worried about getting wrong?", "What proof or explanation would reduce uncertainty?", "Who else may influence the decision?"] },
      { type: "h2", text: "Step 3: Clarify the offer and message" },
      { type: "p", text: "Explain the offer in customer language. Lead with the problem it addresses and the practical change it is designed to support. Add enough detail to make the next step feel safe: what is included, who it is for, how the process works, and what the prospect should expect." },
      { type: "p", text: "Avoid stacking vague claims such as innovative, cutting-edge, or best-in-class. Specific language builds more trust. “A two-week website review with prioritized fixes” is easier to understand than “transformative digital solutions.”" },
      { type: "h2", text: "Step 4: Choose a small channel mix" },
      { type: "p", text: "Select channels based on how customers discover, evaluate, and return to businesses like yours. Search may capture active demand. Social content can build familiarity. Email can support follow-up. Partnerships can create trusted introductions. Choose one primary acquisition channel and one or two supporting channels you can maintain well." },
      { type: "h2", text: "Step 5: Map the path to enquiry" },
      { type: "p", text: "Follow the journey from a post, search result, referral, or ad to the next action. Make sure the landing page answers the key question, the call to action is clear, the form asks only for useful information, and the follow-up sets expectations. Each unnecessary decision or dead end can reduce the number of people who continue." },
      { type: "h2", text: "Step 6: Create a 90-day action rhythm" },
      { type: "ol", items: ["Month one: establish the core message, landing page, tracking, and content themes.", "Month two: publish consistently, begin outreach or campaigns, and record early questions.", "Month three: compare channel quality, improve weak steps, and double down on useful patterns."] },
      { type: "p", text: "Assign an owner and deadline to every action. If an activity has no owner or does not support the chosen outcome, remove it from the plan." },
      { type: "h2", text: "Step 7: Measure progress without drowning in data" },
      { type: "p", text: "Use a short scorecard that connects activity to quality. Track a few leading indicators, such as relevant visits or engaged replies, and a few outcome indicators, such as qualified enquiries and completed consultations. Add a brief note about what you learned; numbers without context do not tell you what to change." },
      { type: "callout", title: "Monthly review prompt", text: "What created useful attention? Where did prospects stop? What did sales conversations reveal? What is the smallest change worth testing next?" },
      { type: "h2", text: "Keep the plan alive" },
      { type: "p", text: "Review the plan monthly and revise it when customer evidence changes—not simply because a new tactic is popular. A good plan creates consistency while leaving room to learn. It helps a small team say yes to work that matters and no to activity that looks busy but does not move the business forward." },
    ],
  },
  {
    slug: "ai-marketing-automation-lead-follow-up",
    title: "How AI and Marketing Automation Can Support Lead Follow-Up",
    summary: "Design a timely, helpful follow-up system that reduces manual work without making prospective customers feel like records in a database.",
    category: "Automation",
    publishedAt: "2026-08-06",
    readingTime: "9 min read",
    kicker: "Timely follow-up that still feels human",
    blocks: [
      { type: "p", text: "Lead follow-up often breaks down for ordinary reasons: an enquiry arrives during a busy day, information is stored in several places, no one owns the next action, or every response has to be written from scratch. Automation can make the routine parts dependable so people have more time for useful conversations." },
      { type: "p", text: "The aim is not to automate a relationship. It is to ensure that interested people receive a timely acknowledgement, relevant information, and a clear next step while your team keeps control of judgment and personal communication." },
      { type: "h2", text: "Map the follow-up journey before choosing tools" },
      { type: "p", text: "Start with a simple flow from enquiry to decision. Record what information enters the system, who reviews it, which response should happen immediately, when a personal reply is needed, and when a lead should stop receiving messages." },
      { type: "ol", items: ["A visitor submits an enquiry or requests a consultation.", "The system confirms receipt and explains what will happen next.", "The lead is categorized using information they provided.", "A team member receives the context and a clear follow-up task.", "Helpful reminders or resources are sent when appropriate.", "The sequence stops after a reply, booking, opt-out, or defined endpoint."] },
      { type: "h2", text: "Use automation for reliability" },
      { type: "p", text: "Good automation handles predictable events: sending a confirmation, notifying the right person, creating a task, scheduling a reminder, or moving a record after a known action. Each automation should have one owner, a documented trigger, and a way to see when it fails." },
      { type: "callout", title: "A useful confirmation email", text: "Acknowledge the enquiry, repeat the expected response time, summarize the next step, and provide a direct way to add context. Do not pretend the message was personally typed if it was not." },
      { type: "h2", text: "Use AI for preparation and assistance" },
      { type: "p", text: "AI can summarize a lead’s submitted information, suggest a reply draft, extract common themes, or recommend the most relevant approved resource. These uses can reduce preparation time, but the output should remain a suggestion. A person should review messages involving pricing, commitments, sensitive situations, or nuanced advice." },
      { type: "ul", items: ["Summarize the stated goal, constraints, and questions before a call.", "Draft a reply using approved facts and a defined tone.", "Suggest which existing guide best matches the lead’s topic.", "Turn call notes into a follow-up checklist for human review."] },
      { type: "h2", text: "Segment using information people actually provide" },
      { type: "p", text: "A practical form might ask about service interest, business type, or the challenge the person wants to discuss. Use those answers to send more relevant information. Avoid inferring sensitive characteristics or creating complicated scoring systems from weak signals. Transparent, first-party information is easier to explain and maintain." },
      { type: "h2", text: "Write a short, useful sequence" },
      { type: "p", text: "A simple sequence can begin with confirmation, continue with one resource that addresses the stated challenge, and end with a polite invitation to reply or book. Every message should earn its place. If an email repeats the same sales pitch without adding clarity, remove it." },
      { type: "h3", text: "Build clear exit conditions" },
      { type: "p", text: "Stop automated messages when the person replies, completes the desired action, opts out, or reaches the end of the sequence. Nothing undermines confidence faster than receiving an automated reminder after already speaking with someone." },
      { type: "h2", text: "Measure quality, not just speed" },
      { type: "p", text: "Response time matters, but it is not the whole story. Review whether leads receive accurate information, whether handoffs include enough context, how often drafts need major corrections, and which follow-up steps lead to real conversations. Ask the team where the system creates confusion or extra work." },
      { type: "h2", text: "Begin with one dependable workflow" },
      { type: "p", text: "Start with the most common enquiry type. Build the acknowledgement, internal notification, ownership rule, and one follow-up reminder. Test every path—including errors and opt-outs—before adding AI-generated drafts or more complex branching. A small system that works consistently is a better foundation than an ambitious automation no one can troubleshoot." },
    ],
  },
];

export const articleCategories = ["All", ...Array.from(new Set(articles.map((article) => article.category)))];

export function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${value}T12:00:00Z`));
}
