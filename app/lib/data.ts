import { connectToDatabase } from "./utils";
import { User } from "./models";

export const fetchUser = async (id : Object) => {
    try {
      connectToDatabase();
      const user = await User.findById(id);
      return user;
    }
    catch (error) {
      throw new Error("Failed to fetch user");
    }
}
