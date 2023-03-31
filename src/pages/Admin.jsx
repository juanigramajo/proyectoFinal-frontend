import { Redirect, Route, Switch } from "react-router-dom";
import AdmNavtop from "../components/AdmNavtop";
import CreateProducts from "../components/CreateProducts";
import AdmProductsList from "../components/AdmProductsList";
import AdmSidebar from "../components/AdmSidebar";
import AdmUsers from "../components/AdmUsers";
import AdmMessages from "../components/AdmMessages"
import '../css/admin.css';


export default function Admin({token, user}) {
  if (!token || user.rol === 'cliente') {
    return <Redirect to="/" />
  }
  return (
    <>
      <AdmNavtop />
      <div className="d-flex">
        <AdmSidebar />
          <Switch>
          <Route path='/admin/users'>
            <AdmUsers token={token} />
          </Route>
          <Route path='/admin/products'>
            <CreateProducts token={ token } />
          </Route>
          <Route path='/admin/productslist'>
            <AdmProductsList token={ token } />
          </Route>
          <Route path='/admin/messages'>
            <AdmMessages token={token} />
          </Route>
          </Switch>

      </div>

    </>
    
  );
}
