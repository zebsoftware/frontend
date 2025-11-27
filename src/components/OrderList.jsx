import React from "react";

export default function OrderList() {
  return (
    <div className="card p-3 shadow-sm rounded-4 mb-4">
      <h5 className="fw-bold mb-3">My Orders</h5>

      <div className="border rounded p-3 mb-3">
        <h6>Order #12345</h6>
        <p className="text-muted mb-1">2 items • Delivered</p>
        <button className="btn btn-outline-primary btn-sm">View Details</button>
      </div>

      <div className="border rounded p-3 mb-3">
        <h6>Order #67890</h6>
        <p className="text-muted mb-1">1 item • In Progress</p>
        <button className="btn btn-outline-primary btn-sm">View Details</button>
      </div>
    </div>
  );
}
