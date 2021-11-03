# Pecuniary

DESCRIPTION

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install the dependencies for the backend.

```bash
pip install -r requirements.txt
```

Use the package manager [npm](https://nodejs.org/en/) to install the dependencies for the frontend.

```bash
npm install
```

## Usage

After installing all the dependencies into the virtual environment, activate it.

```bash
source project/bin/activate
```

After the activation run the app.py file.

```bash
python app.py
```

To run the frontend of the application start the npm script.

```bash
npm run start
```

# Frontend

## Framework

This application's frontend was written using JavaScript and the [React Framework](https://reactjs.org/).

These files can be located in the `src` directory.

Other directories such as:

```bash
src/api
src/components
src/views
```

Will also mainly include files written in this framework.

## Testing

To run the unit tests in the application, run the test npm script.

```bash
npm run test
```

To write unit tests in the application, write a simple description and then the function.

```javascript
it("renders the foo component", () => {
  render(<Foo />);
});
```

## Styles

This application uses [styled-components](https://styled-components.com/) to integrate styles in the application.

To create a styled-component file for a specific component, write the name of the component with .styles at the end.

```bash
foo.styles.js
```

To write styles for a HTML tag, import the library and give a descriptive name.

```javascript
import styled from "styled-components";

export const BarContainer = styled.div`
  color: black;
  overflow: scroll;
`;
```

To write styles on existing components, import the library and mention the component in the name.

```javascript
import styled from "styled-components";
import Foo from "./foo";

export const FooStyledHomePage = styled(Foo)`
  color: black;
  overflow: scroll;
`;
```

To write normal css to integrate with the styled-components import css from [styled-components](https://styled-components.com/).

```javascript
import { css } from "styled-components";

const disabled = css`
  cursor: not-allowed;
  color: gray;
`;
```

## State Management

This application uses [Redux](https://react-redux.js.org/introduction/quick-start) to manage state throughout the application.

All files related to the redux store will be located in the `src/redux` directory.

When creating a new reducer make sure to initialize state and give detailed types.

```javascript
INITIAL_STATE = {
  foo: "",
  bar: ""
}

export const foobarReducer = (state = "INITIAL_STATE", action){
  switch(action.type){
    case('SET_FOO'){
      return{
        ...state,
        foo: action.payload
      };
    }
    case('SET_BAR'){
      return{
        ...state,
        bar: action.payload
      };
    }default{
      return state;
    }
  }
}
```

When creating a new action for the reducer make sure to add both type and payload.

```javascript
export const setFoo = (foo) => {
  type: 'SET_FOO',
  payload: foo
};

export const setBar = (bar) => {
  type: 'SET_BAR',
  payload: bar
};
```

When trying to either change state or access state we use the [useSelector and useDispatch](https://react-redux.js.org/api/hooks) hooks from [react-redux](https://react-redux.js.org/)

```javascript
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFoo, setBar } from "./foobar.actions.js";

export const FooBar = () => {
  const { foo, bar } = useSelector((state) => state.foobarReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFoo(foo))}>{foo}</button>
      <button onClick={() => dispatch(setBar(bar))}>{bar}</button>
    </div>
  );
};
```

## API Calls

This application uses [axios](https://www.npmjs.com/package/axios) to fetch data.

All the API requests will be inside the `src/api` directory.

To use the request use the websitePrefix from the api-info.js file.

```javascript
import { websitePrefix } from "../api-info";

export const foobarApi = (foo, bar) => {
  return axios({
    url: websitePrefix + "/api/" + foo + bar,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
};
```

# Backend
