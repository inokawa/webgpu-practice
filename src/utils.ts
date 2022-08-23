export const getCanvas = (id: string): HTMLCanvasElement | null => {
  const canvas = document.getElementById(id);

  if (!canvas) {
    console.error(`There is no canvas with id ${id} on this page.`);
    return null;
  }

  return canvas as HTMLCanvasElement;
};

export const autoResizeCanvas = (canvas: HTMLCanvasElement) => {
  const expandFullScreen = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  expandFullScreen();
  // Resize screen when the browser has triggered the resize event
  window.addEventListener("resize", expandFullScreen);
};

export const raf = (onFrame: FrameRequestCallback) => {
  let id = requestAnimationFrame(frame);

  function frame(time: DOMHighResTimeStamp) {
    onFrame(time);
    id = requestAnimationFrame(frame);
  }
  return () => {
    cancelAnimationFrame(id);
  };
};
