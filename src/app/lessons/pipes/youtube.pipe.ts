import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youtube',
})
export class YoutubePipe implements PipeTransform {
  transform(youtube: string): string {
    return 'https://www.youtube.com/embed/' + youtube;
  }
}
