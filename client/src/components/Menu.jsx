function Menu({ icon, title }) {
  return (
    <div>
      <img src={icon} alt="" />
      <h1>{title}</h1>
    </div>
  );
}

export default Menu;
