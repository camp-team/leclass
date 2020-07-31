import { firestore } from 'firebase';

export interface Lesson {
  id: string;
  videoLink: string;
  content: string;
  createrId: string;
  date: firestore.Timestamp;
}