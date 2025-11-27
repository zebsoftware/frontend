import React from "react";

export default function PaymentMethod() {
  return (
    <div className="card p-3 shadow-sm rounded-4">
      <h5 className="fw-bold mb-3">Payment Methods</h5>

      <div className="border rounded p-3 d-flex justify-content-between align-items-center mb-3">
        <span>💳 Visa Ending 1234</span>
        <button className="btn btn-sm btn-outline-danger">Remove</button>
      </div>

      <button className="btn btn-dark">Add Payment Method</button>
    </div>
  );
}
