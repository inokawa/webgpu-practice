import{c as g,a as M,b as y,d as B,v as U,e as i,p as O,f as S,t as C,g as h,r as G,m as R}from"./cube.917902bf.js";import{r as T}from"./index.ee58b084.js";const A=`struct Uniforms {
  modelViewProjectionMatrix : mat4x4<f32>,
}
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct VertexOutput {
  @builtin(position) Position : vec4<f32>,
  @location(0) fragUV : vec2<f32>,
  @location(1) fragPosition: vec4<f32>,
}

@vertex
fn main(
  @location(0) position : vec4<f32>,
  @location(1) uv : vec2<f32>
) -> VertexOutput {
  var output : VertexOutput;
  output.Position = uniforms.modelViewProjectionMatrix * position;
  output.fragUV = uv;
  output.fragPosition = 0.5 * (position + vec4<f32>(1.0, 1.0, 1.0, 1.0));
  return output;
}`,q=async(s,n)=>{const e=await(await navigator.gpu.requestAdapter()).requestDevice(),u=window.devicePixelRatio||1,c=[n.clientWidth*u,n.clientHeight*u],f=navigator.gpu.getPreferredCanvasFormat();s.configure({device:e,size:c,format:f,alphaMode:"opaque"});const a=e.createBuffer({size:g.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(a.getMappedRange()).set(g),a.unmap();const p=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:A}),entryPoint:"main",buffers:[{arrayStride:M,attributes:[{shaderLocation:0,offset:y,format:"float32x4"},{shaderLocation:1,offset:B,format:"float32x2"}]}]},fragment:{module:e.createShaderModule({code:U}),entryPoint:"main",targets:[{format:f}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),v=e.createTexture({size:c,format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),x=4*16,d=e.createBuffer({size:x,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),P=e.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:d}}]}),l={colorAttachments:[{view:void 0,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:v.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},b=n.width/n.height,m=i();O(m,2*Math.PI/5,b,1,100);function V(){const t=i();C(t,t,h(0,0,-4));const o=Date.now()/1e3;G(t,t,1,h(Math.sin(o),Math.cos(o),0));const r=i();return R(r,m,t),r}const w=T(()=>{const t=V();e.queue.writeBuffer(d,0,t.buffer,t.byteOffset,t.byteLength),l.colorAttachments[0].view=s.getCurrentTexture().createView();const o=e.createCommandEncoder(),r=o.beginRenderPass(l);r.setPipeline(p),r.setBindGroup(0,P),r.setVertexBuffer(0,a),r.draw(S,1,0,0),r.end(),e.queue.submit([o.finish()])});return()=>{w()}};export{q as init};
