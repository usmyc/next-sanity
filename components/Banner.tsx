function Banner() {
  return (
    <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-ubuntu">
         <span className="underline decoration-black decoration-4 ">Droid</span> will raise
        </h1>
        <h2>Something will happen in somewhere of future</h2>
      </div>
      <img className="hidden md:inline-flex h-32 lg:h-64" src="https://starwarsblog.starwars.com/wp-content/uploads/2021/02/20-best-star-wars-droids-TALL.jpg" alt="" />
      <div></div>
    </div>
  );
}

export default Banner;
