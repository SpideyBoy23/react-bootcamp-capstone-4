import './Button.css';

export const Button = ({ type, value }) => {
    return (
        <>
            <section>
                <button className={ type }>{ value }</button>
            </section>
        </>
    )
}


