//citation: https://react-hook-form.com/get-started/
import React, { useContext, useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import { MyDashboardContext } from './MyDashboard';
import { Row, Col, Avatar } from 'antd';

const Calculate = (coinId) => {
    
    const { addCoin } = useContext(MyDashboardContext);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            buyPrice: '',
        }
    });


    const onSubmit = data => {
        console.log(data.coinName);
    }

    return (
        <form className="calculate-box-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <Row className="each-coin-row">
            <Col className="buy-price-wrapper-left" span={6}>
                <Controller
                    name="buyPrice"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
            </Col>
            <Col className="buy-price-wrapper-right" span={6}><input type="submit" value="Calculate"/></Col>
            <Col span={6}><label></label></Col>
        </Row>
        </form>
    );
};

export default Calculate;