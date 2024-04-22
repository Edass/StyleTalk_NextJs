"use client"
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {setCheck} from "@/store/slices/checked-slice"

function ExampleComponent() {
    const [checkedItems, setCheckedItems] = useState({});
    const checked = useSelector((state)=>state.checked.checked);
    const dispatch = useDispatch();

    dispatch(setCheck(!checked))

    const handleChange = (event) => {
  
    };

    return (
        <Form className="d-flex flex-column">
            <Form.Check
                inline
                label="Shoes"
                name="group1"
                type="checkbox"
                value="shoes"
                onChange={handleChange}
                checked={checkedItems['shoes'] || false}
            />

            <Form.Check
                inline
                label="Top"
                name="group1"
                type="checkbox"
                value="Top"
                onChange={handleChange}
                checked={checkedItems['Top'] || false}
            />

            <Form.Check
                inline
                label="Bottom"
                name="group1"
                type="checkbox"
                value="Bottom"
                onChange={handleChange}
                checked={checkedItems['Bottom'] || false}
            />

            <Form.Check
                inline
                label="Accessories"
                name="group1"
                type="checkbox"
                value="Accessories"
                onChange={handleChange}
                checked={checkedItems['Accessories'] || false}
            />
        </Form>
    );
}

export default ExampleComponent;
