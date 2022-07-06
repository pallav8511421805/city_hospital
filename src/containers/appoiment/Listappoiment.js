import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function Listappoiment(props) {
    const history = useHistory();
    const getdata = () => {
        let booklocaldata = JSON.parse(localStorage.getItem("Appointment"));
        setdata(booklocaldata)
    }
    const [data, setdata] = useState([])
    useEffect(() => {
        getdata();
    }, [])
    const editbtn = (id) => {
        history.push("/appoiment", { id: id })
    }
    const deletebtn = (delteid) => {
        console.log(delteid);
    }
    return (
        data.map((d) => {
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
                            <Button color="primary" onClick={() => { editbtn(d.id) }} className='shadow-none mx-2 border-2 border-primary'>
                                Edit
                            </Button>
                            <Button color="danger" id="btn" onClick={() => { deletebtn(d.id) }} className='shadow-none mx-2 border-2 border-danger'>
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