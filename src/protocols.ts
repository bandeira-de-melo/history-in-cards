type AppError = {
  name: string;
  message: string;
};

type Moment = {
  title: string;
  century: number;
  locations?: string;
  description: string;
  tumbnail: string;
  tags?: string[];
  pictures: string[];
  author: string;
}

export  {
  AppError,
  Moment,
}

