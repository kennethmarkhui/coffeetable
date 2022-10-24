import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    type?: 'button' | 'submit' | 'reset'
    variant?: 'outline' | 'fill'
}

const Button = forwardRef<HTMLButtonElement, IButton>(function Button(
    { children, className, variant = 'outline', ...rest },
    ref
) {
    return (
        <button
            ref={ref}
            className={`${className ?? ''}${
                variant === 'fill'
                    ? ' bg-yellow0 text-black'
                    : ' border-4 border-yellow0'
            } py-2 px-4`}
            {...rest}
        >
            {children}
        </button>
    )
})

export default Button
