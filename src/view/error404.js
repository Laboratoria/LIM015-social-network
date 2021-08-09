export const error = () => {
  const sectionError = document.createElement('div');
  sectionError.classList.add('profile');
  const errorTemplate = `
    <h1>Error 404 </h1>
    <p>Enlace no encontrado</p>
    `;
  sectionError.innerHTML = errorTemplate;
  return sectionError;
};
