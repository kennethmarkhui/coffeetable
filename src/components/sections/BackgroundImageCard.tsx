import Button from '../Button'
import divider from '../../assets/image/divider.png'

export interface IBackgroundImageCard {
    title: string
    description: string
    button: string
}

const BackgroundImageCard = ({
    title,
    description,
    button,
}: IBackgroundImageCard): JSX.Element => {
    return (
        <section className="bg-[url('assets/image/coffee_and_beans.jpg')] max-w-screen-xl bg-neutral-900 bg-cover bg-no-repeat bg-blend-multiply bg-center mx-auto my-16">
            <div className="py-10 px-8 flex flex-col items-center gap-4 text-center">
                <h1 className="text-2xl md:text-4xl">{title}</h1>
                <img className="w-72" src={divider} />
                <div className="text-xl md:text-2xl">{description}</div>
                <Button>{button}</Button>
            </div>
        </section>
    )
}

export default BackgroundImageCard
