import React from "react";
import Link from "next/link";
import NavSearch from "./NavSearch";
import type { itemsList } from "@/app/data/itemsLists";

function SearchList({ showSearchMenu, searchList, setExpandMenu }: { showSearchMenu: boolean, searchList: itemsList, setExpandMenu: React.Dispatch<React.SetStateAction<boolean>> }) {

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
          {searchList.items.map((item) => (
            item.subItems.map((subItem, i) => (
              <li key={`${subItem}`}
                  style={{
                        opacity: showSearchMenu ? 0.9 : 0, transform: `translateY(${showSearchMenu ? '3px' : '0px'})`,
                        transition: `opacity 200ms ease-in-out ${(i+1) * 50}ms, transform 300ms ease-out`,
                        pointerEvents: showSearchMenu ? 'auto' : 'none'}}
                  className="flex items-center gap-2">
                <svg height="25" viewBox="0 0 13 25" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z"></path></svg>
                <Link href={`${item.subItemsLinks && item.subItemsLinks[i]}`} onClick={() => {setExpandMenu(false)}}>
                  {subItem}
                </Link>
              </li>
            ))
          ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(SearchList);