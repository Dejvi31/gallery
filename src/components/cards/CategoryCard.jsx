import { useNavigate } from "react-router-dom";

export default function CategoryCard({ type, img }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${type.toLowerCase()}`)}
      className="border cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <img src={img} alt={type} className="w-full h-48 object-cover" />
      <h1 className="p-4 text-center font-bold text-lg">{type}</h1>
    </div>
  );
}
