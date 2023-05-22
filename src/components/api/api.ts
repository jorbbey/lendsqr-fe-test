//  using fetch to make API requests
const getUserDetails = async (userId: string) => {
  try {
    const response = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }
    const userDetails = await response.json();
    return userDetails;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getUserDetails };
