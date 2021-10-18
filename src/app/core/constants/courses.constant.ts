import { Course } from '../models/course.model';

export const NEW_COURSES: Course[] = [
  {
    name: 'React Firebase Full Course',
    slug: 'react-next-firebase',
    image: 'https://fireship.io/courses/react-next-firebase/img/featured.jpg',
    desc: 'Build a fullstack server-rendered webapp with React, Next.js, and Firebase.',
  },
  {
    name: 'Stripe Payments Master Course',
    slug: 'stripe-js',
    image: 'https://fireship.io/courses/stripe-js/img/featured.jpg',
    desc: 'Build a fullstack payment solution with Node.js and React.',
  },
];

export const DOING_COURSES: Course[] = [
  {
    name: 'Flutter Firebase App From Scratch',
    slug: 'flutter-firebase',
    image: 'https://fireship.io/courses/flutter-firebase/img/featured.jpg',
    desc: 'Build a complex production-ready app from scratch with Flutter and Firebase.',
  },
  {
    name: 'Angular 9 Firebase Project Course',
    slug: 'angular',
    image: 'https://fireship.io/courses/angular/img/featured.jpg',
    desc: 'Build a high-performance progressive web application (PWA) with Angular & Firebase.',
  },
];

export const FULLSTACK_COURSES: Course[] = [
  {
    name: 'Firestore Data Modeling Course',
    slug: 'firestore-data-modeling',
    image: 'https://fireship.io/courses/flutter-firebase/img/featured.jpg',
    desc: 'Learn how to model data and optimize queries with Cloud Firestore.',
  },
  {
    name: 'Cloud Functions Master Course',
    slug: 'cloud-functions',
    image: 'https://fireship.io/courses/cloud-functions/img/featured.jpg',
    desc: 'Master the fundamentals of serverless with Firebase Cloud Functions by building seven different microservices from scratch.',
  },
];

export const FIREBASE_COURSE: Course = {
  name: 'Firebase - The Basics',
  slug: 'firebase-quickstart',
  image: 'https://fireship.io/lessons/firebase-quickstart/img/featured.jpg',
  desc: 'Learn the fundamental concepts needed to start building serious apps with Firebase.',
};
