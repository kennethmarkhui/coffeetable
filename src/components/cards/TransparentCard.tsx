import divider from '../../assets/image/divider.png'
import Button from '../Button'

export interface ITransparentCard {
    title: string
    description: string
    button: string
}

const TransparentCard = ({
    title,
    description,
    button,
}: ITransparentCard): JSX.Element => {
    return (
        <div className="bg-[url('assets/image/coffee_and_beans.jpg')] max-w-screen-xl h-80 bg-neutral-900 bg-cover bg-no-repeat bg-blend-multiply bg-center mx-auto my-10">
            <div className="py-10 flex flex-col items-center">
                <div className="flex justify-center text-4xl py-3">{title}</div>
                <img className="w-72 h-10 flex" src={divider}></img>
                <div className="flex justify-center text-2xl py-4">
                    {description}
                </div>
                <Button>{button}</Button>
            </div>
        </div>
    )
}

export default TransparentCard
