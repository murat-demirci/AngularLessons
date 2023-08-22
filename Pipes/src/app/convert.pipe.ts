import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, type: string): number {
    switch (type.toLowerCase()) {
      case "km":
        return value * 1.60934;
      case "m":
        return value * 1.60934*1000;
      case "cm":
        return value * 1.60934 * 1000_000;
      default:
        throw new Error("Boyle bir deger yok")
    }
  }

}
