export function Relationship(relation: string) {
    return function (target: any, propertyKey: string) {
        const type = Reflect.getMetadata('design:type', target, propertyKey);
        const properties = Reflect.getMetadata('contents', target) || [];
        properties.push(
            {
                relationName: relation,
                propertyName: propertyKey,
                type: type.name
            });
        Reflect.defineMetadata('contents', properties, target);
    };
}