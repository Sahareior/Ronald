import React from 'react';
import { Button, Modal } from 'antd';
import OrderDetails from './OrderDetails';
import EditOrder from './EditOrder';

const OrderModal = ({ isModalOpen, setIsModalOpen,target }) => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      <Modal
        title={
     target === 'eye' && (
           <div className="py-6 px-4  bg-[#FAF8F2]">
            <h2 className="text-[22px] font-semibold text-gray-800">
              Order Details – <span className="text-[#CBA135]">#Wrioko240001</span>
            </h2>
          </div>
     )
        }
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer= {null}
        width={900}
        style={{top: '30px'}}
      >
      <div className='h-[70vh] px-4 pb-8 overflow-y-scroll'>
        {
            !target? <OrderDetails /> : <div className='px-5 py-8'><EditOrder /></div>
        }
          {/* <OrderDetails /> */}
          {/* <EditOrder /> */}
      </div>
      </Modal>
    </>
  );
};

export default OrderModal;
