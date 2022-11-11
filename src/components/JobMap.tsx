import { GoogleMap, Marker } from "@react-google-maps/api";

interface JobMapProps {
    lat: number 
    lng: number 
}

const JobMap = ({lat, lng}:JobMapProps) => {

    return (
        <GoogleMap zoom={10} center={{
            lat: lat,
            lng: lng
        }} mapContainerClassName="smd:w-[300px] h-[330px] sm:w-[50%] xs:m-auto rounded-lg"/>
    )
}

export default JobMap;