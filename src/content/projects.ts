export type Project = {
  title: string;
  problem: string;
  approach: string;
  impact: string;
  stack: string[];
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: 'Austin Puzzle Exchange',
    problem: 'Neighbors had no easy, free way to exchange used puzzles locally.',
    approach:
      'Built and operated AustinPuzzles.com with lightweight workflows, clear information architecture, and strong local discoverability.',
    impact:
      'Sustained a real-world community exchange with recurring local engagement and near-zero operational overhead.',
    stack: ['Static web', 'Content design', 'Community ops'],
    tags: ['Community', 'Product', 'Austin'],
    links: [{ label: 'Visit AustinPuzzles', href: 'https://austinpuzzles.com' }]
  },
  {
    title: 'Harder.dev Consulting & Labs',
    problem:
      'Teams often need architecture-level guidance before committing to long implementation cycles.',
    approach:
      'Created a consulting and experimentation hub focused on distributed systems, pragmatic design reviews, and rapid prototyping.',
    impact:
      'Enabled faster technical decision-making with practical implementation paths and reduced rework risk.',
    stack: ['.NET', 'Architecture', 'Cloud'],
    tags: ['.NET', 'Consulting', 'Architecture'],
    links: [{ label: 'Explore Harder.dev', href: 'https://harder.dev' }]
  },
  {
    title: 'Commerce Platform Search & Messaging',
    problem:
      'High-scale commerce workloads needed reliable search, messaging, and event-driven backbone services.',
    approach:
      'Designed and delivered core platform services, including search and asynchronous event pipelines, for SaaS commerce products.',
    impact:
      'Improved service scalability and resiliency while reducing integration friction for downstream teams.',
    stack: ['Search', 'Messaging', 'Event bus', 'SaaS'],
    tags: ['Search', 'Kafka', 'Distributed'],
    links: [{ label: 'Career Highlights', href: '#career' }]
  },
  {
    title: 'Open Social & Federated Identity Exploration',
    problem:
      'Centralized social networks fragment identity and content portability across communities.',
    approach:
      'Actively explored Bluesky/AT Protocol, ActivityPub, and microformats to evaluate interoperable publishing patterns.',
    impact:
      'Shaped practical perspectives on decentralized identity and content strategy for future personal/OSS projects.',
    stack: ['AT Protocol', 'ActivityPub', 'Microformats'],
    tags: ['OSS', 'Federation', 'Research'],
    links: [
      { label: 'Bluesky Profile', href: 'https://bsky.app/profile/kevinharder.com' },
      { label: 'ActivityPub', href: 'https://github.com/w3c/activitypub' }
    ]
  },
  {
    title: '20+ Years of Personal Site Evolution',
    problem: 'Keeping a personal site useful and current over decades is hard without maintainable structure.',
    approach:
      'Migrated from hand-authored static HTML to an Astro content model with selective islands for high-impact interactivity.',
    impact:
      'Made updates significantly faster by centralizing profile/project/career content and reducing markup churn.',
    stack: ['Astro', 'TypeScript', 'Preact islands'],
    tags: ['Astro', 'OSS', 'Frontend'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Harder/' }]
  }
];
