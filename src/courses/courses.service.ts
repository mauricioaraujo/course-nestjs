import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: "Fundamentos do framework NestJS",
            description: "Fundamentos do framework NestJS",
            tags: ["node.js", "javascript", "nestjs"],
        },
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        const course = this.courses.find((course) => course.id == Number(id));
        
        if (!course) {
            throw new HttpException(
                `Course #${id} not found`, 
                HttpStatus.NOT_FOUND,
                )
        }

        return course;
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
        return createCourseDto;
    }

    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id == Number(id),
        );

        this.courses[indexCourse] = updateCourseDto;
    }

    remove( id: string) {
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id == Number(id),
        );

        if ( indexCourse >= 0) {
            this.courses.splice( indexCourse, 1);
        }
    }
}
