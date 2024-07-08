import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface HouseCardProps {
  image: StaticImageData;
  houseState: string;
  price: string;
  address: string;
}

const HouseCard = ({ image, houseState, price, address }: HouseCardProps) => {
  return (
    <Card>
      <Image alt="house" src={image} className="rounded-md" />
      <CardHeader>
        <CardTitle>{price}</CardTitle>
        <CardDescription>{houseState}</CardDescription>
        <CardDescription>{address}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button size={"sm"}>View Detail</Button>
      </CardFooter>
    </Card>
  );
};

export default HouseCard;
