import './Button.css';

export const Button = ({ type, value, action }) => {

    return (
        <>
            <section>
                <button className={ type } onClick={action}>{ value }</button>
            </section>
        </>
    )
}


