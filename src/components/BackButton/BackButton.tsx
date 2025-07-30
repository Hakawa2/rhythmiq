import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="col-span-2 flex items-start self-start gap-1 text-white hover:text-gray-300 transition"
    >
      <ArrowLeft size={32} />
    </button>
  );
};
