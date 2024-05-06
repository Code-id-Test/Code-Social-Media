export interface UsersProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export interface UserPostsProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface UserAlbumsProps {
  id: number;
  userId: number;
  title: string;
}
