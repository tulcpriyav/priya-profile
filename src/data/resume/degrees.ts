export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Valparaiso University',
    degree: "Master's in Information and Technology Management",
    link: 'https://valpo.edu',
    year: 2016,
  },
  {
    school: 'K.L.University',
    degree: "Bachelor's in Computer Science and Engineering",
    link: 'https://klu.edu.in',
    year: 2012,
  },
];

export default degrees;
