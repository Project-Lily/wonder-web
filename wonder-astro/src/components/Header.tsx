import logo from '../assets/wonder_logo1.png';

export default function Header() {
  return (
    <header className="bg-wonder-purple flex flex-col md:flex-row md:justify-between">
      <div className="logo text-white font-bold flex items-center justify-between">
        <a href="/">
          <img src={logo} className="h-12 object-cover m-4 cursor-pointer"></img>
        </a>
        <a href="/" className="text-xl">
          Wonder Reader
        </a>
        <i className="fa-solid fa-bars p-4 text-xl md:hidden cursor-pointer"></i>
      </div>
      <div className="menu text-white flex flex-col md:flex-row items-center justify-center md:mx-4">
        <div className="px-4 ease-in-out duration-150 text-center cursor-pointer py-1 border-white border-y md:border-0 border-x-0 w-full md:w-min">
          <a href="/">Home</a>
        </div>
        <div className="px-4 ease-in-out duration-150 text-center cursor-pointer py-1 border-white border-y md:border-0 border-x-0 w-full md:w-min">
          <a href="/about">About</a>
        </div>
      </div>
    </header>
  );
}
