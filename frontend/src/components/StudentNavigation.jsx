import React from "react";
import { cn } from "@/lib/utils";
import { User, FileText, Calendar, Heart, MessageCircle, Clock } from "lucide-react";

const navigationItems = [
  { id: "dados-gerais", label: "Dados", icon: <User className="w-4 h-4" /> },
  { id: "boletins", label: "Boletins", icon: <FileText className="w-4 h-4" /> },
  { id: "frequencia", label: "Frequência", icon: <Calendar className="w-4 h-4" /> },
  { id: "saude", label: "Saúde", icon: <Heart className="w-4 h-4" /> },
  { id: "atendimentos", label: "Atendimentos", icon: <MessageCircle className="w-4 h-4" /> },
  { id: "contraturno", label: "Contraturno", icon: <Clock className="w-4 h-4" /> },
];

export function StudentNavigation({ activeTab = "dados-gerais", onTabChange }) {
  const handleTabClick = (tabId) => {
    onTabChange?.(tabId);
  };

  return (
    <div className="w-full bg-white border-b border-secondary">
      <div className="flex overflow-x-auto">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={cn(
              "relative flex items-center gap-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2",
              activeTab === item.id
                ? "text-primary border-primary"
                : "text-primary-dark border-transparent hover:text-primary hover:border-primary/50"
            )}
          >
            <span
              className={cn(
                "transition-colors duration-200",
                activeTab === item.id ? "text-primary" : "text-gray-400"
              )}
            >
              {item.icon}
            </span>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StudentNavigation; 