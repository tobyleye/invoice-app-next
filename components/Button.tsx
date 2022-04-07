interface ButtonProps {
    color: 'primary'|'danger'|'default',
    children?: React.ReactElement| string;
}

export default function Button({color, children}: ButtonProps) {

    let colors = {
        primary: 'bg-purple-base text-white hover:bg-purple-light transition-all',
        danger: 'bg-red-base text-white hover:bg-red-light transition-all',
        default: 'bg-gray-200 text-gray-600 hover:bg-gray-100 transition-all'
    }

    let resolvedColorClass = colors[color] || colors.default

    return (
        <button className={"rounded-full px-5 py-3 text-sm " + resolvedColorClass}>
            {children}
        </button>
    )
}