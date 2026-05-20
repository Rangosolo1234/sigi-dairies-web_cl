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

// MOCK DATA (temporary until Django is ready)
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
]

export const getCows = async (): Promise<Cow[]> => {
  return cows
}

export const getCowById = async (id: number): Promise<Cow | undefined> => {
  return cows.find(cow => cow.id === id)
}