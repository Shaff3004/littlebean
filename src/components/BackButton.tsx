import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
}

function BackButton({ label = "Back" }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-card hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      whileTap={{ scale: 0.95 }}
      aria-label={`Go back to ${label}`}
    >
      <ArrowLeft size={18} />
      <span>{label}</span>
    </motion.button>
  );
}

export default BackButton;
