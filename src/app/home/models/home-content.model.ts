import { Course } from '@core/models/course.model';
import { Lesson } from '@core/models/lesson.model';

export interface HomeContent {
  newCourses: Course[];
  hotCourses: Course[];
  fullStackCourses: Course[];
  singleCourse: Course;
  lessons: Lesson[];
}
