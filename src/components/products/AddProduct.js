/* eslint-disable import/order */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addProduct } from '../../actions/product';

const Input = ({
  type, label, name, value, onChange
}) => (
  <div className="form-group">
    <label>{label}</label>
    <input
    type={type}
    className="form-control form__input"
    name={name}
    value={value}
    onChange={onChange}
    />
  </div>
);

const TextArea = ({ onChange, value }) => (
  <div className="form-group">
    <label>Description</label>
    <textarea
    value={value}
    name="description"
    onChange={onChange}
    className="form-control form__input form-text-area"></textarea>
  </div>
);

const Image = ({ onChange }) => (
  <div className="form-group">
    <label>Product Image</label>
    <input
    className="form-control-file form__input"
    type="file"
    name="cover"
    onChange={onChange}
    />
  </div>
);

const Products = ({ products }) => (
  <ul className="list-group">
    {
      products.map((item) => (
      <li key={item.id} className="list-group-item">
        {item.name}
      </li>
      ))
    }
  </ul>
);

const Submit = () => (
  <div className="form-group add-btn">
    <button type="submit" className="btn btn-success">Add Product</button>
  </div>
);

const AddProduct = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    description: '',
    name: '',
    price: 0,
    productImg: '',
    quantity: 0
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => setInputs({ ...inputs, productImg: event.target.files[0] });

  const {
    description, name, price, quantity, productImg
  } = inputs;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('product_img', productImg);
    dispatch(addProduct(formData));
    setInputs({
      description: '',
      name: '',
      price: 0,
      productImg: '',
      quantity: 0
    });
  };

  return (
    <div className="form-container">
      <h2 className="text-center text-white mt-2">Add Product</h2>
      <NavLink to="/dashboard"><button type="button" className="btn btn-primary">Back to Dashboard</button></NavLink>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <Input type="text" onChange={handleChange} value={name} name="name" label="Name" />
        <Input type="number" onChange={handleChange} value={price} name="price" label="Price" />
        <Input type="number" onChange={handleChange} value={quantity} name="quantity" label="Quantity" />
        <Image onChange={handleImage} />
        <TextArea onChange={handleChange} value={description} />
        <Submit />
      </form>
      <Products products={products} />
    </div>
  );
};

export default AddProduct;
