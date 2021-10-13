import React, { useState } from 'react';
import {
  Heading, HFlow, Icon, Modal, ModalBody,
} from 'bold-ui';

export const TimeExceededModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleModalClose = () => setIsOpen(false);

  return (
    <Modal size="small" onClose={handleModalClose} open={isOpen}>
      <ModalBody>
        <HFlow alignItems="center">
          <Icon icon="infoCircleOutline" style={{ marginRight: '0.5rem' }} size={3} fill="info" />
          <div>
            <Heading level={1}>Tempo excedido</Heading>
            <Heading level={5}>A operação solicitada é muito longa</Heading>
          </div>
        </HFlow>
        <p>
          O servidor está configurado para testar os múltiplos do número informado
          com fatores de valor até 5 milhões, o que leva cerca de 5 segundos.
          Caso nenhum destes múltiplos seja duodígito, este erro é retornado.
        </p>
      </ModalBody>
    </Modal>
  );
};
