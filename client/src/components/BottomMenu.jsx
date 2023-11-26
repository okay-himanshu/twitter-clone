function BottomMenu({ icon, img }) {
  return (
    <nav className="flex items-center justify-center">
      {icon ? icon : <img src={img} alt="" className="h-5 w-5" />}
    </nav>
  );
}

export default BottomMenu;
