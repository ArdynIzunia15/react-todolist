export default function TaskCard({ title }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <button type="button" class="btn btn-outline-danger me-3">
          Delete
        </button>
        {title}
      </div>
    </div>
  );
}
