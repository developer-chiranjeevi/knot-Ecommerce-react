import {useState} from "react";
import {Button, Card,CardBody,Typography} from "@material-tailwind/react";


const TotalCard = () =>{

    const [total, setTotal] = useState(600);

    return(
        <div className="">
            <Card className="mt-6">
                <CardBody>
                    <Typography variant="h4" className="text-primary text-center lg:text-start">{`Grand Total : ${total} ₹`}</Typography>
                    <Button className="capitalize w-full mt-4  bg-primary lg:w-2/4">
                        place order
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-flex items-center ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
};


export default TotalCard;