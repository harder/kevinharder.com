import {
  axtonImage,
  cadenceImage,
  christinaImage,
  emmaImage,
  finnImage,
  haleyImage,
  jillianImage
} from '../assets/images';
import type { FamilyMember } from '../types/content';

export const familyMembers: FamilyMember[] = [
  {
    name: 'Christina',
    blurb:
      'My favorite human and partner in all things family, puzzles, and community projects. She keeps our whole mission grounded.',
    image: christinaImage,
    link: 'https://getchristina.com/'
  },
  {
    name: 'Jillian',
    blurb:
      'An Astronomy major at Northern Arizona University in Flagstaff. Future scientist.',
    image: jillianImage,
    link: 'https://www.linkedin.com/posts/az-space-grant_research-spotlight-meet-northern-arizona-activity-7386812912679542784-FcYk/'
  },
  {
    name: 'Emma',
    blurb:
      'Neuroscience major at University of Texas in Austin. Future doctor.',
    image: emmaImage
  },
  {
    name: 'Cadence',
    blurb:
      'High School senior and Color Guard star. Future occupational therapist.',
    image: cadenceImage
  },
  {
    name: 'Haley',
    blurb: 'High school sophomore and soccer star. Bright future ahead.',
    image: haleyImage
  },
  {
    name: 'Finn',
    blurb: 'Twin brother and smart creative first grader.',
    image: finnImage
  },
  {
    name: 'Axton',
    blurb: 'Twin brother and smart creative first grader.',
    image: axtonImage
  }
];
