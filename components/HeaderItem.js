function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-15 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce  " />
      <h1 className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </h1>
    </div>
  );
}

export default HeaderItem;
