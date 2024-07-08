import logo from "@/public/house.jpg";
import HouseCard from "./HouseCard";

const PropertiesDisplay = () => {
  const itemsList = [
    {
      image: logo,
      price: "9,500",
      houseState: "Phnom Penh",
      address: "123 Monivong Blvd, Phnom Penh, Cambodia",
    },
    {
      image: logo,
      price: "4,500",
      houseState: "Siem Reap",
      address: "456 Charles De Gaulle, Siem Reap, Cambodia",
    },
    {
      image: logo,
      price: "3,500",
      houseState: "Battambang",
      address: "789 Street 1.5, Battambang, Cambodia",
    },
    {
      image: logo,
      price: "5,500",
      houseState: "Sihanoukville",
      address: "321 Independence Beach, Sihanoukville, Cambodia",
    },
    {
      image: logo,
      price: "7,200",
      houseState: "Kampot",
      address: "654 Riverside Road, Kampot, Cambodia",
    },
    {
      image: logo,
      price: "8,300",
      houseState: "Kampong Cham",
      address: "987 Mekong River St, Kampong Cham, Cambodia",
    },
  ];

  return (
    <div className="grid grid-cols-2 w-[500px] gap-2 overflow-auto">
      {itemsList.map((item, index) => (
        <HouseCard
          key={index}
          image={item.image}
          houseState={item.houseState}
          price={item.price}
          address={item.address}
        />
      ))}
    </div>
  );
};

export default PropertiesDisplay;
