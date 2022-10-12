import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Search() {
  return (
    <div className="relative w-4/5 min-w-[150px]">
      <div className="flex h-8 flex-row items-center rounded-md border-y-2 border-l-2 border-stone-300">
        <input
          placeholder="Search"
          className="w-full appearance-none px-3 font-sans text-xs tracking-wider text-black focus-visible:outline-none"
        />
        <button
          type="button"
          aria-label="search"
          className="relative ml-2 h-8 w-8 appearance-none rounded-r-md border-y-2 border-r-2 border-stone-300  bg-stone-300 p-2"
        >
          <FontAwesomeIcon icon={faSearch} size="sm" />
        </button>
      </div>
    </div>
  );
}
