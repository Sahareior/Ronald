import React from 'react';
import { Button, Modal } from 'antd';

import VOrderDetails from './VOrderDetails';
import VEditOrder from './VEditOrder';

const VOrderModal = ({ isModalOpen, setIsModalOpen,target }) => {
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
          <div className="py-3 px-4  bg-[#FAF8F2]">
            <h2 className="text-[22px] font-semibold text-gray-800">
              Order Details – <span className="text-[#CBA135]">#Wrioko240001</span>
            </h2>
          </div>
        }
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer= {null}
        width={700}
      >
      <div className='h-[70vh] px-4 pb-8 overflow-y-scroll'>
<VOrderDetails />
      </div>
      </Modal>
    </>
  );
};

export default VOrderModal;
