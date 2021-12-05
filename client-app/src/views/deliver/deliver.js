import React, {useState} from "react";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import logo from "../../assets/logo.png"
import { ButtonStyle, Logo, DeliverContainer } from "./deliver.styles";
import {deliverItem} from "../../api/deliver/deliver.api";

const Deliver = () => {
    const [user, setUser] = useState("");
    const [streetAddress,  setStreetAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [product, setProduct] = useState("");

    const onUserChange = (e) => {
        setUser(e.target.value);
    };

    const onSAChange = (e) => {
        setStreetAddress(e.target.value);
    };

    const onZipChange = (e) => {
        setZipCode(e.target.value);
    };

    const onStateChange = (e) => {
        setState(e.target.value);
    };

    const onCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const onProductChange = (e) => {
        setProduct(e.target.value);
    };

    const onDeliverRequest = () => {
        deliverItem(user, streetAddress, zipCode, state, country, product)
        .then((response) => 
        {
            if(response.data.success === true){
                alert("Delivered!");
            } 
        }).catch((error) => {
            alert("Something went wrong, Recorded " + error);
        });
    };

    return(
        <DeliverContainer>
            <Logo src={logo} alt="GPS" />
            <p>Deliver Product</p>
            <Input
                name="userId"
                type="text"
                label="Username"
                value={user}
                inputChange={onUserChange}
            />
            <Input
                name="streetAddress"
                type="text"
                label="Street Address"
                value={streetAddress}
                inputChange={onSAChange}
            />
            <Input
                name="zipCode"
                type="text"
                label="Zip Code"
                value={zipCode}
                inputChange={onZipChange}
            />
            <Input
                name="state"
                type="text"
                label="State"
                value={state}
                inputChange={onStateChange}
            />
            <Input
                name="country"
                type="text"
                label="Country"
                value={country}
                inputChange={onCountryChange}
            />
            <Input
                name="productId"
                type="text"
                label="Product ID"
                value={product}
                inputChange={onProductChange}
            />
            <ButtonStyle>
                <Button onClick={onDeliverRequest} label="Deliver" />
            </ButtonStyle>
        </DeliverContainer>
    )
}

export default Deliver;