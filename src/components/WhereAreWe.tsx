import divider from '../assets/image/divider.png'

const WhereAreWe = (): JSX.Element => {
    return (
        <section className="bg-[url('assets/image/coffee-bar.jpg')] bg-neutral-900 bg-cover bg-center bg-blend-multiply my-10">
            <div className="max-w-screen-xl mx-auto flex flex-col gap-4 sm:gap-8 p-6 text-left sm:text-center">
                <h1 className="text-2xl md:text-4xl">Where Are We?</h1>
                <div className="flex place-content-start sm:place-content-center">
                    <img className="w-72" src={divider} />
                </div>
                <p className="text-sm md:text-base">
                    Our café is located in two areas, Hobart and Moonah. You can
                    find our café in Hobart hidden away in Collins Court
                    opposite JB HI-FI Hobart. If you’re looking for our Moonah
                    store, we are on the main road and can’t be missed. Please
                    use the map below to see our two locations if you need
                    directions. Trust us when we say: you won’t want to miss a
                    dining experience like Dandy Lane Café.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mx-auto">
                    <img src="http://placekitten.com/500/400" alt="" />
                    <img src="http://placekitten.com/500/400" alt="" />
                </div>
            </div>
        </section>
    )
}

export default WhereAreWe
