const Gallery = () => {
  return (
    <div className="w-full h-96 bg-neutral-900 rounded-xl relative z-0 border border-neutral-700 p-1 flex items-center gap-2 justify-center gallery-wrapper">
      <div id="img-container" style={{ "--index": -3, "--sat": 2 }}>
        <img
          src="https://images.unsplash.com/photo-1719263233866-a4e4908cf3af?q=80&w=2468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="200"
          height="300"
          className="gallery-images w-[200px] h-[300px] object-cover image1"
        />
      </div>
      <div id="img-container" style={{ "--index": -2, "--sat": 2 }}>
        <img
          src="https://images.unsplash.com/photo-1718653505304-7a4ab69748c7?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="200"
          height="300"
          className="gallery-images w-[200px] h-[300px] object-cover image1"
        />
      </div>
      <div id="img-container" style={{ "--index": -1, "--sat": 2 }}>
        <img
          src="https://images.unsplash.com/photo-1718486463454-a29ee090f0c5?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="200"
          height="300"
          className="gallery-images w-[200px] h-[300px] object-cover image1"
        />
      </div>
      <div id="img-container" style={{ "--index": 1, "--sat": 2 }}>
        <img
          src="https://images.unsplash.com/photo-1570553613235-412575f3fb6a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="200"
          height="300"
          className="gallery-images w-[200px] h-[300px] object-cover image1"
        />
      </div>
      <div id="img-container" style={{ "--index": 2, "--sat": 2 }}>
        <img
          src="https://images.unsplash.com/photo-1442458017215-285b83f65851?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="200"
          height="300"
          className="gallery-images w-[200px] h-[300px] object-cover image2"
        />
      </div>
      <div id="img-container" style={{ "--index": 3, "--sat": 2 }}>
        <img
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="200"
          height="300"
          className="gallery-images w-[200px] h-[300px] object-cover image3"
        />
      </div>
      <div id="img-container" style={{ "--index": 4, "--sat": 2 }}>
        <img
          src="https://images.unsplash.com/photo-1570396041540-e2bb67aa96c2?q=80&w=2438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="200"
          height="300"
          className="gallery-images w-[200px] h-[300px] object-cover image4"
        />
      </div>
    </div>
  );
};

export default Gallery;
