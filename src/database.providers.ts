import { DataSource } from 'typeorm';
import { CreateCoursesTable1674495981604 } from './migrations/1674495981604-CreateCoursesTable';
import { CreateTagsTable1674496373707 } from './migrations/1674496373707-CreateTagsTable';
import { CreateCoursesTagsTable1674499052938 } from './migrations/1674499052938-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1674499498335 } from './migrations/1674499498335-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1674499984242 } from './migrations/1674499984242-AddTagsIdToCoursesTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
        const dataSource = new DataSource({
            type: 'postgres',
            host: 'db',
            port: 5432,
            username: 'postgres',
            password: 'docker',
            database: 'cursonestjs',
            entities: [__dirname + '/../**/*.entity.js'],
            synchronize: false, //Não deve ser usado (true) em produção, 
            // pois essa propriedade apaga para recriar dados.
        });
        
        return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'cursonestjs',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false, //Não deve ser usado (true) em produção, 
  // pois essa propriedade apaga para recriar dados.
  migrations: [
    CreateCoursesTable1674495981604,
    CreateTagsTable1674496373707,
    CreateCoursesTagsTable1674499052938,
    AddCoursesIdToCoursesTagsTable1674499498335,
    AddTagsIdToCoursesTagsTable1674499984242
  ]
});