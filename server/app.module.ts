import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      // exclude: ['/api*'],
    }),
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/client/browser'),
    }),
  ],
})
export class AppModule {}
