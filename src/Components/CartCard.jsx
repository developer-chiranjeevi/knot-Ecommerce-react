import {useState} from "react";
import {Button, Card,CardBody,Typography} from "@material-tailwind/react";


const CartCard = () =>{

    const [count, setCount] = useState(0);

    return(
        <div className="">
            <Card className="mt-6">
                <CardBody className="flex items-center">
                    <div className="w-[calc(30%)]">
                        <img className="object-fill rounded-lg" src="./tshirt.jpg" alt="product image"  />
                    </div>
                    <div className="ml-4">
                        <Typography variant="h6" className="mb-2 capitalize text-primary">men solid red full hand tshirts</Typography>
                        <Typography variant="p" className="mb-2 capitalize text-shade1">freaky tshirts</Typography>
                        <Typography variant="h6" className="mb-2 capitalize text-primary">{`₹ ${600}`}</Typography>
                        <div className="flex items-center">
                            <Button size="sm" className="mr-4" onClick={()=>setCount(count+1)}>+</Button>
                            <Typography variant="h5">{count}</Typography>
                            <Button size="sm" className="ml-4" disabled={count<=0} onClick={()=>setCount(count-1)}>-</Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
};

export default CartCard;