import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(@Res() response) {
        return response.status(200).send('Listagem de cursos');
    }

    @Get(':id')
    findOne( @Param('id') id: string ){
        return `Curso #${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body('price') body) {
        return body;
    }
}
