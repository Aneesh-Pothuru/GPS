import React, {useState, useEffect} from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import ProductList from "../../components/product-list/product-list";
import {getInventory, addInventory} from "../../api/inventory/inventory.api";
import { InventoryContainer, Logo, ButtonStyle } from "./inventory.styles";

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [weight, setWeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [len, setLen] = useState(0); 
    const [height, setHeight] = useState(0);
    const [update, setUpdate] = useState(true);

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onWeightChange = (e) => {
        setWeight(e.target.value);
    }
    
    const onWidthChange = (e) => {
        setWidth(e.target.value);
    }

    const onLenChange = (e) => {
        setLen(e.target.value);
    }

    const onHeightChange = (e) => {
        setHeight(e.target.value);
    }

    const onAddRequest = () => {
        addInventory(name, weight, width, len, height)
        .then((response) => setUpdate(!update)).catch((error) => {
            alert("Something went wrong, Recorded " + error);
        });
    }

    useEffect( () => {
        getInventory().then(response => {
            setProducts(response.data)
        })
    },[update]);
    
    return(
        <InventoryContainer>
            <Logo src={logo} alt="GPS" />
            <p>All Products</p>
            <ProductList items={products} />
            <p>Add Product</p>
            <Input
                name="name"
                type="text"
                label="Name"
                value={name}
                inputChange={onNameChange}
            />
            <Input
                name="weight"
                type="number"
                label="Weight"
                value={weight}
                inputChange={onWeightChange}
            />
            <Input
                name="width"
                type="number"
                label="Width"
                value={width}
                inputChange={onWidthChange}
            />
            <Input
                name="length"
                type="number"
                label="Length"
                value={len}
                inputChange={onLenChange}
            />
            <Input
                name="height"
                type="number"
                label="Height"
                value={height}
                inputChange={onHeightChange}
            />
            <ButtonStyle>
                <Button onClick={onAddRequest} label="Add Product" />
            </ButtonStyle>
        </InventoryContainer>
    )
}

export default Inventory;