import { Coordinate } from './WhereAreWe'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { branch, email, phoneNumber } from './Footer'

const coordinates: Coordinate[] = [
    [51.505, -0.09],
    [51.505, -0.09],
]

const BusinessCard = () => {
    return (
        <section className="flex flex-col  bg-black p-8 max-w-7xl shadow-md border-none mx-auto gap-10 my-16 ">
            <div className="flex flex-row justify-around">
                <div className="flex flex-col">
                    {phoneNumber.map(({ name, number }, index) => (
                        <div key={index} className="flex">
                            <span>{name}:&nbsp;</span>
                            <p className="text-yellow0">{number}</p>
                        </div>
                    ))}
                    {/* left col  */}

                    <div>FOR BOOKINGS</div>

                    {email.map((email) => (
                        <div key={email} className="text-yellow0">
                            {email}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-1">
                    {/* right col  */}
                    <div>BUSINESS HOURS</div>
                    <div>Mon - Fri 7:00am - 3:00pm</div>
                    <div>Sat - Sun 9:00am - 2:00pm</div>
                    <div>Public holidays: Closed</div>
                </div>
            </div>

            <div className="flex justify-around z-0 ">
                {coordinates.map((coordinate, index) => (
                    <MapContainer
                        key={Math.random() + index}
                        center={coordinate}
                        zoom={13}
                        scrollWheelZoom={false}
                        className="w-72 h-72 sm:w-96 sm:h-96"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={coordinate}>
                            <Popup>You can find us here.</Popup>
                        </Marker>
                    </MapContainer>
                ))}
            </div>
        </section>
    )
}

export default BusinessCard
