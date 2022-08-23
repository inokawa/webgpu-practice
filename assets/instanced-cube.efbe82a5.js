import{c as S,a as F,b as q,d as I,v as W,e as p,p as j,t as O,g as v,f as N,r as _,m as A}from"./cube.917902bf.js";import{r as H}from"./index.ee58b084.js";const k=`struct Uniforms {
  modelViewProjectionMatrix : array<mat4x4<f32>, 16>,
}

@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct VertexOutput {
  @builtin(position) Position : vec4<f32>,
  @location(0) fragUV : vec2<f32>,
  @location(1) fragPosition: vec4<f32>,
}

@vertex
fn main(
  @builtin(instance_index) instanceIdx : u32,
  @location(0) position : vec4<f32>,
  @location(1) uv : vec2<f32>
) -> VertexOutput {
  var output : VertexOutput;
  output.Position = uniforms.modelViewProjectionMatrix[instanceIdx] * position;
  output.fragUV = uv;
  output.fragPosition = 0.5 * (position + vec4<f32>(1.0, 1.0, 1.0, 1.0));
  return output;
}`,K=async(h,P)=>{const t=await(await navigator.gpu.requestAdapter()).requestDevice(),b=window.devicePixelRatio||1,n=[P.clientWidth*b,P.clientHeight*b],y=navigator.gpu.getPreferredCanvasFormat();h.configure({device:t,size:n,format:y,alphaMode:"opaque"});const d=t.createBuffer({size:S.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(d.getMappedRange()).set(S),d.unmap();const w=t.createRenderPipeline({layout:"auto",vertex:{module:t.createShaderModule({code:k}),entryPoint:"main",buffers:[{arrayStride:F,attributes:[{shaderLocation:0,offset:q,format:"float32x4"},{shaderLocation:1,offset:I,format:"float32x2"}]}]},fragment:{module:t.createShaderModule({code:W}),entryPoint:"main",targets:[{format:y}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),G=t.createTexture({size:n,format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),a=4,i=4,s=a*i,l=16,R=4*l,T=s*R,V=t.createBuffer({size:T,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),E=t.createBindGroup({layout:w.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:V}}]}),z=n[0]/n[1],M=p();j(M,2*Math.PI/5,z,1,100);const c=new Array(s),u=new Float32Array(l*s),B=4;let f=0;for(let r=0;r<a;r++)for(let e=0;e<i;e++)c[f]=p(),O(c[f],c[f],v(B*(r-a/2+.5),B*(e-i/2+.5),0)),f++;const m=p();O(m,m,v(0,0,-12));const o=p();function L(){const r=Date.now()/1e3;let e=0,C=0;for(let g=0;g<a;g++)for(let x=0;x<i;x++)_(o,c[C],1,v(Math.sin((g+.5)*r),Math.cos((x+.5)*r),0)),A(o,m,o),A(o,M,o),u.set(o,e),C++,e+=l}const U={colorAttachments:[{view:void 0,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:G.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},D=H(()=>{L(),t.queue.writeBuffer(V,0,u.buffer,u.byteOffset,u.byteLength),U.colorAttachments[0].view=h.getCurrentTexture().createView();const r=t.createCommandEncoder(),e=r.beginRenderPass(U);e.setPipeline(w),e.setBindGroup(0,E),e.setVertexBuffer(0,d),e.draw(N,s,0,0),e.end(),t.queue.submit([r.finish()])});return()=>{D()}};export{K as init};
