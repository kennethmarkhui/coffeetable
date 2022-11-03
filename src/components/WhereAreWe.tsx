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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis ab dolores earum mollitia fugit minima id! Amet impedit
                    nobis natus eos magnam expedita dolores mollitia
                    perspiciatis minima, molestiae illum ex quisquam itaque
                    aperiam commodi fugiat doloremque consectetur. Repudiandae,
                    natus voluptates officia quisquam ex itaque sapiente?
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
