import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow m-5 mb-3 justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={LightningBoltIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Collections" Icon={CollectionIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <div className="sm:mr-12">
        <Image
          alt=""
          className=" object-contain "
          width={100}
          height={40}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Hulu_logo_%282014%29.svg/1200px-Hulu_logo_%282014%29.svg.png"
        />
      </div>
    </header>
  );
}

export default Header;
