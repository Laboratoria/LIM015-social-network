export const error = () => {
  const sectionError = document.createElement('section');
  const errorTemplate = `
  <div>
  <h1> Ups . . . </h1>
  </div>
  `;
  sectionError.innerHTML = errorTemplate;
  return sectionError;
};
