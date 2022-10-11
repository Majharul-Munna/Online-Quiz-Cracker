import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statics from './components/Statics/Statics';
import Blog from './components/Blog/Blog';
import Main from './layout/Main';
import NotFound from './components/NotFound/NotFound';
import Quiz from './components/Quiz/Quiz';
import QuizTopics from './components/QuizTopics/QuizTopics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/statics', element: <Statics></Statics>
        },
        {
          path: '/blog', element: <Blog></Blog>
        },
        {
          path: '/quiztopics',
          loader: () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <QuizTopics></QuizTopics>
        },
        {
          path: '/topic/:topicId',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Quiz></Quiz>
        }
      ]
    },
    {path: '*', element: <NotFound></NotFound>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>  
    </div>
  );
}

export default App;
