import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, Marker, TileLayer, useMap, Popup } from 'react-leaflet'

export default function MapComp(){
    const position = [49.28594, -123.11129];

    const leafleticon = L.icon ({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3943/3943971.png',
        iconSize: [40,40],
        iconAnchor: [20,40]
    })

    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position} icon={leafleticon}>
                <Popup>
                    yurrr
                </Popup>
            </Marker>
        </MapContainer>
    )
}



