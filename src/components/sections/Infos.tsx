import Button from '../Button'
import { infos } from '../../data/home'

export interface IInfo {
    icon: string
    title: string
    description: string
}

const Infos = (): JSX.Element => {
    return (
        <section className="bg-black max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center p-5">
                {infos.map(({ icon, title, description }, index) => (
                    <InfoCard
                        key={`${title}-${index}`}
                        icon={icon}
                        title={title}
                        description={description}
                    />
                ))}
            </div>
            <div className="p-4">
                <Button className="flex my-4 mx-auto justify-center py-4">
                    See Our Menu
                </Button>
            </div>
        </section>
    )
}
export default Infos

const InfoCard = ({ icon, title, description }: IInfo): JSX.Element => {
    return (
        <div>
            <div className="mx-auto rounded-full bg-gray-600 w-20 h-20">
                {icon}
            </div>
            <div className="text-4xl p-2">{title}</div>
            <div className="p-4">{description}</div>
        </div>
    )
}
