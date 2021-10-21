class StringHelper {
  uppercaseFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  generateDashCase(str: string): string {
    return str.toLocaleLowerCase().split(' ').join('-');
  }
}

export const stringHelper = new StringHelper();
