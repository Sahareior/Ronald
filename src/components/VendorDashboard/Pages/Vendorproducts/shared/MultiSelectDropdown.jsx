import React, { useState } from "react";
import { Select, Tag } from "antd";

const { Option } = Select;

// ✅ Reusable Selection Component
export const MultiSelectDropdown = ({ label, options, selectedValues, setSelectedValues }) => {
  const handleChange = (values) => {
    setSelectedValues(values);
  };

  return (
    <div className="">
      <label className=" ">{label}</label>

      {/* Selected Items Display */}


      {/* Dropdown */}
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%" }}
        placeholder={`Select ${label}`}
        className="h-10"
        value={selectedValues}
        onChange={handleChange}
      >
        {options?.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
};