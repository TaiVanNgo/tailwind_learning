export default function ReviewForm() {
  return (
    <div className="w-[42rem] space-y-8 rounded-3xl bg-white p-16">
      <h1 className="font-meri text-2xl font-black">Overall Rating</h1>

      <div>
        <p>5 stars</p>
        <p className="text-sm font-normal">Click to rate</p>
      </div>

      <div>
        <label
          className="block font-popi text-sm font-semibold"
          htmlFor="title"
        >
          Review Title
        </label>
        <input
          id="title"
          className=" mt-1 w-full rounded-md border-2 p-4 py-3"
          placeholder="Example: Easy to use"
        />
      </div>
    </div>
  );
}
