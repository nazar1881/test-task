import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

interface JobMapProps {
    lat: number 
    lng: number 
}

const JobMap = ({lat, lng}:JobMapProps) => {

    const center = useMemo(() => ({lat:lat, lng:lng}), [])

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="smd:w-[300px] h-[330px] sm:w-[50%] xs:m-auto rounded-lg">
            <Marker position={center} />
        </GoogleMap>
    )
}

export default JobMap;