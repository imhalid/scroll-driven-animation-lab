const Carousel = () => {
  return (
    <div className="w-full h-[500px] bg-neutral-900 rounded-xl relative z-0 border border-neutral-700 p-1 flex flex-wrap items-center gap-2 justify-center overflow-hidden">
      <div className="banner">
        <div
          className="slider"
          style={{
            "--quantity": 10,
          }}
        >
          <img
            style={{ "--index": 1 }}
            src="./3d/image-1.jpg"
            className="item"
            alt="image-1"
          />
          <img
            style={{ "--index": 2 }}
            src="./3d/image-2.jpg"
            className="item"
            alt="image-2"
          />
          <img
            style={{ "--index": 3 }}
            src="./3d/image-3.jpg"
            className="item"
            alt="image-3"
          />
          <img
            style={{ "--index": 4 }}
            src="./3d/image-4.jpg"
            className="item"
            alt="image-4"
          />
          <img
            style={{ "--index": 5 }}
            src="./3d/image-5.jpg"
            className="item"
            alt="image-5"
          />
          <img
            style={{ "--index": 6 }}
            src="./3d/image-6.jpg"
            className="item"
            alt="image-6"
          />
          <img
            style={{ "--index": 7 }}
            src="./3d/image-7.jpg"
            className="item"
            alt="image-7"
          />
          <img
            style={{ "--index": 8 }}
            src="./3d/image-8.jpg"
            className="item"
            alt="image-8"
          />
          <img
            style={{ "--index": 9 }}
            src="./3d/image-9.jpg"
            className="item"
            alt="image-9"
          />
          <img
            style={{ "--index": 10 }}
            src="./3d/image-10.jpg"
            className="item"
            alt="image-10"
          />
          <div className="border absolute gradient"></div>
        </div>
      </div>
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
