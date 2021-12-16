//https://react-hook-form.com/get-started/
import React, { useContext, useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import { MyDashboardContext } from './MyDashboard';

const AddCoinTextInput = () => {
    
    const { addCoin } = useContext(MyDashboardContext);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            coinName: '',
        }
    });

    //const onSubmit = data => console.log(data);

    const onSubmit = data => {
        console.log(data.coinName);
        addCoin(data.coinName);
    }

    return (
        <form className="input-box-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <Controller
            name="coinName"
            control={control}
            render={({ field }) => <Input {...field} />}
        />
        <input type="submit" />
        </form>
    );
};

export default AddCoinTextInput;