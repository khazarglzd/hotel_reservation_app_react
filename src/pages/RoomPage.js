import React from "react";
import Heading from "../components/common/Heading";
import Rooms from "../components/home/Rooms";

export default function Room() {
    return (
        <>
            <Heading heading="Rooms" title="Home" subtitle="Rooms" />
            <Rooms />
        </>
    );
}