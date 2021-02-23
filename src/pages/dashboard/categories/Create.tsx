import React from "react";

const Create = () => {
  return (
    <div>
      <h1>kategori olustur</h1>
      <form className="form">
        <label htmlFor="name">Kategori Adi</label>
        <input type="text" name="name" id="name" placeholder="Orn: Ulasim" className="input" />
      </form>
    </div>
  );
};

export default Create;
