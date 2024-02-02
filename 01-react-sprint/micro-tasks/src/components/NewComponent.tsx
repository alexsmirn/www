import React from 'react';

type NewComponentPropsType = {
    newComponentTitle: string
    carsArray: Array<CarType>
}

type CarType = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <h1>{props.newComponentTitle}</h1>
            <table>
                <tr>
                    <th>№</th>
                   <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {props.carsArray.map( (el, index) => {
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                } )}
            </table>
        </div>
    );
};

