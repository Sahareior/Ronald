import React from 'react';
import { useSellerApproveMutation, useVendorApproveQuery } from '../../../../../redux/slices/apiSlice';

const ApproveSellers = () => {
    const { data, isLoading } = useVendorApproveQuery();
    const [sellerApprove] = useSellerApproveMutation()

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const handleApprove = (vendorId, userId) => {
        console.log("Vendor ID:", vendorId, "User ID:", userId);
        // Later you can call an API to approve here
        sellerApprove(vendorId)
    };

    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Approve Sellers</h2>
            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr>
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Business Name</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.results?.map((vendor) => (
                        <tr key={vendor.id}>
                            <td className="border p-2">{vendor.id}</td>
                            <td className="border p-2">{vendor.legal_business_name}</td>
                            <td className="border p-2">{vendor.status}</td>
                            <td className="border p-2">
                                <button
                                    className="bg-green-500 text-white px-3 py-1 rounded"
                                    onClick={() => handleApprove(vendor.id, vendor.user)}
                                >
                                    Approve
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApproveSellers;
