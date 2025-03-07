import { Component, useEffect, useState } from "react";

import { oneRandomActivity } from '../bored-api';
import FunctionalComponent02 from "./02";

class ClassComp03 extends Component {
    constructor() {
        super();
        this.state = {
            doWhenImBored: null,
        };
    }
    async componentDidMount() {
        const anActivity = await oneRandomActivity();
        this.setState({ doWhenImBored: anActivity });
    }
    render() {
        if (this.state.doWhenImBored === null) {
            return <h2>Siiiiiiigh. Loading ...</h2>;
        } else {
            return <h1>{this.state.doWhenImBored}</h1>;
        }
    }
}

const FunctionalComponent03 = () => {
    const [doWhenImBored, set] = useState(null);

    //to use as a componentDidMount (only render once), provide an empty array in addition to the function for useEffect VVV
    useEffect(()=>{
        const run = async() => {
            const anActivity = await oneRandomActivity();
            set(anActivity);
        }
        run();

    }, [])

    if (doWhenImBored === null) {
            return <h2>Siiiiiiigh. Loading ...</h2>;
        } else {
            return <h1>{doWhenImBored}</h1>;
        }
};

export default FunctionalComponent03;
