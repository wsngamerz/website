const Button = ({children}) => {
    return (
        <button className="py-2 px-4 bg-cyan-500 mr-2 rounded text-white">
            {children}
        </button>
    )
}

export default Button;