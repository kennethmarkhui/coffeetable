import Button from './Button'

const CTA = (): JSX.Element => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center lg:flex-row gap-2 px-4">
            <div className="flex flex-col items-center text-center gap-2 lg:basis-1/3 px-8">
                <h2 className="text-yellow0 font-bold md:text-2xl">
                    dandy day, dandy start
                </h2>
                <h1 className="text-2xl md:text-4xl">
                    Artisan Coffee & Fine Food in Tasmania
                </h1>
                <hr className="border-yellow0 w-48" />
                <p className="text-sm md:text-base">
                    If you live in Hobart or Moonah, we have two quaint
                    locations in the heart of Tasmania. We offer a beautiful
                    range of drinks and food for all pallets, and we cater to
                    any dietary requirements.
                </p>
                <Button className="my-4" variant="fill">
                    Book a Table Today!
                </Button>
            </div>

            {/* MOBILE */}
            <div className="flex lg:hidden">
                <img src="http://placekitten.com/150/150" alt="" />
                <img src="http://placekitten.com/150/150" alt="" />
            </div>

            {/* LARGE SCREEN */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:basis-1/3 lg:order-first h-full">
                <div>
                    <img src="http://placekitten.com/500/500" alt="" />
                </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:basis-1/3 h-full">
                <div>
                    <img src="http://placekitten.com/500/500" alt="" />
                </div>
            </div>
        </section>
    )
}

export default CTA
