import React, {MouseEvent, ChangeEvent, useState} from 'react';

export const FullInput = (props: {addNewMessage: (title: string) => void}) => {

    const [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.addNewMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input type="text" onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};