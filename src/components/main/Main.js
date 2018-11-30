import React from "react";
import { GetGroups } from '../../constants/grouptypes';
import  SampleComponent from './GroupsGrid'

 export class Main extends React.Component
{
    render() {
    const groups = GetGroups();
    console.log(groups);
        return (
        <SampleComponent/>
        );
    }
}


export default Main;