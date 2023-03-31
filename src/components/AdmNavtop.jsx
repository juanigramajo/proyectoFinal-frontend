
export default function AdmNavtop() {

    const handleLogOut = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom p-5 navpaneladmin">
                <h2 className="text-light">Panel de Administración</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 d-lg-none ">
                        <li className="nav-item active">
                            <a className="nav-link" data-toggle="collapse" href="#productos" role="button"
                                aria-expanded="false" aria-controls="collapseExample">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#usuarios" role="button"
                                aria-expanded="false" aria-controls="collapseExample">Usuarios</a>
                        </li>
                    </ul>
                </div>

                <button onClick={handleLogOut} className="btn btn-light btn-back-login"><i className="fas fa-sign-out-alt"></i></button>
            </nav>
    </div>
  )
}
