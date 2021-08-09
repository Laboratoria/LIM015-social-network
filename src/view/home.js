import { navigator } from './allTemplate.js';

export const home = () => {
  const sectionHome = document.createElement('div');
  sectionHome.classList.add('iHome');
  const templateHome = `
  <h1>HOME</h1>
  `;
  sectionHome.innerHTML = templateHome;
  sectionHome.appendChild(navigator);
  return sectionHome;
};
