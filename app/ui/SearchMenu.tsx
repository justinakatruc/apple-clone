import NavSearch from "./NavSearch";

function SearchList({showSearchMenu}: {showSearchMenu: boolean}) {
  return (
    <div className="flex flex-col gap-12 select-none"
         style={{
                opacity: showSearchMenu ? 0.9 : 0, transform: `translateY(${showSearchMenu ? '3px' : '0px'})`, 
                transition: `opacity 200ms ease-in-out, transform 300ms ease-out`,
                pointerEvents: showSearchMenu ? 'auto' : 'none'}}>
      <div className="ml-[-10px]">
        <NavSearch />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-gray-600">Quick Links</span>
        <ul className="flex flex-col gap-3 font-semibold text-gray-900">
          {[
            "Find a Store",
            "Apple Vision Pro",
            "AirPods",
            "Apple Intelligence",
            "Apple Trade In Event",
          ].map((text, i) => (
            <li key={text} 
                style={{
                  opacity: showSearchMenu ? 0.9 : 0, transform: `translateY(${showSearchMenu ? '3px' : '0px'})`, 
                  transition: `opacity 200ms ease-in-out ${(i+1) * 35}ms, transform 300ms ease-out`,
                  pointerEvents: showSearchMenu ? 'auto' : 'none'}} 
                className="flex items-center gap-2">
              <svg height="25" viewBox="0 0 13 25" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z"></path></svg>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchList;