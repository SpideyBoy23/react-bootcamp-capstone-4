import logoUrl from '../../assets/logos/house_flipper_logo.svg';
import './Loader.css'


export const Loader = () => {
    
    return (
        <>
            <div className="loaderBackground">
                <div className="logoLoading">
                    <img src={logoUrl} alt='Loading...' />
                </div>
            </div>
        </>
    )

}