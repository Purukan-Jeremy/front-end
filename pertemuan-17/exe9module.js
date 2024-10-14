const ambilDataUserAsync = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const users = await response.json();
      users.data.forEach((user) => {
        console.log(
          `First Name: ${user.first_name}, Last Name: ${user.last_name}`
        );
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };



const ambilDataUserAxios = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      const users = response.data;
      users.data.forEach((user) => {
        console.log(
          `First Name: ${user.first_name}, Last Name: ${user.last_name}`
        );
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  export {ambilDataUserAxios, ambilDataUserAsync}