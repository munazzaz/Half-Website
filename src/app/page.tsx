// import Image from "next/image";
import Header from "./components/Header";
// import Head from 'next/head';
import DismissibleMessage from "@../../../src/app/components/DismissibleMessage";
import { MessageCircle, MessageSquareOffIcon } from "lucide-react";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center">
//       <Head>
//         <title>Payoneer Clone</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="flex flex-1 flex-col justify-center items-center">
//         <h1 className="text-4xl font-bold">
//           Welcome to Payoneer Clone
//         </h1>
//       </main>

//       <DismissibleMessage />
//     </div>
//   );
// }






import Head from 'next/head';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Payoneer Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
``
      <main className="flex flex-1 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">
         
        </h1>
      </main>

   
      <DismissibleMessage />
     
     </div>
   
  );
}
