
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import SobreNosotros from './pages/SobreNosotros';
import Productos from './pages/Productos';
import Contact from './pages/Contact';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Profile from './pages/Profile';
import SNC from './components/SNC'





function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState({});

    useEffect(() => {
        if (token) {
            getApi();
        }
    }, [token]);

    const getApi = async () => {
        try {
            const headers = { 'x-auth-token': token };
            const { data } = await axios.get('http://localhost:4000/api/usuarios/usuarioLogueado', {
                headers,
            });
            setUser(data);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="fixedFooter">
      <Router>
        <Switch>
        <Route path='/profile'>
            <Profile getApi={getApi} user={ user } token={ token } setToken={ setToken }/>
          </Route>
          <Route path='/admin'>
            <Admin user={ user } token={ token } />
          </Route>
          <Route path='/nosotros'>
            <SobreNosotros user={ user } token={ token } setToken={ setToken }/>
          </Route>
          <Route path='/productos'>
            <Productos user={ user } token={ token } setToken={ setToken } />
          </Route>
          <Route path='/contacto'>
            <Contact user={ user } token={ token } setToken={ setToken } />
          </Route>
          <Route path='/'>
            <Landing user={ user } token={ token } setToken={ setToken }  />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
