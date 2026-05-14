export type UserRole = "admin" | "customer";

export type AppUser = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
};

const USERS_KEY = "registeredUsers";
const CURRENT_USER_KEY = "currentUser";

const defaultAdmin: AppUser = {
  id: 1,
  fullName: "Faysal Helou",
  email: "heloufaysal4@gmail.com",
  password: "admin123",
  role: "admin",
};

export const getRegisteredUsers = (): AppUser[] => {
  const savedUsers = localStorage.getItem(USERS_KEY);

  if (!savedUsers) {
    return [defaultAdmin];
  }

  const parsedUsers = JSON.parse(savedUsers) as AppUser[];

  const hasDefaultAdmin = parsedUsers.some(
    (user) => user.email === defaultAdmin.email
  );

  if (!hasDefaultAdmin) {
    return [defaultAdmin, ...parsedUsers];
  }

  return parsedUsers;
};

export const saveRegisteredUsers = (users: AppUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const registerUser = (newUser: AppUser) => {
  const users = getRegisteredUsers();

  const emailAlreadyExists = users.some(
    (user) => user.email.toLowerCase() === newUser.email.toLowerCase()
  );

  if (emailAlreadyExists) {
    return {
      success: false,
      message: "This email is already registered",
    };
  }

  const updatedUsers = [...users, newUser];

  saveRegisteredUsers(updatedUsers);

  return {
    success: true,
    message: "Account created successfully",
  };
};

export const loginUser = (email: string, password: string) => {
  const users = getRegisteredUsers();

  const foundUser = users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password
  );

  if (!foundUser) {
    return {
      success: false,
      message: "Invalid email or password",
      user: null,
    };
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(foundUser));

  return {
    success: true,
    message: "Login successful",
    user: foundUser,
  };
};

export const getCurrentUser = (): AppUser | null => {
  const savedUser = localStorage.getItem(CURRENT_USER_KEY);

  if (!savedUser) {
    return null;
  }

  return JSON.parse(savedUser) as AppUser;
};

export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};