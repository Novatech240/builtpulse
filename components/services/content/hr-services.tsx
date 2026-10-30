import { Exit, Pen, Receipt, Scale, Wallet } from "../icons";
import type { ServiceContent } from "../types";

const hrServices: ServiceContent = {
  slug: "hr-services",
  name: "HR Services",
  metadata: {
    title: "HR Services in Dubai — BuiltPulse",
    description: "Recruitment, contracts, onboarding, payroll and WPS, leave and gratuity, in one structured process so every hire, payment and exit follows the rules.",
  },

  hero: {
    eyebrow: "HR services · Dubai, UAE",
    titleSize: "md",
    title: (
      <>
        <span data-hero className="block font-bold text-white">
          A compliant team,
        </span>
        <span data-hero className="block">
          organised from <span className="font-bold text-gold-500">hiring to exit.</span>
        </span>
      </>
    ),
    body: "Recruitment, contracts, onboarding, payroll and WPS, leave and gratuity, and the records that connect them. Growing teams often run these tasks in spreadsheets until a deadline is missed. BuiltPulse puts them in one structured process, so every hire, payment and exit follows the rules.",
    primaryCta: "Book an HR Review",
    secondaryCta: "See the HR Services",
    secondaryHref: "#overview",
  },

  form: {
    eyebrow: "HR services",
    title: "Tell us how many people you manage.",
    body: "Share your team size and the HR tasks that take the most time. We reply with the services that fit and the records we would set up first.",
    companyLabel: "Company name",
    companyPlaceholder: "Company name",
    selects: [
      { label: "Team size", options: ["1 to 10", "11 to 30", "31 to 100", "More than 100", "Not sure yet"] },
      { label: "Main need", options: ["Payroll and WPS", "Hiring", "Contracts and policies", "Gratuity and exits", "Full HR administration", "Not sure yet"] },
    ],
  },

  overview: {
    headline: "Administration that keeps pace with a growing team.",
    body: "Every hire, salary, leave request and exit creates a record that the authorities can check. Growing companies often handle these in separate spreadsheets, and small gaps add up to disputes. We organise the employee lifecycle into one process, so the records, contracts and payments agree with each other.",
    imageCaption: "BuiltPulse HR consultant reviewing employee records",
    features: [
      { title: "Contracts and policies in order", problem: "Vague contracts and missing handbooks lead to disputes that are hard to settle later.", solution: "We draft employment contracts and an employee handbook aligned to current labour law.", Icon: Pen },
      { title: "Payroll and WPS on schedule", problem: "A late or unregistered salary run can be flagged by MOHRE and hold up work-permit processing.", solution: "We run payroll and submit WPS files through your registered bank on a fixed monthly calendar.", Icon: Wallet },
      { title: "Labour law kept current", problem: "Rules on leave, gratuity and termination change, and missed updates create liability.", solution: "We advise on labour law compliance and check each policy against the current requirements.", Icon: Scale },
      { title: "Exits calculated and documented", problem: "End-of-service amounts calculated from the wrong salary lead to disputes and missed deadlines.", solution: "We calculate leave and gratuity on basic salary, record each step, and support payment within the required period.", Icon: Exit },
    ],
  },

  partOne: {
    eyebrow: "Part 01 of 02 · Hiring and employment set-up",
    headline: "Hire well, and put every employment term in writing.",
    body: "This part covers the start of the employment relationship. We support recruitment and candidate sourcing, then draft the employment contract that sets the salary, hours and payment method.",
    tags: ["Recruitment agency UAE", "Employment contract Dubai", "Onboarding and induction", "HR policy and handbook"],
    cta: "Plan My Hiring Set-up",
    imageCaption: "HR lead and BuiltPulse consultant finalising an employment contract",
  },

  steps: {
    eyebrow: "The HR set-up roadmap",
    headline: "Five steps from first audit to a running monthly cycle.",
    body: "We start with what you already have, because many growing companies hold records in several places. Each step builds the records the next one needs, so payroll, contracts and exits draw on the same data.",
    items: [
      { title: "HR audit and records check", you: "share your employee list, contracts, pay records and current policies.", we: "identify gaps, expiring documents and any compliance risks." },
      { title: "Contracts and policies", you: "confirm the job titles, pay structure and working hours for each role.", we: "draft or update contracts and the employee handbook for your approval." },
      { title: "Payroll and WPS set-up", you: "provide bank details, pay dates and approved allowances.", we: "set up the payroll cycle and the WPS file through your registered bank." },
      { title: "Employee records and expiry tracking", you: "provide visa, Emirates ID and insurance expiry dates.", we: "build the records register and set reminders ahead of each expiry." },
      { title: "Monthly cycle and review", you: "approve each payroll run and report leave and hires as they happen.", we: "run the cycle on schedule and review compliance each quarter." },
    ],
    imageCaption: "BuiltPulse consultant walking a client through the HR set-up roadmap (process visual)",
  },

  about: {
    eyebrow: "Trusted network",
    headline: "Employers we support with payroll and HR administration",
    note: "Fictional demo wordmarks — not real clients. Replace with approved logos.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02 · Pay, leave and exits",
    headline: "Pay, leave and exits calculated to the same record.",
    body: "Payroll is where small errors become visible to employees and authorities, and exits are where they become costly. We run the monthly pay cycle through WPS, track leave balances against each contract, and calculate end-of-service amounts on basic salary.",
    cta: "Review My Payroll",
    imageCaption: "HR lead reviewing a payroll run with a BuiltPulse advisor",
    cards: [
      { title: "Payroll run through WPS", desc: "Monthly salary processing with WPS files submitted through your registered bank.", audience: "For companies with employees who are paid by bank transfer under the WPS system.", includes: "Includes pay cycle set-up, payslips, WPS file preparation and payment reconciliation.", Icon: Wallet },
      { title: "Gratuity calculated accurately", desc: "Leave and end-of-service calculations based on basic salary and years of service.", audience: "For employers who need a clear figure before a resignation, termination or contract ends.", includes: "Includes gratuity calculation, a leave balance summary and a settlement statement.", Icon: Receipt },
      { title: "Exits handled and recorded", desc: "Termination and repatriation steps, documented from the notice to the final payment.", audience: "For employers ending a contract, or relocating an employee out of the UAE.", includes: "Includes exit checklist, final settlement support, visa cancellation coordination and records closure.", Icon: Exit },
    ],
  },

  testimonials: {
    title: "HR leads on what changed after the first payroll cycle",
    body: "Clients describe how payroll, contracts and records became predictable once the cycle was running. Their stories cover pay runs, new hires and exits, in their own words.",
  },

  cta: {
    title: "Running HR on spreadsheets? Start with a records review.",
    body: "A short call looks at your team size, payroll cycle and the records you keep now. You leave with a list of the gaps we would close first, and the documents we need to start. Our team then confirms the scope and fees before any work begins.",
    button: "Book an HR Review",
  },

  faq: {
    items: [
      {
        q: "How is end-of-service gratuity calculated in the UAE?",
        a: "Gratuity is 21 days of basic salary for each of the first five years of service, and 30 days for each year after that. It is calculated on basic salary only, not total pay, and total gratuity cannot exceed two years of basic salary. We calculate each figure from your payroll records and show the working.",
      },
      {
        q: "Do I need a written employment contract for every employee?",
        a: "Yes, every employee should have a written contract that sets out the salary, working hours and method of wage payment. The contract must follow the content and language rules that MOHRE applies. We draft or review each contract before it is signed.",
      },
      {
        q: "What is WPS, and do I have to use it?",
        a: "WPS is the Wage Protection System, which tracks salary payments electronically through approved banks. Employers registered with MOHRE generally pay wages through it, and late or missing runs are flagged. We prepare the WPS file and check it against the payroll before submission.",
      },
      {
        q: "When must end-of-service pay be settled?",
        a: "MOHRE expects wages and end-of-service entitlements to be settled within 14 days of the contract ending. Employees need at least one year of continuous service to qualify for gratuity. We build the settlement statement early, so the deadline is not missed.",
      },
      {
        q: "How do labour law changes affect my policies?",
        a: "Labour law and MOHRE rules change from time to time, which can affect leave, working hours and termination terms. We review your contracts and handbook against the current requirements each year. Changes are explained before they are applied to your team.",
      },
      {
        q: "Can you handle a company's hiring process?",
        a: "We support candidate sourcing and recruitment, and we handle the employment paperwork once a hire is agreed. The hiring decision and selection remain with your company. We coordinate the offer letter, contract and onboarding steps.",
      },
      {
        q: "Can you handle a termination or repatriation?",
        a: "Yes, we document the termination steps, calculate the final settlement and coordinate visa cancellation. Each termination must follow the rules that apply to the reason for exit, so we check that before any notice is given.",
      },
      {
        q: "Is employee information kept confidential?",
        a: "Yes, we use employee records only to run HR and payroll for your company, and we restrict access to people who need it. Records are kept as agreed in our service terms, and you retain control of the data.",
      },
    ],
  },
};

export default hrServices;
