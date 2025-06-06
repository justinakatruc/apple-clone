
function NavSearch() {
  return (
    <div className="flex items-center justify-center text-3xl">
      <svg width="38" height="40" viewBox="0 0 38 40" xmlns="http://www.w3.org/2000/svg"><path d="m28.6724 27.8633-5.07-5.07c-.0095-.0095-.0224-.0122-.032-.0213a7.9967 7.9967 0 1 0 -1.8711 1.7625c.0254.03.0357.0681.0642.0967l5.07 5.07a1.3 1.3 0 0 0 1.8389-1.8379zm-18.0035-10.0033a6.5447 6.5447 0 1 1 6.545 6.5449 6.5518 6.5518 0 0 1 -6.545-6.5449z"></path></svg>  
      <input
        type="text"
        placeholder="Search"
        className="border-none rounded-md p-1 focus:outline-none text-black font-semibold"
      />
    </div>
  );
}

export default NavSearch;