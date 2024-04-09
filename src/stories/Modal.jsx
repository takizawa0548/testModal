import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

/**
 * Primary UI component for user interaction
 */
export const Modal = () => {
  return (
    <ModalBack >
      <ModalWidth>
        <ModalOutline>
          <ModalHeader>TitleTest</ModalHeader>
          <ModalBody>
            <ModalBodyTextInfo/>
            <ModalBodyTextPrimary/>
            <ModalBodyZipList />
          </ModalBody>
        </ModalOutline>
      </ModalWidth>
    </ModalBack>
  );
};

const ModalBack = (props) => {
  return (
    <div className='modalBase'>
      {props.children}
    </div>
  );
}

const ModalWidth = (props) => {
  return (
    <div className='modalWidth'>
      {props.children}
    </div>
  );
}

const ModalOutline = (props) => {
  return (
    <div className='ModalOutline'>
      {props.children}
    </div>
  );
}

const ModalClose = (props) => {
  return (
    <a aria-label="閉じる" data-modal-close="false" className='ModalClose'>
      {props.children}
    </a>
  );
}

const ModalHeader = (props) => {
  return (
    <div className='ModalHeader'>
      {props.children}
    </div>
  );
}

const ModalBody = (props) => {
  return (
    <div className='ModalBody'>
      <div></div>
      <div>
        {props.children}
      </div>
      <div></div>
    </div>
  );
}

const ModalBodyTextInfo = () => {
  return (
    <p >ご入力いただいた郵便番号には、複数のエリア候補があります。</p>
  );
}

const ModalBodyTextPrimary = () => {
  return (
    <p className='ModalBodyTextPrimary'>住所を選択してください。</p>
  );
}

const ModalBodyZipList = () => {
  return (
    <ul className='ModalBodyZipList'>
      <ModalZipLink/>
    </ul>
  );
}

const ModalZipLink = () => {
  return (
    <>
      <li><a className='ModalZipLink'>横浜市西区西戸部町１丁目</a></li>
      <li><a className='ModalZipLink'>横浜市西区西戸部町２丁目</a></li>
      <li><a className='ModalZipLink'>横浜市西区西戸部町３丁目</a></li>
    </>
  );
}