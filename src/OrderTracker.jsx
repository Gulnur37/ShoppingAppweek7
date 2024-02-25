import React, { useState } from 'react';

function OrderTracker() {
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('+90');
    const [orderItems, setOrderItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleCustomerNameChange = (e) => {
        setCustomerName(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleItemNameChange = (e) => {
        setItemName(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddToOrder = () => {
        if (itemName && quantity) {
            setOrderItems([...orderItems, { itemName, quantity, status: 'Bekliyor' }]);
            setItemName('');
            setQuantity('');
        }
    };

    const handleStatusChange = (index, newStatus) => {
        const updatedOrderItems = [...orderItems];
        updatedOrderItems[index].status = newStatus;
        setOrderItems(updatedOrderItems);
    };

    const handleCancelOrder = (index) => {
        const updatedOrderItems = [...orderItems];
        updatedOrderItems.splice(index, 1);
        setOrderItems(updatedOrderItems);
    };

    return (
        <div className="container mt-4">
            <h2>Müşteri Bilgileri</h2>
            <div className="mb-3">
                <label htmlFor="customerName" className="form-label">Müşteri Adı Soyadı:</label>
                <input type="text" className="form-control" id="customerName" value={customerName} onChange={handleCustomerNameChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Telefon Numarası:</label>
                <input type="text" className="form-control" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </div>

            <h2>Sipariş</h2>
            <div className="mb-3">
                <label htmlFor="itemName" className="form-label">Ürün Adı:</label>
                <input type="text" className="form-control" id="itemName" value={itemName} onChange={handleItemNameChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Miktar:</label>
                <div className="input-group">
                    <input type="number" className="form-control" id="quantity" value={quantity} onChange={handleQuantityChange} />
                    <span className="input-group-text">adet</span>
                </div>
            </div>
            <button className="btn btn-primary" onClick={handleAddToOrder}>Sepete Ekle</button>

            <h2>Siparişler</h2>
            <ul className="list-group">
                {orderItems.map((item, index) => (
                    <li key={index} className={`list-group-item d-flex justify-content-between align-items-center ${item.status === 'Gönderildi' ? 'bg-success' : item.status === 'Bekliyor' ? 'bg-info' : 'bg-danger'}`}>
                        <div>
                            {customerName} - {phoneNumber} - <strong>{item.itemName}</strong> - {item.quantity} adet
                        </div>
                        <div>
                            {item.status === 'Bekliyor' && (
                                <>
                                    <button className="btn btn-success me-2" onClick={() => handleStatusChange(index, 'Gönderildi')}>Gönderildi</button>
                                    <button className="btn btn-danger" onClick={() => handleCancelOrder(index)}>İptal</button>
                                </>
                            )}
                            {item.status === 'Gönderildi' && (
                                <button className="btn btn-primary" onClick={() => handleStatusChange(index, 'Bekliyor')}>Bekliyor</button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrderTracker;
