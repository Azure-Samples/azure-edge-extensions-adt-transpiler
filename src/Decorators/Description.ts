/**
 * Decorator that adds a description to a class.
 * 
 * @param description - The description to be added.
 * @returns A decorator function.
 */
export function Description(description: string) {
    return function (target: any) {
        Reflect.defineMetadata('description', description, target.prototype);
    };
}
