import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { AppServerModule } from '../src/main.server';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { configValidationSchema } from './config/config.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonsModule } from './lessons/lessons.module';
import { TagsModule } from './tags/tags.module';
import { ContributorsModule } from './contributors/contributors.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: configValidationSchema,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const isProduction = configService.get('STAGE') === 'prod';

        return {
          ssl: isProduction,
          extra: { ssl: isProduction ? { rejectUnauthorized: false } : null },
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/client/browser'),
    }),
    ContributorsModule,
    LessonsModule,
    TagsModule,
  ],
})
export class AppModule {}

(() => {
  console.log(join(__dirname, 'public'));
})();
