export interface Article {
  id: number;
  date: Date | null;
  imageUrl: string | null;
  category: string;
  title: string;
  preamble: string;
}
