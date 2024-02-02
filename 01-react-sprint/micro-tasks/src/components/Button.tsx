import React from 'react';

type ButtonPropsType = {
    name: 'All' | 'Dollars' | 'Rubles'
    callBack?: () => void
}

export const Button = (props: ButtonPropsType) => {

    return (
        <button>{props.name}</button>
    );
};