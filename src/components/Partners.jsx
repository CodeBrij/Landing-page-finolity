import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const companies = [
  { name: "Intel", location: [37.3875, -122.0575], logo: "intel.webp" },
  { name: "Microsoft", location: [47.6423, -122.1367], logo: "microsoft.webp" },
  { name: "Lenovo", location: [39.9042, 116.4074], logo: "lenovo.png" },
  { name: "Cisco", location: [37.3541, -121.9552], logo: "cisco.png" },
  { name: "Hewlett-Packard", location: [37.4135, -122.1251], logo: "hp.png" },
  { name: "Dell", location: [30.2672, -97.7431], logo: "dell.png" },
  { name: "Ubiquiti", location: [40.7128, -74.006], logo: "ubiquiti.png" },
];

const customIcon = (logo) =>
  new L.Icon({
    iconUrl: `/${logo}`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    iconRetinaUrl: '/default-marker.png', // Fallback icon
  });

const Partners = () => {
  return (
    <div className="px-20 py-5 text-center">
    <h1 className="text-4xl font-bold text-gray-900">
          <span className="text-rose-600">
            Recognized by the Best
            <br />
            Across the World!!
          </span>
          <p className="text-gray-600 text-lg mt-4 w-[50%] m-auto pb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          voluptatibus quam modi et qui explicabo, provident officia! Eveniet
          tempore eligendi dolore nesciunt! Quia, debitis?
        </p>
    </h1>
    <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {companies.map((company, index) => (
        <Marker key={index} position={company.location} icon={customIcon(company.logo)}>
          <Popup>
            <img src={`${company.logo}`} alt={company.name} width="100" />
            <p className="font-semibold text-center">{company.name}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}

export default Partners;
