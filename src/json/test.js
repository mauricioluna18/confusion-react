import React from "react";

const Prueba = () => {
  const pruebaConversion = () => {
    let content = '{"ROOT":[{"msg":"SE AGREGO EXITOSAMENTE EL REGISTRO [MD299180339] 820671","seq_deal":"MD299180339","BanderaExceso":"0000","codError":"0000"}]}';
    let respusta = JSON.parse(content);
    console.log(respusta);
  };

  pruebaConversion();

  return (
    <>
      <p>asdfasd</p>
    </>
  );
};

export default Prueba;
