export interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
} 

export interface Announcement {
  author: string;
  content: string;
  date: string;
  title: string;
}

export interface Quiz {
  title: string;
  description: string;
  questions: Question[];
}

export interface Question {
  question: string;
  options: string[];
  answer: string;
}


