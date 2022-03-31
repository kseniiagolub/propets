import React, {useRef} from 'react';
import {GoogleMap} from "@react-google-maps/api";

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
}

const Map = ({center}) => {

    const mapRef = useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    return (
        <>
            <GoogleMap
                mapContainerStyle={{width: '100%', height: '100%'}}
                center={center}
                zoom={17}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                <></>
            </GoogleMap>
        </>
    );
};

export default Map