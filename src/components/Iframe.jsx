const Iframe = ({ url }) => {
  return (
    <iframe
      title="HTML Content"
      src={`/interactivos/${url}/index.html`} // Ajusta la ruta según tu estructura
      style={{ width: "100%", height: "500px", border: "none" }}
    />
  );
};

export default Iframe;
