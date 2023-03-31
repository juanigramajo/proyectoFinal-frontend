import iconcorto from '../Img/icon2blanco.PNG'

export default function Footer() {
    return (
        <div className="container-fluid mt-auto mx-auto borderTop-div">
            <div className="row align-items-center mt-5">
                <div className="col-lg-3 text-center">
                    <p className="ml-4">Depósito Bancario</p>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png"
                        alt="" className="my-2 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png"
                        alt="" class="my-2 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png"
                        alt="" class="my-2 img-credit-card"></img>
                    <img src="https://www.dexarg.com/images/pago_transferenciabancaria.png"
                        alt="" class="my-2 img-credit-card"></img>
                </div>
                <div className="col-lg-6 text-center">
                    <p className="text-center">Recibimos todos los medios de pago</p>
                    <p className="text-center">Tarjetas de Crédito</p>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
                        alt="" className="my-2 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
                        alt="" className="my-2 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"
                        alt="" className="my-2 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png"
                        alt="" className="my-2 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png"
                        alt="" className="my-2 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png"
                        alt="" className="my-2 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/nativa@2x.png"
                        alt="" className="my-2 img-credit-card"></img>
                </div>
                <div className="col-lg-3 text-center">
                    <p className="text-center">Tarjetas de Dédito</p>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
                        alt="" className="my-2 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
                        alt="" className="my-2 img-credit-card"></img>
                    <img src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0035/4297/Que_bancos_operan_con_Red_Link.jpg?1570968286"
                        alt="" className="my-2 img-credit-card"></img>
                </div>
            </div>


            <div className="row backgrFooter mt-3 justify-content-around align-content-center ">
                <div>
                    <a href="/">
                        <img src={iconcorto} alt="" width="65px"/>
                    </a>
                </div>
                <div className="row">
                    <a href="https://www.facebook.com/RollingCodeSchool/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square socialicon socialiconfooter"></i></a>
                    <a href="https://www.instagram.com/rollingcodeschool/?hl=es-la" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram socialicon socialiconfooter"></i></a>
                    <a href="https://twitter.com/rollingcodeok?lang=es" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter socialicon socialiconfooter"></i></a>
                    <a href="https://www.google.com/maps/place/RollingCode+School/@-26.8367009,-65.2093905,17z/data=!3m1!4b1!4m5!3m4!1s0x94225d3ad7f30f1d:0xf8606cd659b8e3e4!8m2!3d-26.8367009!4d-65.2072018" target="_blank" rel="noopener noreferrer"><i class="fas fa-map-marker-alt socialicon socialiconfooter"></i></a>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <p>
                        © 2021 O'Tech
                    </p>
                    <p>
                        Todos los derechos reservados.
                    </p>
                </div>
                <div className="d-flex align-items-center flex-column">
                    <a className="text-white" href="/">
                        Preguntas Frecuentes
                    </a>
                    <a className="text-white" href="/">
                        Terminos y Condiciones
                    </a>
                    <a className="text-white" href="/">
                        Politicas de Privacidad
                    </a>
                </div>
            </div>
        </div>
    );
}
