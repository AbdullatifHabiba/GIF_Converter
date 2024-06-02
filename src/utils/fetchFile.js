// utils/fetchFile.js

export const fetchFile = async (file) => {
    const response = await fetch(URL.createObjectURL(file));
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  };
  