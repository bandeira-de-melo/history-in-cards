type AppError = {
  name: string;
  message: string;
};

type Moment = {
  title: string;
  century: number;
  location: string;// mudar no banco nome e not null
  description: string;
  thumbnail_url: string;// mudar no banco nome
  author: string;
}

export  {
  AppError,
  Moment,
}

