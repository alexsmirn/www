import React from 'react';

type HeaderPropsType = {
    headerTitle: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div>
            {props.headerTitle}
        </div>
    );
};