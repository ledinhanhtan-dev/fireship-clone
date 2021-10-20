class StringHelper {
  uppercaseFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

export const stringHelper = new StringHelper();
