export class User {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  isAdmin?: boolean;
  createdAt: Date;
  updatedAt: Date;
} 