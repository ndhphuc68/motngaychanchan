import { HeaderMain } from "@/components/Header/styles";
import { Image } from "@nextui-org/react";
export default function Header() {
  return (
    <HeaderMain>
      <div className={"container mx-auto h-full"}>
        <Image
          style={{ objectFit: "cover", height: "100%" }}
          alt="logo"
          src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...OIqh5InxrFwXs1M3EMoAJtlikrj...Fv8vo8"
        />
      </div>
    </HeaderMain>
  );
}
