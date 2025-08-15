import React, { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const CreatePromotion = () => {
  const [name, setName] = useState("");
  const [discountType, setDiscountType] = useState("percentage");
  const [discountValue, setDiscountValue] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [isActive] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);
  const [showProductDropdown, setShowProductDropdown] = useState(false);

  // Mock data for vendor's products
  const mockProducts = [
    { id: 1, name: "Modern Wooden Chair", sku: "MWC-001", price: 12000 },
    { id: 2, name: "Leather Sofa Set", sku: "LSS-002", price: 45000 },
    { id: 3, name: "Glass Dining Table", sku: "GDT-003", price: 32000 },
    { id: 4, name: "Bookshelf Oak Finish", sku: "BOF-004", price: 18000 },
    { id: 5, name: "Queen Size Bed Frame", sku: "QBF-005", price: 28000 },
  ];

  useEffect(() => {
    setAvailableProducts(mockProducts);
  }, []);

  const filteredProducts = availableProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductSelect = (product) => {
    if (!selectedProducts.some((p) => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
    setSearchQuery("");
    setShowProductDropdown(false);
  };

  const removeProduct = (productId) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== productId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      discount_type: discountType,
      discount_value: discountValue,
      products: selectedProducts.map((p) => p.id),
      start_datetime: new Date(startDateTime).toISOString(),
      end_datetime: new Date(endDateTime).toISOString(),
      description,
      is_active: isActive,
    };

    console.log("Final Payload:", payload);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md border p-6">
      {/* Header */}
      <div
        className="bg-yellow-600 text-white text-2xl popbold rounded-t-md px-4 py-5"
        style={{
          background: "linear-gradient(90deg, #CBA135 0%, #B8941F 100%)",
        }}
      >
        Create New Promotion
        <p className="text-[16px] popreg">
          Fill in the details below to list your furniture product
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label className="block popmed text-[14px] mb-1">
            Promotion Name *
          </label>
          <input
            type="text"
            placeholder="Enter promotion name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block popmed text-[14px] mb-1">
            Discount Type *
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="discountType"
                value="percentage"
                checked={discountType === "percentage"}
                onChange={() => setDiscountType("percentage")}
              />
              Percentage (%)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="discountType"
                value="flat"
                checked={discountType === "flat"}
                onChange={() => setDiscountType("flat")}
              />
              Flat Amount (৳)
            </label>
          </div>
        </div>

        <div>
          <label className="block popmed text-[14px] mb-1">
            Discount Value *
          </label>
          <input
            type="number"
            min="0"
            value={discountValue}
            onChange={(e) => setDiscountValue(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>

        {/* Product Selection */}
        <div className="relative">
          <label className="block popmed text-[14px] mb-1">
            Select Products *
          </label>

          {/* Selected products */}
          {selectedProducts.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                >
                  {product.name} ({product.sku})
                  <button
                    type="button"
                    onClick={() => removeProduct(product.id)}
                    className="ml-2 text-gray-500 hover:text-red-500"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Search bar */}
          <div className="relative">
            <div className="flex items-center border rounded-md px-3 py-2">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowProductDropdown(true)}
                placeholder="Search your products..."
                className="flex-1 outline-none bg-transparent"
              />
            </div>

            {showProductDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                      onClick={() => handleProductSelect(product)}
                    >
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-xs text-gray-500">
                          {product.sku} - ৳
                          {product.price.toLocaleString()}
                        </p>
                      </div>
                      {selectedProducts.some((p) => p.id === product.id) && (
                        <span className="text-green-500 text-sm">
                          ✓ Selected
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">
                    No products found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Date pickers */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block popmed text-[14px] mb-1">
              Start Date & Time *
            </label>
            <input
              type="datetime-local"
              value={startDateTime}
              onChange={(e) => setStartDateTime(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block popmed text-[14px] mb-1">
              End Date & Time *
            </label>
            <input
              type="datetime-local"
              value={endDateTime}
              onChange={(e) => setEndDateTime(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block popmed text-[14px] mb-1">
            Description / Notes (Optional)
          </label>
          <textarea
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add any additional notes about this promotion..."
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
       <div className="bg-white border rounded-md p-4 mt-4">
          <h3 className="popmed text-[18px] text-yellow-600 mb-2">✨ Additional Options</h3>
          <div className="flex flex-col popmed text-[14px] gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>
                Limit per customer <span className="text-xs text-gray-500">Set maximum uses per customer</span>
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>
                Highlight as featured <span className="text-xs text-gray-500">Show this promotion prominently</span>
              </span>
            </label>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md font-medium"
          >
            Create Promotion
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePromotion;
