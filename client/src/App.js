import {useState} from 'react';

import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom';

//components
import DataProvider from './context/DataProvider';
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Posts from './components/home/post/Posts';
import Categories from './components/home/Categories';
import RichTextEditor from './components/create/CreatePost';
import DetailView from './components/detalis/DetailView';
import Update from './components/create/Update';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const PrivateRoute=({isAuthenticated, ...props})=>{
  return isAuthenticated?
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
  : <Navigate replace to='/login'/>
}

function App() {
  const [isAuthenticated, isUserAuthenticated]= useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/login"
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/" element={<Home />} />
            </Route>
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/" element={<Categories />} />
            </Route>
            <Route
              path="/create"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/create" element={<RichTextEditor />} />
            </Route>
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/" element={<Posts />} />
            </Route>
            <Route
              path="/details/:id"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/details/:id" element={<DetailView />} />
            </Route>
            <Route
              path="/update/:id"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/update/:id" element={<Update />} />
            </Route>
            <Route
              path="/about"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/about" element={<About />} />
            </Route>
            <Route
              path="/contact"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
