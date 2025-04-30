import Image from "next/image";

import AvatarImg from "@/../public/avatar.jpg";

export default function Home() {
  return (
    <div className="w-2xl h-2xl bg-gray-200 flex justify-center items-center">
      <div className="w-[600px] h-[600px] rounded-2xl bg-white flex justify-center items-center">
        
        <Image src={AvatarImg} alt="Avatar" className="w-[80px] h-[80px] rounded-full"/>
        <h1>Vicky</h1>
      </div>
    </div>
  );
}
