import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/160/160138.png"
            alt=""
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-fuchsia-600 px-4 py-1 rounded-full">Follow</h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-fuchsia-600 ">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-fuchsia-600">Get Started</h3>
      </div>
    </header>
  );
}

export default Header;
