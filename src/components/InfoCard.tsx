import Button from './Button'

const InfoCard = () => {
    return (
        <div className="bg-black max-w-screen-xl h-auto mx-auto my-auto">
            <div className="flex flex-row text-center p-5">
                <div className="basis-1/4">
                    <div className="mx-auto rounded-full bg-gray-600 w-20 h-20">
                        1
                    </div>
                    <div className="text-4xl p-2">Fresh Produce</div>
                    <div className="p-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugit doloribus laudantium voluptate blanditiis
                        illum dolorem cupiditate dolores eius sit? Similique
                        eius suscipit, adipisci saepe soluta ipsam repellat
                        ducimus maxime praesentium.
                    </div>
                </div>

                <div className="basis-1/4">
                    <div className="mx-auto rounded-full bg-gray-600 w-20 h-20">
                        <div className="">2</div>
                    </div>
                    <div className="text-4xl p-2">Trained Chef</div>
                    <div className="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus alias neque quos nulla quibusdam numquam sunt
                        necessitatibus nostrum obcaecati id? Laborum iusto fuga
                        id impedit rem. Perferendis maiores deserunt quibusdam?
                    </div>
                </div>
                <div className="basis-1/4">
                    <div className="mx-auto rounded-full bg-gray-600 w-20 h-20">
                        3
                    </div>
                    <div className="text-4xl p-2">Artisan Coffee</div>
                    <div className="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae, esse expedita odio ratione unde numquam
                        laudantium excepturi maxime accusamus aliquam distinctio
                        aut autem quaerat! Ducimus voluptatem aliquid maiores
                        magnam omnis.
                    </div>
                </div>
                <div className="basis-1/4">
                    <div className="mx-auto rounded-full bg-gray-600 w-20 h-20">
                        4
                    </div>
                    <div className="text-4xl p-2">Vegan Options</div>
                    <div className="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, voluptatum voluptate! Dicta sapiente voluptatum
                        minus repellendus, in repudiandae illo sit, provident
                        modi atque voluptates, quod nesciunt blanditiis facere
                        sunt veniam.
                    </div>
                </div>
            </div>
            <div className="p-4">
                <Button className="flex my-4 mx-auto justify-center py-4">
                    See Our Menu
                </Button>
            </div>
        </div>
    )
}

export default InfoCard
