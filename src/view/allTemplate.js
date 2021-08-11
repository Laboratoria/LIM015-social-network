import { home } from './home.js';
import { profile } from './profile.js';
import { error } from './error404.js';
import { logInTemplate } from './login.js';
import { registerTemplate } from './register.js';

export const navigator = () => {
  const sectionNavigator = document.createElement('div');
  sectionNavigator.classList.add('navigator');
  const templateNavigator = `
    <header>
        <nav>
            <ul>
                <li><a href="#/">Turistik</a></li>
                <li><a href="#/Home">Home</a></li>
                <li><a href="#/Profile">Profile</a></li>
                <li><a href="#/LogOut">LogOut</a></li>
            </ul>
        </nav>
    </header>
    `;
  sectionNavigator.innerHTML = templateNavigator;
  return sectionNavigator;
};

const components = {
  Home: home,
  Profile: profile,
  Error404: error,
  LogIn: logInTemplate,
  Register: registerTemplate,
};
export { components };
