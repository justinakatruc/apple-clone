import React from 'react';

interface NavButtonProps {
  name: string;
  onMouseEnter: (name: string) => void;
}

function NavButton({ name, onMouseEnter }: NavButtonProps) {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    // start a 150 ms timer – only when it completes do we actually call the parent
    timeoutRef.current = setTimeout(() => {
      onMouseEnter(name);
    }, 150);
  };

  const handleMouseLeave = () => {
    // cancel the pending timeout if the mouse leaves early
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (
    <div className="flex flex-col items-center cursor-pointer h-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className="h-full flex justify-center items-center">
        {name}
      </span>
    </div>
  );
}

export default NavButton;
