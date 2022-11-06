import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export type Coordinate = [number, number]

const coordinates: Coordinate[] = [
    [51.505, -0.09],
    [51.505, -0.09],
]

const Maps = (): JSX.Element => {
    return (
        <div className="grid lg:grid-cols-2 gap-8 mx-auto z-0">
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
    )
}

export default Maps
