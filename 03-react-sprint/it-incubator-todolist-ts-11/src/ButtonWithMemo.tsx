import React from 'react';
import {Button} from "@mui/material";
import {FilterValuesType} from "./App";

type ButtonWithMemoPropsType = {
    variant: 'text' | 'outlined' | 'contained'
    onClickCallback: () => void
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"
    buttonTitle: string
}

export const ButtonWithMemo = React.memo((props: ButtonWithMemoPropsType) => {
    return <Button variant={props.variant}
                   onClick={props.onClickCallback}
                   color={props.color}>
        {props.buttonTitle}
    </Button>
})