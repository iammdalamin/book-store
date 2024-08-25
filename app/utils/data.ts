export interface Item {
  title: string; // The title of the item
  author: string; // The author of the item
  date: Date; // The date associated with the item
  price: number; // The price of the item
  tags: string[]; // An array of tags associated with the item
}

export const bookData: Item[] = [
  {
    title: "Plastic: A Novel",
    author: "Scott Guild",
    date: new Date("February, 1978"),
    price: 930,
    tags: ["Climate change", "Sci-Fi"],
  },
  {
    title:
      "Space Oddities: The Mysterious Anomalies Challenging Our Understanding  of the Universe",
    author: "Harry Cliff",
    date: new Date("March, 1980"),
    price: 220,
    tags: ["Climate change", "History"],
  },
  {
    title: "H Is for Hope: Climate Change from A to Z",
    author: "Elizabeth Kolbert",
    date: new Date("January, 1990"),
    price: 780,
    tags: ["Climate change", "Technology"],
  },
  {
    title: "The Exquisite Machine: The New Science of the Heart",
    author: "Sian E. Harding",
    date: new Date("December, 2000"),
    price: 680,
    tags: ["Health", "Biochemistry"],
  },
];
