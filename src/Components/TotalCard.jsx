import {useState} from "react";
import {Button, Card,CardBody,Typography} from "@material-tailwind/react";


const TotalCard = () =>{

    const [total, setTotal] = useState(600);

    return(
        <div className="">
            <Card className="mt-6">
                <CardBody>
                    <Typography variant="h4" className="text-primary text-center lg:text-start">{`Grand Total : ${total} ₹`}</Typography>
                    <Button className="capitalize w-full mt-4 lg:w-2/4">place order</Button>
                </CardBody>
            </Card>
        </div>
    )
};


export default TotalCard;