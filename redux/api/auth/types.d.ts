namespace AUTH {
  export type RegisterRequest = {
    email: string;
    password: string;
    name: string;
  };

  export type RegisterResponse = {
    success: boolean;
    message: string;
    accessToken: string;
    user: {
      id: number;
      email: string;
      name: string | null;
    };
  };

  export type LoginRequest = {
    email: string;
    password: string;
  };

  export type LoginResponse = {
    success: boolean;
    message: string;
    accessToken: string;
    user: {
      id: number;
      email: string;
      name: string | null;
    };
  };
}
