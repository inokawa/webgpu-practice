import{r as s}from"./index.10c5fc5c.js";const d=`@vertex
fn main(
  @builtin(vertex_index) VertexIndex : u32
) -> @builtin(position) vec4<f32> {
  var pos = array<vec2<f32>, 3>(
    vec2<f32>(0.0, 0.5),
    vec2<f32>(-0.5, -0.5),
    vec2<f32>(0.5, -0.5)
  );

  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);
}`,u=`@fragment
fn main() -> @location(0) vec4<f32> {
  return vec4<f32>(1.0, 0.0, 0.0, 1.0);
}`,f=async n=>{const e=await(await navigator.gpu.requestAdapter()).requestDevice(),r=navigator.gpu.getPreferredCanvasFormat();n.configure({device:e,format:r,alphaMode:"opaque"});const o=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:d}),entryPoint:"main"},fragment:{module:e.createShaderModule({code:u}),entryPoint:"main",targets:[{format:r}]},primitive:{topology:"triangle-list"}}),i=s(()=>{const a=e.createCommandEncoder(),c={colorAttachments:[{view:n.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},t=a.beginRenderPass(c);t.setPipeline(o),t.draw(3,1,0,0),t.end(),e.queue.submit([a.finish()])});return()=>{i()}};export{f as init};
