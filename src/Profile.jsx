import React, { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import OrderList from "./components/OrderList";
import PaymentMethod from "./components/PaymentMethod";
import EditProfile from "./components/EditProfile";
import { getProfile, deleteProfile } from "./services/profileService";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    loadUser();
  }, []);

  // Delete Function
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your account?"))
      return;

    await deleteProfile();
    localStorage.removeItem("token");
    window.location.href = "/login";
    Navigate("/") ;// redirect to login
  };

  if (!user) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold">My Account</h2>

      {/* EDIT PROFILE POPUP */}
      {showEdit && (
        <EditProfile
          user={user}
          onUpdated={(updatedUser) => {
            setUser(updatedUser);
            setShowEdit(false);
          }}
          onClose={() => setShowEdit(false)}
        />
      )}

      <div className="row">
        {/* Profile Card */}
        <div className="col-md-4">
          <ProfileCard
            user={user}
            onEdit={() => setShowEdit(true)}
            onDelete={handleDelete}
          />
        </div>

        {/* Right side */}
        <div className="col-md-8">
          <OrderList user={user} />
          <PaymentMethod user={user} />
        </div>
      </div>
    </div>
  );
}
