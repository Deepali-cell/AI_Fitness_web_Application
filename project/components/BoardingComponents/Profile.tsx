import Image from "next/image";
import { Session } from "next-auth";

interface ProfileProps {
  session: Session | null;
}

const Profile = ({ session }: ProfileProps) => {
  return (
    <>
      <div className="relative overflow-hidden bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 mb-6 backdrop-blur-md">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>

        <div className="relative">
          <div className="w-28 h-28 rounded-full border-4 border-blue-500/30 p-1">
            <Image
              src="/user_icon.png"
              alt="Profile"
              width={112}
              height={112}
              className="rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-zinc-900 rounded-full"></div>
        </div>

        <div className="text-center md:text-left z-10">
          <h1 className="text-4xl font-extrabold tracking-tighter">
            Hello, {session?.user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-zinc-400 mt-1 font-mono">{session?.user?.email}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full uppercase tracking-widest font-bold">
              Pro Member
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
