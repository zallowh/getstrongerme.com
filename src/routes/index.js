import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import EmailMarketing from '../pages/EmailMarketing';
import WebDev from '../pages/WebDev';
import GoogleAds from '../pages/GoogleAds';
import MetaAds from '../pages/MetaAds';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/email-marketing",
        element: <EmailMarketing />
      },
      {
        path: "/web-dev",
        element: <WebDev />
      },
      {
        path: "/google-ads",
        element: <GoogleAds />
      },
      {
        path: "/meta-ads",
        element: <MetaAds />
      }
  
    ]
  }
]);

export default router;
