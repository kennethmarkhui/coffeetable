import image from '../../assets/image/coffee_and_beans.jpg'

const TransparentCard = () => {
    return (
        <div className="">
            <div className=" py-4 px-96">
                <img
                    src={image}
                    alt="image"
                    className="bg-local brightness-50 h-3/5 w-96 bg-cover"
                />
            </div>
        </div>
    )
}

export default TransparentCard
