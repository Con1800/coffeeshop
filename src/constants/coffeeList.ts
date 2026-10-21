export interface CoffeeItem {
    id: number;
    name: string;
    price: number;
    description: string;
    status:  "available" | "coming_soon";
    image: string;
}

export const coffeeList: CoffeeItem[] = [
    {
        id: 1,
        name: "Iced Americano",
        price: 120,
        description: "Espresso + cold water + ice.",
        status: "available",
        image: "/images/IcedAmericano.jpg"
    },
    {
        id: 2,
        name: "Iced Latte",
        price: 120,
        description: "Espresso + cold milk + ice",
        status: "available",
        image: "/images/IcedLatte.jpg"
    },
    {
        id: 3,
        name: "Iced Mocha",
        price: 120,
        description: "Espresso + chocolate + milk + ice. Optional whipped cream.",
        status: "available",
        image: "/images/IcedMocha.jpg"
    },
    {
        id: 4,
        name: "Cold Brew",
        price: 120,
        description: "Coffee steeped in cold water for 12–24 hours. Smooth and strong",
        status: "available",
        image: "/images/ColdBrew.jpg"
    },
    {
        id: 5,
        name: "Iced Caramel Macchiato",
        price: 120,
        description: "Cold milk + vanilla + espresso on top + caramel drizzle.",
        status: "available",
        image: "/images/IcedCaramelMacchiato.jpg"
    },
    {
        id: 6,
        name: "Affogato",
        price: 120,
        description: "	Scoop of vanilla ice cream “drowned” in a shot of hot espresso.",
        status: "available",
        image: "/images/Affogato.jpg"
    },
    
]