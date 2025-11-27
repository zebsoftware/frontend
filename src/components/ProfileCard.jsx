import React from "react";

export default function ProfileCard() {
  return (
    <div className="card p-3 shadow-sm rounded-4">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/120"
          alt="profile"
          className="rounded-circle mb-3"
        />
        <h5 className="fw-bold">John Doe</h5>
        <p className="text-muted">johndoe@gmail.com</p>
      </div>

      <hr />

      <button className="btn btn-dark w-100 mt-2">Edit Profile</button>
      <button className="btn btn-outline-danger w-100 mt-2">Logout</button>
    </div>
  );
}
