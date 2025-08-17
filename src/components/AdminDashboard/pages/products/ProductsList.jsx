import React from "react";
import ProductsTable from "./ProductsTable";
import { Button, Select } from "antd";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useGetAllProductsQuery, useVendorAcceptProductMutation } from "../../../../redux/slices/Apis/dashboardApis";
// import { useGetAllAdminProductsQuery } from "../../../../redux/slices/Apis/customersApi";
// import { useVendorAcceptProductMutation } from "../../../../redux/slices/Apis/vendorsApi";

const { Option } = Select;

const ProductsList = () => {
  const { data: products } = useGetAllProductsQuery();
  const [acceptProduct, { isLoading }] = useVendorAcceptProductMutation();


  const handleAccept = async () => {
    try {
      const res = await acceptProduct(12).unwrap(); // 12 = product ID
      console.log("Product accepted:", res);
    } catch (err) {
      console.error("Error accepting product:", err);
    }
  };

  console.log("products", products);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center pt-4">
        <p className="text-[34px] popbold">Products List</p>
        <div className="flex gap-4">
          <Link to="admin-overview/addproducts">
            <button className="bg-[#CBA135] popmed flex justify-end py-3 px-5 rounded-md text-end items-center gap-3 text-white">
              <FaPlus /> Add New Products
            </button>
          </Link>
          <Button onClick={handleAccept} loading={isLoading}>
            Accept Product
          </Button>
        </div>
      </div>

      {/* Form Filters */}
      <div className="grid grid-cols-1 p-6 bg-white items-center rounded-md md:grid-cols-3 gap-5">
        {/* First Name */}
        <div>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Job Title */}
        <div>
          <Select
            placeholder="Select Your Role"
            className="w-full"
            size="large"
            defaultValue="Categories"
          >
            <Option value="owner">Owner</Option>
            <Option value="manager">Manager</Option>
            <Option value="designer">Designer</Option>
          </Select>
        </div>

        {/* Department */}
        <div>
          <Select
            placeholder="Select Department"
            className="w-full"
            size="large"
            defaultValue="All"
          >
            <Option value="All">All</Option>
            <Option value="None">None</Option>
            <Option value="In Stock">In Stock</Option>
            <Option value="Out of stock">Out of stock</Option>
            <Option value="Low stock">Low stock</Option>
            <Option value="Approve">Approve</Option>
            <Option value="Reject">Reject</Option>
            <Option value="Pending">Pending</Option>
          </Select>
        </div>
      </div>

      {/* Product Table Section */}
      <div>
        <ProductsTable products={products} />
      </div>
    </div>
  );
};

export default ProductsList;
