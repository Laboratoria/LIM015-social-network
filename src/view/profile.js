export const profile = () => {
  const sectionProfile = document.createElement('div');
  sectionProfile.classList.add('profile');
  const templateProfile = `
  <h1>Profile</h1>
  `;
  sectionProfile.innerHTML = templateProfile;
  return sectionProfile;
};
