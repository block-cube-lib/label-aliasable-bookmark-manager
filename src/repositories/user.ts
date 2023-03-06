import {
    collection,
    getDocs,
  } from "firebase/firestore";
  import { database } from "../infrastructure/firebase";
  
  const fetchUsers = async (): Promise<UserProps[]> => {
    try {
      const usersRef = collection(database, "users");
      const usersSnapshot = await getDocs(usersRef);
  
      if (!usersSnapshot.empty) {
        const userList = usersSnapshot.docs.map((snapshot) => {
          const { email } = snapshot.data();
          return { email };
        });
  
        return userList;
      }
      return [];
    } catch (error) {
      console.error("omg");
      return [];
    }
  };
  
  export { fetchUsers };