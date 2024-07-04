const Carousel = () => {
  return (
    <div className="w-full h-[500px] bg-neutral-900 rounded-xl relative z-0 border border-neutral-700 p-1 flex flex-wrap items-center gap-2 justify-center overflow-hidden">
      <div className="banner">
        <div
          className="slider"
          style={{
            "--quantity": 15,
          }}
        >
          {[...Array(15)].map((_, index) => (
            <img
              key={index}
              style={{ "--index": index + 1 }}
              src={`./3d/image-${index + 1}.jpg`}
              className="item"
              alt={`image-${index + 1}`}
            />
          ))}
          <div className="gradient"></div>
        </div>
      </div>
      <div className="gradient2"></div>
    </div>
  );
};

export default Carousel;

// const images = Array.from({ length: 10 }, (_, i) => (
//   <img
//     key={i}
//     style={{ "--index": i + 1 }}
//     src={`./3d/image-${i + 1}.jpg`}
//     className="item"
//     alt={`image-${i + 1}`}
//   />
// ));

// const ImageGallery = () => {
//   return <div className="image-gallery">{images}</div>;
// };
