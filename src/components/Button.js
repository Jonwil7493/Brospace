import react from 'react';

function Button({type, text, onclick, variant = 'primary'}) {
    return (
        <button type={type} className={`btn btn-${variant}`} onClick={onclick}>
            {text}
        </button>
    )
}

export default Button