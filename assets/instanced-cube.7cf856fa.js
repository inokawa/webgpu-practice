import{r as D}from"./index.5389b9e6.js";var N=1e-6,E=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var e=0,n=arguments.length;n--;)e+=arguments[n]*arguments[n];return Math.sqrt(e)});function F(){var e=new E(16);return E!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function L(e,n,a){var t=n[0],r=n[1],i=n[2],f=n[3],o=n[4],v=n[5],y=n[6],d=n[7],u=n[8],m=n[9],h=n[10],P=n[11],M=n[12],x=n[13],w=n[14],A=n[15],l=a[0],c=a[1],s=a[2],p=a[3];return e[0]=l*t+c*o+s*u+p*M,e[1]=l*r+c*v+s*m+p*x,e[2]=l*i+c*y+s*h+p*w,e[3]=l*f+c*d+s*P+p*A,l=a[4],c=a[5],s=a[6],p=a[7],e[4]=l*t+c*o+s*u+p*M,e[5]=l*r+c*v+s*m+p*x,e[6]=l*i+c*y+s*h+p*w,e[7]=l*f+c*d+s*P+p*A,l=a[8],c=a[9],s=a[10],p=a[11],e[8]=l*t+c*o+s*u+p*M,e[9]=l*r+c*v+s*m+p*x,e[10]=l*i+c*y+s*h+p*w,e[11]=l*f+c*d+s*P+p*A,l=a[12],c=a[13],s=a[14],p=a[15],e[12]=l*t+c*o+s*u+p*M,e[13]=l*r+c*v+s*m+p*x,e[14]=l*i+c*y+s*h+p*w,e[15]=l*f+c*d+s*P+p*A,e}function I(e,n,a){var t=a[0],r=a[1],i=a[2],f,o,v,y,d,u,m,h,P,M,x,w;return n===e?(e[12]=n[0]*t+n[4]*r+n[8]*i+n[12],e[13]=n[1]*t+n[5]*r+n[9]*i+n[13],e[14]=n[2]*t+n[6]*r+n[10]*i+n[14],e[15]=n[3]*t+n[7]*r+n[11]*i+n[15]):(f=n[0],o=n[1],v=n[2],y=n[3],d=n[4],u=n[5],m=n[6],h=n[7],P=n[8],M=n[9],x=n[10],w=n[11],e[0]=f,e[1]=o,e[2]=v,e[3]=y,e[4]=d,e[5]=u,e[6]=m,e[7]=h,e[8]=P,e[9]=M,e[10]=x,e[11]=w,e[12]=f*t+d*r+P*i+n[12],e[13]=o*t+u*r+M*i+n[13],e[14]=v*t+m*r+x*i+n[14],e[15]=y*t+h*r+w*i+n[15]),e}function W(e,n,a,t){var r=t[0],i=t[1],f=t[2],o=Math.hypot(r,i,f),v,y,d,u,m,h,P,M,x,w,A,l,c,s,p,U,B,b,C,O,R,V,g,S;return o<N?null:(o=1/o,r*=o,i*=o,f*=o,v=Math.sin(a),y=Math.cos(a),d=1-y,u=n[0],m=n[1],h=n[2],P=n[3],M=n[4],x=n[5],w=n[6],A=n[7],l=n[8],c=n[9],s=n[10],p=n[11],U=r*r*d+y,B=i*r*d+f*v,b=f*r*d-i*v,C=r*i*d-f*v,O=i*i*d+y,R=f*i*d+r*v,V=r*f*d+i*v,g=i*f*d-r*v,S=f*f*d+y,e[0]=u*U+M*B+l*b,e[1]=m*U+x*B+c*b,e[2]=h*U+w*B+s*b,e[3]=P*U+A*B+p*b,e[4]=u*C+M*O+l*R,e[5]=m*C+x*O+c*R,e[6]=h*C+w*O+s*R,e[7]=P*C+A*O+p*R,e[8]=u*V+M*g+l*S,e[9]=m*V+x*g+c*S,e[10]=h*V+w*g+s*S,e[11]=P*V+A*g+p*S,n!==e&&(e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]),e)}function _(e,n,a,t,r){var i=1/Math.tan(n/2),f;return e[0]=i/a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=i,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,r!=null&&r!==1/0?(f=1/(t-r),e[10]=(r+t)*f,e[14]=2*r*t*f):(e[10]=-1,e[14]=-2*t),e}var j=_;function Y(){var e=new E(3);return E!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function G(e,n,a){var t=new E(3);return t[0]=e,t[1]=n,t[2]=a,t}(function(){var e=Y();return function(n,a,t,r,i,f){var o,v;for(a||(a=3),t||(t=0),r?v=Math.min(r*a+t,n.length):v=n.length,o=t;o<v;o+=a)e[0]=n[o],e[1]=n[o+1],e[2]=n[o+2],i(e,e,f),n[o]=e[0],n[o+1]=e[1],n[o+2]=e[2];return n}})();const H=`struct Uniforms {
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
}`,k=`@fragment
fn main(
  @location(0) fragUV: vec2<f32>,
  @location(1) fragPosition: vec4<f32>
) -> @location(0) vec4<f32> {
  return fragPosition;
}`,X=4*10,$=0,J=4*8,K=36,q=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0]),Z=async(e,n)=>{const t=await(await navigator.gpu.requestAdapter()).requestDevice(),r=window.devicePixelRatio||1,i=[n.clientWidth*r,n.clientHeight*r],f=navigator.gpu.getPreferredCanvasFormat();e.configure({device:t,size:i,format:f,alphaMode:"opaque"});const o=t.createBuffer({size:q.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(o.getMappedRange()).set(q),o.unmap();const v=t.createRenderPipeline({layout:"auto",vertex:{module:t.createShaderModule({code:H}),entryPoint:"main",buffers:[{arrayStride:X,attributes:[{shaderLocation:0,offset:$,format:"float32x4"},{shaderLocation:1,offset:J,format:"float32x2"}]}]},fragment:{module:t.createShaderModule({code:k}),entryPoint:"main",targets:[{format:f}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),y=t.createTexture({size:i,format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),d=4,u=4,m=d*u,h=16,P=4*h,M=m*P,x=t.createBuffer({size:M,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),w=t.createBindGroup({layout:v.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:x}}]}),A=i[0]/i[1],l=F();j(l,2*Math.PI/5,A,1,100);const c=new Array(m),s=new Float32Array(h*m),p=4;let U=0;for(let V=0;V<d;V++)for(let g=0;g<u;g++)c[U]=F(),I(c[U],c[U],G(p*(V-d/2+.5),p*(g-u/2+.5),0)),U++;const B=F();I(B,B,G(0,0,-12));const b=F();function C(){const V=Date.now()/1e3;let g=0,S=0;for(let T=0;T<d;T++)for(let z=0;z<u;z++)W(b,c[S],1,G(Math.sin((T+.5)*V),Math.cos((z+.5)*V),0)),L(b,B,b),L(b,l,b),s.set(b,g),S++,g+=h}const O={colorAttachments:[{view:void 0,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:y.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},R=D(()=>{C(),t.queue.writeBuffer(x,0,s.buffer,s.byteOffset,s.byteLength),O.colorAttachments[0].view=e.getCurrentTexture().createView();const V=t.createCommandEncoder(),g=V.beginRenderPass(O);g.setPipeline(v),g.setBindGroup(0,w),g.setVertexBuffer(0,o),g.draw(K,m,0,0),g.end(),t.queue.submit([V.finish()])});return()=>{R()}};export{Z as init};
