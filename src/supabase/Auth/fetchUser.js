   export const fetchUser = async () => {
      const data = localStorage.getItem("user")
      if (data) {
        return (JSON.parse(data));
      } else {
        return undefined
      }
    };