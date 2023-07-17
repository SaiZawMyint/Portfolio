const riveView = (animation, riveFile) => {
    const canvas = document.createElement('canvas');
    const animation = new riveFile.Animation(animation);
    animation.renderer = new riveFile.CanvasRenderer(canvas);
    animation.play();
}