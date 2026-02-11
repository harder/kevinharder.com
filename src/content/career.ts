export type CareerRole = {
  company: string;
  companyUrl?: string;
  companyUrlTitle?: string;
  title: string;
  timeframe: string;
  logos: string[];
  summary: string;
  highlights: string[];
  openByDefault?: boolean;
};

export const careerRoles: CareerRole[] = [
  {
    company: 'eBay / TCGplayer',
    companyUrl: 'https://www.ebay.com',
    companyUrlTitle: 'ebay.com',
    title: 'Principal Software Engineer',
    timeframe: 'April 2024 - Present',
    logos: ['/images/ebay_logo.jpg', '/images/tcgplayer_logo.jpg'],
    summary:
      'Building a next generation trading card game (TCG) focused inventory management system for sellers.',
    highlights: [
      'Working on inventory and marketplace systems as part of the TCGPlayer organization within eBay.',
      'Driving architecture decisions for reliability and throughput in core commerce services.',
      'Partnering cross-functionally to reduce operational complexity across distributed systems.'
    ],
    openByDefault: true
  },
  {
    company: 'Instructure',
    companyUrl: 'https://www.instructure.com',
    companyUrlTitle: 'instructure.com',
    title: 'Engineering Architect',
    timeframe: 'September 2022 - April 2024',
    logos: ['/images/instructure_logo.jpg'],
    summary:
      'Led a team of architects and principal engineers for Canvas LMS and related ed-tech products.',
    highlights: [
      "Helped build out the Instructure Learning Platform to unite all of Instructure's products, and keep advancing Canvas.",
      'Strove to improve the systems design and operation of Instructure products, evolving towards a distributed tiered system with product application teams from multiple products developing on top of shared backend services.',
      'Worked with over 200 engineers in US and Europe to foster a culture of experimentation and align on a shared technical roadmap.'
    ]
  },
  {
    company: 'Square (Block)',
    companyUrl: 'https://squareup.com',
    companyUrlTitle: 'squareup.com',
    title: 'Software Engineering Manager',
    timeframe: 'July 2021 - September 2022',
    logos: ['/images/square_logo.jpg'],
    summary:
      'Led the Orders Aggregation team, building solutions to empower sellers to succeed by helping them throughout their entire business lifecycle.',
    highlights: [
      'Developed a new high-volume low-latency search and reporting platform that unlocks self-serve, aggregation, and query capabilities of Orders data.',
      'Navigated complex technical and organizational challenges to create a roadmap and plan for building new orders search, aggregation/reporting, and receipts platforms.',
      "Partnered with product managers to set the team's quarterly OKR's, come up with ideas for achieving them, and guided the team to implement them.",
      'Supported legacy reporting platform, with regular retros to look for ways to improve on-call debugging and make developer quality of life better.'
    ]
  },
  {
    company: 'Indeed',
    companyUrl: 'https://www.indeed.com',
    companyUrlTitle: 'indeed.com',
    title: 'Engineering Manager',
    timeframe: 'May 2017 - July 2021',
    logos: ['/images/indeed_logo.jpg'],
    summary:
      'Managed and scaled multiple teams that focused on hiring and job-seeker products.',
    highlights: [
      'Technical Delivery Manager for the Indeed Employer Candidates team in the SMB group, which was responsible for delivering millions of candidate applications to employers, and letting employers manage, screen, message, and interview those candidates.',
      'Guided team to resolve legacy technical debt and modernize the platform using Java, JavaScript + React, RabbitMQ, MySQL, and Elasticsearch.',
      'Launched two full-stack Indeed Incubator teams, developing mission and vision, and guided them through building products from 0 to 1 with a strong focus on data-driven decision making and a "think big, start small" culture.'
    ]
  },
  {
    company: 'Kibo Commerce',
    companyUrl: 'https://kibocommerce.com',
    companyUrlTitle: 'kibocommerce.com',
    title: 'Engineering Manager',
    timeframe: 'October 2016 - May 2017',
    logos: ['/images/kibo_logo.jpg'],
    summary:
      'Led the Kibo eCommerce platform development team after acquisition of Mozu.',
    highlights: [
      'Architected key areas of the platform including product catalog & pricing, search, and core service bus and PubSub systems.',
      'Strove to keep the Kibo platform at the forefront of modern eCommerce technologies using agile methodology with a weekly release cadence.'
    ]
  },
  {
    company: 'Mozu',
    companyUrl: 'https://kibocommerce.com/press-events/kibo-acquires-mozu/',
    companyUrlTitle: 'mozu.com',
    title: 'Principal Software Engineer',
    timeframe: 'September 2012 - October 2016',
    logos: ['/images/mozu_logo.jpg'],
    summary:
      'Built search, messaging, event bus, and core catalog systems for a modern SaaS commerce platform.',
    highlights: [
      'Planned, designed, developed, tested, debugged, and deployed highly available e-commerce applications as part of the Mozu enterprise commerce platform.',
      'Used C#, .NET, SQL Server, RabbitMQ, MongoDB, and Solr.',
      'Highlights were building a faceted commerce search system using Solr; orchestrating complex workflows using back-end services and a distributed messaging system; and creating an external pub/sub event subscription & delivery system.'
    ]
  },
  {
    company: 'Perficient',
    companyUrl: 'https://www.perficient.com',
    companyUrlTitle: 'perficient.com',
    title: 'Technical Architect',
    timeframe: 'September 2011 - September 2012',
    logos: ['/images/perficient_logo.jpg'],
    summary:
      'Consulted on multiple Dell initiatives with architecture and implementation support.',
    highlights: [
      'Created a new internal control panel web site using ASP.NET MVC for managing various Dell.com search functionality. Helped other teams within eDell improve the performance and functionality of their code.',
      'Expanded and improved product catalog and feed system for an affiliate ecommerce startup within Dell. Worked on a prototype of a new product catalog using a CQRS design and the RavenDB document database.',
      'Migrated large enterprise community from a legacy WetPaint platform to Telligent Community based platform using custom developed migration tools.'
    ]
  },
  {
    company: 'Dell',
    companyUrl: 'https://www.dell.com',
    companyUrlTitle: 'dell.com',
    title: 'Lead Software Engineer',
    timeframe: 'April 2010 - September 2011',
    logos: ['/images/dell_logo.jpg'],
    summary:
      'Led the eDell search team and built a new search platform for Dell.com.',
    highlights: [
      'Built a completely new enterprise search service platform on Dell.com to get processed data and facets/categories for displaying products, support drivers, and community content.',
      'Designed and implemented an API for various applications in both .NET & Java to use for accessing the search service in an extremely flexible and configurable manner.',
      'Designed and implemented index profile schemas and search queries using Microsoft FAST ESP. Became adept with many enterprise search concepts and technologies.'
    ]
  },
  {
    company: 'Telligent',
    companyUrl: 'https://telligent.com',
    companyUrlTitle: 'telligent.com',
    title: 'Software Development Engineer',
    timeframe: 'June 2005 - April 2010',
    logos: ['/images/telligent_logo.jpg'],
    summary:
      'Developed enterprise collaboration software including Community Server and Graffiti CMS. Acquired by Verint.',
    highlights: [
      "Helped grow a 15-person startup team of almost all developers to an enterprise-class software company, worked on all of Telligent's core products.",
      ' Built a wide range of social community software including blogs, forums, media/file/photo galleries, wikis, activity streams, RSS/Atom syndication, email notifications, and user profiles.',
      'Rebuilt & administered the WindowsClient.net, blogs.msdn.com, and weblogs.asp.net sites for Microsoft.'
    ]
  },
  {
    company: 'Access Group',
    companyUrl: 'https://www.accessgroup.org/about-access-group',
    companyUrlTitle: 'accessgroup.org',
    title: 'Programmer / Analyst',
    timeframe: 'February 2001 - May 2005',
    logos: ['/images/accessgroup_logo.jpg'],
    summary: 'Modernized a student loan disbursement and funding system.',
    highlights: [
      'Designed and developed student loan origination, management, and disbursement systems system that eliminated many manual tasks and greatly decreased processing time.'
    ]
  }
];
