import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/index.scss'
import { Button } from 'react-bootstrap';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  BrowserRouter
} from "react-router-dom";



// registered Component
import Profile from './page/private/profile';
import Login from './page/auth/Login';
import Register from './page/auth/register';
import GameDetail from './page/private/gamedetail';
import NoMatch from './page/notmatch';


// let auth = false;

function RequireAuth({ children }: { children: JSX.Element }) {
  // let auth = useAuth();
  let location = useLocation();
  
  let auth = localStorage.getItem("login");
  console.log(auth)

  if(!auth) {
    return <Navigate to="/home" state={{ from: location }} />;
  }
  console.log(children)

  // if (!auth.user) {
  //   // Redirect them to the /login page, but save the current location they were
  //   // trying to go to when they were redirected. This allows us to send them
  //   // along to that page after they login, which is a nicer user experience
  //   // than dropping them off on the home page.
  //   return <Navigate to="/login" state={{ from: location }} />;
  // }

  return children;
}


function App() {
  
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/home" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/game/:id" element={
            <RequireAuth>
                <GameDetail/>
              </RequireAuth>} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile/>
              </RequireAuth>
            }
          />
           
        
         
        

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route element={<NoMatch />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;

