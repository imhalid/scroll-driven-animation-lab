const Menu = () => {
  return (
    <div className="menu fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 overflow-hidden flex gap-10 bg-neutral-700/80 backdrop-blur-sm font-medium shadow-md outline outline-4 outline-neutral-900 p-4 py-2 rounded-md">
      <div
        id="progress"
        className="absolute bg-white/10 left-0 top-0 h-full"
      ></div>
      {data.map((item) => (
        <p key={item.name} className="m-0 relative z-10">
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default Menu;

const data = [
  { name: "Home" },
  { name: "Grid S.D.A." },
  { name: "Second Sentence" },
  { name: "This is the end" },
];
