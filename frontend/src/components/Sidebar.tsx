import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="md:w-70 lg:w-80 px-5 py-10">
      <p className="text-xl font-bold">Hi: @user</p>
      <Link
        to="add-project"
        className="bg-indigo-600 w-full p-1 text-white uppercase block mt-5
        text-center"
      >
        Add project
      </Link>
    </aside>
  );
};

export default Sidebar;
