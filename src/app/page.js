import fs from "fs";
import path from "path";
import Main from "@/components/Interactive";
export default function Home() {
  const publicPath = path.join(process.cwd(), "public/interactivos");

  const carpetasEnPublic = fs
    .readdirSync(publicPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map(
      (dirent) =>
        new Object({
          url: dirent.name,
          img: "/" + dirent.name + ".png",
        })
    );

  return (
    <div className="relative h-screen">
      <div
        className="bg-main absolute inset-0 bg-cover bg-center"
       
      />
      <Main filename={carpetasEnPublic} />
    </div>
  );
}
