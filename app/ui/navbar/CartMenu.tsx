import React from "react";
import Link from "next/link";
import type { itemsList } from "@/app/data/itemsLists";

function CartList({ showCartMenu, cartList }: { showCartMenu: boolean, cartList: itemsList }) {

  return (
    <div className="flex flex-col gap-12 select-none"
         style={{
                opacity: showCartMenu ? 0.9 : 0, transform: `translateY(${showCartMenu ? '3px' : '0px'})`, 
                transition: `opacity 200ms ease-in-out, transform 300ms ease-out`,
                pointerEvents: showCartMenu ? 'auto' : 'none'}}>
      <div className="flex flex-col gap-3">
          <span className="text-black font-semibold text-2xl text-gray-900">Your Bag is empty.</span>
          <span className="text-gray-600"><Link href="/shop/signIn" className="text-blue-700 underline">Sign in</Link> to see if you have any saved items</span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-gray-600 ">My Profile</span>
        <ul className="flex flex-col gap-3 font-semibold text-gray-900">
          {cartList.items.map((item) => (
            item.subItems.map((subItem, i) => (
              <li key={`${subItem}`}
                  style={{
                        opacity: showCartMenu ? 0.9 : 0, transform: `translateY(${showCartMenu ? '3px' : '0px'})`,
                        transition: `opacity 200ms ease-in-out ${(i+1) * 50}ms, transform 300ms ease-out`,
                        pointerEvents: showCartMenu ? 'auto' : 'none'}}
                  className="flex items-center gap-2">
                <svg height="25" viewBox="0 0 13 25" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z"></path></svg>
                <Link href={`${item.subItemsLinks && item.subItemsLinks[i]}`}>{subItem}</Link>
              </li>
            ))
          ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(CartList);