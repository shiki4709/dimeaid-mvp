export interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly image: string;
  readonly popular?: boolean;
}

export interface Restaurant {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly logo: string;
  readonly rating: number;
  readonly deliveryTime: string;
  readonly deliveryFee: number;
  readonly categories: readonly string[];
  readonly menu: readonly MenuItem[];
}

export const DIME_AID_FEE = {
  hunger: 0.10,
  operations: 0.01,
  total: 0.11,
} as const;

export const restaurants: readonly Restaurant[] = [
  {
    id: "pizza-hut",
    name: "Pizza Hut",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&q=80",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    categories: ["Pizza", "Wings", "Sides"],
    menu: [
      {
        id: "ph-1",
        name: "Pepperoni Lover's Pizza",
        description: "Loaded with pepperoni on our classic hand-tossed crust",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
        popular: true,
      },
      {
        id: "ph-2",
        name: "Supreme Pizza",
        description: "Pepperoni, sausage, bell peppers, onions, and mushrooms",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
      },
      {
        id: "ph-3",
        name: "Cheese Lover's Pizza",
        description: "Three-cheese blend on hand-tossed crust",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
      },
      {
        id: "ph-4",
        name: "Buffalo Wings (8pc)",
        description: "Crispy wings tossed in tangy buffalo sauce",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?w=400&q=80",
        popular: true,
      },
      {
        id: "ph-5",
        name: "Garlic Breadsticks",
        description: "Warm breadsticks with garlic butter and marinara",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=400&q=80",
      },
      {
        id: "ph-6",
        name: "Chocolate Brownie",
        description: "Rich chocolate brownie with a warm center",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
      },
    ],
  },
  {
    id: "kfc",
    name: "KFC",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
    logo: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?w=200&q=80",
    rating: 4.3,
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    categories: ["Chicken", "Sandwiches", "Sides"],
    menu: [
      {
        id: "kfc-1",
        name: "8pc Original Recipe Bucket",
        description: "The Colonel's secret recipe — 11 herbs and spices",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
        popular: true,
      },
      {
        id: "kfc-2",
        name: "Spicy Chicken Sandwich",
        description: "Crispy spicy fillet with pickles and mayo on a brioche bun",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80",
        popular: true,
      },
      {
        id: "kfc-3",
        name: "Popcorn Chicken (Large)",
        description: "Bite-sized pieces of all-white meat chicken",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80",
      },
      {
        id: "kfc-4",
        name: "Coleslaw",
        description: "Creamy coleslaw made fresh daily",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1625938145744-e380515399bf?w=400&q=80",
      },
      {
        id: "kfc-5",
        name: "Mashed Potatoes & Gravy",
        description: "Creamy mashed potatoes with savory brown gravy",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
      },
      {
        id: "kfc-6",
        name: "Mac & Cheese",
        description: "Creamy elbow macaroni in a rich cheese sauce",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&q=80",
      },
    ],
  },
  {
    id: "taco-bell",
    name: "Taco Bell",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    logo: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=200&q=80",
    rating: 4.1,
    deliveryTime: "15-25 min",
    deliveryFee: 0.99,
    categories: ["Tacos", "Burritos", "Combos"],
    menu: [
      {
        id: "tb-1",
        name: "Crunchwrap Supreme",
        description: "Seasoned beef, nacho cheese, lettuce, tomato, and sour cream",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&q=80",
        popular: true,
      },
      {
        id: "tb-2",
        name: "Cheesy Gordita Crunch",
        description: "Warm flatbread with a crunchy taco shell inside",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80",
        popular: true,
      },
      {
        id: "tb-3",
        name: "Burrito Supreme",
        description: "Seasoned beef, beans, lettuce, cheese, sour cream, and tomatoes",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
      },
      {
        id: "tb-4",
        name: "Nachos BellGrande",
        description: "Chips loaded with beef, beans, cheese sauce, and pico de gallo",
        price: 6.49,
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80",
      },
      {
        id: "tb-5",
        name: "Chalupa Supreme",
        description: "Fried chalupa shell with seasoned beef and fresh veggies",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80",
      },
      {
        id: "tb-6",
        name: "Cinnamon Twists",
        description: "Light and crispy cinnamon sugar twists",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80",
      },
    ],
  },
];

export const impactStats = {
  totalContributed: 12434.10,
  mealsServed: 124341,
  citiesReached: 47,
  topCities: [
    { name: "Dallas, TX", meals: 34200, amount: 3420.00 },
    { name: "Houston, TX", meals: 28100, amount: 2810.00 },
    { name: "Austin, TX", meals: 19500, amount: 1950.00 },
    { name: "San Antonio, TX", meals: 15800, amount: 1580.00 },
    { name: "Fort Worth, TX", meals: 12400, amount: 1240.00 },
  ],
  monthlyData: [
    { month: "Oct", meals: 15200 },
    { month: "Nov", meals: 18900 },
    { month: "Dec", meals: 24100 },
    { month: "Jan", meals: 21300 },
    { month: "Feb", meals: 19800 },
    { month: "Mar", meals: 25041 },
  ],
} as const;

export const merchantReport = {
  partnerName: "Pizza Hut Dallas",
  period: "March 2026",
  totalOrders: 142300,
  participationRate: 100,
  industryAvgRate: 23,
  totalContributed: 14230,
  mealsFunded: 142300,
} as const;
