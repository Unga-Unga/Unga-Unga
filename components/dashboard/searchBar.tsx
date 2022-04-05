import { SearchIcon } from '@heroicons/react/outline';

const SearchBar = ({ search, onChange }) => {
  return (
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        onChange={e => onChange(e.target.value)}
        value={search}
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md text-gray-900"
        placeholder="Buscar..."
      />
    </div>
  );
};

export default SearchBar;
