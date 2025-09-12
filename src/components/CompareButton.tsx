import { useCompare } from "@/context/CompareContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CompareButton = () => {
  const { compareList } = useCompare();
  const navigate = useNavigate();

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button onClick={() => navigate("/compare")}>
        Compare {compareList.length} {compareList.length > 1 ? "Properties" : "Property"}
      </Button>
    </div>
  );
};

export default CompareButton;
