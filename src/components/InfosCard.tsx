import Button from './Button'

interface IInfo {
    icon: string
    title: string
    description: string
}

const infos: IInfo[] = [
    {
        icon: '1',
        title: 'Fresh Produce',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Fugit doloribus laudantium voluptate blanditiisillum dolorem cupiditate dolores eius sit? Similiqueeius suscipit, adipisci saepe soluta ipsam repellatducimus maxime praesentium.',
    },
    {
        icon: '2',
        title: 'Trained Chef',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias neque quos nulla quibusdam numquam sunt necessitatibus nostrum obcaecati id? Laborum iusto fuga id impedit rem. Perferendis maiores deserunt quibusdam?',
    },
    {
        icon: '3',
        title: 'Artisan Coffee',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, esse expedita odio ratione unde numquam laudantium excepturi maxime accusamus aliquam distinctio aut autem quaerat! Ducimus voluptatem aliquid maiores magnam omnis.',
    },
    {
        icon: '4',
        title: 'Vegan Options',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatum voluptate! Dicta sapiente voluptatum minus repellendus, in repudiandae illo sit, provident modi atque voluptates, quod nesciunt blanditiis facere sunt veniam.',
    },
]

const InfosCard = (): JSX.Element => {
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

export default InfosCard

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
