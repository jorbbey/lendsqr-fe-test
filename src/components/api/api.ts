//  using fetch to make API requests
const getUserDetails = async (userId: string): Promise<void> => {
  try {
    const response = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }
    const userDetails = await response.json();
    return userDetails;
  } catch (error) {
    console.log(`this is an error -  ${error} `);
    throw error;
  }
};

export { getUserDetails };
