const Gallery = () => {
  return (
    <div className="w-full h-96 bg-neutral-900 rounded-xl border border-neutral-700 relative p-1 flex items-center gap-2 justify-center">
      <img
        style={{ '--index': 1 }}
        src="https://images.unsplash.com/photo-1570553613235-412575f3fb6a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="200"
        className="gallery-images"
      />
      <img
        style={{ '--index': 2 }}
        src="https://images.unsplash.com/photo-1442458017215-285b83f65851?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="200"
        className="gallery-images"
      />
      <img
        style={{ '--index': 3 }}
        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="300"
        className="gallery-images"
      />
      <img
        style={{ '--index': 4 }}
        src="https://images.unsplash.com/photo-1570396041540-e2bb67aa96c2?q=80&w=2438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="200"
        className="gallery-images"
      />
    </div>
  );
};

export default Gallery;
