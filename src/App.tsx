import { UserProfile } from "./One/UserProfile";
import { Collections } from "./Three/Collections";
import { JobList } from "./Two/JobList";
function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#E6EFFA]">
      {/* <UserProfile /> */}
      {/* <JobList /> */}
      <Collections />
    </div>
  );
}

export default App;
