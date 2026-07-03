export default function Feed({ projects }) {
  return (
    <div>
      {projects.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>

          <video
            src={p.mediaUrl}
            controls
            width="300"
          />
        </div>
      ))}
    </div>
  );
}