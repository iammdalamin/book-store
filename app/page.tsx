import Image from "next/image";
import Header from "./components/Header";
import SortField from "./components/SortField";
import BooksFeild from "./components/BooksFeild";

export default function Home() {
  return (
    <div className="container mx-auto w-full h-full flex flex-col justify-center items-center">
      <div className="w-[500px] flex flex-col justify-center items-center gap-4">
        <Header />
        <BooksFeild />
      </div>
    </div>
  );
}

{
  /* <Header />
<SortField /> */
}
