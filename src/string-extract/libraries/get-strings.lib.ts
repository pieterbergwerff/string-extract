export class GetStringsLibrary {
  #output: string[] = [];

  constructor(...input: unknown[]) {
    this.#parseInput(input);
  }

  public get output() {
    return this.#output.join(" ").trim();
  }

  #parseInput(...input: unknown[]) {
    if (input.length) {
      for (let i = 0; i < input.length; i++) {
        const value = input[i];
        if (typeof value === "string") {
          this.#string(value);
        } else if (Array.isArray(value) && value.length) {
          this.#array(value);
        } else if (value?.constructor === Object) {
          this.#object(value);
        } else if (typeof value === "number") {
          this.#string(String(value));
        } else if (this.#isDate(value)) {
          this.#string(value.toString());
        } else if (typeof value === "boolean") {
          this.#string(String(value));
        } else if (typeof value === "symbol") {
          this.#string(value.toString());
        } else if (typeof value === "bigint") {
          this.#string(value.toString());
        }
      }
    }
  }

  #array(arr: unknown[]) {
    for (let i = 0; i < arr.length; i++) {
      this.#parseInput(arr[i]);
    }
  }

  #object(obj: object) {
    Object.keys(obj).forEach((key) => {
      const value = obj[key as keyof object];
      this.#parseInput(key, value);
    });
  }

  #string(str: string) {
    this.#output.push(str.trim());
  }

  #isDate(input: unknown): input is Date {
    return input instanceof Date;
  }
}

export default GetStringsLibrary;
