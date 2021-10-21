import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'embed',
})
export class EmbedPipe implements PipeTransform {
  transform(youtube: string): string {
    return 'https://www.youtube.com/embed/' + youtube;
  }
}
