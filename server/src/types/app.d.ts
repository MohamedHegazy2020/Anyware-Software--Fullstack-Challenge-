// Announcement types
export interface IAnnouncement {
  _id?: string;
  title: string;
  content: string;
  author: string;
  date: Date;
}

// Quiz and Question types
export interface IQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface IQuiz {
  _id?: string;
  title: string;
  description: string;
  questions: IQuestion[];
  createdAt: Date;
}
