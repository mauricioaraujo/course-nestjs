import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot( {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'cursonestjs',
    autoLoadEntities: true,
    synchronize: false, //Não deve ser usado (true) em produção, 
    // pois essa propriedade apaga para recriar dados.
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
