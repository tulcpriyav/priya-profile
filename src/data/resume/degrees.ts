export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Florida Institute of Technology',
    degree: 'M.S Computer Information Systems',
    link: 'https://www.fit.edu',
    year: 2018,
  },
  {
    school: 'GITAM University',
    degree: 'Bachelor of Technology in Information Technology',
    link: 'https://www.gitam.edu',
    year: 2014,
  },
];

export default degrees;
