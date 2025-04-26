
interface NavButtonProps {
  name: string;
  onMouseEnter: (name: string) => void;
}

function NavButton({ name, onMouseEnter }: NavButtonProps) {
  const handleMouseEnter = () => {
      onMouseEnter(name);
    }

  return (
    <div className="flex flex-col items-center cursor-pointer h-full" onMouseEnter={handleMouseEnter}>
      <span className="h-full flex justify-center items-center">
        {name}
      </span>
    </div>
  );
}

export default NavButton;
