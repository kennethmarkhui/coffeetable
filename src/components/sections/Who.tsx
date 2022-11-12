import Button from '../Button'
import divider from '../../assets/image/divider.png'

const Who = (): JSX.Element => {
    return (
        <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 p-8">
            <img
                src="http://placekitten.com/550/550"
                alt=""
                className="flex-1"
            />
            <div className="flex-1 flex flex-col lg:flex-row gap-8">
                <div className="space-y-4">
                    <h1 className="text-2xl">WHO ARE LOREM</h1>
                    <img className="w-72" src={divider} />
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod atque possimus aspernatur amet, earum labore
                        commodi beatae itaque ipsum fugit velit impedit sed,
                        consectetur mollitia tenetur aliquam ex quia reiciendis
                        autem sunt dolores odit numquam nostrum nisi. Sunt ullam
                        aperiam eveniet temporibus nemo, minus suscipit
                        doloremque officiis impedit ea dolore.
                    </p>
                    <Button>Book now</Button>
                </div>
                <div className="space-y-4">
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde asperiores laborum doloremque perferendis eos
                        excepturi ratione ea dolore distinctio, consectetur
                        doloribus quisquam ducimus sequi illo, ipsum temporibus
                        dicta! Voluptates, accusamus vitae possimus voluptatum
                        aliquid iste id odit error et fugit!
                    </p>
                    <img
                        src="http://placekitten.com/550/550"
                        alt=""
                        className=""
                    />
                </div>
            </div>
        </section>
    )
}

export default Who
