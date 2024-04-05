/* eslint-disable react/jsx-key */
// import components
import Pizza from "./components/Pizza";
import Banner from "./components/Banner";

// pizza data
const pizzas = [
  {
    id: 1,
    name: "capricciosa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/capricciosa.webp",
    priceSm: 999,
    priceMd: 1099,
    priceLg: 1199,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: "cheesy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/cheesy.webp",
    priceSm: 1099,
    priceMd: 1199,
    priceLg: 1299,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: "hawaii",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/hawaii.webp",
    priceSm: 1099,
    priceMd: 1199,
    priceLg: 1299,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: "italian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/italian.webp",
    priceSm: 1199,
    priceMd: 1299,
    priceLg: 1399,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: "margherita",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/margherita.webp",
    priceSm: 999,
    priceMd: 1099,
    priceLg: 1199,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: "pepperoni",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/pepperoni.webp",
    priceSm: 1099,
    priceMd: 1199,
    priceLg: 1299,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: "quattro formaggi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/quattro-formaggi.webp",
    priceSm: 1299,
    priceMd: 1399,
    priceLg: 1499,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: "quattro stagioni",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/quattro-stagioni.webp",
    priceSm: 1199,
    priceMd: 1299,
    priceLg: 1399,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 9,
    name: "tonno",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/tonno.webp",
    priceSm: 1099,
    priceMd: 1199,
    priceLg: 1299,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 10,
    name: "vegetarian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/vegetarian.webp",
    priceSm: 999,
    priceMd: 1099,
    priceLg: 1199,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
];

export default function Home() {
  return (
    <section>
      <Banner />
      <div className="bg-gradient-to-tr from-secondary via-white to-secondary">
        <div className="container mx-auto ">
          {/* pizza grid */}
          <div className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12">
            {pizzas.map((pizza) => {
              return <Pizza pizza={pizza} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
