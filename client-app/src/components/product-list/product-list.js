import React from "react";
import Card from "../card/card"
import Typography from '@material-ui/core/Typography';
import { Item } from './product-list.styles';

const ProductList = ({items}) => {
    return (
        <Item>
            {
                items.map(item => (
                    <Card key={item[0]} info={
                        <div>
                            <Typography variant="h5" component="h2">Name: {item[1]}</Typography>
                            <Typography color="yellow">UUID: {item[0]}</Typography>
                            <Typography >Weight: {item[2]} kg</Typography>
                            <Typography >Width: {item[3]} in</Typography>
                            <Typography >Length: {item[4]} in</Typography>
                            <Typography >Height: {item[5]} in</Typography>
                        </div>
                    } />
                ))
            }
        </Item>
    )
}

export default ProductList;