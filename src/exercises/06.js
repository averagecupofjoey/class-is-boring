import { Component, useContext } from "react";

import ShoppingContextManager from "../IKEAVibes";
import FunctionalComponent03 from "./03";

class ClassComp06 extends Component {
    render() {
        return (
            <div>
                <ShoppingContextManager.Consumer>
                    {currentContextValue => {
                        return (
                            <div>
                                <h1>{currentContextValue.message}</h1>
                                <img src={currentContextValue.imageUrl} />
                            </div>
                        );
                    }}
                </ShoppingContextManager.Consumer>
            </div>
        );
    }
}

const FunctionalComponent06 = () => {
    const currentContextValue = useContext(ShoppingContextManager)
    return (
        <div>
            <h1>{currentContextValue.message}</h1>
            <img src={currentContextValue.imageUrl} />
        </div>
    );
};

export default FunctionalComponent06;
