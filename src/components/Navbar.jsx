import logo from "../assets/logo.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-10" />
        <h1 className="font-bold text-lg">Arakaharaka</h1>
      </div>

      <div className="space-x-6 hidden md:flex">
        <a href="#services">Services</a>
        <a href="#partners">Partners</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}