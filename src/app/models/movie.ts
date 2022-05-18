export interface Movie {
  id?: number;
  title: string;
  year: string;
  country: string;
  director: string;
  category: string;
  plot: string;
  poster: string;
  imdbRating: number;
}

export interface Users {
  email: string;
  id: number;
  name: string;
  password: string;
}
