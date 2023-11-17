export const base_api_url = process.env.NEXT_PUBLIC_REST_URL;

export const getVehicle = async (url: string) => {
  try {
    const response = await fetch(`${base_api_url}${url}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCompanies = async (url: string) => {
  try {
    const response = await fetch(`${base_api_url}${url}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getDiscountss = async (url: string) => {
  try {
    const response = await fetch(`${base_api_url}${url}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
