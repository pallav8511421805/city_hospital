import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function Listappoiment(props) {
    let booklocaldata = JSON.parse(localStorage.getItem("Appointment"));
    const [data, setdata] = useState([])
    useEffect(() => {
        setdata(booklocaldata)
    }, [])
    return (
        data.map((d, i) => {
            return (
                <div>
                    <Card className='my-3 mx-3 col-3 border-3 border-primary'>
                        <CardBody>
                            <CardTitle tag="h5" className='text-primary'>
                                {d.name}
                            </CardTitle>
                            <CardText>
                                {d.date}
                            </CardText>
                            <Button color="primary" className='shadow-none mx-2 border-2 border-primary'>
                                Edit
                            </Button>
                            <Button color="danger" className='shadow-none mx-2 border-2 border-danger'>
                                Delete
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            )
        })
    );
}

export default Listappoiment;