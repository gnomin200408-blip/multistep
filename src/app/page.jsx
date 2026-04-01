import Image from "next/image";
import { Header } from "./components/Header";
import { TextField } from "./components/TextField";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#F8F8F8] flex justify-center items-center flex-col">
      <div className="w-[480px] h-[655px] bg-[#Fff] rounded-lg p-8">
        <div>
          <Header />
        </div>
        <div>
          <TextField />
        </div>
      </div>
    </div>
  );
}
