import React from "react";
import ProfileCard from "./components/ProfileCard";
import OrderList from "./components/OrderList";
import PaymentMethod from "./components/PaymentMethod";

export default function Profile() {
  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold">My Account</h2>

      <div className="row">
        
        {/* Left Side: Profile Card */}
        <div className="col-md-4">
          <ProfileCard />
        </div>

        {/* Right Side: Orders + Payment */}
        <div className="col-md-8">
          <OrderList />
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
}
