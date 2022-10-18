import HomePage from './pages/HomePage';
import Vetnearme from './pages/vetnearme';
import Dog from './pages/dog';
import NotFoundPage from './pages/NotFoundPage';
import ArticleListPage from './pages/ArticleListPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        path: '/articles/:id',
        ...ArticleListPage
      },
      {
        path:'/pet-food-near-me',
        ...Vetnearme
      },
      {
        path:'/dog-hospital-near-me',
        ...Dog
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
