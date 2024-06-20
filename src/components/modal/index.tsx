import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Trees } from '../tree'

export const Modals: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Chart of Accounts" open={isModalOpen} footer={null} onCancel={handleCancel}>
        <Trees />
      </Modal>
    </>
  );
};

