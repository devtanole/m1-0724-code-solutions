interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: User[] = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
  return [];
}

fetchUsers();

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchPokemon(): Promise<Pokemon[]> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: Pokemon = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
  return [];
}

fetchPokemon();
