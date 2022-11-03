import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import divider from '../assets/image/divider.png'

export type Coordinate = [number, number]

const coordinates: Coordinate[] = [
    [51.505, -0.09],
    [51.505, -0.09],
]

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
                <div className="grid md:grid-cols-2 gap-8 mx-auto z-0">
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
            </div>
        </section>
    )
}

export default WhereAreWe
