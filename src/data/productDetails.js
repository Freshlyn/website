import milkImg from "../assets/milk.jpg";

/*
 * PLACEHOLDER NUTRITION DATA — NOT REAL VALUES.
 *
 * Every number below is dummy data used only to build out the page layout.
 * Replace each product's `nutrition`, `ingredients`, `shelfLife` and `storage`
 * with the actual lab-verified values before this page goes live, since this
 * information is regulated under FSSAI labelling rules.
 *
 * To add a product: add an object to the array of the matching category.
 * `nutrition` rows render in the order listed, so keep them consistent.
 */

const PLACEHOLDER_IMAGE = milkImg;

export const productCategories = [
  {
    id: "dairy",
    icon: "🥛",
    label: "Dairy",
    color: "#2a5e32",
    products: [
      {
        id: "cow-milk",
        name: "Farm Fresh Cow Milk",
        image: milkImg,
        description:
          "Pure, natural cow milk sourced directly from trusted local farms. Rich in nutrients and free from preservatives.",
        servingSize: "Per 100 ml",
        nutrition: [
          { label: "Energy", value: "62 kcal" },
          { label: "Protein", value: "3.2 g" },
          { label: "Total Fat", value: "3.5 g" },
          { label: "Saturated Fat", value: "2.1 g" },
          { label: "Carbohydrates", value: "4.8 g" },
          { label: "Total Sugars", value: "4.8 g" },
          { label: "Calcium", value: "120 mg" },
        ],
        ingredients: "Whole cow milk.",
        shelfLife: "2 days from date of packaging",
        storage: "Store refrigerated at 4°C or below. Consume after boiling.",
      },
      {
        id: "buffalo-milk",
        name: "Buffalo Milk",
        image: PLACEHOLDER_IMAGE,
        description:
          "Thick, creamy buffalo milk with a naturally higher fat content — ideal for curd, paneer and traditional sweets.",
        servingSize: "Per 100 ml",
        nutrition: [
          { label: "Energy", value: "97 kcal" },
          { label: "Protein", value: "3.8 g" },
          { label: "Total Fat", value: "6.9 g" },
          { label: "Saturated Fat", value: "4.2 g" },
          { label: "Carbohydrates", value: "5.2 g" },
          { label: "Total Sugars", value: "5.2 g" },
          { label: "Calcium", value: "169 mg" },
        ],
        ingredients: "Whole buffalo milk.",
        shelfLife: "2 days from date of packaging",
        storage: "Store refrigerated at 4°C or below. Consume after boiling.",
      },
      {
        id: "low-fat-milk",
        name: "Low Fat Milk",
        image: PLACEHOLDER_IMAGE,
        description:
          "Lighter toned milk with reduced fat, retaining full protein and calcium content. A everyday option for health-conscious households.",
        servingSize: "Per 100 ml",
        nutrition: [
          { label: "Energy", value: "42 kcal" },
          { label: "Protein", value: "3.4 g" },
          { label: "Total Fat", value: "1.5 g" },
          { label: "Saturated Fat", value: "0.9 g" },
          { label: "Carbohydrates", value: "4.9 g" },
          { label: "Total Sugars", value: "4.9 g" },
          { label: "Calcium", value: "125 mg" },
        ],
        ingredients: "Toned cow milk.",
        shelfLife: "2 days from date of packaging",
        storage: "Store refrigerated at 4°C or below. Consume after boiling.",
      },
      {
        id: "paneer",
        name: "Fresh Paneer",
        image: PLACEHOLDER_IMAGE,
        description:
          "Soft, fresh cottage cheese made daily from full-cream milk. No added starch or preservatives.",
        servingSize: "Per 100 g",
        nutrition: [
          { label: "Energy", value: "265 kcal" },
          { label: "Protein", value: "18.3 g" },
          { label: "Total Fat", value: "20.8 g" },
          { label: "Saturated Fat", value: "12.4 g" },
          { label: "Carbohydrates", value: "1.2 g" },
          { label: "Total Sugars", value: "1.2 g" },
          { label: "Calcium", value: "208 mg" },
        ],
        ingredients: "Milk, citric acid (acidity regulator).",
        shelfLife: "3 days from date of packaging",
        storage: "Store refrigerated at 4°C or below in an airtight container.",
      },
      {
        id: "ghee",
        name: "Pure Desi Ghee",
        image: PLACEHOLDER_IMAGE,
        description:
          "Traditionally prepared clarified butter with a rich aroma, made using the time-honoured bilona method.",
        servingSize: "Per 100 g",
        nutrition: [
          { label: "Energy", value: "900 kcal" },
          { label: "Protein", value: "0 g" },
          { label: "Total Fat", value: "100 g" },
          { label: "Saturated Fat", value: "62 g" },
          { label: "Carbohydrates", value: "0 g" },
          { label: "Total Sugars", value: "0 g" },
          { label: "Cholesterol", value: "256 mg" },
        ],
        ingredients: "Pure cow milk fat.",
        shelfLife: "9 months from date of packaging",
        storage: "Store in a cool, dry place away from direct sunlight.",
      },
      {
        id: "curd",
        name: "Natural Curd",
        image: PLACEHOLDER_IMAGE,
        description:
          "Thick set curd cultured naturally from fresh milk. A daily source of probiotics and calcium.",
        servingSize: "Per 100 g",
        nutrition: [
          { label: "Energy", value: "98 kcal" },
          { label: "Protein", value: "3.1 g" },
          { label: "Total Fat", value: "4.0 g" },
          { label: "Saturated Fat", value: "2.6 g" },
          { label: "Carbohydrates", value: "4.7 g" },
          { label: "Total Sugars", value: "4.7 g" },
          { label: "Calcium", value: "149 mg" },
        ],
        ingredients: "Pasteurised milk, active lactic cultures.",
        shelfLife: "4 days from date of packaging",
        storage: "Store refrigerated at 4°C or below.",
      },
    ],
  },
  {
    id: "rice",
    icon: "🍚",
    label: "Rice",
    color: "#7c4a1e",
    products: [
      {
        id: "tulaipanji-rice",
        name: "Tulaipanji Rice",
        image: PLACEHOLDER_IMAGE,
        description:
          "An aromatic short-grain rice from North Bengal, known for its delicate fragrance and soft texture.",
        servingSize: "Per 100 g (uncooked)",
        nutrition: [
          { label: "Energy", value: "349 kcal" },
          { label: "Protein", value: "7.1 g" },
          { label: "Total Fat", value: "0.6 g" },
          { label: "Saturated Fat", value: "0.2 g" },
          { label: "Carbohydrates", value: "78.2 g" },
          { label: "Dietary Fibre", value: "1.3 g" },
          { label: "Total Sugars", value: "0.1 g" },
        ],
        ingredients: "Tulaipanji rice.",
        shelfLife: "12 months from date of packaging",
        storage: "Store in a cool, dry place in an airtight container.",
      },
      {
        id: "gobindobhog-rice",
        name: "Gobindobhog Rice",
        image: PLACEHOLDER_IMAGE,
        description:
          "A short-grain aromatic rice traditionally used in Bengali khichuri, payesh and festive cooking.",
        servingSize: "Per 100 g (uncooked)",
        nutrition: [
          { label: "Energy", value: "351 kcal" },
          { label: "Protein", value: "6.8 g" },
          { label: "Total Fat", value: "0.5 g" },
          { label: "Saturated Fat", value: "0.1 g" },
          { label: "Carbohydrates", value: "79.0 g" },
          { label: "Dietary Fibre", value: "1.1 g" },
          { label: "Total Sugars", value: "0.1 g" },
        ],
        ingredients: "Gobindobhog rice.",
        shelfLife: "12 months from date of packaging",
        storage: "Store in a cool, dry place in an airtight container.",
      },
    ],
  },
  {
    id: "sweets",
    icon: "🍮",
    label: "Sweets",
    color: "#5a3210",
    products: [
      {
        id: "rosogolla",
        name: "Rosogolla",
        image: PLACEHOLDER_IMAGE,
        description:
          "Soft chhena dumplings simmered in light sugar syrup — prepared fresh, never frozen.",
        servingSize: "Per 100 g",
        nutrition: [
          { label: "Energy", value: "186 kcal" },
          { label: "Protein", value: "4.2 g" },
          { label: "Total Fat", value: "5.1 g" },
          { label: "Saturated Fat", value: "3.2 g" },
          { label: "Carbohydrates", value: "31.4 g" },
          { label: "Total Sugars", value: "28.6 g" },
          { label: "Calcium", value: "96 mg" },
        ],
        ingredients: "Chhena (milk solids), sugar, water, cardamom.",
        shelfLife: "3 days from date of packaging",
        storage: "Store refrigerated at 4°C or below.",
      },
      {
        id: "kaju-barfi",
        name: "Kaju Barfi",
        image: PLACEHOLDER_IMAGE,
        description:
          "Smooth cashew fudge made from finely ground kaju and sugar, finished with edible silver leaf.",
        servingSize: "Per 100 g",
        nutrition: [
          { label: "Energy", value: "458 kcal" },
          { label: "Protein", value: "9.6 g" },
          { label: "Total Fat", value: "24.2 g" },
          { label: "Saturated Fat", value: "4.8 g" },
          { label: "Carbohydrates", value: "50.1 g" },
          { label: "Total Sugars", value: "38.4 g" },
          { label: "Dietary Fibre", value: "1.8 g" },
        ],
        ingredients: "Cashew nuts, sugar, ghee, edible silver leaf.",
        shelfLife: "15 days from date of packaging",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        allergens: "Contains tree nuts (cashew).",
      },
    ],
  },
  {
    id: "pantry",
    icon: "🍯",
    label: "Pantry",
    color: "#4a7c3f",
    products: [
      {
        id: "natural-honey",
        name: "Natural Honey",
        image: PLACEHOLDER_IMAGE,
        description:
          "Raw, unprocessed honey collected from natural hives. No added sugar, colour or flavour.",
        servingSize: "Per 100 g",
        nutrition: [
          { label: "Energy", value: "304 kcal" },
          { label: "Protein", value: "0.3 g" },
          { label: "Total Fat", value: "0 g" },
          { label: "Saturated Fat", value: "0 g" },
          { label: "Carbohydrates", value: "82.4 g" },
          { label: "Total Sugars", value: "82.1 g" },
          { label: "Sodium", value: "4 mg" },
        ],
        ingredients: "100% natural honey.",
        shelfLife: "24 months from date of packaging",
        storage: "Store in a cool, dry place. Do not refrigerate.",
        allergens: "Not recommended for infants below 12 months.",
      },
      {
        id: "daler-bori",
        name: "Daler Bori",
        image: PLACEHOLDER_IMAGE,
        description:
          "Sun-dried lentil dumplings handmade the traditional Bengali way, adding protein and texture to everyday curries.",
        servingSize: "Per 100 g",
        nutrition: [
          { label: "Energy", value: "341 kcal" },
          { label: "Protein", value: "24.0 g" },
          { label: "Total Fat", value: "1.2 g" },
          { label: "Saturated Fat", value: "0.3 g" },
          { label: "Carbohydrates", value: "59.6 g" },
          { label: "Dietary Fibre", value: "10.4 g" },
          { label: "Total Sugars", value: "2.1 g" },
        ],
        ingredients: "Split black gram (urad dal), spices.",
        shelfLife: "6 months from date of packaging",
        storage: "Store in a cool, dry place in an airtight container.",
      },
    ],
  },
];

export default productCategories;
