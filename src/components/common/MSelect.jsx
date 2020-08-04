import React, { Component } from 'react';
import Select, { OptionTypeBase } from 'react-select';

export default class MSelect extends Component {

  render() {
    const { options, onChange, isSearchable, placeholder, isSmall, value} = {...this.props};
    return (
      <Select
        value={value}
        options={options}
        onChange={onChange}
        isSearchable={isSearchable}
        placeholder={placeholder}
        // styles={isSmall ? customStylesSm : customStyles}
      />
    );
  }
}

const customStyles = {
    control: (provided) => ({
      ...provided,
      height: '54.8px',
    }),
    option: (provided, state) => {
      // if(state.isSelected) {
      //   console.log(provided);
      // }
      const backgroundColor = state.isSelected
        ? '#2362C7'
        : provided.backgroundColor;
      const color = state.isSelected ? 'white' : '#3b3b3b';
      //   label: "option"
      //   backgroundColor: "#2684FF"
      //   color: "hsl(0, 0%, 100%)"
      //   cursor: "default"
      //   display: "block"
      //   fontSize: "inherit"
      //   padding: "8px 12px"
      //   width: "100%"
      //   userSelect: "none"
      //   WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
      // :active: {backgroundColor: "#2684FF"}
      //   boxSizing: "border-box"
      return {
        ...provided,
        backgroundColor,
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontSize: '25px',
        color,
        paddingLeft: '27.5px',
        paddingTop: '7px',
        paddingBottom: '7px',
        opacity: state.isDisabled ? 0.5 : 1,
        // borderBottom: '1px dotted pink',
        // color: state.isSelected ? 'red' : 'blue',
        // padding: 20
      };
    },
    input: (provided) => ({
      ...provided,
    }),
    placeholder: (provided) => ({
      ...provided,
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontSize: '25px',
      color: '#3b3b3b',
      paddingLeft: '30px',
      // marginTop: '12px',
      // marginBottom: '12px'
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontSize: '25px',
      color: '#3b3b3b',
      paddingLeft: '30px',
      opacity: state.isDisabled ? 0.5 : 1,
      transition: 'opacity 300ms',
    }),
  };

  const customStylesSm = {
    control: (provided) => ({
      ...provided,
      height: '54.8px'
    }),
    option: (provided, state) => {
      const backgroundColor = state.isSelected
        ? '#2362C7'
        : provided.backgroundColor;
      const color = state.isSelected ? 'white' : '#3b3b3b';
      return {
        ...provided,
        backgroundColor,
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontSize: '18px',
        color,
        paddingLeft: '27.5px',
        paddingTop: '7px',
        paddingBottom: '7px',
        opacity: state.isDisabled ? 0.5 : 1
      };
    },
    input: (provided) => ({
      ...provided
    }),
    placeholder: (provided) => ({
      ...provided,
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontSize: '18px',
      color: '#3b3b3b',
      paddingLeft: '30px'
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontSize: '18px',
      color: '#3b3b3b',
      paddingLeft: '30px',
      opacity: state.isDisabled ? 0.5 : 1,
      transition: 'opacity 300ms'
    })
  };
