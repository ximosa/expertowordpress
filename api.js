<<<<<<< HEAD
const API_URL = 'https://dev-webgae.pantheonsite.io/graphql';

export async function fetchData(query, variables = {}) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables })
    });

    if (!response.ok) {
      throw new Error(`Error en la API: ${response.statusText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error('Errores en la respuesta GraphQL:', errors);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error en fetchData:', error);
    return null;
  }
=======
const API_URL = 'https://dev-webgae.pantheonsite.io/graphql';

export async function fetchData(query, variables = {}) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables })
    });

    if (!response.ok) {
      throw new Error(`Error en la API: ${response.statusText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error('Errores en la respuesta GraphQL:', errors);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error en fetchData:', error);
    return null;
  }
>>>>>>> 6c1be356cd642369e218c7cdec5e2caa2827712a
}