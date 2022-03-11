import logoUrl from '../../assets/logos/house_flipper_logo.svg';
import './Footer.css';


export const Footer = () => {
    return(
        <>
            <div className="main-footer">
                <div className="container">
                    <img src={logoUrl} alt=""></img>
                    <p>Ecommerce created during Wizeline's Academy React Bootcamp ⚛</p>
                    <p>Made by Spidev 🕷</p>
                </div>
                
            </div>     
        </>
    );
}