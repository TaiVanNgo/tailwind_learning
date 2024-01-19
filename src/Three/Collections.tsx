export const Collections: () => Element = (): Element => {
  const TAGS: string[] = ["Profile", "New Your", "Relax", "Person", "Fashion"];
  const myImage= "./Three/img/family.jpeg";
  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-16 font-[#0E0E38] shadow-lg">
      <h1 className="font-meri text-3xl font-bold">Popular Collections</h1>

      <div className="space-x-2 pt-6">
        {TAGS.map((tag: string) => (
          <a
            className="mb-2 inline-block cursor-pointer rounded-lg bg-white px-4 py-2 hover:text-blue-400"
            key={tag}
            id={tag}
          >
            {tag}
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1">
        <div className="bg-white">
          <div>
            <img src={myImage} alt=""></img>
          </div>



        </div>
      </div>
    </div>
  );
};
