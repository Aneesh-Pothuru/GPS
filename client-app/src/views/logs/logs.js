import React, {useState} from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import LogList from "../../components/log-list/log-list";
import {checkLogs} from "../../api/logs/logs.api";
import {LogContainer, Logo, ButtonStyle} from "./logs.styles";

const Logs = () => {
    const [key, setKey] = useState("");
    const [logs, setLogs] = useState([]);

    const onKeyChange = (e) => {
        setKey(e.target.value)
    }

    const onRequest = () => {
        checkLogs(key).then(
            (response) => {
                console.log(response);
                setLogs(response.data);
            }
        ).catch((error) => 
            {alert("Something went wrong, Recorded " + error);}
        );
    }

    return(
        <LogContainer>
            <Logo src={logo} alt="GPS" />
            <p>Access Logs</p>
            <Input
                name="key"
                type="password"
                label="Key"
                value={key}
                inputChange={onKeyChange}
            />
            <ButtonStyle>
                <Button onClick={onRequest} label="Request" />
            </ButtonStyle>
            <p>All Logs:</p>
            <LogList items={logs} type={key}/>
        </LogContainer>
    )
}

export default Logs;