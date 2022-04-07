import './Button.css';

export const Button = ({ type, value, action }) => {

    return (
        <>
            <button className={ type } onClick={action}>{ value }</button>
        </>
    )
}


