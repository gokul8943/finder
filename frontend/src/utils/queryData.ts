import {
    Gamepad2, Camera, Battery, Smartphone,
} from 'lucide-react'


export const useCases = [
    { id: "gaming", label: "Gaming Pro", icon: Gamepad2, desc: "High performance & refresh rate" },
    { id: "camera", label: "Photography", icon: Camera, desc: "Best-in-class camera system" },
    { id: "battery", label: "Battery Monster", icon: Battery, desc: "Multi-day battery life" },
    { id: "balanced", label: "Everyday Balance", icon: Smartphone, desc: "Great all-around value" },
];

export const budgets = [
    { id: "budget", label: "Budget", range: "Under 15000", color: "from-emerald-400 to-emerald-500" },
    { id: "mid", label: "Mid-Range", range: "15000 - 30000", color: "from-blue-400 to-blue-500" },
    { id: "premium", label: "Premium", range: "30000 - 45000", color: "from-indigo-400 to-indigo-500" },
    { id: "ultra", label: "Ultra", range: "Over 45000", color: "from-purple-400 to-purple-500" },
];

export const brands = [
    { id: "realme", label: "Realme" },
    { id: "samsung", label: "Samsung" },
    { id: "vivo", label: "Vivo" },
    { id: "oneplus", label: "OnePlus" },
    { id: "any", label: "Surprise Me (Any)" },
];