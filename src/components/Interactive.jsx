"use client";
import React, { useState } from "react";
import Card from "@/components/Card";
import ModalTemplate from "@/components/Modal";
import Iframe from "./Iframe";
const Main = ({ filename }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [url, setUrl] = useState(null);
  const openModal = (url) => {
    setUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="grid lg:grid-cols-4 gap-4 p-10 lg:p-20">
        {filename.map((el, index) => (
          <div onClick={() => openModal(el.url)}>
            <Card key={index} img={el.img} url={el.url} />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ModalTemplate
          isOpen={isModalOpen}
          closeModal={closeModal}
          children={Iframe}
        >
          <Iframe url={url} />
        </ModalTemplate>
      )}
    </>
  );
};

export default Main;
