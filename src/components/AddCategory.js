import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategories }) => {
    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue,...categories, ]);
            //  setCategories(categories => [...categories, inputValue]);
            setinputValue('');
        }

        //console.log('Submit Hecho')
        // setCategories



    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <h2>Add Category</h2> */}
            {/* <h1>{inputValue}</h1> */}
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )

}

AddCategory.propTypes = {
    //isRequiered es para que sea obligatorio
    setCategories: PropTypes.func.isRequired

}
