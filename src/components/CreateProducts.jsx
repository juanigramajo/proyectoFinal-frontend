import FormProducts from "../pages/FormProducts";



export default function CreateProducts( { token }) {
  return (
    <div className="container mx-5 mb-5">
      <h1>Alta de Productos</h1>
      <FormProducts token={ token } />
    </div>
  );
}
