export const Collections: () => Element = () : Element => {
  const TAGS : string[] = ["Profile", "New Your", "Relax", "Person", "Fashion"];

  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-16 font-[#0E0E38] shadow-lg">
      <h1 className="font-meri text-3xl font-bold">Popular Collections</h1>

      <div>
        {TAGS.map(callbackfn: (tag: string) : Element => (
          <a id={tag}>{tag}</a>
        ))}
      </div>
    </div>
  );
};
