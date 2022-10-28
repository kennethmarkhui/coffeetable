import divider from '../assets/image/divider.png'
import Button from './Button'

const OurMission = () => {
    return (
        <div className="max-w-screen-xl h-auto mx-auto my-auto p-4 flex flex-row">
            <div className="basis-1/2">
                <img src="http://placekitten.com/450/450" alt="" />
                <img src="http://placekitten.com/150/150" alt="" />
                <div className="text-yellow0 text-7xl">Since 2017</div>
            </div>

            <div className="basis-1/2 space-y-3 p-4">
                <div className="text-yellow0 text-4xl py-4">Who are we</div>
                <div>Our Mission to provide a Quality Dining Experience</div>
                <img className="w-72 h-10 flex" src={divider}></img>
                <div className="py-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione, nisi. Non ipsa ratione, perspiciatis nisi porro
                    fugiat unde dolor assumenda, reiciendis, nemo libero
                    architecto et fugit voluptatem accusamus. Necessitatibus,
                    culpa?
                </div>
                <div className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ea neque culpa consequatur quasi facilis officiis laboriosam
                    quam voluptas? Possimus?
                </div>
                <div className="py-6">
                    <Button>Discover Our Menu</Button>
                </div>
            </div>
        </div>
    )
}

export default OurMission
