export default function ProfileCard({ user, onEdit, onDelete }) {
  return (
    <div className="card p-3 shadow-sm">
      <h4>{user.name}</h4>
      <p className="text-muted">{user.email}</p>

      <hr />

      <p><strong>Phone:</strong> {user.phone || "Not set"}</p>
      <p><strong>Address:</strong> {user.address || "Not set"}</p>
      <p><strong>City:</strong> {user.city || "Not set"}</p>
      <p><strong>Country:</strong> {user.country || "Not set"}</p>
      <p><strong>Postal Code:</strong> {user.postalCode || "Not set"}</p>

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-warning w-50" onClick={onEdit}>
          Edit Profile
        </button>
        <button className="btn btn-danger w-50" onClick={onDelete}>
          Delete Account
        </button>
      </div>
    </div>
  );
}
