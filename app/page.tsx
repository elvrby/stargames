import type { Metadata } from "next";
import React from "react";
import IndexComponent from "./components";

export const metadata: Metadata = {
  title: {
    default: "Nexgames",
    template: "% - Nexgames"
  },
  description: "Nexgames adalah platform untuk mendownload game dan software gratis untuk membantu pekerjaanmu dan hiburanmu dengan game game terbaru yang selalu update",
  twitter:{
    card: "summary_large_image"
  },
  icons: {
    icon: "/favicon.ico"
  }
};


const Page: React.FC = () => {
  return(
    <main>
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <IndexComponent></IndexComponent>
    </main>
  );
}
export default Page;