import ReviewForm from "./Four/ReviewForm";
import { UserProfile } from "./One/UserProfile";
import { Collections } from "./Three/Collections";
import { JobList } from "./Two/JobList";
function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E6EFFA]">
      {/* <UserProfile /> */}
      {/* <JobList /> */}
      {/* <Collections /> */}
      <ReviewForm />
    </div>
  );
}

export default App;
