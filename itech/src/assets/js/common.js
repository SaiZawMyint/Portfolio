import { Fit } from "@rive-app/canvas";
export const riveView = (animation, riveFile) => {
    let canvas = document.createElement('canvas');
    let animator = new riveFile.Animation(animation);
    animator.renderer = new riveFile.CanvasRenderer(canvas);
    animator.play();
}

export const isElementInViewport = (element) => {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0
    );
}

export const pressAction = (element) => {

}



export default {
    riveView,
    isElementInViewport
}