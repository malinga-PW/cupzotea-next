declare module "circletype" {
    export default class CircleType {
        constructor(element: HTMLElement | SVGTextElement);
        radius(value: number): this;
        dir(value: number): this;
    }
}
