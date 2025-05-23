import Image from "next/image";
import AvatarImg from "@/../public/avatar.jpg";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-200 flex 
    justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">
      <div className="w-[600px] h-[90vh] rounded-2xl bg-white flex flex-col justify-center items-center">
        <Image
          src={AvatarImg}
          alt="Avatar"
          className="w-[80px] h-[80px] rounded-full mb-4"
        />
        <h1 className="mt-2">Vicky</h1>
        <p className="max-w-[380px] text-center">
          Currently I am a NCCU student. Double majoring in Digital Content and Ethnology.
        </p>
        {/*社群連結 */}
        <div className="flex gap-2 my-5">
          <a href="https://www.instagram.com/proxie.officialth/" target="_blank">
            <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://www.instagram.com/proxie.officialth/" target="_blank">
            <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://www.instagram.com/proxie.officialth/" target="_blank">
            <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://www.instagram.com/proxie.officialth/" target="_blank">
            <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://www.instagram.com/proxie.officialth/" target="_blank">
            <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          
        </div>
        {/*頁面切換 */}
        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-[84px] bg-gray-300 rouned-xl">學經歷</div>
          <div className="w-full h-[84px] bg-gray-300 rouned-xl">作品分類一</div>
          <div className="w-full h-[84px] bg-gray-300 rouned-xl">作品分類二</div>
          <div className="w-full h-[84px] bg-gray-300 rouned-xl">作品分類三</div>
        </div>
      </div>
    </div>
  );
}
