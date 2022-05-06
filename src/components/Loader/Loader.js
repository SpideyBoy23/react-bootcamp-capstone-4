import logoUrl from '../../assets/logos/house_flipper_logo.svg';
import './Loader.css'


export const Loader = () => {
    
    return (
        <>
            <div className="loader-background">
                <div className="logo-loading">
                    <img src={logoUrl} alt='Loading...' />
                </div>
            </div>
        </>
    )

}