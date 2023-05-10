import home from "./home.json";

export interface HomePageData {
  title: string;
  subtitle: {
    quote: string;
    author: string;
  };
  headerImage: string;
  history: {
    text: string;
    milestones: {
      year: string;
      event: string;
      eventImage: string;
    }[];
  };
}

export const HomeData: HomePageData = home;
