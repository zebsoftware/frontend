import React, { useState } from "react";
import { updateProfile } from "./../services/profileService";

export default function EditProfile({ user, onUpdated }) {
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updated = await updateProfile(form);
    onUpdated(updated);
  };

  return (
    <form className="card p-3 mt-3" onSubmit={handleSubmit}>
      <h5>Edit Profile</h5>

      <input name="name" className="form-control mb-2" value={form.name} onChange={handleChange} />
      <input name="phone" className="form-control mb-2" value={form.phone} onChange={handleChange} />
      <input name="address" className="form-control mb-2" value={form.address} onChange={handleChange} />
      <input name="city" className="form-control mb-2" value={form.city} onChange={handleChange} />
      <input name="country" className="form-control mb-2" value={form.country} onChange={handleChange} />
      <input name="postalCode" className="form-control mb-2" value={form.postalCode} onChange={handleChange} />

      <button className="btn btn-primary">Save Changes</button>
    </form>
  );
}
