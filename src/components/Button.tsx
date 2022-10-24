import { ReactNode } from 'react'

interface IButton {
    children: ReactNode
    type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, type }: IButton): JSX.Element => {
    return (
        <button type={type} className="py-2 px-4 border-4 border-yellow0">
            {children}
        </button>
    )
}

export default Button
