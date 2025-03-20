import type { Metadata } from "next";
import React from "react";
import IndexComponent from "./components";

export const metadata: Metadata = {
  title: {
    default: "Nexgames",
    template: "% - Nexgames"
  },
  description: "Nexgame adalah platform untuk mendownload game dan software gratis",
  icons: {
    icon: "/favicon.ico"
  }
};


const Page: React.FC = () => {
  return(
    <main>
      <IndexComponent></IndexComponent>
    </main>
  );
}
export default Page;