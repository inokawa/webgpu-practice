import triangleVertWGSL from "../shaders/triangle.vert.wgsl?raw";
import redFragWGSL from "../shaders/red.frag.wgsl?raw";
import { raf } from "../utils";

export const init = async (context: GPUCanvasContext) => {
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter!.requestDevice();

  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
  context.configure({
    device,
    format: presentationFormat,
    alphaMode: "opaque",
  });

  const pipeline = device.createRenderPipeline({
    layout: "auto",
    vertex: {
      module: device.createShaderModule({
        code: triangleVertWGSL,
      }),
      entryPoint: "main",
    },
    fragment: {
      module: device.createShaderModule({
        code: redFragWGSL,
      }),
      entryPoint: "main",
      targets: [
        {
          format: presentationFormat,
        },
      ],
    },
    primitive: {
      topology: "triangle-list",
    },
  });

  const cancelRaf = raf(() => {
    const commandEncoder = device.createCommandEncoder();
    const textureView = context.getCurrentTexture().createView();

    const renderPassDescriptor: GPURenderPassDescriptor = {
      colorAttachments: [
        {
          view: textureView,
          clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
          loadOp: "clear",
          storeOp: "store",
        },
      ],
    };

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.draw(3, 1, 0, 0);
    passEncoder.end();

    device.queue.submit([commandEncoder.finish()]);
  });

  return () => {
    cancelRaf();
  };
};
