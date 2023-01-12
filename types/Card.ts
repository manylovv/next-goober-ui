export interface Card {
  id: string;
  icon: {
    path: string;
    alt: string;
    width: number;
    height: number;
  };
  label: string;
  value: string;
}
