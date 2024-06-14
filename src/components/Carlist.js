import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carlist = () => {
    const cars = [
        {
            imageUrl: 'https://zoomcar-assets.zoomcar.com/220445/HostCarImage/host_car_image_2204459d97da06-7b15-44db-ae0a-afec88e4b94b.jpg20230407-48-1gz1f1c',
            name: 'Hyundai I20 2023',
            features: [
                'Full boot space', 'Music System', 'Voice control', 'Cruise Control',
                'Anti-lock Braking System (ABS)', 'Power Windows', 'Reverse Camera',
                'Aux Cable', 'Toolkit', 'Air Conditioning', 'Spare Tyre',
                'Power steering', 'Electric ORVM', 'Traction control', 'ADAS',
                'Keyless Entry', 'Ventilated front seats', 'Bluetooth', '2 airbags'
            ],
            price: '₹258/hr',
            brand: 'Hyundai'
        },
        {
            imageUrl: 'https://zoomcar-assets.zoomcar.com/663541/HostCarImage/host_car_image_663541757196bb-949f-43fe-9e4f-a4361652c212.jpg20240529-36-1fmuup7',
            name: 'Maruti Suzuki Wagon R',
            features: [
                'USB charger', 'Bluetooth', 'Aux Input', 'Air Freshener', 'Music System',
                'Air purifier', 'Air Conditioning', 'Power steering', 'Power Windows',
                '2 Front Airbags', 'Anti-lock Braking System (ABS)', 'ADAS', 'Reverse Camera',
                'Toolkit', 'Spare Tyre', '6 airbags'
            ],
            price: '₹110/hr',
            brand: 'Maruti'
        },
        {
            imageUrl: 'https://zoomcar-assets.zoomcar.com/301221/HostCarImage/host_car_image_3012215a3120cf-51e0-4443-974c-1b7992d7632e.jpg20230703-52-1d99fxp',
            name: 'Hyundai I20',
            features: [
                'Full boot space', 'Music System', 'Voice control', 'Cruise Control',
                'Anti-lock Braking System (ABS)', 'Power Windows', 'Reverse Camera',
                'Aux Cable', 'Toolkit', 'Air Conditioning', 'Spare Tyre',
                'Power steering', 'Electric ORVM', 'Traction control', 'ADAS',
                'Keyless Entry', 'Ventilated front seats', 'Bluetooth', '2 airbags'
            ],
            price: '₹110/hr',
            brand: 'Hyundai'
        },
        {
            imageUrl: 'https://zoomcar-assets.zoomcar.com/414567/HostCarImage/host_car_image_414567d1baa4dc-6f5b-411e-903f-d9af8a9b0c36.jpg20231011-53-1fosfl4',
            name: 'Renault Kiger',
            features: [
                'USB charger', 'Bluetooth', 'Aux Input', 'Air Freshener', 'Music System',
                'Air purifier', 'Air Conditioning', 'Power steering', 'Power Windows',
                '2 Front Airbags', 'Anti-lock Braking System (ABS)', 'ADAS', 'Reverse Camera',
                'Toolkit', 'Spare Tyre', '6 airbags'
            ],
            price: '₹252/hr',
            brand: 'Renault'
        },
        {
            imageUrl: 'https://zoomcar-assets.zoomcar.com/244955/HostCarImage/host_car_image_244955872f0c27-fb52-45f2-84b3-3b3d33bc51e7.jpg20230426-52-k2etud',
            name: 'Hyundai Xcent',
            features: [
                'USB charger', 'Bluetooth', 'Aux Input', 'Air Freshener', 'Music System',
                'Air purifier', 'Air Conditioning', 'Power steering', 'Power Windows',
                '2 Front Airbags', 'Anti-lock Braking System (ABS)', 'ADAS', 'Reverse Camera',
                'Toolkit', 'Spare Tyre', '6 airbags'
            ],
            price: '₹158/hr',
            brand: 'Hyundai'
        },
        {
            imageUrl: 'https://zoomcar-assets.zoomcar.com/317507/HostCarImage/host_car_image_31750735ed4296-e1f1-4220-89b6-709e295523a1.jpg20230723-47-1toirnj',
            name: 'Tata Nexon',
            features: [
                'USB charger', 'Bluetooth', 'Aux Input', 'Air Freshener', 'Music System',
                'Air purifier', 'Air Conditioning', 'Power steering', 'Power Windows',
                '2 Front Airbags', 'Anti-lock Braking System (ABS)', 'ADAS', 'Reverse Camera',
                'Toolkit', 'Spare Tyre', '6 airbags'
            ],
            price: '₹232/hr',
            brand: 'Tata'
        },
        {
            imageUrl: 'https://zoomcar-assets.zoomcar.com/462920/HostCarImage/host_car_image_46292010033a3f-e743-4c0a-b34f-a39bab0fa4f3.jpg20231115-55-1abw5gi',
            name: 'Maruti Suzuki Brezza ',
            features: [
                'Ventilated front seats', 'Air purifier', 'Traction control', 'Anti-lock Braking System (ABS)', 'Pet Friendly',
                'Reverse Camera', 'Air Conditioning', 'Power steering', 'Power Windows',
                '2 Front Airbags', 'Anti-lock Braking System (ABS)', 'ADAS', 'Reverse Camera',
                'Toolkit', 'Spare Tyre', '6 airbags'
            ],
            price: '₹232/hr',
            brand: 'Maruti'
        },
        {
            imageUrl: 'https://zoomcar-assets.zoomcar.com/247553/HostCarImage/host_car_image_247553d20248a8-4598-4c4d-bcc4-6d53aa61d372.jpg20230428-26-12nm2b4',
            name: 'Maruti Suzuki S-Cross',
            features: [
                'USB', 'Bluetooth', 'Aux Input', 'Air Freshener', 'Music System',
                'Air purifier', 'Air Conditioning', 'Power steering', 'Power Windows',
                '2 Front Airbags', 'Anti-lock Braking System (ABS)', 'ADAS', 'Reverse Camera',
                'Toolkit', 'Spare Tyre', '6 airbags'
            ],
            price: '₹232/hr',
            brand: 'Maruti'
        },
        {
            imageUrl: 'https://zoomcar-assets.zoomcar.com/226636/HostCarImage/host_car_image_2266364102b6f7-4943-40e7-999d-d6c2c7b24aa9.jpg20230411-52-9dtcnj',
            name: 'Tata ALTROZ',
            features: [
                'USB charger', 'Bluetooth', 'Aux Input', 'Air Freshener', 'Music System',
                'Air purifier', 'Air Conditioning', 'Power steering', 'Power Windows',
                '2 Front Airbags', 'Anti-lock Braking System (ABS)', 'ADAS', 'Reverse Camera',
                'Toolkit', 'Spare Tyre', '6 airbags'
            ],
            price: '₹232/hr',
            brand: 'Tata'
        }
    ];

    const [selectedBrand, setSelectedBrand] = useState('All');
    const [selectedBudget, setSelectedBudget] = useState('All');

    const handleBrandSelect = (brand) => {
        setSelectedBrand(brand);
    };

    const handleBudgetSelect = (budget) => {
        setSelectedBudget(budget);
    };

    const filterCars = () => {
        return cars.filter((car) => {
            const brandMatch = selectedBrand === 'All' || car.brand === selectedBrand;
            const budgetMatch = selectedBudget === 'All' || (selectedBudget === 'Budget 1' && car.price <= '₹150/hr') ||
                                (selectedBudget === 'Budget 2' && car.price > '₹150/hr' && car.price <= '₹250/hr') ||
                                (selectedBudget === 'Budget 3' && car.price > '₹250/hr');
            return brandMatch && budgetMatch;
        });
    };

    const renderCar = (car, index) => (
        <div key={index} className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={car.imageUrl} alt={car.name} className="img-fluid rounded-start" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{car.name}</h5>
                        <p className="card-text">
                            <b>Features:</b> {car.features.join(', ')}
                        </p>
                        <h5 className="card-text"><b>{car.price}</b></h5>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container mt-5">
            <div className="dropdown mb-3">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="carBrandDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Car Brand
                </button>
                <ul className="dropdown-menu" aria-labelledby="carBrandDropdown">
                    <li><input type="text" className="form-control" placeholder="Search.." id="carBrandSearch" /></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleBrandSelect('All')}>All cars</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleBrandSelect('Hyundai')}>Hyundai</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleBrandSelect('Maruti')}>Maruti</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleBrandSelect('Tata')}>Tata</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleBrandSelect('Renault')}>Renault</a></li>
                </ul>
            </div>

            <div className="dropdown mb-3">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="budgetDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Budget
                </button>
                <ul className="dropdown-menu" aria-labelledby="budgetDropdown">
                    <li><input type="text" className="form-control" placeholder="Search.." id="budgetSearch" /></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleBudgetSelect('All')}>All budgets</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleBudgetSelect('Budget 1')}>Budget 1</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleBudgetSelect('Budget 2')}>Budget 2</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleBudgetSelect('Budget 3')}>Budget 3</a></li>
                </ul>
            </div>

            {filterCars().map((car, index) => renderCar(car, index))}
        </div>
    );
};

export default Carlist;