import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between sm:flex sm:min-h-full">
        <h2 className="text-4xl text-indigo-700 font-mono">Tasks</h2>
        <input
          type="search"
          placeholder="Search projects"
          className="rounded-lg lg:w-96 block p-2 border"
        />
        <div className="flex items-center gap-4">
          <Link
            to="/projects"
            className="font-bold uppercase border-b-2 border-indigo-500
          text-indigo-600"
          >
            My projects
          </Link>
          <button
            type="button"
            className="text-white text-sm bg-indigo-600 p-1"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
