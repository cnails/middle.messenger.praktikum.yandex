import './style.less';
import { Login } from './pages/login/login';
import { Signup } from './pages/login/signup';
import { NotFound } from './pages/404';
import { ErrorPage } from './pages/500';
import { Chat } from './pages/chat';
import { ProfilePage } from './pages/profile';

interface IRoute {
    [key: string]: any;
}

const routes: IRoute = {
  not_found: NotFound,
  error_page: ErrorPage,
  login: Login,
  signup: Signup,
  chat: Chat,
  profile: ProfilePage,
};

const routeHandler = () => {
  const currentHash = window.location.hash;
  const root = document.querySelector('#root');

  // все, что идет после #/ в урле
  let route = currentHash.slice(2);
  if (route.charAt(-1) === '/') {
    route = route.slice(0, -1);
  }

  let page;

  if (!route.length) {
    window.location.hash = '/chat';
    return;
  }

  const pageComponent = routes[route] || routes['not_found'];
  page = new pageComponent;

  root!.innerHTML = '';
  root?.append(page.getContent());
};

window.addEventListener('hashchange', routeHandler);

window.onload = routeHandler;
