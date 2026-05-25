export interface Cow {
  id: number
  name: string
  breed: string
  age: number
  weight: number
  price: number
  image: string
  available: boolean
}

// MOCK DATA - temporary
const cows: Cow[] = [
  {
    id: 1,
    name: "Holstein Queen",
    breed: "Holstein",
    age: 4,
    weight: 550,
    price: 120000,
    image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53",
    available: true,
  },
  {
    id: 2,
    name: "Jersey Star",
    breed: "Jersey",
    age: 3,
    weight: 420,
    price: 95000,
    image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9",
    available: true,
  },
  {
    id: 3,
    name: "Friesian King",
    breed: "Friesian",
    age: 5,
    weight: 610,
    price: 145000,
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
    available: true,
  },
 
  {
    id: 4,
    name: "Sahiwal Prime",
    breed: "Sahiwal",
    age: 4,
    weight: 500,
    price: 118000,
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8",
    available: true,
  },
  {
    id: 5,
    name: "Dairy Champion",
    breed: "Holstein",
    age: 5,
    weight: 630,
    price: 160000,
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e",
    available: false,
  },
]

export const getCows = async (): Promise<Cow[]> => {
  return cows
}

export const getCowById = async (
  id: number
): Promise<Cow | undefined> => {
  return cows.find((cow) => cow.id === id)
}