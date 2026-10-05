export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: "Dinner" | "Lunch" | "Dessert" | "Drink" | "Pasta" | "Pizza";
}

export const IMAGES = {
  heroPasta: "/images/hero-pasta.png",
  welcomeSalad: "/images/welcome-salad.png",
  reserveMain: "/images/reserve-main.png",
  reserveSmall1: "/images/reserve-small1.png",
  reserveSmall2: "/images/reserve-small2.png",
  openHouse: "/images/open-bg.png",
  aboutRestaurant: "/images/about-restaurant.png",
  aboutPlate: "/images/about-plate.png",
  ownerChef: "/images/about-owner.png",
  chef1: "/images/chef-betran.png",
  chef2: "/images/chef-ferry.png",
  chef3: "/images/chef-iswan.png",
  avatarMain: "/images/avatar-starla.png",
  mapFood: "/images/map-thumb-contact.png",
  mapContact: "/images/map-contact.png",
  mapCheckout: "/images/map-checkout.png",
  mapHouse: "/images/map-thumb-checkout.png",
  authPasta: "/images/auth-pasta.png",
  mintLeaf: "/images/mint-leaf.png",
  bookTable: "/images/book-table.png",
  reservationDetail: "/images/reservation-detail.png",
};

export const DISHES: Dish[] = [
  {
    id: "spaghetti",
    name: "Spaghetti",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: 12.05,
    image: "/images/dish-spaghetti.png",
    rating: 5,
    category: "Pasta",
  },
  {
    id: "gnocchi",
    name: "Gnocchi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: 12.05,
    image: "/images/dish-gnocchi.png",
    rating: 5,
    category: "Pasta",
  },
  {
    id: "rovioli",
    name: "Rovioli",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: 12.05,
    image: "/images/dish-rovioli.png",
    rating: 4,
    category: "Pasta",
  },
  {
    id: "penne-vodak",
    name: "Penne Alla Vodak",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: 12.05,
    image: "/images/dish-penne.png",
    rating: 4,
    category: "Pasta",
  },
  {
    id: "risoto",
    name: "Risoto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: 12.05,
    image: "/images/dish-risoto.png",
    rating: 5,
    category: "Pasta",
  },
  {
    id: "splitza",
    name: "Splitza Signature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: 12.05,
    image: "/images/dish-splitza.png",
    rating: 5,
    category: "Pizza",
  },
  {
    id: "linguine",
    name: "Linguine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.",
    price: 12.05,
    image: "/images/dish-linguine.png",
    rating: 5,
    category: "Pasta",
  },
  {
    id: "capellini",
    name: "Capellini",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.",
    price: 12.05,
    image: "/images/dish-capellini.png",
    rating: 4,
    category: "Pasta",
  },
  {
    id: "fettuccine",
    name: "Fettuccine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.",
    price: 12.05,
    image: "/images/dish-fettuccine.png",
    rating: 4,
    category: "Pasta",
  },
  {
    id: "super-supreme",
    name: "Super Supreme",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.",
    price: 12.05,
    image: "/images/pizza-supreme.png",
    rating: 5,
    category: "Pizza",
  },
  {
    id: "veggie-garden",
    name: "Veggie Garden",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.",
    price: 12.05,
    image: "/images/pizza-veggie.png",
    rating: 4,
    category: "Pizza",
  },
  {
    id: "meat-lovers",
    name: "Meat Lovers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat.",
    price: 12.05,
    image: "/images/pizza-meatlovers.png",
    rating: 5,
    category: "Pizza",
  },
];

export const CATEGORIES = ["All catagory", "Dinner", "Lunch", "Dessert", "Drink"] as const;

export const CHEFS = [
  { name: "Betran Komar", role: "Head chef", image: IMAGES.chef1 },
  { name: "Ferry Sauwi", role: "Chef", image: IMAGES.chef2 },
  { name: "Iswan Dracho", role: "Chef", image: IMAGES.chef3 },
];

export const TESTIMONIAL = {
  name: "Starla Virgoun",
  role: "Financial advisor",
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam",
  avatar: IMAGES.avatarMain,
};
