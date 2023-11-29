import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = ({ user }) => {
  return (
    <div className="p-5 w-full z-50 sm:m-5 sm:rounded-xl bg-alura-200 dark:bg-dark-200 flex justify-between items-center">
      <span className="text-gray-100">Olá, {user?.name || "Usuário"}</span>
      <h1 className="text-gray-100 text-xl sm:hover:text-2xl sm:cursor-pointer">
        Alura Newsletter
      </h1>
      <ToggleTheme />
    </div>
  );
};

export default Header;
