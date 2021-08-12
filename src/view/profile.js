export const profile = () => {
  const sectionProfile = document.createElement('section');
  sectionProfile.classList.add('profile');
  const templateProfile = `
  <div class="containerProfile">
  <h1>Profile</h1>
  <h1>Profile</h1>
  <h1>Profile</h1>
  </div>
  `;
  sectionProfile.innerHTML = templateProfile;
  return sectionProfile;
};
