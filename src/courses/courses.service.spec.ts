import { NotFoundException } from '@nestjs/common';
import { CoursesService } from './courses.service';



describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService();
    id = ''; //Precisa informar um uuid válido que pode ser observado no insomnia
    date = new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  // describe('findOne', () => {
  //   describe('buscar curso pelo ID', () => {
  //     it('deve retornar o objeto Course', async () => {
  //       const courseId = '1';
  //       const expectedCourse = {};
  //       courseRepository.findOne.mockReturnValue(expectedCourse);
  //       const course = await service.findOne(courseId);
  //       expect(course).toEqual(expectedCourse);
  //     });

  //     it('deve retornar um NotFoundException', async () => {
  //       const courseId = '1';
  //       courseRepository.findOne.mockReturnValue(undefined);

  //       try {
  //         await service.findOne(courseId);
  //       } catch (error) {
  //         expect(error).toBeInstanceOf(NotFoundException);
  //         expect(error.message).toEqual(`Course ID ${courseId} not found`);
  //       }
  //     });
  //   });
  // });
});