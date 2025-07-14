
type Post = {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  content: string;
};
export const posts: Record<string, Post[]> = {
  India: [
    {
      id: "ai-startups-india",
      title: "AI in Indian Startups",
      description: "Startups in Bangalore and Hyderabad are integrating GenAI in finance and healthcare.",
      image: "ai-startups-india_ciifzk",
      tag: "AI",
      content: `India’s startup ecosystem is witnessing a massive AI revolution. From automating loan approvals to diagnostic tools in rural clinics, GenAI is being adopted across verticals. Major hubs include Bangalore, Hyderabad, and Pune, with accelerators focusing exclusively on AI-first companies.`
    },
    {
      id: "react-native-payments",
      title: "React Native for Payments",
      description: "Apps like PhonePe and BharatPe use React Native for cross-platform mobile apps.",
      image: "native-payments_l9i4q7",
      tag: "Mobile",
      content: `React Native allows payment platforms to write once and deploy on both iOS and Android. Fintech startups are adopting it for its faster development cycles and rich plugin ecosystem, reducing time-to-market in a competitive space like UPI apps.`
    },
    {
      id: "open-source-bangalore",
      title: "Open Source Culture in Bangalore",
      description: "Developer communities are growing around tools like Astro and Vite.",
      image: "open-source_eldrzb",
      tag: "Open Source",
      content: `Bangalore’s dev culture is shifting toward community-driven open-source contributions. Events, hackathons, and GitHub meetups focus on frontend tooling like Astro, Vite, and Remix. Even major startups are open-sourcing their design systems and APIs.`
    },
    {
      id: "sde-remote-india",
      title: "Remote Dev Jobs Surge",
      description: "More Indian developers are working for global companies remotely.",
      image: "planting_pfp7jp",
      tag: "Jobs",
      content: `The rise of global remote hiring platforms like Turing and Deel has empowered Indian developers to work for US/EU companies. With better pay and flexible hours, remote roles are now mainstream for senior SDEs and frontend engineers.`
    },
    {
      id: "typescript-adoption",
      title: "TypeScript Adoption Rising",
      description: "Enterprise-level adoption of TypeScript is growing in fintech and edtech.",
      image: "cld-sample-3",
      tag: "Frontend",
      content: `As codebases grow, Indian companies are shifting from JavaScript to TypeScript. Especially in fintech and edtech, TypeScript provides better tooling, fewer runtime bugs, and confidence in refactoring legacy code.`
    },
  ],

  USA: [
    {
      id: "rust-apis-usa",
      title: "Rust Replacing Node.js",
      description: "Performance-focused startups in SF are moving to Rust for backend APIs.",
      image: "cld-sample-2",
      tag: "Backend",
      content: `Rust’s performance and memory safety have led to its adoption in backend APIs, especially for high-traffic services. Startups in the Bay Area are building GraphQL and REST APIs using frameworks like Actix and Axum.`
    },
    {
      id: "llm-dev-tools",
      title: "LLM Developer Tools Explosion",
      description: "AI toolkits like LangChain and Weaviate are being heavily used.",
      image: "cld-sample",
      tag: "AI",
      content: `The generative AI boom has sparked a race to build developer tools. LangChain, LlamaIndex, and vector databases like Weaviate are being used to build everything from chatbots to internal assistants. The ecosystem is evolving weekly.`
    },
    {
      id: "micro-saas-usa",
      title: "Rise of Micro-SaaS",
      description: "Solo founders are launching small, profitable tools using Next.js.",
      image: "tailwind-react_pjac6u",
      tag: "Startup",
      content: `Micro-SaaS refers to single-purpose apps run by individuals. Common stacks include Supabase + Stripe + Next.js, with founders focusing on recurring revenue from niche user bases. Tools like Tweet scheduling, habit trackers, and AI resume checkers are popular.`
    },
    {
      id: "astro-static-sites",
      title: "Astro for Static Sites",
      description: "Astro is gaining traction for performance-focused blogs and landing pages.",
      image: "rust-nodejs_npqdsg",
      tag: "Frontend",
      content: `Astro's zero-JS-by-default philosophy is ideal for SEO-rich landing pages and blogs. Agencies and dev bloggers alike are moving away from heavy React SSR to Astro’s content-focused architecture using MDX and partial hydration.`
    },
    {
      id: "serverless-infra",
      title: "Serverless Infrastructure",
      description: "AWS Lambda, Vercel, and Cloudflare Workers are the norm.",
      image: "watermellon_eqzvp0",
      tag: "Cloud",
      content: `Serverless enables scaling without infrastructure management. Developers now deploy apps as functions using platforms like Vercel and Cloudflare. This shift also brings edge-first performance and less devops complexity.`
    },
  ],

  Germany: [
    {
      id: "privacy-ui-germany",
      title: "Privacy-First Design Patterns",
      description: "German devs are building UIs with minimal tracking and full local storage.",
      image: "planting_pfp7jp",
      tag: "Security",
      content: `Due to strict GDPR laws, apps in Germany avoid 3rd party tracking and prefer storing user preferences locally. Cookies require explicit opt-in and tracking pixels are minimal. Privacy-first design patterns are now taught in UI/UX bootcamps.`
    },
    {
      id: "vue3-gov-portals",
      title: "Vue 3 in Gov Portals",
      description: "Government tech agencies are moving to Vue 3 for better DX.",
      image: "tailwind-react_pjac6u",
      tag: "Frontend",
      content: `The federal digital infrastructure initiative is funding revamps of gov portals using Vue 3. With a component-first architecture and ease of learning, Vue allows quick onboarding for internal development teams.`
    },
    {
      id: "gdpr-focused-backend",
      title: "GDPR-Focused Backends",
      description: "Databases and auth are now structured to handle GDPR by design.",
      image: "open-source_eldrzb",
      tag: "Compliance",
      content: `Backends in Germany are built with GDPR in mind: data encryption at rest, consent-based data collection, and delete-by-request policies. Platforms like Hasura and Supabase help manage structured, compliant data access.`
    },
    {
      id: "open-source-funding",
      title: "OSS Gets Government Funding",
      description: "Public sector is funding open-source infrastructure projects.",
      image: "native-payments_l9i4q7",
      tag: "Open Source",
      content: `Germany is one of the few nations funding open-source maintainers for their contributions. Projects like Matrix (decentralized messaging) and accessibility-first CMSs have received public funds to promote digital sovereignty.`
    },
    {
      id: "multi-lang-apps",
      title: "Multi-Language Support Tools",
      description: "Apps in Germany commonly ship with 3+ languages using i18n tools.",
      image: "cld-sample-2",
      tag: "Localization",
      content: `With diverse language needs, German apps are built with full i18n support from day one. Libraries like i18next and FormatJS are used with language toggles and server-side translation support in SSR frameworks.`
    },
  ],

  Canada: [
    {
      id: "gov-tech-canada",
      title: "Government Tech Modernization",
      description: "Vue and React used in modernizing CRA and other portals.",
      image: "planting_pfp7jp",
      tag: "GovTech",
      content: `The Canadian Revenue Agency and other provincial portals are undergoing digital transformation. Vue and React have become standard choices to build accessible, modular interfaces aligned with WCAG guidelines.`
    },
    {
      id: "green-computing",
      title: "Eco-Friendly Hosting",
      description: "Cloud services like GreenGeeks gaining traction in Toronto.",
      image: "cld-sample-2",
      tag: "Sustainability",
      content: `Green computing is gaining ground in Canada, with hosting providers like GreenGeeks offering carbon-neutral infrastructure. Startups are also shifting to lower energy regions for green compute credits.`
    },
    {
      id: "ai-education-tools",
      title: "AI Tools in EdTech",
      description: "EdTech platforms in Canada using GenAI to build tutoring tools.",
      image: "rust-nodejs_npqdsg",
      tag: "AI",
      content: `Canadian EdTech startups are integrating AI tutors for students in K-12. These tools can evaluate homework, guide revision, and recommend learning paths. The AI stack typically includes OpenAI, Whisper, and Weaviate.`
    },
    {
      id: "web3-communities",
      title: "Web3 Dev Communities",
      description: "Ethereum and Solana dev meetups are active in Vancouver.",
      image: "cld-sample-3",
      tag: "Web3",
      content: `Vancouver hosts monthly meetups for Web3 enthusiasts. From NFT devs to Solidity auditors, the scene is active with hackathons and DAO launches. Devs are focusing on L2 chains and smart contract testing platforms.`
    },
    {
      id: "nextjs-agencies",
      title: "Next.js Dominating Agencies",
      description: "Creative agencies are using Next.js + Tailwind as their default stack.",
      image: "open-source_eldrzb",
      tag: "Frontend",
      content: `Design-focused agencies in Toronto and Montreal are now using Next.js + TailwindCSS for portfolio sites, e-commerce clients, and high-conversion landing pages. Serverless deployment on Vercel makes it seamless.`
    },
  ],
};

