import React from "react";
import { GetGroups } from '../constants/grouptypes';

 export class Main extends React.Component
{
    render() {
    const groups = GetGroups();
    console.log(groups);
        return (
        <div/>
        );
    }
}


export default Main;