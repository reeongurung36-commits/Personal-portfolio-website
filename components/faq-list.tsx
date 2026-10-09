"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What services do you provide?", a: "I help with digital marketing strategy, SEO and local visibility, social and content planning, paid campaigns, email automation, lead generation, conversion improvement, and practical AI workflow implementation. The right mix depends on your goals, audience, team, and budget." },
  { q: "Is this suitable for a smaller business?", a: "Yes. The approach is designed to prioritize the highest-value work first, make responsible use of limited time and budget, and introduce systems your team can realistically maintain." },
  { q: "What happens in the free consultation?", a: "We discuss your business, current marketing, goals, and constraints. I identify useful opportunities and outline a customized plan you can begin implementing. There is no obligation to continue." },
  { q: "Do I need to know which AI tools I want?", a: "No. We begin with the work your business needs to improve. Tools are considered only after the goal, workflow, information requirements, and human review points are clear." },
  { q: "How do I get started?", a: "Book a free consultation or send an enquiry through the contact page. Share the challenge you want to solve, and I will respond with the clearest next step." },
];

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{faqs.map((item, index) => (
    <div className={`faq-item ${open === index ? "is-open" : ""}`} key={item.q}>
      <h3><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>{item.q}<ChevronDown aria-hidden="true" /></button></h3>
      <div className="faq-answer" hidden={open !== index}><p>{item.a}</p></div>
    </div>
  ))}</div>;
}
