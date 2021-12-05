import React from "react";
import Card from "../card/card"
import Typography from '@material-ui/core/Typography';
import { Item } from './log-list.styles';

const LogList = ({items}) => {
    return (
        <Item>
            {
                items.map(item => (
                    <Card key={item.id} info={
                        <div>
                            <Typography variant="h5" component="h2">Name: {item.productName}</Typography>
                            <Typography color="yellow">Username:{item.username}</Typography>
                            <Typography >Address: {item.address}</Typography>
                        </div>
                    } />
                ))
            }
        </Item>
    )
}

export default LogList;