import { Search } from "lucide-react";

type FilterSearchProps = {
  types: string[];
  active: string;
  setActive: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
};
const Filter_and_searchBar = ({
  types,
  active,
  setActive,
  search,
  setSearch,
}: FilterSearchProps) => {
  return (
    <>
      <div className="max-w-7xl mx-auto mb-8 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Meal Type Tabs */}
          <div className="flex p-1 bg-gray-200 rounded-xl overflow-x-auto w-full md:w-auto no-scrollbar">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActive(type)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  active === type
                    ? "bg-white text-green-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search here ..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter_and_searchBar;
