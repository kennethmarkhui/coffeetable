import Button from '../Button'
import divider from '../../assets/image/divider.png'

const WhoWeAre = (): JSX.Element => {
    return (
        <section className="max-w-screen-xl mx-auto my-8 p-4 flex flex-col lg:flex-row gap-4">
            <div className="flex-1 mx-auto">
                <img src="http://placekitten.com/450/450" alt="" />
                <img src="http://placekitten.com/150/150" alt="" />
                <div className="text-yellow0 text-7xl">Since 2017</div>
            </div>

            <div className="flex flex-col sm:items-center lg:items-start flex-1 gap-4">
                <p className="text-yellow0">Who are we</p>
                <h1 className="text-2xl md:text-4xl">
                    Our Mission to provide a Quality Dining Experience
                </h1>
                <img className="w-72 h-10" src={divider} />
                <p className="text-sm md:text-base sm:text-center lg:text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione, nisi. Non ipsa ratione, perspiciatis nisi porro
                    fugiat unde dolor assumenda, reiciendis, nemo libero
                    architecto et fugit voluptatem accusamus. Necessitatibus,
                    culpa?
                </p>
                <p className="text-sm md:text-base sm:text-center lg:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ea neque culpa consequatur quasi facilis officiis laboriosam
                    quam voluptas? Possimus?
                </p>
                <div>
                    <Button>Discover Our Menu</Button>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
