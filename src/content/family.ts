export type FamilyMember = {
  name: string;
  blurb: string;
  image: string;
  link?: string;
};

export const familyMembers: FamilyMember[] = [
  {
    name: 'Christina',
    blurb:
      'My favorite human and partner in all things family, puzzles, and community projects. She keeps our whole mission grounded.',
    image: '/images/christina.jpg',
    link: 'https://getchristina.com/'
  },
  {
    name: 'Jillian',
    blurb: 'An Astronomy major at Northern Arizona University in Flagstaff. Future scientist.',
    image: '/images/jillian.jpg',
    link: 'https://www.linkedin.com/posts/az-space-grant_research-spotlight-meet-northern-arizona-activity-7386812912679542784-FcYk/'
  },
  {
    name: 'Emma',
    blurb: 'Neuroscience major at University of Texas in Austin. Future doctor.',
    image: '/images/emma2.jpg'
  },
  {
    name: 'Cadence',
    blurb: 'High School senior and Color Guard star. Future occupational therapist.',
    image: '/images/cadence.jpg'
  },
  {
    name: 'Haley',
    blurb: 'High school sophomore and soccer star. Bright future ahead.',
    image: '/images/haley.jpg'
  },
  {
    name: 'Finn',
    blurb: 'Twin brother and smart creative first grader.',
    image: '/images/finn.jpg'
  },
  {
    name: 'Axton',
    blurb: 'Twin brother and smart creative first grader.',
    image: '/images/axton.jpg'
  }
];
