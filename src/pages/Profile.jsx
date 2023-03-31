import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router"
import NavBar from "../components/NavBar"
import { beforeUpload, getBase64 } from '../utils';


export default function Profile({token, user, setToken, getApi }) {


  const [exampleImage, setExampleImage] = useState('https://img2.freepng.es/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg');


  if (!token) {
    return <Redirect to="/" />
  }


  const onChangeImg = async (e) => {
    const img = e.target.files[0];
    if (!beforeUpload(img)) return;
    const base64 = await getBase64(img);
    setExampleImage(base64);
    axios
        .put(
            'http://localhost:4000/api/usuarios/usuarioLogueado',
            { imagen: base64 },
            {
                headers: { 'x-auth-token': token },
            }
        )
        .then(() => getApi());
};

  


  return (
    <>
      <NavBar token={token} user={user} setToken={setToken} />
      <div className="container text-center">
        <h3 className='my-5'>Perfil de Cliente</h3>
            <div className=" ml-4 m-2">
                <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                <img
                    src={user.imagen || exampleImage}
                    alt="profile"
                    width="200"
                    className="rounded-circle"
                    style={{ border: '2px solid black' }}
                />
                </label>
                <h3 className="my-5"> {user.nombre} </h3>
                <h5 className="my-5"> {user.email} </h5>
                <input id="file-input" className="d-none" accept="image/png, image/jpeg" type="file" onChange={onChangeImg}/>
            </div>

            <hr className="my-5 hr-style"/>
      </div>
    </>
  )
}
