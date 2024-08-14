import React, { useState } from 'react';
import axios from 'axios';

const AddressFetcher = () => {
    const [postalCode, setPostalCode] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [address, setAddress] = useState(null);

    const fetchAddress = async () => {
        try {
            const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: `${streetNumber} ${postalCode} Luxembourg`,
                    key: 'YOUR_GOOGLE_MAPS_API_KEY'
                }
            });
            const result = response.data.results[0];
            setAddress(result ? result.formatted_address : 'Address not found');
        } catch (error) {
            console.error('Error fetching address:', error);
            setAddress('Error fetching address');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchAddress();
    };

    return (
        <div>
            <h1>Fetch Address</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Postal Code:</label>
                    <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </div>
                <div>
                    <label>Street Number:</label>
                    <input
                        type="text"
                        value={streetNumber}
                        onChange={(e) => setStreetNumber(e.target.value)}
                    />
                </div>
                <button type="submit">Fetch Address</button>
            </form>
            {address && <div><strong>Address:</strong> {address}</div>}
        </div>
    );
};

export default AddressFetcher;
