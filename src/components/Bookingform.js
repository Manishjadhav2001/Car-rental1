import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    startDate: '',
    endDate: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.email) newErrors.email = 'Email is required';
    if (formValues.email && !/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = 'Invalid email';
    if (!formValues.phone) newErrors.phone = 'Phone number is required';
    if (!formValues.carModel) newErrors.carModel = 'Car model is required';
    if (!formValues.startDate) newErrors.startDate = 'Start date is required';
    if (!formValues.endDate) newErrors.endDate = 'End date is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formValues);
      setSuccessMessage('Successfully done booking');
      // Reset form values if needed
      setFormValues({
        name: '',
        email: '',
        phone: '',
        carModel: '',
        startDate: '',
        endDate: '',
      });
      // Clear errors
      setErrors({});
    }
  };

  const imageUrl = 'https://preview.redd.it/rent-a-car-in-kerala-car-rental-service-in-kerala-v0-9q0toyiiueaa1.jpg?width=1600&format=pjpg&auto=webp&s=68ee72a72ea16c7b55b703774092bca08e3a730f';

  return (
    <div>
      <form onSubmit={handleSubmit} className="container booking-form">
        <img src={imageUrl} alt="Example" style={{ width: '75%', height: '350px', display: 'block', margin: 'auto', borderRadius: 20 }} />
        <h1>Book Your Car</h1>

        <div className="form-group">
          <label htmlFor="name"><h5><b>Name:</b></h5></label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email"><h5><b>Email:</b></h5></label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="phone"><h5><b>Phone:</b></h5></label>
          <input
            type="text"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="carModel"><h5><b>Car Model:</b></h5></label>
          <input
            type="text"
            className={`form-control ${errors.carModel ? 'is-invalid' : ''}`}
            id="carModel"
            name="carModel"
            value={formValues.carModel}
            onChange={handleChange}
          />
          {errors.carModel && <div className="invalid-feedback">{errors.carModel}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="startDate"><h5><b>Start Date:</b></h5></label>
          <input
            type="date"
            className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
            id="startDate"
            name="startDate"
            value={formValues.startDate}
            onChange={handleChange}
          />
          {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="endDate"><h5><b>End Date:</b></h5></label>
          <input
            type="date"
            className={`form-control ${errors.endDate ? 'is-invalid' : ''}`}
            id="endDate"
            name="endDate"
            value={formValues.endDate}
            onChange={handleChange}
          />
          {errors.endDate && <div className="invalid-feedback">{errors.endDate}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Book Car</button>
      </form>
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
    </div>
  );
};

export default Cart;