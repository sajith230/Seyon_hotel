/**
 * Dummy food data. When admin site is connected, replace with API fetch.
 */
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "breakfast" | "main" | "sides" | "drinks" | "desserts";
  /** Dummy image URL; admin can upload later. */
  image: string;
}

export const FOOD_CATEGORIES: Record<FoodItem["category"], string> = {
  breakfast: "Breakfast",
  main: "Main dishes",
  sides: "Sides",
  drinks: "Drinks",
  desserts: "Desserts",
};

/** Dummy image per food - unique seed so each item has a consistent image. */
const img = (seed: string) =>
  `https://picsum.photos/seed/${seed}/400/300`;

export const dummyFoods: FoodItem[] = [
  { id: "1", name: "Rice & Curry", description: "Daily rice with seasonal curries, dhal, and sambol.", price: 450, category: "main", image: img("rice-curry-1") },
  { id: "2", name: "Kottu Roti", description: "Chopped roti with vegetables, egg or chicken.", price: 380, category: "main", image: img("kottu-2") },
  { id: "3", name: "String Hoppers", description: "Steamed rice noodles with curry and coconut sambol.", price: 350, category: "main", image: img("hoppers-3") },
  { id: "4", name: "Hoppers (Egg)", description: "Bowl-shaped rice flour pancake with egg.", price: 120, category: "breakfast", image: img("egg-hopper-4") },
  { id: "5", name: "Hoppers (Plain)", description: "Crispy bowl-shaped rice flour pancake.", price: 80, category: "breakfast", image: img("plain-hopper-5") },
  { id: "6", name: "Milk Rice", description: "Traditional kiribath with lunu miris.", price: 200, category: "breakfast", image: img("milk-rice-6") },
  { id: "7", name: "Chicken Curry", description: "Sri Lankan-style chicken curry with spices.", price: 420, category: "main", image: img("chicken-7") },
  { id: "8", name: "Fish Curry", description: "Fresh fish in coconut and tamarind curry.", price: 480, category: "main", image: img("fish-curry-8") },
  { id: "9", name: "Dhal Curry", description: "Lentil curry with coconut and tempering.", price: 180, category: "sides", image: img("dhal-9") },
  { id: "10", name: "Potato Curry", description: "Potato cooked in mild coconut gravy.", price: 160, category: "sides", image: img("potato-10") },
  { id: "11", name: "Fresh Fruit Juice", description: "Seasonal fruit juice (mango, pineapple, papaya).", price: 180, category: "drinks", image: img("juice-11") },
  { id: "12", name: "King Coconut", description: "Fresh thambili (king coconut) water.", price: 150, category: "drinks", image: img("coconut-12") },
  { id: "13", name: "Tea / Coffee", description: "Ceylon tea or local coffee.", price: 100, category: "drinks", image: img("tea-13") },
  { id: "14", name: "Lime Juice", description: "Fresh lime with sugar and salt.", price: 120, category: "drinks", image: img("lime-14") },
  { id: "15", name: "Wattalapan", description: "Traditional coconut and jaggery pudding.", price: 200, category: "desserts", image: img("wattalapan-15") },
  { id: "16", name: "Curd & Treacle", description: "Local curd with kithul treacle.", price: 220, category: "desserts", image: img("curd-16") },
  { id: "17", name: "Fried Rice", description: "Vegetable or chicken fried rice.", price: 400, category: "main", image: img("fried-rice-17") },
  { id: "18", name: "Noodles", description: "Stir-fried noodles with vegetables.", price: 350, category: "main", image: img("noodles-18") },
  { id: "19", name: "Paratha", description: "Flaky flatbread with curry.", price: 180, category: "sides", image: img("paratha-19") },
  { id: "20", name: "Salad", description: "Fresh garden salad with dressing.", price: 200, category: "sides", image: img("salad-20") },
];
