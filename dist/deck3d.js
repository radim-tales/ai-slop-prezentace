(()=>{var Dd=0,Wc=1,Nd=2;var zs=1,Ud=2,Tr=3,Si=0,Mn=1,rn=2,Yi=0,Ar=1,Sa=2,Xc=3,qc=4,Fd=5;var ks=100,Od=101,Bd=102,zd=103,kd=104,Hd=200,Gd=201,Vd=202,Wd=203,Yc=204,Zc=205,Xd=206,qd=207,Yd=208,Zd=209,Kd=210,Jd=211,$d=212,jd=213,Qd=214,Mo=0,So=1,bo=2,ur=3,Eo=4,wo=5,To=6,Ao=7,Yo=0,ef=1,tf=2,bi=0,Kc=1,Jc=2,$c=3,jc=4,Qc=5,eh=6,th=7,Uc="attached",nf="detached",nh=300,Hs=301,Rr=302,Zo=303,Ko=304,Tn=1e3,zn=1001,dr=1002,Yt=1003,Jo=1004;var Gs=1005;var un=1006,Cr=1007;var Vn=1008;var Wn=1009,ih=1010,sh=1011,Ir=1012,$o=1013,hi=1014,Jn=1015,ui=1016,jo=1017,Qo=1018,Vs=1020,rh=35902,ah=35899,oh=1021,lh=1022,ei=1023,Bi=1026,Zi=1027,el=1028,tl=1029,hs=1030,nl=1031;var il=1033,ba=33776,Ea=33777,wa=33778,Ta=33779,sl=35840,rl=35841,al=35842,ol=35843,ll=36196,cl=37492,hl=37496,ul=37488,dl=37489,Aa=37490,fl=37491,pl=37808,ml=37809,gl=37810,xl=37811,_l=37812,yl=37813,vl=37814,Ml=37815,Sl=37816,bl=37817,El=37818,wl=37819,Tl=37820,Al=37821,Rl=36492,Cl=36494,Il=36495,Ll=36283,Pl=36284,Ra=36285,Dl=36286,sf=2200,rf=2201,Nl=2202,Es=2300,ws=2301,yo=2302,Fc=2303,Ms=2400,Ss=2401,Qr=2402,Ul=2500,af=2501,ch=0,Ca=1,Lr=2,of=3200;var Ia=0,lf=1,Ki="",qt="srgb",Nn="srgb-linear",ea="linear",Bt="srgb";var vo=7680;var cf=519,hf=512,uf=513,df=514,hh=515,ff=516,pf=517,uh=518,dh=519,fh=35044;var ph="300 es",Qn=2e3,fr=2001;function bm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Em(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mf(){let i=pr("canvas");return i.style.display="block",i}var Yu={},mr=null;function ta(...i){let e="THREE."+i.shift();mr?mr("log",e,...i):console.log(e,...i)}function gf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=gf(i);let e="THREE."+i.shift();if(mr)mr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function lt(...i){i=gf(i);let e="THREE."+i.shift();if(mr)mr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function bs(...i){let e=i.join(" ");e in Yu||(Yu[e]=!0,je(...i))}function xf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _f={[Mo]:Mo,[bo]:To,[Eo]:Eo,[ur]:wo,[So]:So,[To]:bo,[Ao]:Ao,[wo]:ur},li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=1234567,$r=Math.PI/180,Ts=180/Math.PI;function Ei(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function mh(i,e){return(i%e+e)%e}function wm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Tm(i,e,t){return i!==e?(t-i)/(e-i):0}function jr(i,e,t){return(1-t)*i+t*e}function Am(i,e,t,n){return jr(i,e,1-Math.exp(-t*n))}function Rm(i,e=1){return e-Math.abs(mh(i,e*2)-e)}function Cm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Im(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pm(i,e){return i+Math.random()*(e-i)}function Dm(i){return i*(.5-Math.random())}function Nm(i){i!==void 0&&(Zu=i);let e=Zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Um(i){return i*$r}function Fm(i){return i*Ts}function Om(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Bm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xh(i,e){if(e.constructor===Float32Array)return i;let t=Fl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function _h(i,e){if(e.constructor===Float32Array)return i;let t=Fl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ol={DEG2RAD:$r,RAD2DEG:Ts,generateUUID:Ei,clamp:vt,euclideanModulo:mh,mapLinear:wm,inverseLerp:Tm,lerp:jr,damp:Am,pingpong:Rm,smoothstep:Cm,smootherstep:Im,randInt:Lm,randFloat:Pm,randFloatSpread:Dm,seededRandom:Nm,degToRad:Um,radToDeg:Fm,isPowerOfTwo:Om,ceilPowerOfTwo:Bm,floorPowerOfTwo:gh,setQuaternionFromProperEuler:zm,normalize:_h,denormalize:xh},bh=class bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bh.prototype.isVector2=!0;var ot=bh,Pt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*v;g<0&&(d=-d,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){let _=Math.acos(g),S=Math.sin(_);p=Math.sin(p*_)/S,o=Math.sin(o*_)/S,l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+v*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Eh=class Eh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ku.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eh.prototype.isVector3=!0;var z=Eh,uc=new z,Ku=new Pt,wh=class wh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],_=s[1],S=s[4],y=s[7],E=s[2],M=s[5],x=s[8];return r[0]=a*v+o*_+l*E,r[3]=a*g+o*S+l*M,r[6]=a*p+o*y+l*x,r[1]=c*v+h*_+u*E,r[4]=c*g+h*S+u*M,r[7]=c*p+h*y+u*x,r[2]=d*v+f*_+m*E,r[5]=d*g+f*S+m*M,r[8]=d*p+f*y+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dc.makeScale(e,t)),this}rotate(e){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wh.prototype.isMatrix3=!0;var ht=wh,dc=new ht,Ju=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function km(){let i={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Bt&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Bt&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Nn]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:Ju,fromXYZ:$u,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:Ju,fromXYZ:$u,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var xt=km();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Js,Ro=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Js===void 0&&(Js=pr("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hm=0,gr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fc(s[a].image)):r.push(fc(s[a]))}else r=fc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var Gm=0,pc=new z,dn=class i extends li{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=zn,s=zn,r=un,a=Vn,o=ei,l=Wn,c=i.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Ei(),this.name="",this.source=new gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=nh;dn.DEFAULT_ANISOTROPY=1;var Th=class Th{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(f+1)/2,E=(p+1)/2,M=(h+d)/4,x=(u+v)/4,b=(m+g)/4;return S>y&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=M/n,r=x/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=b/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=b/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Th.prototype.isVector4=!0;var zt=Th,Co=class extends li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new dn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new gr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends Co{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},na=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Io=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qo=class qo{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,v,g)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),a=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vm,e,Wm)}lookAt(e,t,n){let s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),ji.crossVectors(n,qn),ji.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),ji.crossVectors(n,qn)),ji.normalize(),Ya.crossVectors(qn,ji),s[0]=ji.x,s[4]=Ya.x,s[8]=qn.x,s[1]=ji.y,s[5]=Ya.y,s[9]=qn.y,s[2]=ji.z,s[6]=Ya.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],_=n[3],S=n[7],y=n[11],E=n[15],M=s[0],x=s[4],b=s[8],I=s[12],C=s[1],U=s[5],X=s[9],j=s[13],D=s[2],O=s[6],Z=s[10],q=s[14],B=s[3],k=s[7],Y=s[11],ie=s[15];return r[0]=a*M+o*C+l*D+c*B,r[4]=a*x+o*U+l*O+c*k,r[8]=a*b+o*X+l*Z+c*Y,r[12]=a*I+o*j+l*q+c*ie,r[1]=h*M+u*C+d*D+f*B,r[5]=h*x+u*U+d*O+f*k,r[9]=h*b+u*X+d*Z+f*Y,r[13]=h*I+u*j+d*q+f*ie,r[2]=m*M+v*C+g*D+p*B,r[6]=m*x+v*U+g*O+p*k,r[10]=m*b+v*X+g*Z+p*Y,r[14]=m*I+v*j+g*q+p*ie,r[3]=_*M+S*C+y*D+E*B,r[7]=_*x+S*U+y*O+E*k,r[11]=_*b+S*X+y*Z+E*Y,r[15]=_*I+S*j+y*q+E*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15],_=l*f-c*d,S=o*f-c*u,y=o*d-l*u,E=a*f-c*h,M=a*d-l*h,x=a*u-o*h;return t*(v*_-g*S+p*y)-n*(m*_-g*E+p*M)+s*(m*S-v*E+p*x)-r*(m*y-v*M+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],_=t*o-n*a,S=t*l-s*a,y=t*c-r*a,E=n*l-s*o,M=n*c-r*o,x=s*c-r*l,b=h*v-u*m,I=h*g-d*m,C=h*p-f*m,U=u*g-d*v,X=u*p-f*v,j=d*p-f*g,D=_*j-S*X+y*U+E*C-M*I+x*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return e[0]=(o*j-l*X+c*U)*O,e[1]=(s*X-n*j-r*U)*O,e[2]=(v*x-g*M+p*E)*O,e[3]=(d*M-u*x-f*E)*O,e[4]=(l*C-a*j-c*I)*O,e[5]=(t*j-s*C+r*I)*O,e[6]=(g*y-m*x-p*S)*O,e[7]=(h*x-d*y+f*S)*O,e[8]=(a*X-o*C+c*b)*O,e[9]=(n*C-t*X-r*b)*O,e[10]=(m*M-v*y+p*_)*O,e[11]=(u*y-h*M-f*_)*O,e[12]=(o*I-a*U-l*b)*O,e[13]=(t*U-n*I+s*b)*O,e[14]=(v*S-m*E-g*_)*O,e[15]=(h*E-u*S+d*_)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,v=a*h,g=a*u,p=o*u,_=l*c,S=l*h,y=l*u,E=n.x,M=n.y,x=n.z;return s[0]=(1-(v+p))*E,s[1]=(f+y)*E,s[2]=(m-S)*E,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(d+p))*M,s[6]=(g+_)*M,s[7]=0,s[8]=(m+S)*x,s[9]=(g-_)*x,s[10]=(1-(d+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),l=$s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),si.copy(this);let c=1/a,h=1/o,u=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,t.setFromRotationMatrix(si),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Qn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===Qn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===fr)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Qn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===Qn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===fr)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};qo.prototype.isMatrix4=!0;var Qe=qo,$s=new z,si=new Qe,Vm=new z(0,0,0),Wm=new z(1,1,1),ji=new z,Ya=new z,qn=new z,ju=new Qe,Qu=new Pt,cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var ia=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xm=0,ed=new z,js=new Pt,Li=new Qe,Za=new z,Gr=new z,qm=new z,Ym=new Pt,td=new z(1,0,0),nd=new z(0,1,0),id=new z(0,0,1),sd={type:"added"},Zm={type:"removed"},Qs={type:"childadded",child:null},mc={type:"childremoved",child:null},It=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new cn,n=new Pt,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ht}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(id,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Gr,Za,this.up):Li.lookAt(Za,Gr,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Li),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm),mc.child=e,this.dispatchEvent(mc),mc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new z(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Km={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function gc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=mh(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=gc(a,r,e+1/3),this.g=gc(a,r,e),this.b=gc(a,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return xt.workingToColorSpace(wn.copy(this),e),Math.round(vt(wn.r*255,0,255))*65536+Math.round(vt(wn.g*255,0,255))*256+Math.round(vt(wn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=qt){xt.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Ka);let n=jr(Qi.h,Ka.h,t),s=jr(Qi.s,Ka.s,t),r=jr(Qi.l,Ka.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Ee;Ee.NAMES=yf;var sa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},As=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ri=new z,Pi=new z,xc=new z,Di=new z,er=new z,tr=new z,rd=new z,_c=new z,yc=new z,vc=new z,Mc=new zt,Sc=new zt,bc=new zt,ss=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ri.subVectors(e,t),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ri.subVectors(s,t),Pi.subVectors(n,t),xc.subVectors(e,t);let a=ri.dot(ri),o=ri.dot(Pi),l=ri.dot(xc),c=Pi.dot(Pi),h=Pi.dot(xc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Mc.setScalar(0),Sc.setScalar(0),bc.setScalar(0),Mc.fromBufferAttribute(e,t),Sc.fromBufferAttribute(e,n),bc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Mc,r.x),a.addScaledVector(Sc,r.y),a.addScaledVector(bc,r.z),a}static isFrontFacing(e,t,n,s){return ri.subVectors(n,t),Pi.subVectors(e,t),ri.cross(Pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ri.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;er.subVectors(s,n),tr.subVectors(r,n),_c.subVectors(e,n);let l=er.dot(_c),c=tr.dot(_c);if(l<=0&&c<=0)return t.copy(n);yc.subVectors(e,s);let h=er.dot(yc),u=tr.dot(yc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(er,a);vc.subVectors(e,r);let f=er.dot(vc),m=tr.dot(vc);if(m>=0&&f<=m)return t.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(tr,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return rd.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(rd,o);let p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Un=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(r,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ja.copy(n.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),$a.subVectors(this.max,Vr),nr.subVectors(e.a,Vr),ir.subVectors(e.b,Vr),sr.subVectors(e.c,Vr),es.subVectors(ir,nr),ts.subVectors(sr,ir),xs.subVectors(nr,sr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-xs.z,xs.y,es.z,0,-es.x,ts.z,0,-ts.x,xs.z,0,-xs.x,-es.y,es.x,0,-ts.y,ts.x,0,-xs.y,xs.x,0];return!Ec(t,nr,ir,sr,$a)||(t=[1,0,0,0,1,0,0,0,1],!Ec(t,nr,ir,sr,$a))?!1:(ja.crossVectors(es,ts),t=[ja.x,ja.y,ja.z],Ec(t,nr,ir,sr,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ni=[new z,new z,new z,new z,new z,new z,new z,new z],ai=new z,Ja=new Un,nr=new z,ir=new z,sr=new z,es=new z,ts=new z,xs=new z,Vr=new z,$a=new z,ja=new z,_s=new z;function Ec(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_s.fromArray(i,r);let o=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ln=new z,Qa=new ot,Jm=0,Tt=class extends li{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=e!==void 0?Fl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):_h(e,this.array)}};var ra=class extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var aa=class extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},$m=new Un,Wr=new z,wc=new z,kn=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$m.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);let t=Wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(wc)),this.expandByPoint(Wr.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jm=0,jn=new Qe,Tc=new It,rr=new z,Yn=new Un,Xr=new Un,xn=new z,Rt=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?aa:ra)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Tc.lookAt(e),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(Yn.min,Xr.min),Yn.expandByPoint(xn),xn.addVectors(Yn.max,Xr.max),Yn.expandByPoint(xn)):(Yn.expandByPoint(Xr.min),Yn.expandByPoint(Xr.max))}Yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xn.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),xn.add(rr)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Tt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new z,l[I]=new z;let h=new z,u=new z,d=new z,f=new ot,m=new ot,v=new ot,g=new z,p=new z;function _(I,C,U){c[I]=c[C]=c[U]=1,h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,U),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,C),v.fromBufferAttribute(r,U),u.sub(h),d.sub(h),m.sub(f),v.sub(f);let X=1/(m.x*v.y-v.x*m.y);isFinite(X)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(X),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(X),o[I].add(g),o[C].add(g),o[U].add(g),l[I].add(p),l[C].add(p),l[U].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,C=S.length;I<C;++I){let U=S[I],X=U.start,j=U.count;for(let D=X,O=X+j;D<O;D+=3)_(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let y=new z,E=new z,M=new z,x=new z;function b(I){M.fromBufferAttribute(s,I),x.copy(M);let C=o[I];y.copy(C),y.sub(M.multiplyScalar(M.dot(C))).normalize(),E.crossVectors(x,C);let X=E.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,X)}for(let I=0,C=n.count;I<C;++I)c[I]&&b(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,u=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Tt(d,h,u)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ad(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ad(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ad(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ei()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Dn=new z,yr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Fl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):_h(e,this.data.array)}},Ac=new z,Qm=new z,e0=new ht,oi=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ac.subVectors(n,t).cross(Qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||e0.getNormalMatrix(e),s=this.coplanarPoint(Ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},t0=0,Fn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Ar,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=Zc,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new oi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ui=new z,Rc=new z,eo=new z,to=new z,Rs=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rc.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),to.copy(this.origin).sub(Rc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(eo),o=to.dot(this.direction),l=-to.dot(eo),c=to.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Rc).addScaledVector(eo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);let n=Ui.dot(this.direction),s=Ui.dot(Ui)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,v=t.y-a.y,g=t.z-a.z,p=n.x-a.x,_=n.y-a.y,S=n.z-a.z,y=Math.abs(l),E=Math.abs(c),M=Math.abs(h),x,b,I,C,U,X,j,D,O,Z,q,B;if(y>=E&&y>=M?(I=l,X=u,O=m,B=p,l>=0?(x=c,b=h,C=d,U=f,j=v,D=g,Z=_,q=S):(x=h,b=c,C=f,U=d,j=g,D=v,Z=S,q=_)):E>=M?(I=c,X=d,O=v,B=_,c>=0?(x=h,b=l,C=f,U=u,j=g,D=m,Z=S,q=p):(x=l,b=h,C=u,U=f,j=m,D=g,Z=p,q=S)):(I=h,X=f,O=g,B=S,h>=0?(x=l,b=c,C=u,U=d,j=m,D=v,Z=p,q=_):(x=c,b=l,C=d,U=u,j=v,D=m,Z=_,q=p)),I===0)return null;let k=x/I,Y=b/I,ie=1/I,te=C-k*X,xe=U-Y*X,ne=j-k*O,_e=D-Y*O,fe=Z-k*B,Me=q-Y*B,ye=fe*_e-Me*ne,Fe=te*Me-xe*fe,Ye=ne*xe-_e*te;if(s){if(ye<0||Fe<0||Ye<0)return null}else if((ye<0||Fe<0||Ye<0)&&(ye>0||Fe>0||Ye>0))return null;let Te=ye+Fe+Ye;if(Te===0)return null;let tt=ie*(ye*X+Fe*O+Ye*B);return(Te>0?tt<0:tt>0)?null:this.at(tt/Te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},od=new Qe,ys=new Rs,no=new kn,ld=new z,io=new z,so=new z,ro=new z,Cc=new z,ao=new z,cd=new z,oo=new z,Mt=class extends It{constructor(e=new Rt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Cc.fromBufferAttribute(u,e),a?ao.addScaledVector(Cc,h):ao.addScaledVector(Cc.sub(t),h))}t.add(ao)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(no.containsPoint(ys.origin)===!1&&(ys.intersectSphere(no,ld)===null||ys.origin.distanceToSquared(ld)>(e.far-e.near)**2))&&(od.copy(r).invert(),ys.copy(e.ray).applyMatrix4(od),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,E=S;y<E;y+=3){let M=o.getX(y),x=o.getX(y+1),b=o.getX(y+2);s=lo(this,p,e,n,c,h,u,M,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let _=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);s=lo(this,a,e,n,c,h,u,_,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,E=S;y<E;y+=3){let M=y,x=y+1,b=y+2;s=lo(this,p,e,n,c,h,u,M,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let _=g,S=g+1,y=g+2;s=lo(this,a,e,n,c,h,u,_,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function n0(i,e,t,n,s,r,a,o){let l;if(e.side===Mn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Si,o),l===null)return null;oo.copy(o),oo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:i}}function lo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,io),i.getVertexPosition(l,so),i.getVertexPosition(c,ro);let h=n0(i,e,t,n,io,so,ro,cd);if(h){let u=new z;ss.getBarycoord(cd,io,so,ro,u),s&&(h.uv=ss.getInterpolatedAttribute(s,o,l,c,u,new ot)),r&&(h.uv1=ss.getInterpolatedAttribute(r,o,l,c,u,new ot)),a&&(h.normal=ss.getInterpolatedAttribute(a,o,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new z,materialIndex:0};ss.getNormal(io,so,ro,d.normal),h.face=d,h.barycoord=u}return h}var qr=new zt,hd=new zt,ud=new zt,i0=new zt,dd=new Qe,co=new z,Ic=new kn,fd=new Qe,Lc=new Rs,Cs=class extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uc,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingSphere.expandByPoint(co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ic.copy(this.boundingSphere),Ic.applyMatrix4(s),e.ray.intersectsSphere(Ic)!==!1&&(fd.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(fd),!(this.boundingBox!==null&&Lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new zt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nf?this.bindMatrixInverse.copy(this.bindMatrix).invert():je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;hd.fromBufferAttribute(s.attributes.skinIndex,e),ud.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(qr.copy(t),t.set(0,0,0,0)):(qr.set(t.x,t.y,t.z,1),t.set(0,0,0)),qr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=ud.getComponent(r);if(a!==0){let o=hd.getComponent(r);dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(i0.copy(qr).applyMatrix4(dd),a)}}return t.isVector4&&(t.w=qr.w),t.applyMatrix4(this.bindMatrixInverse)}},rs=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},vr=class extends dn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Yt,h=Yt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pd=new Qe,s0=new Qe,Is=class i{constructor(e=[],t=[]){this.uuid=Ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:s0;pd.multiplyMatrices(o,t[r]),pd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vr(t,e,e,ei,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(je("Skeleton: No bone found with UUID:",r),a=new rs),this.bones.push(a),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},zi=class extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ar=new Qe,md=new Qe,ho=[],gd=new Un,r0=new Qe,Yr=new Mt,Zr=new kn,vn=class extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,r0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ar),gd.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union(gd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ar),Zr.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(n),e.ray.intersectsSphere(Zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),md.multiplyMatrices(n,ar),Yr.matrixWorld=md,Yr.raycast(e,ho);for(let a=0,o=ho.length;a<o;a++){let l=ho[a];l.instanceId=r,l.object=this,t.push(l)}ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,el,Jn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new kn,a0=new ot(.5,.5),uo=new z,as=class{constructor(e=new oi,t=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],_=r[12],S=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,p-m,E-_).normalize(),s[1].setComponents(c+a,f+h,p+m,E+_).normalize(),s[2].setComponents(c+o,f+u,p+v,E+S).normalize(),s[3].setComponents(c-o,f-u,p-v,E-S).normalize(),n)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,p-g,E-y).normalize();else if(s[4].setComponents(c-l,f-d,p-g,E-y).normalize(),t===Qn)s[5].setComponents(c+l,f+d,p+g,E+y).normalize();else if(t===fr)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);let t=a0.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xd=new Qe,Lo=class i{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];xd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new as),n[s].setFromProjectionMatrix(xd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new as),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Mr=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Po=new z,Do=new z,_d=new Qe,Kr=new Rs,fo=new kn,Pc=new z,yd=new z,Ls=class extends It{constructor(e=new Rt,t=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Po.fromBufferAttribute(t,s-1),Do.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Po.distanceTo(Do);e.setAttribute("lineDistance",new st(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;_d.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(_d);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){let p=h.getX(v),_=h.getX(v+1),S=po(this,e,Kr,l,p,_,v);S&&t.push(S)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(f),p=po(this,e,Kr,l,v,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){let p=po(this,e,Kr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=po(this,e,Kr,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function po(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Po.fromBufferAttribute(o,s),Do.fromBufferAttribute(o,r),t.distanceSqToSegment(Po,Do,Pc,yd)>n)return;Pc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Pc);if(!(c<e.near||c>e.far))return{distance:c,point:yd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var vd=new z,Md=new z,oa=class extends Ls{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vd.fromBufferAttribute(t,s),Md.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vd.distanceTo(Md);e.setAttribute("lineDistance",new st(n,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},la=class extends Ls{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Sr=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sd=new Qe,Oc=new Rs,mo=new kn,go=new z,Ps=class extends It{constructor(e=new Rt,t=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Sd.copy(s).invert(),Oc.copy(e.ray).applyMatrix4(Sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,v=f;m<v;m++){let g=c.getX(m);go.fromBufferAttribute(u,g),bd(go,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,v=f;m<v;m++)go.fromBufferAttribute(u,m),bd(go,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bd(i,e,t,n,s,r,a){let o=Oc.distanceSqToPoint(i);if(o<t){let l=new z;Oc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ca=class extends dn{constructor(e=[],t=Hs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ki=class extends dn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends dn{constructor(e,t,n=hi,s,r,a,o=Yt,l=Yt,c,h=Bi,u=1){if(h!==Bi&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ha=class extends Hi{constructor(e,t=hi,n=Hs,s,r,a=Yt,o=Yt,l,c=Bi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ua=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Oe=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function m(v,g,p,_,S,y,E,M,x,b,I){let C=y/x,U=E/b,X=y/2,j=E/2,D=M/2,O=x+1,Z=b+1,q=0,B=0,k=new z;for(let Y=0;Y<Z;Y++){let ie=Y*U-j;for(let te=0;te<O;te++){let xe=te*C-X;k[v]=xe*_,k[g]=ie*S,k[p]=D,c.push(k.x,k.y,k.z),k[v]=0,k[g]=0,k[p]=M>0?1:-1,h.push(k.x,k.y,k.z),u.push(te/x),u.push(1-Y/b),q+=1}}for(let Y=0;Y<b;Y++)for(let ie=0;ie<x;ie++){let te=d+ie+O*Y,xe=d+ie+O*(Y+1),ne=d+(ie+1)+O*(Y+1),_e=d+(ie+1)+O*Y;l.push(te,xe,_e),l.push(xe,ne,_e),B+=6}o.addGroup(f,B,I),f+=B,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},yi=class i extends Rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,v=s+1,g=new z,p=new z;for(let _=0;_<=m;_++){let S=0,y=0,E=0,M=0;if(_<=n){let I=_/n,C=I*Math.PI/2;y=-h-e*Math.cos(C),E=e*Math.sin(C),M=-e*Math.cos(C),S=I*u}else if(_<=n+r){let I=(_-n)/r;y=-h+I*t,E=e,M=0,S=u+I*d}else{let I=(_-n-r)/n,C=I*Math.PI/2;y=h+e*Math.sin(C),E=e*Math.cos(C),M=e*Math.sin(C),S=u+d+I*u}let x=Math.max(0,Math.min(1,S/f)),b=0;_===0?b=.5/s:_===m&&(b=-.5/s);for(let I=0;I<=s;I++){let C=I/s,U=C*Math.PI*2,X=Math.sin(U),j=Math.cos(U);p.x=-E*j,p.y=y,p.z=E*X,o.push(p.x,p.y,p.z),g.set(-E*j,M,E*X),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+b,x)}if(_>0){let I=(_-1)*v;for(let C=0;C<s;C++){let U=I+C,X=I+C+1,j=_*v+C,D=_*v+C+1;a.push(U,X,j),a.push(X,D,j)}}}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},os=class i extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new z,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qt=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],g=n/2,p=0;_(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function _(){let y=new z,E=new z,M=0,x=(t-e)/n;for(let b=0;b<=r;b++){let I=[],C=b/r,U=C*(t-e)+e;for(let X=0;X<=s;X++){let j=X/s,D=j*l+o,O=Math.sin(D),Z=Math.cos(D);E.x=U*O,E.y=-C*n+g,E.z=U*Z,u.push(E.x,E.y,E.z),y.set(O,x,Z).normalize(),d.push(y.x,y.y,y.z),f.push(j,1-C),I.push(m++)}v.push(I)}for(let b=0;b<s;b++)for(let I=0;I<r;I++){let C=v[I][b],U=v[I+1][b],X=v[I+1][b+1],j=v[I][b+1];(e>0||I!==0)&&(h.push(C,U,j),M+=3),(t>0||I!==r-1)&&(h.push(U,X,j),M+=3)}c.addGroup(p,M,0),p+=M}function S(y){let E=m,M=new ot,x=new z,b=0,I=y===!0?e:t,C=y===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),m++;let U=m;for(let X=0;X<=s;X++){let D=X/s*l+o,O=Math.cos(D),Z=Math.sin(D);x.x=I*Z,x.y=g*C,x.z=I*O,u.push(x.x,x.y,x.z),d.push(0,C,0),M.x=O*.5+.5,M.y=Z*.5*C+.5,f.push(M.x,M.y),m++}for(let X=0;X<s;X++){let j=E+X,D=U+X;y===!0?h.push(D,D+1,j):h.push(D+1,D,j),b+=3}c.addGroup(p,b,y===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kt=class i extends Qt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},da=class i extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let S=new z,y=new z,E=new z;for(let M=0;M<t.length;M+=3)f(t[M+0],S),f(t[M+1],y),f(t[M+2],E),l(S,y,E,_)}function l(_,S,y,E){let M=E+1,x=[];for(let b=0;b<=M;b++){x[b]=[];let I=_.clone().lerp(y,b/M),C=S.clone().lerp(y,b/M),U=M-b;for(let X=0;X<=U;X++)X===0&&b===M?x[b][X]=I:x[b][X]=I.clone().lerp(C,X/U)}for(let b=0;b<M;b++)for(let I=0;I<2*(M-b)-1;I++){let C=Math.floor(I/2);I%2===0?(d(x[b][C+1]),d(x[b+1][C]),d(x[b][C])):(d(x[b][C+1]),d(x[b+1][C+1]),d(x[b+1][C]))}}function c(_){let S=new z;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(_),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let _=new z;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let y=g(_)/2/Math.PI+.5,E=p(_)/Math.PI+.5;a.push(y,1-E)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let S=a[_+0],y=a[_+2],E=a[_+4],M=Math.max(S,y,E),x=Math.min(S,y,E);M>.9&&x<.1&&(S<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),E<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,S){let y=_*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function m(){let _=new z,S=new z,y=new z,E=new z,M=new ot,x=new ot,b=new ot;for(let I=0,C=0;I<r.length;I+=9,C+=6){_.set(r[I+0],r[I+1],r[I+2]),S.set(r[I+3],r[I+4],r[I+5]),y.set(r[I+6],r[I+7],r[I+8]),M.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),b.set(a[C+4],a[C+5]),E.copy(_).add(S).add(y).divideScalar(3);let U=g(E);v(M,C+0,_,U),v(x,C+2,S,U),v(b,C+4,y,U)}}function v(_,S,y,E){E<0&&_.x===1&&(a[S]=_.x-1),y.x===0&&y.z===0&&(a[S]=E/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Ds=class i extends da{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Kn=class i extends da{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},fa=class i extends Rt{constructor(e=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=vt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new z,d=new ot,f=new z,m=new z,v=new z,g=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let _=0;_<=t;_++){let S=n+_*h*s,y=Math.sin(S),E=Math.cos(S);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*y,u.y=e[M].y,u.z=e[M].x*E,a.push(u.x,u.y,u.z),d.x=_/t,d.y=M/(e.length-1),o.push(d.x,d.y);let x=l[3*M+0]*y,b=l[3*M+1],I=l[3*M+0]*E;c.push(x,b,I)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){let y=S+_*e.length,E=y,M=y+e.length,x=y+e.length+1,b=y+1;r.push(E,M,b),r.push(x,b,M)}this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("uv",new st(o,2)),this.setAttribute("normal",new st(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var _n=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let _=p*d-a;for(let S=0;S<c;S++){let y=S*u-r;m.push(y,-_,0),v.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let S=_+c*p,y=_+c*(p+1),E=_+1+c*(p+1),M=_+1+c*p;f.push(S,y,M),f.push(y,E,M)}this.setIndex(f),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var fn=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new z,d=new z,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let _=[],S=p/n,y=a+S*o,E=e*Math.cos(y),M=Math.sqrt(e*e-E*E),x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let I=b/t,C=s+I*r;u.x=-M*Math.cos(C),u.y=E,u.z=M*Math.sin(C),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(I+x,1-S),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let S=h[p][_+1],y=h[p][_],E=h[p+1][_],M=h[p+1][_+1];(p!==0||a>0)&&f.push(S,y,M),(p!==n-1||l<Math.PI)&&f.push(y,E,M)}this.setIndex(f),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ci=class i extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new z,f=new z,m=new z;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let p=(s+1)*v+g-1,_=(s+1)*(v-1)+g-1,S=(s+1)*(v-1)+g,y=(s+1)*v+g;l.push(p,_,y),l.push(_,S,y)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ed(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ed(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Rn(i){let e={};for(let t=0;t<i.length;t++){let n=Ws(i[t]);for(let s in n)e[s]=n[s]}return e}function Ed(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function o0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var vf={clone:Ws,merge:Rn},l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=c0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=o0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new zt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},No=class extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ns=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},On=class extends Ns{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return bs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){bs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var An=class extends Fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Uo=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fo=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function is(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function h0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function wd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function u0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oo=class extends vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ms,endingEnd:Ms}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ss:r=e,o=2*t-n;break;case Qr:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ss:a=e,l=2*n-t;break;case Qr:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,S=(-1-f)*g+(1.5+f)*v+.5*m,y=f*g-f*v;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+_*a[c+E]+S*a[l+E]+y*a[u+E];return r}},pa=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Bo=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zo=class extends vi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),v=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let v=a[c+m],g=a[l+m],p=f*d+m*2,_=u[p],S=u[p+1],y=e*d+m*2,E=h[y],M=h[y+1],x=f0(n,t,_,E,s);r[m]=Mf(x,v,S,M,g)}return r}};function Mf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function d0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function f0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Mf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=d0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Jr(e.settings)&&(n.settings={inTangents:is(e.settings.inTangents,Array),outTangents:is(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case ws:t=this.InterpolantFactoryMethodLinear;break;case yo:t=this.InterpolantFactoryMethodSmooth;break;case Fc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return ws;case this.InterpolantFactoryMethodSmooth:return yo;case this.InterpolantFactoryMethodBezier:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Jr(this.settings)&&(Td(this.settings.inTangents,e),Td(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Jr(this.settings)&&(Ad(this.settings.inTangents,e),Ad(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(lt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(lt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){lt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){lt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Em(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){lt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Jr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Td(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Ad(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=ws;var Gi=class extends Gn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Es;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};ma.prototype.ValueTypeName="color";var Vi=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Vi.prototype.ValueTypeName="number";var ko=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Pt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Wi=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}};Wi.prototype.ValueTypeName="quaternion";Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Gn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Es;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};ls.prototype.ValueTypeName="vector";var Us=class{constructor(e="",t=-1,n=[],s=Ul){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ei(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(m0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=h0(l);l=wd(l,1,h),c=wd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Vi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function p0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vi;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return ma;case"quaternion":return Wi;case"bool":case"boolean":return Gi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function m0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=p0(i.type);if(i.times===void 0){let n=[],s=[];u0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Jr(i.settings)&&(t.settings={inTangents:is(i.settings.inTangents,Float32Array),outTangents:is(i.settings.outTangents,Float32Array)}),t}var _i={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Rd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Rd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Rd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ho=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sf=new Ho,Mi=class{constructor(e){this.manager=e!==void 0?e:Sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi={},Bc=class extends Error{constructor(e,t){super(e),this.response=t}},br=class extends Mi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=_i.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:s});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,v=0,g=new ReadableStream({start(p){_();function _(){u.read().then(({done:S,value:y})=>{if(S)p.close();else{v+=y.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let M=0,x=h.length;M<x;M++){let b=h[M];b.onProgress&&b.onProgress(E)}p.enqueue(y),_()}},S=>{p.error(S)})}}});return new Response(g)}else throw new Bc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{_i.add(`file:${e}`,c);let h=Fi[e];delete Fi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Fi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var or=new WeakMap,Go=class extends Mi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_i.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=or.get(a);u===void 0&&(u=[],or.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=pr("img");function l(){h(),t&&t(this);let u=or.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}or.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),_i.remove(`image:${e}`);let d=or.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}or.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),_i.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var ga=class extends Mi{constructor(e){super(e)}load(e,t,n,s){let r=new dn,a=new Go(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Fs=class extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xa=class extends Fs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Dc=new Qe,Cd=new z,Id=new z,Er=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Id),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Dc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===fr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xo=new z,_o=new Pt,xi=new z,_a=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xo,_o,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,_o,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xo,_o,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,_o,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new z,Ld=new ot,Pd=new ot,hn=class extends _a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Ld,Pd),t.subVectors(Pd,Ld)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zc=class extends Er{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ya=class extends Fs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},kc=class extends Er{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},Os=class extends Fs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bs=class extends _a{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hc=class extends Er{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Hc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var qi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Nc=new WeakMap,va=class extends Mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_i.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Nc.has(a)===!0?(s&&s(Nc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Nc.set(l,c),_i.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var lr=-90,cr=1,wr=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(lr,cr,e,t);s.layers=this.layers,this.add(s);let r=new hn(lr,cr,e,t);r.layers=this.layers,this.add(r);let a=new hn(lr,cr,e,t);a.layers=this.layers,this.add(a);let o=new hn(lr,cr,e,t);o.layers=this.layers,this.add(o);let l=new hn(lr,cr,e,t);l.layers=this.layers,this.add(l);let c=new hn(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Vo=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Wo=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Pt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;Pt.multiplyQuaternionsFlat(e,a,e,t,e,n),Pt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},vh="\\[\\]\\.:\\/",g0=new RegExp("["+vh+"]","g"),Mh="[^"+vh+"]",x0="[^"+vh.replace("\\.","")+"]",_0=/((?:WC+[\/:])*)/.source.replace("WC",Mh),y0=/(WCOD+)?/.source.replace("WCOD",x0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),M0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),S0=new RegExp("^"+_0+y0+v0+M0+"$"),b0=["material","materials","bones","map"],Gc=class{constructor(e,t,n){let s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(e){let t=S0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);b0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=Gc;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xo=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Ms,endingEnd:Ms};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=rf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case af:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Ul:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===Nl;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===sf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Ss,s.endingEnd=Ss):(e?s.endingStart=this.zeroSlopeAtStart?Ss:Ms:s.endingStart=Qr,t?s.endingEnd=this.zeroSlopeAtEnd?Ss:Ms:s.endingEnd=Qr)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},E0=new Float32Array(1),Ma=class extends li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;m=new Wo(kt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new pa(new Float32Array(2),new Float32Array(2),1,E0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Us.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Ul),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Xo(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Us.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ah=class Ah{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ah.prototype.isMatrix2=!0;var Vc=Ah;function Sh(i,e,t,n){let s=w0(n);switch(t){case oh:return i*e;case el:return i*e/s.components*s.byteLength;case tl:return i*e/s.components*s.byteLength;case hs:return i*e*2/s.components*s.byteLength;case nl:return i*e*2/s.components*s.byteLength;case lh:return i*e*3/s.components*s.byteLength;case ei:return i*e*4/s.components*s.byteLength;case il:return i*e*4/s.components*s.byteLength;case ba:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:case ol:return Math.max(i,16)*Math.max(e,8)/4;case sl:case al:return Math.max(i,8)*Math.max(e,8)/2;case ll:case cl:case ul:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hl:case Aa:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Cl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ll:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ra:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w0(i){switch(i){case Wn:case ih:return{byteLength:1,components:1};case Ir:case sh:case ui:return{byteLength:2,components:1};case jo:case Qo:return{byteLength:2,components:4};case hi:case $o:case Jn:return{byteLength:4,components:1};case rh:case ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function A0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_g=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Og=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,i1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,U1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Z1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:R0,alphahash_pars_fragment:C0,alphamap_fragment:I0,alphamap_pars_fragment:L0,alphatest_fragment:P0,alphatest_pars_fragment:D0,aomap_fragment:N0,aomap_pars_fragment:U0,batching_pars_vertex:F0,batching_vertex:O0,begin_vertex:B0,beginnormal_vertex:z0,bsdfs:k0,iridescence_fragment:H0,bumpmap_pars_fragment:G0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:q0,color_fragment:Y0,color_pars_fragment:Z0,color_pars_vertex:K0,color_vertex:J0,common:$0,defaultnormal_vertex:j0,displacementmap_pars_vertex:Q0,displacementmap_vertex:eg,emissivemap_fragment:tg,emissivemap_pars_fragment:ng,colorspace_fragment:ig,colorspace_pars_fragment:sg,envmap_fragment:rg,envmap_common_pars_fragment:ag,envmap_pars_fragment:og,envmap_pars_vertex:lg,envmap_physical_pars_fragment:yg,envmap_vertex:cg,fog_vertex:hg,fog_pars_vertex:ug,fog_fragment:dg,fog_pars_fragment:fg,gradientmap_pars_fragment:pg,lightmap_pars_fragment:mg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:xg,lights_pars_begin:_g,lights_toon_fragment:vg,lights_toon_pars_fragment:Mg,lights_phong_fragment:Sg,lights_phong_pars_fragment:bg,lights_physical_fragment:Eg,lights_physical_pars_fragment:wg,lights_fragment_begin:Tg,lights_fragment_maps:Ag,lights_fragment_end:Rg,lightprobes_pars_fragment:Cg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Lg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Dg,map_fragment:Ng,map_pars_fragment:Ug,map_particle_fragment:Fg,map_particle_pars_fragment:Og,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:zg,morphinstance_vertex:kg,morphcolor_vertex:Hg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Vg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:qg,normal_pars_fragment:Yg,normal_pars_vertex:Zg,normal_vertex:Kg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:$g,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:e1,opaque_fragment:t1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:s1,dithering_fragment:r1,dithering_pars_fragment:a1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:h1,shadowmap_vertex:u1,shadowmask_pars_fragment:d1,skinbase_vertex:f1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:g1,specularmap_fragment:x1,specularmap_pars_fragment:_1,tonemapping_fragment:y1,tonemapping_pars_fragment:v1,transmission_fragment:M1,transmission_pars_fragment:S1,uv_pars_fragment:b1,uv_pars_vertex:E1,uv_vertex:w1,worldpos_vertex:T1,background_vert:A1,background_frag:R1,backgroundCube_vert:C1,backgroundCube_frag:I1,cube_vert:L1,cube_frag:P1,depth_vert:D1,depth_frag:N1,distance_vert:U1,distance_frag:F1,equirect_vert:O1,equirect_frag:B1,linedashed_vert:z1,linedashed_frag:k1,meshbasic_vert:H1,meshbasic_frag:G1,meshlambert_vert:V1,meshlambert_frag:W1,meshmatcap_vert:X1,meshmatcap_frag:q1,meshnormal_vert:Y1,meshnormal_frag:Z1,meshphong_vert:K1,meshphong_frag:J1,meshphysical_vert:$1,meshphysical_frag:j1,meshtoon_vert:Q1,meshtoon_frag:ex,points_vert:tx,points_frag:nx,shadow_vert:ix,shadow_frag:sx,sprite_vert:rx,sprite_frag:ax},Be={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ti={basic:{uniforms:Rn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Rn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Rn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Rn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Rn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ee(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Rn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Rn([Be.points,Be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Rn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Rn([Be.common,Be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Rn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Rn([Be.sprite,Be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Rn([Be.common,Be.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Rn([Be.lights,Be.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ti.physical={uniforms:Rn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Bl={r:0,b:0,g:0},ox=new Qe,Xf=new ht;Xf.set(-1,0,0,0,1,0,0,0,1);function lx(i,e,t,n,s,r){let a=new Ee(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let y=_.backgroundBlurriness>0;S=e.get(S,y)}return S}function m(_){let S=!1,y=f(_);y===null?g(a,o):y&&y.isColor&&(g(y,1),S=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,S){let y=f(S);y&&y.isCubeTexture?(c===void 0&&(c=new Mt(new Oe(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ws(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,M,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ox.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xf),c.material.toneMapped=xt.getTransfer(y.colorSpace)!==Bt,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Mt(new _n(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ws(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=xt.getTransfer(y.colorSpace)!==Bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,S){_.getRGB(Bl,yh(i)),t.buffers.color.setClear(Bl.r,Bl.g,Bl.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:m,addToRenderList:v,dispose:p}}function cx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(U,X,j,D,O){let Z=!1,q=u(U,D,j,X);r!==q&&(r=q,c(r.object)),Z=f(U,D,j,O),Z&&m(U,D,j,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(U,X,j,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function u(U,X,j,D){let O=D.wireframe===!0,Z=n[X.id];Z===void 0&&(Z={},n[X.id]=Z);let q=U.isInstancedMesh===!0?U.id:0,B=Z[q];B===void 0&&(B={},Z[q]=B);let k=B[j.id];k===void 0&&(k={},B[j.id]=k);let Y=k[O];return Y===void 0&&(Y=d(l()),k[O]=Y),Y}function d(U){let X=[],j=[],D=[];for(let O=0;O<t;O++)X[O]=0,j[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,X,j,D){let O=r.attributes,Z=X.attributes,q=0,B=j.getAttributes();for(let k in B)if(B[k].location>=0){let ie=O[k],te=Z[k];if(te===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),ie===void 0||ie.attribute!==te||te&&ie.data!==te.data)return!0;q++}return r.attributesNum!==q||r.index!==D}function m(U,X,j,D){let O={},Z=X.attributes,q=0,B=j.getAttributes();for(let k in B)if(B[k].location>=0){let ie=Z[k];ie===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor));let te={};te.attribute=ie,ie&&ie.data&&(te.data=ie.data),O[k]=te,q++}r.attributes=O,r.attributesNum=q,r.index=D}function v(){let U=r.newAttributes;for(let X=0,j=U.length;X<j;X++)U[X]=0}function g(U){p(U,0)}function p(U,X){let j=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;j[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),O[U]!==X&&(i.vertexAttribDivisor(U,X),O[U]=X)}function _(){let U=r.newAttributes,X=r.enabledAttributes;for(let j=0,D=X.length;j<D;j++)X[j]!==U[j]&&(i.disableVertexAttribArray(j),X[j]=0)}function S(U,X,j,D,O,Z,q){q===!0?i.vertexAttribIPointer(U,X,j,O,Z):i.vertexAttribPointer(U,X,j,D,O,Z)}function y(U,X,j,D){v();let O=D.attributes,Z=j.getAttributes(),q=X.defaultAttributeValues;for(let B in Z){let k=Z[B];if(k.location>=0){let Y=O[B];if(Y===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor)),Y!==void 0){let ie=Y.normalized,te=Y.itemSize,xe=e.get(Y);if(xe===void 0)continue;let ne=xe.buffer,_e=xe.type,fe=xe.bytesPerElement,Me=_e===i.INT||_e===i.UNSIGNED_INT||Y.gpuType===$o;if(Y.isInterleavedBufferAttribute){let ye=Y.data,Fe=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,Ye=Y.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Te=0;Te<k.locationSize;Te++)p(k.location+Te,ye.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Te=0;Te<k.locationSize;Te++)g(k.location+Te);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Te=0;Te<k.locationSize;Te++)S(k.location+Te,te/k.locationSize,_e,ie,Fe*fe,(Ye+te/k.locationSize*Te)*fe,Me)}else{if(Y.isInstancedBufferAttribute){for(let ye=0;ye<k.locationSize;ye++)p(k.location+ye,Y.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ye=0;ye<k.locationSize;ye++)g(k.location+ye);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let ye=0;ye<k.locationSize;ye++)S(k.location+ye,te/k.locationSize,_e,ie,te*fe,te/k.locationSize*ye*fe,Me)}}else if(q!==void 0){let ie=q[B];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(k.location,ie);break;case 3:i.vertexAttrib3fv(k.location,ie);break;case 4:i.vertexAttrib4fv(k.location,ie);break;default:i.vertexAttrib1fv(k.location,ie)}}}}_()}function E(){I();for(let U in n){let X=n[U];for(let j in X){let D=X[j];for(let O in D){let Z=D[O];for(let q in Z)h(Z[q].object),delete Z[q];delete D[O]}}delete n[U]}}function M(U){if(n[U.id]===void 0)return;let X=n[U.id];for(let j in X){let D=X[j];for(let O in D){let Z=D[O];for(let q in Z)h(Z[q].object),delete Z[q];delete D[O]}}delete n[U.id]}function x(U){for(let X in n){let j=n[X];for(let D in j){let O=j[D];if(O[U.id]===void 0)continue;let Z=O[U.id];for(let q in Z)h(Z[q].object),delete Z[q];delete O[U.id]}}}function b(U){for(let X in n){let j=n[X],D=U.isInstancedMesh===!0?U.id:0,O=j[D];if(O!==void 0){for(let Z in O){let q=O[Z];for(let B in q)h(q[B].object),delete q[B];delete O[Z]}delete j[D],Object.keys(j).length===0&&delete n[X]}}}function I(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function hx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ux(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==ei&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Wn&&x!==Jn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:y,maxSamples:E,samples:M}}function dx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new oi,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,S=_*4,y=p.clippingState||null;l.value=y,y=h(m,d,S,f);for(let E=0;E!==S;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=f;S!==v;++S,y+=4)a.copy(u[S]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var Da=class extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ca(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Oe(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Yi});r.uniforms.tEquirect.value=t;let a=new Mt(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=un),new wr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},bf=256,fx=3,px=20,qf=256,Yf=16,mx=3,gx=new z,xx=new Ee,kl=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wr(1,10,null),this._boxMesh=new Mt(new Oe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=gx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(xx));let g=new wr(n,s,h);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bf,gh(e))}_fromTexture(e,t){e.mapping===Hs||e.mapping===Rr?this._setSize(e.image.length===0?bf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Ef(e,!1,!1),n=Math.log2(e)-fx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ef(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Hs||e.mapping===Rr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=_x(),this._integrationMaterial=yx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Yf);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-mx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(qf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Ef(i,e,t){return new Da(i,{minFilter:Vn,generateMipmaps:e,type:ui,colorSpace:Nn,depthBuffer:t})}function Na(i,e,t){return new Hn({name:i,uniforms:e,vertexShader:pt.cube_vert,fragmentShader:t,side:Mn,blending:Yi,depthTest:!1,depthWrite:!1})}function _x(){return Na("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yx(){return Na("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vx(){return Na("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${px}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function wf(){return Na("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Tf(){return Na("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Mx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Zo||f===Ko)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let v=new Da(m.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===Zo||f===Ko,v=f===Hs||f===Rr;if(m||v){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new kl(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let _=d.image;return m&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new kl(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Zo?d.mapping=Hs:f===Ko&&(d.mapping=Rr),d}function l(d){let f=0,m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Sx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&bs("WebGLRenderer: "+n+" extension not supported."),s}}}function bx(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let v=r.get(m);v&&(e.remove(v),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(m){let v=m.attributes;for(let g in v)e.update(v[g],i.ARRAY_BUFFER)}function u(m){let v=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let _=v!==null?v.array.length:g.array.length/3-1,S=g.count>=65535?aa:ra,y=new S(Math.ceil(_/3)*6,1),E=y.array;if(v!==null){let x=v.array;p=v.version;for(let b=0,I=0;b<_;b+=3){let C=x[b+0],U=x[b+1],X=x[b+2];E[I++]=C,E[I++]=U,E[I++]=U,E[I++]=X,E[I++]=X,E[I++]=C}}else{p=g.version;for(let x=0,b=0;x<_;x+=3){let I=x+0,C=x+1,U=x+2;E[b++]=I,E[b++]=C,E[b++]=C,E[b++]=U,E[b++]=U,E[b++]=I}}y.version=p;let M=r.get(m);M&&e.remove(M),r.set(m,y)}function d(m){let v=r.get(m);if(v){let g=m.index;g!==null&&v.version<g.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let v=s[m].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Ex(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function wx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Tx(i,e,t){let n=new WeakMap,s=new zt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let I=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),v===!0&&(S=3);let y=o.attributes.position.count*S,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*E*4*u),x=new na(M,y,E,u);x.type=Jn,x.needsUpdate=!0;let b=S*4;for(let C=0;C<u;C++){let U=g[C],X=p[C],j=_[C],D=y*E*4*C;for(let O=0;O<U.count;O++){let Z=O*b;f===!0&&(s.fromBufferAttribute(U,O),M[D+Z+0]=s.x,M[D+Z+1]=s.y,M[D+Z+2]=s.z,M[D+Z+3]=0),m===!0&&(s.fromBufferAttribute(X,O),M[D+Z+4]=s.x,M[D+Z+5]=s.y,M[D+Z+6]=s.z,M[D+Z+7]=0),v===!0&&(s.fromBufferAttribute(j,O),M[D+Z+8]=s.x,M[D+Z+9]=s.y,M[D+Z+10]=s.z,M[D+Z+11]=j.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new ot(y,E)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ax(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Rx={[Kc]:"LINEAR_TONE_MAPPING",[Jc]:"REINHARD_TONE_MAPPING",[$c]:"CINEON_TONE_MAPPING",[jc]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[th]:"NEUTRAL_TONE_MAPPING",[Qc]:"CUSTOM_TONE_MAPPING"};function Cx(i,e,t,n,s,r){let a=new Zn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Rt;h.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new st([0,2,0,0,2,0],2));let u=new No({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Mt(h,u),f=new Bs(-1,1,1,-1,0,1),m=null,v=null,g=!1,p,_=null,S=[],y=!1;this.setSize=function(E,M){a.setSize(E,M),o!==null&&o.setSize(E,M),l!==null&&l.setSize(E,M);for(let x=0;x<S.length;x++){let b=S[x];b.setSize&&b.setSize(E,M)}},this.setEffects=function(E){S=E,y=S.length>0&&S[0].isRenderPass===!0;let M=a.width,x=a.height;S.length>0&&o===null&&(o=new Zn(M,x,{type:ui,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(M,x,{type:ui,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&S.some(I=>I.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Hi(M,x),r===!0&&(c.format=Zi,c.type=Vs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let I=0;I<S.length;I++){let C=S[I];C.setSize&&C.setSize(M,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,M){if(g||E.toneMapping===bi&&S.length===0)return!1;if(_=M,M!==null){let x=M.width,b=M.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return y===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=bi,!0},this.hasRenderPass=function(){return y},this.end=function(E,M){E.toneMapping=p,g=!0;let x=a,b=o;for(let I=0;I<S.length;I++){let C=S[I];C.enabled!==!1&&(C.render(E,b,x,M),C.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(m!==E.outputColorSpace||v!==E.toneMapping){m=E.outputColorSpace,v=E.toneMapping,u.defines={},xt.getTransfer(m)===Bt&&(u.defines.SRGB_TRANSFER="");let I=Rx[v];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(_),E.render(d,f),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Zf=new dn,Kf=new Hi(1,1),Jf=new ha(1),$f=new na,jf=new Io,Qf=new ca,Af=[],Rf=[],Cf=new Float32Array(16),If=new Float32Array(9),Lf=new Float32Array(4);function Dr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Af[s];if(r===void 0&&(r=new Float32Array(s),Af[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gl(i,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ix(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function Px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function Nx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Lf.set(n),i.uniformMatrix2fv(this.addr,!1,Lf),mn(t,n)}}function Ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;If.set(n),i.uniformMatrix3fv(this.addr,!1,If),mn(t,n)}}function Fx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Cf.set(n),i.uniformMatrix4fv(this.addr,!1,Cf),mn(t,n)}}function Ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function Hx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function Vl(i){return i.version===0&&(i.compareFunction=dh,i.needsUpdate=!0),i}function Xx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Vl(Kf):r=Zf,t.setTexture2D(e||r,s)}function qx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jf,s)}function Yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Vl(Jf):r=Qf,t.setTextureCube(e||r,s)}function Zx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$f,s)}function Kx(i){switch(i){case 5126:return Ix;case 35664:return Lx;case 35665:return Px;case 35666:return Dx;case 35674:return Nx;case 35675:return Ux;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return zx;case 35669:case 35673:return kx;case 5125:return Hx;case 36294:return Gx;case 36295:return Vx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return Zx}}function Jx(i,e){i.uniform1fv(this.addr,e)}function $x(i,e){let t=Dr(e,this.size,2);i.uniform2fv(this.addr,t)}function jx(i,e){let t=Dr(e,this.size,3);i.uniform3fv(this.addr,t)}function Qx(i,e){let t=Dr(e,this.size,4);i.uniform4fv(this.addr,t)}function e_(i,e){let t=Dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function t_(i,e){let t=Dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function n_(i,e){let t=Dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function i_(i,e){i.uniform1iv(this.addr,e)}function s_(i,e){i.uniform2iv(this.addr,e)}function r_(i,e){i.uniform3iv(this.addr,e)}function a_(i,e){i.uniform4iv(this.addr,e)}function o_(i,e){i.uniform1uiv(this.addr,e)}function l_(i,e){i.uniform2uiv(this.addr,e)}function c_(i,e){i.uniform3uiv(this.addr,e)}function h_(i,e){i.uniform4uiv(this.addr,e)}function u_(i,e,t){let n=this.cache,s=e.length,r=Gl(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Vl(Kf):a=Zf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function d_(i,e,t){let n=this.cache,s=e.length,r=Gl(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jf,r[a])}function f_(i,e,t){let n=this.cache,s=e.length,r=Gl(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Vl(Jf):a=Qf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function p_(i,e,t){let n=this.cache,s=e.length,r=Gl(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$f,r[a])}function m_(i){switch(i){case 5126:return Jx;case 35664:return $x;case 35665:return jx;case 35666:return Qx;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}var Ih=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kx(t.type)}},Lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m_(t.type)}},Ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Rh=/(\w+)(\])?(\[|\.)?/g;function Pf(i,e){i.seq.push(e),i.map[e.id]=e}function g_(i,e,t){let n=i.name,s=n.length;for(Rh.lastIndex=0;;){let r=Rh.exec(n),a=Rh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pf(t,c===void 0?new Ih(o,i,e):new Lh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ph(o),Pf(t,u)),t=u}}}var Pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);g_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Df(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var x_=37297,__=0;function y_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Nf=new ht;function v_(i){xt._getMatrix(Nf,xt.workingColorSpace,i);let e=`mat3( ${Nf.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case ea:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+y_(i.getShaderSource(e),o)}else return r}function M_(i,e){let t=v_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var S_={[Kc]:"Linear",[Jc]:"Reinhard",[$c]:"Cineon",[jc]:"ACESFilmic",[eh]:"AgX",[th]:"Neutral",[Qc]:"Custom"};function b_(i,e){let t=S_[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zl=new z;function E_(){xt.getLuminanceCoefficients(zl);let i=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function T_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Pa(i){return i!==""}function Ff(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Of(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(i){return i.replace(R_,C_)}function C_(i,e){let t=pt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Dh(t)}var I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(i){return i.replace(I_,L_)}function L_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var P_={[zs]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function D_(i){return P_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var N_={[Rr]:"ENVMAP_MODE_REFRACTION"};function U_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":N_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var F_={[Yo]:"ENVMAP_BLENDING_MULTIPLY",[ef]:"ENVMAP_BLENDING_MIX",[tf]:"ENVMAP_BLENDING_ADD"};function O_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":F_[i.combine]||"ENVMAP_BLENDING_NONE"}function B_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=D_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=U_(t),u=O_(t),d=w_(t),f=T_(r),m=s.createProgram(),v,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Pa).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Pa).join(`
`),g.length>0&&(g+=`
`)):(v=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),g=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?pt.tonemapping_pars_fragment:"",t.toneMapping!==bi?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,M_("linearToOutputTexel",t.outputColorSpace),E_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),a=Dh(a),a=Ff(a,t),a=Of(a,t),o=Dh(o),o=Ff(o,t),o=Of(o,t),a=Bf(a),o=Bf(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=p+v+a,S=p+g+o,y=Df(s,s.VERTEX_SHADER,_),E=Df(s,s.FRAGMENT_SHADER,S);s.attachShader(m,y),s.attachShader(m,E),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function M(C){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(m)||"",X=s.getShaderInfoLog(y)||"",j=s.getShaderInfoLog(E)||"",D=U.trim(),O=X.trim(),Z=j.trim(),q=!0,B=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,E);else{let k=Uf(s,y,"vertex"),Y=Uf(s,E,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+k+`
`+Y)}else D!==""?je("WebGLProgram: Program Info Log:",D):(O===""||Z==="")&&(B=!1);B&&(C.diagnostics={runnable:q,programLog:D,vertexShader:{log:O,prefix:v},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(y),s.deleteShader(E),x=new Pr(s,m),b=A_(s,m)}let x;this.getUniforms=function(){return x===void 0&&M(this),x};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,x_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=__++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=E,this}var z_=0,Nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uh(e),t.set(e,n)),n}},Uh=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function k_(i){return i===hs||i===Aa||i===Ra}function H_(i,e,t,n,s,r){let a=new ia,o=new Nh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,I,C,U,X){let j=C.fog,D=U.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=e.get(x.envMap||O,Z),B=d[x.type],k=n.precision;x.precision!==null&&(k=n.getMaxPrecision(x.precision),k!==x.precision&&je("WebGLProgram.getParameters:",x.precision,"not supported, using",k,"instead."));let Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=Y!==void 0?Y.length:0,te=0;D.morphAttributes.position!==void 0&&(te=1),D.morphAttributes.normal!==void 0&&(te=2),D.morphAttributes.color!==void 0&&(te=3);let xe,ne,_e,fe;if(B){let ce=Ti[B];xe=ce.vertexShader,ne=ce.fragmentShader}else{xe=x.vertexShader,ne=x.fragmentShader;let ce=o.getVertexShaderStage(x),Ie=o.getFragmentShaderStage(x);o.update(x,ce,Ie),_e=ce.id,fe=Ie.id}let Me=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Fe=U.isInstancedMesh===!0,Ye=U.isBatchedMesh===!0,Te=!!x.map,tt=!!x.matcap,ve=!!q,me=ve&&q.isPMREMTexture===!0,Ve=!!x.aoMap,Ge=!!x.lightMap,We=!!x.bumpMap&&x.wireframe===!1,ke=!!x.normalMap,dt=!!x.displacementMap,bt=!!x.emissiveMap,Nt=!!x.metalnessMap,nn=!!x.roughnessMap,gt=x.anisotropy>0,Q=x.clearcoat>0,Zt=x.diffuseRoughness>0,Ut=x.dispersion>0,Ct=x.retroreflectivity>0,we=x.iridescence>0,Ot=x.sheen>0,$e=x.transmission>0,it=gt&&!!x.anisotropyMap,N=Q&&!!x.clearcoatMap,w=Q&&!!x.clearcoatNormalMap,re=Q&&!!x.clearcoatRoughnessMap,Se=Zt&&!!x.diffuseRoughnessMap,pe=we&&!!x.iridescenceMap,Ae=we&&!!x.iridescenceThicknessMap,Re=Ot&&!!x.sheenColorMap,A=Ot&&!!x.sheenRoughnessMap,W=!!x.specularMap,se=!!x.specularColorMap,L=!!x.specularIntensityMap,$=$e&&!!x.transmissionMap,J=$e&&!!x.thicknessMap,le=!!x.gradientMap,T=!!x.alphaMap,P=x.alphaTest>0,H=!!x.alphaHash,G=!!x.extensions,F=bi;x.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(F=i.toneMapping);let ee=me?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,he={shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:xe,fragmentShader:ne,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:k,batching:Ye,batchingColor:Ye&&U._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&U.instanceColor!==null,instancingMorph:Fe&&U.morphTexture!==null,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Te,matcap:tt,envMap:ve,envMapMode:ve&&q.mapping,envMapPMREM:me,envMapMaxLod:me?ee.length-1:null,envMapSize:me?ee[0].width:null,aoMap:Ve,lightMap:Ge,bumpMap:We,normalMap:ke,displacementMap:dt,emissiveMap:bt,normalMapObjectSpace:ke&&x.normalMapType===lf,normalMapTangentSpace:ke&&x.normalMapType===Ia,packedNormalMap:ke&&x.normalMapType===Ia&&k_(x.normalMap.format),metalnessMap:Nt,roughnessMap:nn,anisotropy:gt,anisotropyMap:it,clearcoat:Q,clearcoatMap:N,clearcoatNormalMap:w,clearcoatRoughnessMap:re,diffuseRoughness:Zt,diffuseRoughnessMap:Se,dispersion:Ut,retroreflection:Ct,iridescence:we,iridescenceMap:pe,iridescenceThicknessMap:Ae,sheen:Ot,sheenColorMap:Re,sheenRoughnessMap:A,specularMap:W,specularColorMap:se,specularIntensityMap:L,transmission:$e,transmissionMap:$,thicknessMap:J,gradientMap:le,opaque:x.transparent===!1&&x.blending===Ar&&x.alphaToCoverage===!1,alphaMap:T,alphaTest:P,alphaHash:H,combine:x.combine,mapUv:Te&&f(x.map.channel),aoMapUv:Ve&&f(x.aoMap.channel),lightMapUv:Ge&&f(x.lightMap.channel),bumpMapUv:We&&f(x.bumpMap.channel),normalMapUv:ke&&f(x.normalMap.channel),displacementMapUv:dt&&f(x.displacementMap.channel),emissiveMapUv:bt&&f(x.emissiveMap.channel),metalnessMapUv:Nt&&f(x.metalnessMap.channel),roughnessMapUv:nn&&f(x.roughnessMap.channel),anisotropyMapUv:it&&f(x.anisotropyMap.channel),clearcoatMapUv:N&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:A&&f(x.sheenRoughnessMap.channel),specularMapUv:W&&f(x.specularMap.channel),specularColorMapUv:se&&f(x.specularColorMap.channel),specularIntensityMapUv:L&&f(x.specularIntensityMap.channel),transmissionMapUv:$&&f(x.transmissionMap.channel),thicknessMapUv:J&&f(x.thicknessMap.channel),alphaMapUv:T&&f(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ke||gt),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Te||T),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&ke===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:X.filter(ce=>ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:F,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&xt.getTransfer(x.map.colorSpace)===Bt,decodeVideoTextureEmissive:bt&&x.emissiveMap.isVideoTexture===!0&&xt.getTransfer(x.emissiveMap.colorSpace)===Bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:G&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(G&&x.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function v(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)b.push(I),b.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(g(b,x),p(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let b=d[x.type],I;if(b){let C=Ti[b];I=vf.clone(C.uniforms)}else I=x.uniforms;return I}function S(x,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new B_(i,b,x,s),c.push(I),h.set(b,I)),I}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function M(){o.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:_,acquireProgram:S,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:M}}function G_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function V_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function kf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,v,g,p){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.materialVariant=a(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=g,_.group=p),e++,_}function l(d,f,m,v,g,p,_){_.reversedDepth===!0&&(g=-g);let S=o(d,f,m,v,g,p);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):t.push(S)}function c(d,f,m,v,g,p){let _=o(d,f,m,v,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||V_),n.length>1&&n.sort(f||kf),s.length>1&&s.sort(f||kf)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function W_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hf,i.set(n,[a])):s>=r.length?(a=new Hf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function X_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ee};break;case"SpotLight":t={position:new z,direction:new z,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Y_=0;function Z_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function K_(i){let e=new X_,t=q_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Qe,a=new Qe;function o(c){let h=0,u=0,d=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,_=0,S=0,y=0,E=0,M=0,x=0,b=0,I=0,C=0;c.sort(Z_);for(let X=0,j=c.length;X<j;X++){let D=c[X],O=D.color,Z=D.intensity,q=D.distance,B=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===hs?B=D.shadow.map.texture:B=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*Z,u+=O.g*Z,d+=O.b*Z;else if(D.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(D.sh.coefficients[k],Z);C++}else if(D.isSunLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,ie=t.get(D);ie.shadowIntensity=Y.intensity,ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[m]=ie,n.sunShadowMap[m]=B;let te=Y.getViewportCount();for(let xe=0;xe<te;xe++)n.sunShadowMatrix[v+xe]=Y.getMatrix(xe),n.sunShadowCascade[v+xe]=Y._cascadeData[xe];v+=te,m++}n.sun[f]=k,f++}else if(D.isDirectionalLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,ie=t.get(D);ie.shadowIntensity=Y.intensity,ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,n.directionalShadow[g]=ie,n.directionalShadowMap[g]=B,n.directionalShadowMatrix[g]=D.shadow.matrix,E++}n.directional[g]=k,g++}else if(D.isSpotLight){let k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(O).multiplyScalar(Z),k.distance=q,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,n.spot[_]=k;let Y=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,Y.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[_]=Y.matrix,D.castShadow){let ie=t.get(D);ie.shadowIntensity=Y.intensity,ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,n.spotShadow[_]=ie,n.spotShadowMap[_]=B,x++}_++}else if(D.isRectAreaLight){let k=e.get(D);k.color.copy(O).multiplyScalar(Z),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),n.rectArea[S]=k,S++}else if(D.isPointLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let Y=D.shadow,ie=t.get(D);ie.shadowIntensity=Y.intensity,ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,ie.shadowCameraNear=Y.camera.near,ie.shadowCameraFar=Y.camera.far,n.pointShadow[p]=ie,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=D.shadow.matrix,M++}n.point[p]=k,p++}else if(D.isHemisphereLight){let k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(Z),k.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[y]=k,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==_||U.rectAreaLength!==S||U.hemiLength!==y||U.numSunShadows!==m||U.numDirectionalShadows!==E||U.numPointShadows!==M||U.numSpotShadows!==x||U.numSpotMaps!==b||U.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=_,n.rectArea.length=S,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,U.sunLength=f,U.directionalLength=g,U.pointLength=p,U.spotLength=_,U.rectAreaLength=S,U.hemiLength=y,U.numSunShadows=m,U.numDirectionalShadows=E,U.numPointShadows=M,U.numSpotShadows=x,U.numSpotMaps=b,U.numLightProbes=C,n.version=Y_++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0,g=0,p=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let y=c[_];if(y.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(y.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Gf(i){let e=new K_(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function J_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Gf(i),e.set(s,[o])):r>=a.length?(o=new Gf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],ey=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Vf=new Qe,La=new z,Ch=new z;function ty(i,e,t){let n=new as,s=new ot,r=new ot,a=new zt,o=new Uo,l=new Fo,c={},h=t.maxTextureSize,u={[Si]:Mn,[Mn]:Si,[rn]:rn},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:$_,fragmentShader:j_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Rt;m.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Mt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let p=this.type;this.render=function(M,x,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Ud&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zs);let I=i.getRenderTarget(),C=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Yi),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let j=p!==this.type;j&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=M.length;D<O;D++){let Z=M[D],q=Z.shadow;if(q===void 0){je("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let B=q.getFrameExtents();s.multiply(B),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,q.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=k,q.map===null||j===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Tr){if(Z.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Zn(s.x,s.y,{format:hs,type:ui,minFilter:un,magFilter:un,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Hi(s.x,s.y,Jn),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=Bi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Yt,q.map.depthTexture.magFilter=Yt}else Z.isPointLight?(q.map=new Da(s.x),q.map.depthTexture=new ha(s.x,hi)):(q.map=new Zn(s.x,s.y),q.map.depthTexture=new Hi(s.x,s.y,hi)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=Bi,this.type===zs?(q.map.depthTexture.compareFunction=k?uh:hh,q.map.depthTexture.minFilter=un,q.map.depthTexture.magFilter=un):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Yt,q.map.depthTexture.magFilter=Yt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let Y=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,b);let ie=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:b.layers;for(let te=0;te<Y;te++){let xe=q.getCamera(te);if(Z.isPointLight){let ne=q.camera,_e=q.matrix,fe=Z.distance||ne.far;fe!==ne.far&&(ne.far=fe,ne.updateProjectionMatrix()),La.setFromMatrixPosition(Z.matrixWorld),ne.position.copy(La),Ch.copy(ne.position),Ch.add(Q_[te]),ne.up.copy(ey[te]),ne.lookAt(Ch),ne.updateMatrixWorld(),_e.makeTranslation(-La.x,-La.y,-La.z),Vf.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Vf,ne.coordinateSystem,ne.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,te),i.clear();else{te===0&&(i.setRenderTarget(q.map),i.clear());let ne=q.getViewport(te);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),X.viewport(a)}n=q.getFrustum(te),y(x,b,xe,Z,ie,this.type)}q.isPointLightShadow!==!0&&this.type===Tr&&_(q,b),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(I,C,U)};function _(M,x){let b=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Zn(s.x,s.y,{format:hs,type:ui}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(x,null,b,d,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(x,null,b,f,v,null)}function S(M,x,b,I){let C=null,U=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)C=U;else if(C=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let X=C.uuid,j=x.uuid,D=c[X];D===void 0&&(D={},c[X]=D);let O=D[j];O===void 0&&(O=C.clone(),D[j]=O,x.addEventListener("dispose",E)),C=O}if(C.visible=x.visible,C.wireframe=x.wireframe,I===Tr?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let X=i.properties.get(C);X.light=b}return C}function y(M,x,b,I,C,U){if(M.visible===!1)return;if(M.layers.test(C)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&U===Tr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);let D=e.update(M),O=M.material;if(Array.isArray(O)){let Z=D.groups;for(let q=0,B=Z.length;q<B;q++){let k=Z[q],Y=O[k.materialIndex];if(Y&&Y.visible){let ie=S(M,Y,I,U);M.onBeforeShadow(i,M,x,b,D,ie,k),i.renderBufferDirect(b,null,D,ie,M,k),M.onAfterShadow(i,M,x,b,D,ie,k)}}}else if(O.visible){let Z=S(M,O,I,U);M.onBeforeShadow(i,M,x,b,D,Z,null),i.renderBufferDirect(b,null,D,Z,M,null),M.onAfterShadow(i,M,x,b,D,Z,null)}}let j=M.children;for(let D=0,O=j.length;D<O;D++)y(j[D],x,b,I,C,U)}function E(M){M.target.removeEventListener("dispose",E);for(let b in c){let I=c[b],C=M.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function ny(i,e){function t(){let L=!1,$=new zt,J=null,le=new zt(0,0,0,0);return{setMask:function(T){J!==T&&!L&&(i.colorMask(T,T,T,T),J=T)},setLocked:function(T){L=T},setClear:function(T,P,H,G,F){F===!0&&(T*=G,P*=G,H*=G),$.set(T,P,H,G),le.equals($)===!1&&(i.clearColor(T,P,H,G),le.copy($))},reset:function(){L=!1,J=null,le.set(-1,0,0,0)}}}function n(){let L=!1,$=!1,J=null,le=null,T=null;return{setReversed:function(P){if($!==P){let H=e.get("EXT_clip_control");P?H.clipControlEXT(H.LOWER_LEFT_EXT,H.ZERO_TO_ONE_EXT):H.clipControlEXT(H.LOWER_LEFT_EXT,H.NEGATIVE_ONE_TO_ONE_EXT),$=P;let G=T;T=null,this.setClear(G)}},getReversed:function(){return $},setTest:function(P){P?ye(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(P){J!==P&&!L&&(i.depthMask(P),J=P)},setFunc:function(P){if($&&(P=_f[P]),le!==P){switch(P){case Mo:i.depthFunc(i.NEVER);break;case So:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case Eo:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case To:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=P}},setLocked:function(P){L=P},setClear:function(P){T!==P&&(T=P,$&&(P=1-P),i.clearDepth(P))},reset:function(){L=!1,J=null,le=null,T=null,$=!1}}}function s(){let L=!1,$=null,J=null,le=null,T=null,P=null,H=null,G=null,F=null;return{setTest:function(ee){L||(ee?ye(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(ee){$!==ee&&!L&&(i.stencilMask(ee),$=ee)},setFunc:function(ee,he,ce){(J!==ee||le!==he||T!==ce)&&(i.stencilFunc(ee,he,ce),J=ee,le=he,T=ce)},setOp:function(ee,he,ce){(P!==ee||H!==he||G!==ce)&&(i.stencilOp(ee,he,ce),P=ee,H=he,G=ce)},setLocked:function(ee){L=ee},setClear:function(ee){F!==ee&&(i.clearStencil(ee),F=ee)},reset:function(){L=!1,$=null,J=null,le=null,T=null,P=null,H=null,G=null,F=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,_=null,S=null,y=null,E=null,M=null,x=null,b=new Ee(0,0,0),I=0,C=!1,U=null,X=null,j=null,D=null,O=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,B=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=B>=1):k.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=B>=2);let Y=null,ie={},te=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),ne=new zt().fromArray(te),_e=new zt().fromArray(xe);function fe(L,$,J,le){let T=new Uint8Array(4),P=i.createTexture();i.bindTexture(L,P),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let H=0;H<J;H++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,T):i.texImage2D($+H,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,T);return P}let Me={};Me[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),a.setFunc(ur),We(!1),ke(Wc),ye(i.CULL_FACE),Ve(Yi);function ye(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Fe(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ye(L,$){return d[L]!==$?(i.bindFramebuffer(L,$),d[L]=$,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Te(L,$){let J=m,le=!1;if(L){J=f.get($),J===void 0&&(J=[],f.set($,J));let T=L.textures;if(J.length!==T.length||J[0]!==i.COLOR_ATTACHMENT0){for(let P=0,H=T.length;P<H;P++)J[P]=i.COLOR_ATTACHMENT0+P;J.length=T.length,le=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,le=!0);le&&i.drawBuffers(J)}function tt(L){return v!==L?(i.useProgram(L),v=L,!0):!1}let ve={[ks]:i.FUNC_ADD,[Od]:i.FUNC_SUBTRACT,[Bd]:i.FUNC_REVERSE_SUBTRACT};ve[zd]=i.MIN,ve[kd]=i.MAX;let me={[Hd]:i.ZERO,[Gd]:i.ONE,[Vd]:i.SRC_COLOR,[Yc]:i.SRC_ALPHA,[Kd]:i.SRC_ALPHA_SATURATE,[Yd]:i.DST_COLOR,[Xd]:i.DST_ALPHA,[Wd]:i.ONE_MINUS_SRC_COLOR,[Zc]:i.ONE_MINUS_SRC_ALPHA,[Zd]:i.ONE_MINUS_DST_COLOR,[qd]:i.ONE_MINUS_DST_ALPHA,[Jd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[jd]:i.CONSTANT_ALPHA,[Qd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ve(L,$,J,le,T,P,H,G,F,ee){if(L===Yi){g===!0&&(Fe(i.BLEND),g=!1);return}if(g===!1&&(ye(i.BLEND),g=!0),L!==Fd){if(L!==p||ee!==C){if((_!==ks||E!==ks)&&(i.blendEquation(i.FUNC_ADD),_=ks,E=ks),ee)switch(L){case Ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.ONE,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xc:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",L);break}S=null,y=null,M=null,x=null,b.set(0,0,0),I=0,p=L,C=ee}return}T=T||$,P=P||J,H=H||le,($!==_||T!==E)&&(i.blendEquationSeparate(ve[$],ve[T]),_=$,E=T),(J!==S||le!==y||P!==M||H!==x)&&(i.blendFuncSeparate(me[J],me[le],me[P],me[H]),S=J,y=le,M=P,x=H),(G.equals(b)===!1||F!==I)&&(i.blendColor(G.r,G.g,G.b,F),b.copy(G),I=F),p=L,C=!1}function Ge(L,$){L.side===rn?Fe(i.CULL_FACE):ye(i.CULL_FACE);let J=L.side===Mn;$&&(J=!J),We(J),L.blending===Ar&&L.transparent===!1?Ve(Yi):Ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let le=L.stencilWrite;o.setTest(le),le&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),bt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){U!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),U=L)}function ke(L){L!==Dd?(ye(i.CULL_FACE),L!==X&&(L===Wc?i.cullFace(i.BACK):L===Nd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),X=L}function dt(L){L!==j&&(q&&i.lineWidth(L),j=L)}function bt(L,$,J){L?(ye(i.POLYGON_OFFSET_FILL),(D!==$||O!==J)&&(D=$,O=J,a.getReversed()&&($=-$,J=-J),i.polygonOffset($,J))):Fe(i.POLYGON_OFFSET_FILL)}function Nt(L){L?ye(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function nn(L){L===void 0&&(L=i.TEXTURE0+Z-1),Y!==L&&(i.activeTexture(L),Y=L)}function gt(L,$,J){J===void 0&&(Y===null?J=i.TEXTURE0+Z-1:J=Y);let le=ie[J];le===void 0&&(le={type:void 0,texture:void 0},ie[J]=le),(le.type!==L||le.texture!==$)&&(Y!==J&&(i.activeTexture(J),Y=J),i.bindTexture(L,$||Me[L]),le.type=L,le.texture=$)}function Q(){let L=ie[Y];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Zt(){try{i.compressedTexImage2D(...arguments)}catch(L){lt("WebGLState:",L)}}function Ut(){try{i.compressedTexImage3D(...arguments)}catch(L){lt("WebGLState:",L)}}function Ct(){try{i.texSubImage2D(...arguments)}catch(L){lt("WebGLState:",L)}}function we(){try{i.texSubImage3D(...arguments)}catch(L){lt("WebGLState:",L)}}function Ot(){try{i.compressedTexSubImage2D(...arguments)}catch(L){lt("WebGLState:",L)}}function $e(){try{i.compressedTexSubImage3D(...arguments)}catch(L){lt("WebGLState:",L)}}function it(){try{i.texStorage2D(...arguments)}catch(L){lt("WebGLState:",L)}}function N(){try{i.texStorage3D(...arguments)}catch(L){lt("WebGLState:",L)}}function w(){try{i.texImage2D(...arguments)}catch(L){lt("WebGLState:",L)}}function re(){try{i.texImage3D(...arguments)}catch(L){lt("WebGLState:",L)}}function Se(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function pe(L,$){u[L]!==$&&(i.pixelStorei(L,$),u[L]=$)}function Ae(L){ne.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function Re(L){_e.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function A(L,$){let J=c.get($);J===void 0&&(J=new WeakMap,c.set($,J));let le=J.get(L);le===void 0&&(le=i.getUniformBlockIndex($,L.name),i.uniformBlockBinding($,le,le),J.set(L,le))}function W(L,$,J){let T=c.get($).get(L);l[T]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,T,J),l[T]=J)}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,ie={},d={},l={},f=new WeakMap,m=[],v=null,g=!1,p=null,_=null,S=null,y=null,E=null,M=null,x=null,b=new Ee(0,0,0),I=0,C=!1,U=null,X=null,j=null,D=null,O=null,ne.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ye,disable:Fe,bindFramebuffer:Ye,drawBuffers:Te,useProgram:tt,setBlending:Ve,setMaterial:Ge,setFlipSided:We,setCullFace:ke,setLineWidth:dt,setPolygonOffset:bt,setScissorTest:Nt,activeTexture:nn,bindTexture:gt,unbindTexture:Q,compressedTexImage2D:Zt,compressedTexImage3D:Ut,texImage2D:w,texImage3D:re,pixelStorei:pe,getParameter:Se,updateUBOMapping:A,uniformBlockBinding:W,texStorage2D:it,texStorage3D:N,texSubImage2D:Ct,texSubImage3D:we,compressedTexSubImage2D:Ot,compressedTexSubImage3D:$e,scissor:Ae,viewport:Re,reset:se}}function iy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,v=new FinalizationRegistry(N=>m.delete(N)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(N,w){return g?new OffscreenCanvas(N,w):pr("canvas")}function _(N,w,re){let Se=1,pe=it(N);if((pe.width>re||pe.height>re)&&(Se=re/Math.max(pe.width,pe.height)),Se<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Ae=Math.floor(Se*pe.width),Re=Math.floor(Se*pe.height);d===void 0&&(d=p(Ae,Re));let A=w?p(Ae,Re):d;return A.width=Ae,A.height=Re,A.getContext("2d").drawImage(N,0,0,Ae,Re),je("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ae+"x"+Re+")."),A}else return"data"in N&&je("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),N;return N}function S(N){return N.generateMipmaps}function y(N){i.generateMipmap(N)}function E(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(N,w,re,Se,pe,Ae=!1){if(N!==null){if(i[N]!==void 0)return i[N];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Re;Se&&(Re=e.get("EXT_texture_norm16"),Re||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let A=w;if(w===i.RED&&(re===i.FLOAT&&(A=i.R32F),re===i.HALF_FLOAT&&(A=i.R16F),re===i.UNSIGNED_BYTE&&(A=i.R8),re===i.UNSIGNED_SHORT&&Re&&(A=Re.R16_EXT),re===i.SHORT&&Re&&(A=Re.R16_SNORM_EXT)),w===i.RED_INTEGER&&(re===i.UNSIGNED_BYTE&&(A=i.R8UI),re===i.UNSIGNED_SHORT&&(A=i.R16UI),re===i.UNSIGNED_INT&&(A=i.R32UI),re===i.BYTE&&(A=i.R8I),re===i.SHORT&&(A=i.R16I),re===i.INT&&(A=i.R32I)),w===i.RG&&(re===i.FLOAT&&(A=i.RG32F),re===i.HALF_FLOAT&&(A=i.RG16F),re===i.UNSIGNED_BYTE&&(A=i.RG8),re===i.UNSIGNED_SHORT&&Re&&(A=Re.RG16_EXT),re===i.SHORT&&Re&&(A=Re.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(re===i.UNSIGNED_BYTE&&(A=i.RG8UI),re===i.UNSIGNED_SHORT&&(A=i.RG16UI),re===i.UNSIGNED_INT&&(A=i.RG32UI),re===i.BYTE&&(A=i.RG8I),re===i.SHORT&&(A=i.RG16I),re===i.INT&&(A=i.RG32I)),w===i.RGB_INTEGER&&(re===i.UNSIGNED_BYTE&&(A=i.RGB8UI),re===i.UNSIGNED_SHORT&&(A=i.RGB16UI),re===i.UNSIGNED_INT&&(A=i.RGB32UI),re===i.BYTE&&(A=i.RGB8I),re===i.SHORT&&(A=i.RGB16I),re===i.INT&&(A=i.RGB32I)),w===i.RGBA_INTEGER&&(re===i.UNSIGNED_BYTE&&(A=i.RGBA8UI),re===i.UNSIGNED_SHORT&&(A=i.RGBA16UI),re===i.UNSIGNED_INT&&(A=i.RGBA32UI),re===i.BYTE&&(A=i.RGBA8I),re===i.SHORT&&(A=i.RGBA16I),re===i.INT&&(A=i.RGBA32I)),w===i.RGB&&(re===i.UNSIGNED_SHORT&&Re&&(A=Re.RGB16_EXT),re===i.SHORT&&Re&&(A=Re.RGB16_SNORM_EXT),re===i.UNSIGNED_INT_5_9_9_9_REV&&(A=i.RGB9_E5),re===i.UNSIGNED_INT_10F_11F_11F_REV&&(A=i.R11F_G11F_B10F)),w===i.RGBA){let W=Ae?ea:xt.getTransfer(pe);re===i.FLOAT&&(A=i.RGBA32F),re===i.HALF_FLOAT&&(A=i.RGBA16F),re===i.UNSIGNED_BYTE&&(A=W===Bt?i.SRGB8_ALPHA8:i.RGBA8),re===i.UNSIGNED_SHORT&&Re&&(A=Re.RGBA16_EXT),re===i.SHORT&&Re&&(A=Re.RGBA16_SNORM_EXT),re===i.UNSIGNED_SHORT_4_4_4_4&&(A=i.RGBA4),re===i.UNSIGNED_SHORT_5_5_5_1&&(A=i.RGB5_A1)}return(A===i.R16F||A===i.R32F||A===i.RG16F||A===i.RG32F||A===i.RGBA16F||A===i.RGBA32F)&&e.get("EXT_color_buffer_float"),A}function x(N,w){let re;return N?w===null||w===hi||w===Vs?re=i.DEPTH24_STENCIL8:w===Jn?re=i.DEPTH32F_STENCIL8:w===Ir&&(re=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===hi||w===Vs?re=i.DEPTH_COMPONENT24:w===Jn?re=i.DEPTH_COMPONENT32F:w===Ir&&(re=i.DEPTH_COMPONENT16),re}function b(N,w){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Yt&&N.minFilter!==un?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function I(N){let w=new WeakRef(N);n.get(N).__ref=w,m.add(w),v.register(N,w,w)}function C(N){let w=n.get(N).__ref;w!==void 0&&(m.delete(w),v.unregister(w))}function U(N){j(N.target)}function X(N){D(N.target)}function j(N){N.removeEventListener("dispose",U),C(N),Z(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&u.delete(N)}function D(N){N.removeEventListener("dispose",X),C(N),B(N)}function O(){for(let N of m){let w=N.deref();w!==void 0&&(w.isRenderTarget===!0?D(w):j(w))}m.clear(),u.clear()}function Z(N){let w=n.get(N);if(w.__webglInit===void 0)return;let re=N.source,Se=f.get(re);if(Se){let pe=Se[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&q(N),Object.keys(Se).length===0&&f.delete(re)}n.remove(N)}function q(N){let w=n.get(N);i.deleteTexture(w.__webglTexture);let re=N.source,Se=f.get(re);delete Se[w.__cacheKey],a.memory.textures--}function B(N){let w=n.get(N);w.__depthDisposeCallback&&w.__depthDisposeCallback();let re=N.depthTexture;if(re&&re.renderTarget===N&&j(re),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let Ae=0;Ae<w.__webglFramebuffer[pe].length;Ae++)i.deleteFramebuffer(w.__webglFramebuffer[pe][Ae]);else i.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)i.deleteFramebuffer(w.__webglFramebuffer[pe]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Se=N.textures;for(let pe=0,Ae=Se.length;pe<Ae;pe++){let Re=n.get(Se[pe]);Re.__webglTexture&&(i.deleteTexture(Re.__webglTexture),a.memory.textures--),n.remove(Se[pe])}n.remove(N)}let k=0;function Y(){k=0}function ie(){return k}function te(N){k=N}function xe(){let N=k;return N>=s.maxTextures&&je("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,N}function ne(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.mipmapsAutoUpdate),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function _e(N,w){let re=n.get(N);if(N.isVideoTexture&&Ot(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&re.__version!==N.version){let Se=N.image;if(Se===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(re,N,w);return}}else N.isExternalTexture&&(re.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,re.__webglTexture,i.TEXTURE0+w)}function fe(N,w){let re=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&re.__version!==N.version){Ge(re,N,w);return}else N.isExternalTexture&&(re.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,re.__webglTexture,i.TEXTURE0+w)}function Me(N,w){let re=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&re.__version!==N.version){Ge(re,N,w);return}t.bindTexture(i.TEXTURE_3D,re.__webglTexture,i.TEXTURE0+w)}function ye(N,w){let re=n.get(N);if(N.version>0&&re.__version!==N.version){We(re,N,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture,i.TEXTURE0+w)}let Fe={[Tn]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[dr]:i.MIRRORED_REPEAT},Ye={[Yt]:i.NEAREST,[Jo]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Te={[hf]:i.NEVER,[dh]:i.ALWAYS,[uf]:i.LESS,[hh]:i.LEQUAL,[df]:i.EQUAL,[uh]:i.GEQUAL,[ff]:i.GREATER,[pf]:i.NOTEQUAL};function tt(N,w){if(w.type===Jn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===un||w.magFilter===Cr||w.magFilter===Gs||w.magFilter===Vn||w.minFilter===un||w.minFilter===Cr||w.minFilter===Gs||w.minFilter===Vn)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Fe[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Fe[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Fe[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Ye[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Ye[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Te[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yt||w.minFilter!==Gs&&w.minFilter!==Vn||w.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let re=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ve(N,w){let re=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",U),I(w));let Se=w.source,pe=f.get(Se);pe===void 0&&(pe={},f.set(Se,pe));let Ae=ne(w);if(Ae!==N.__cacheKey){pe[Ae]===void 0&&(pe[Ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,re=!0),pe[Ae].usedTimes++;let Re=pe[N.__cacheKey];Re!==void 0&&(pe[N.__cacheKey].usedTimes--,Re.usedTimes===0&&q(w)),N.__cacheKey=Ae,N.__webglTexture=pe[Ae].texture}return re}function me(N,w,re){return Math.floor(Math.floor(N/re)/w)}function Ve(N,w,re,Se){let Ae=N.updateRanges;if(Ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,re,Se,w.data);else{Ae.sort((L,$)=>L.start-$.start);let Re=0;for(let L=1;L<Ae.length;L++){let $=Ae[Re],J=Ae[L],le=$.start+$.count,T=me(J.start,w.width,4),P=me($.start,w.width,4);J.start<=le+1&&T===P&&me(J.start+J.count-1,w.width,4)===T?$.count=Math.max($.count,J.start+J.count-$.start):(++Re,Ae[Re]=J)}Ae.length=Re+1;let A=t.getParameter(i.UNPACK_ROW_LENGTH),W=t.getParameter(i.UNPACK_SKIP_PIXELS),se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let L=0,$=Ae.length;L<$;L++){let J=Ae[L],le=Math.floor(J.start/4),T=Math.ceil(J.count/4),P=le%w.width,H=Math.floor(le/w.width),G=T,F=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,P),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,P,H,G,F,re,Se,w.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,A),t.pixelStorei(i.UNPACK_SKIP_PIXELS,W),t.pixelStorei(i.UNPACK_SKIP_ROWS,se)}}function Ge(N,w,re){let Se=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Se=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Se=i.TEXTURE_3D);let pe=ve(N,w),Ae=w.source;t.bindTexture(Se,N.__webglTexture,i.TEXTURE0+re);let Re=n.get(Ae);if(Ae.version!==Re.__version||pe===!0){if(t.activeTexture(i.TEXTURE0+re),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let F=xt.getPrimaries(xt.workingColorSpace),ee=w.colorSpace===Ki?null:xt.getPrimaries(w.colorSpace),he=w.colorSpace===Ki||F===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let W=_(w.image,!1,s.maxTextureSize);W=$e(w,W);let se=r.convert(w.format,w.colorSpace),L=r.convert(w.type),$=M(w.internalFormat,se,L,w.normalized,w.colorSpace,w.isVideoTexture);tt(Se,w);let J,le=w.mipmaps,T=w.isVideoTexture!==!0,P=Re.__version===void 0||pe===!0,H=Ae.dataReady,G=b(w,W);if(w.isDepthTexture)$=x(w.format===Zi,w.type),P&&(T?t.texStorage2D(i.TEXTURE_2D,1,$,W.width,W.height):t.texImage2D(i.TEXTURE_2D,0,$,W.width,W.height,0,se,L,null));else if(w.isDataTexture)if(le.length>0){T&&P&&t.texStorage2D(i.TEXTURE_2D,G,$,le[0].width,le[0].height);for(let F=0,ee=le.length;F<ee;F++)J=le[F],T?H&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,J.width,J.height,se,L,J.data):t.texImage2D(i.TEXTURE_2D,F,$,J.width,J.height,0,se,L,J.data);w.generateMipmaps=!1}else T?(P&&t.texStorage2D(i.TEXTURE_2D,G,$,W.width,W.height),H&&Ve(w,W,se,L)):t.texImage2D(i.TEXTURE_2D,0,$,W.width,W.height,0,se,L,W.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){T&&P&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,$,le[0].width,le[0].height,W.depth);for(let F=0,ee=le.length;F<ee;F++)if(J=le[F],w.format!==ei)if(se!==null)if(T){if(H)if(w.layerUpdates.size>0){let he=Sh(J.width,J.height,w.format,w.type);for(let ce of w.layerUpdates){let Ie=J.data.subarray(ce*he/J.data.BYTES_PER_ELEMENT,(ce+1)*he/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,ce,J.width,J.height,1,se,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,J.width,J.height,W.depth,se,J.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,$,J.width,J.height,W.depth,0,J.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else T?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,J.width,J.height,W.depth,se,L,J.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,$,J.width,J.height,W.depth,0,se,L,J.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{T&&P&&t.texStorage2D(i.TEXTURE_2D,G,$,le[0].width,le[0].height);for(let F=0,ee=le.length;F<ee;F++)J=le[F],w.format!==ei?se!==null?T?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,J.width,J.height,se,J.data):t.compressedTexImage2D(i.TEXTURE_2D,F,$,J.width,J.height,0,J.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):T?H&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,J.width,J.height,se,L,J.data):t.texImage2D(i.TEXTURE_2D,F,$,J.width,J.height,0,se,L,J.data)}else if(w.isDataArrayTexture)if(T){if(P&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,$,W.width,W.height,W.depth),H)if(w.layerUpdates.size>0){let F=Sh(W.width,W.height,w.format,w.type);for(let ee of w.layerUpdates){let he=W.data.subarray(ee*F/W.data.BYTES_PER_ELEMENT,(ee+1)*F/W.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,W.width,W.height,1,se,L,he)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,se,L,W.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$,W.width,W.height,W.depth,0,se,L,W.data);else if(w.isData3DTexture)T?(P&&t.texStorage3D(i.TEXTURE_3D,G,$,W.width,W.height,W.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,se,L,W.data)):t.texImage3D(i.TEXTURE_3D,0,$,W.width,W.height,W.depth,0,se,L,W.data);else if(w.isFramebufferTexture){if(P)if(T)t.texStorage2D(i.TEXTURE_2D,G,$,W.width,W.height);else{let F=W.width,ee=W.height;for(let he=0;he<G;he++)t.texImage2D(i.TEXTURE_2D,he,$,F,ee,0,se,L,null),F>>=1,ee>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let F=i.canvas;if(F.hasAttribute("layoutsubtree")||F.setAttribute("layoutsubtree","true"),W.parentNode!==F){F.appendChild(W),u.add(w),F.onpaint=ee=>{let he=ee.changedElements;for(let ce of u)he.includes(ce.image)&&(ce.needsUpdate=!0)},F.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,W);else{let he=i.RGBA,ce=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,he,ce,Ie,W)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(T&&P){let F=it(le[0]);t.texStorage2D(i.TEXTURE_2D,G,$,F.width,F.height)}for(let F=0,ee=le.length;F<ee;F++)J=le[F],T?H&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,se,L,J):t.texImage2D(i.TEXTURE_2D,F,$,se,L,J);w.generateMipmaps=!1}else if(T){if(P){let F=it(W);t.texStorage2D(i.TEXTURE_2D,G,$,F.width,F.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,L,W)}else t.texImage2D(i.TEXTURE_2D,0,$,se,L,W);S(w)&&w.mipmapsAutoUpdate===!0&&y(Se),Re.__version=Ae.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function We(N,w,re){if(w.image.length!==6)return;let Se=ve(N,w),pe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+re);let Ae=n.get(pe);if(pe.version!==Ae.__version||Se===!0){t.activeTexture(i.TEXTURE0+re);let Re=xt.getPrimaries(xt.workingColorSpace),A=w.colorSpace===Ki?null:xt.getPrimaries(w.colorSpace),W=w.colorSpace===Ki||Re===A?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let se=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,$=[];for(let ce=0;ce<6;ce++)!se&&!L?$[ce]=_(w.image[ce],!0,s.maxCubemapSize):$[ce]=L?w.image[ce].image:w.image[ce],$[ce]=$e(w,$[ce]);let J=$[0],le=r.convert(w.format,w.colorSpace),T=r.convert(w.type),P=M(w.internalFormat,le,T,w.normalized,w.colorSpace),H=w.isVideoTexture!==!0,G=Ae.__version===void 0||Se===!0,F=pe.dataReady,ee=b(w,J);tt(i.TEXTURE_CUBE_MAP,w);let he;if(w.isDepthTexture){if(P=x(w.format===Zi,w.type),G)if(H)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,P,J.width,J.height);else for(let ce=0;ce<6;ce++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,P,J.width,J.height,0,le,T,null)}else if(se){H&&G&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,P,J.width,J.height);for(let ce=0;ce<6;ce++){he=$[ce].mipmaps;for(let Ie=0;Ie<he.length;Ie++){let He=he[Ie];w.format!==ei?le!==null?H?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,He.width,He.height,le,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,P,He.width,He.height,0,He.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,He.width,He.height,le,T,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,P,He.width,He.height,0,le,T,He.data)}}}else{if(he=w.mipmaps,H&&G){he.length>0&&ee++;let ce=it($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,P,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(L){H?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,$[ce].width,$[ce].height,le,T,$[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,P,$[ce].width,$[ce].height,0,le,T,$[ce].data);for(let Ie=0;Ie<he.length;Ie++){let ft=he[Ie].image[ce].image;H?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,ft.width,ft.height,le,T,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,P,ft.width,ft.height,0,le,T,ft.data)}}else{H?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,le,T,$[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,P,le,T,$[ce]);for(let Ie=0;Ie<he.length;Ie++){let He=he[Ie];H?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,le,T,He.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,P,le,T,He.image[ce])}}}S(w)&&w.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),Ae.__version=pe.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function ke(N,w,re,Se,pe,Ae){let Re=r.convert(re.format,re.colorSpace),A=r.convert(re.type),W=M(re.internalFormat,Re,A,re.normalized,re.colorSpace),se=n.get(w),L=n.get(re);if(L.__renderTarget=w,!se.__hasExternalTextures){let $=Math.max(1,w.width>>Ae),J=Math.max(1,w.height>>Ae);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ae,W,$,J,w.depth,0,Re,A,null):t.texImage2D(pe,Ae,W,$,J,0,Re,A,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),we(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,pe,L.__webglTexture,0,Ct(w)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Se,pe,L.__webglTexture,Ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(N,w,re){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){let Se=w.depthTexture,pe=Se&&Se.isDepthTexture?Se.type:null,Ae=x(w.stencilBuffer,pe),Re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;we(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct(w),Ae,w.width,w.height):re?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct(w),Ae,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,N)}else{let Se=w.textures;for(let pe=0;pe<Se.length;pe++){let Ae=Se[pe],Re=r.convert(Ae.format,Ae.colorSpace),A=r.convert(Ae.type),W=M(Ae.internalFormat,Re,A,Ae.normalized,Ae.colorSpace);we(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct(w),W,w.width,w.height):re?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct(w),W,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,W,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(N,w,re){let Se=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=n.get(w.depthTexture);pe.__renderTarget=w;let Ae=Se?w.depthTexture.image[0]:w.depthTexture.image;(!pe.__webglTexture||Ae.width!==w.width||Ae.height!==w.height)&&(Ae.width=w.width,Ae.height=w.height,w.depthTexture.needsUpdate=!0),Se?ye(w.depthTexture,0):_e(w.depthTexture,0);let Re=pe.__webglTexture,A=Ct(w),W=Se?i.TEXTURE_CUBE_MAP_POSITIVE_X+re:i.TEXTURE_2D,se=w.depthTexture.format===Zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Bi)we(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,W,Re,0,A):i.framebufferTexture2D(i.FRAMEBUFFER,se,W,Re,0);else if(w.depthTexture.format===Zi)we(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,W,Re,0,A):i.framebufferTexture2D(i.FRAMEBUFFER,se,W,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(N){let w=n.get(N),re=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let Se=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Se){let pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Se.removeEventListener("dispose",pe)};Se.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=Se}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(re)for(let Se=0;Se<6;Se++)bt(w.__webglFramebuffer[Se],N,Se);else N.texture.mipmaps.length>0?bt(w.__webglFramebuffer[0],N,0):bt(w.__webglFramebuffer,N,0);else if(re){w.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Se]),w.__webglDepthbuffer[Se]===void 0)w.__webglDepthbuffer[Se]=i.createRenderbuffer(),dt(w.__webglDepthbuffer[Se],N,!1);else{let pe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=w.__webglDepthbuffer[Se];i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,Ae)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),dt(w.__webglDepthbuffer,N,!1);else{let pe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,Ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nn(N,w,re){let Se=n.get(N);w!==void 0&&ke(Se.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),re!==void 0&&Nt(N)}function gt(N){let w=N.texture,re=n.get(N),Se=n.get(w);N.addEventListener("dispose",X),I(N);let pe=N.textures,Ae=N.isWebGLCubeRenderTarget===!0,Re=pe.length>1;if(Re||(Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture()),Se.__version=w.version,a.memory.textures++),Ae){re.__webglFramebuffer=[];for(let A=0;A<6;A++)if(w.mipmaps.length>0){re.__webglFramebuffer[A]=[];for(let W=0;W<w.mipmaps.length;W++)re.__webglFramebuffer[A][W]=i.createFramebuffer()}else re.__webglFramebuffer[A]=i.createFramebuffer()}else{if(w.mipmaps.length>0){re.__webglFramebuffer=[];for(let A=0;A<w.mipmaps.length;A++)re.__webglFramebuffer[A]=i.createFramebuffer()}else re.__webglFramebuffer=i.createFramebuffer();if(Re)for(let A=0,W=pe.length;A<W;A++){let se=n.get(pe[A]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&we(N)===!1){re.__webglMultisampledFramebuffer=i.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let A=0;A<pe.length;A++){let W=pe[A];re.__webglColorRenderbuffer[A]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,re.__webglColorRenderbuffer[A]);let se=r.convert(W.format,W.colorSpace),L=r.convert(W.type),$=M(W.internalFormat,se,L,W.normalized,W.colorSpace,N.isXRRenderTarget===!0),J=Ct(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,$,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+A,i.RENDERBUFFER,re.__webglColorRenderbuffer[A])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(re.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(re.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(i.TEXTURE_CUBE_MAP,Se.__webglTexture),tt(i.TEXTURE_CUBE_MAP,w);for(let A=0;A<6;A++)if(w.mipmaps.length>0)for(let W=0;W<w.mipmaps.length;W++)ke(re.__webglFramebuffer[A][W],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+A,W);else ke(re.__webglFramebuffer[A],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0);S(w)?y(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Re){for(let A=0,W=pe.length;A<W;A++){let se=pe[A],L=n.get(se),$=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&($=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,L.__webglTexture),tt($,se),ke(re.__webglFramebuffer,N,se,i.COLOR_ATTACHMENT0+A,$,0),S(se)&&y($)}t.unbindTexture()}else{let A=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(A=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(A,Se.__webglTexture),tt(A,w),w.mipmaps.length>0)for(let W=0;W<w.mipmaps.length;W++)ke(re.__webglFramebuffer[W],N,w,i.COLOR_ATTACHMENT0,A,W);else ke(re.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,A,0);S(w)?y(A):w.mipmaps.length>0&&i.texParameteri(A,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&Nt(N)}function Q(N){let w=N.textures;for(let re=0,Se=w.length;re<Se;re++){let pe=w[re];if(S(pe)&&pe.mipmapsAutoUpdate===!0){let Ae=E(N),Re=n.get(pe).__webglTexture;t.bindTexture(Ae,Re),y(Ae),t.unbindTexture()}}}let Zt=[];function Ut(N){if(N.samples>0){if(we(N)===!1){let w=N.textures,re=N.width,Se=N.height,pe=i.COLOR_BUFFER_BIT,Ae=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(N),A=w.length>1;if(A)for(let se=0;se<w.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let se=0;se<w.length;se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),A){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[se]);let L=n.get(w[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,re,Se,0,0,re,Se,pe,i.NEAREST),l===!0&&(Zt.length=0,Zt.push(i.COLOR_ATTACHMENT0+se),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Zt.push(Ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),A)for(let se=0;se<w.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,Re.__webglColorRenderbuffer[se]);let L=n.get(w[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ct(N){return Math.min(s.maxSamples,N.samples)}function we(N){let w=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ot(N){let w=a.render.frame;h.get(N)!==w&&(h.set(N,w),N.update())}function $e(N,w){let re=N.colorSpace,Se=N.format,pe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||re!==Nn&&re!==Ki&&(xt.getTransfer(re)===Bt?(Se!==ei||pe!==Wn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",re)),w}function it(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=xe,this.resetTextureUnits=Y,this.getTextureUnits=ie,this.setTextureUnits=te,this.setTexture2D=_e,this.setTexture2DArray=fe,this.setTexture3D=Me,this.setTextureCube=ye,this.rebindTextures=nn,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=we,this.dispose=O}function sy(i,e){function t(n,s=Ki){let r,a=xt.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===ui)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===lh)return i.RGB;if(n===ei)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===el)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===ba||n===Ea||n===wa||n===Ta)if(a===Bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===al||n===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===hl||n===ul||n===dl||n===Aa||n===fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ll||n===cl)return a===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ul)return r.COMPRESSED_R11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Aa)return r.COMPRESSED_RG11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===El||n===wl||n===Tl||n===Al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Cl||n===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return a===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Pl||n===Ra||n===Dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ay=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Hn({vertexShader:ry,fragmentShader:ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oh=class extends li{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,v=typeof XRWebGLBinding<"u",g=new Fh,p={},_=t.getContextAttributes(),S=null,y=null,E=[],M=[],x=new ot,b=null,I=null,C=new hn;C.viewport=new zt;let U=new hn;U.viewport=new zt;let X=[C,U],j=new Vo,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let _e=E[ne];return _e===void 0&&(_e=new xr,E[ne]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ne){let _e=E[ne];return _e===void 0&&(_e=new xr,E[ne]=_e),_e.getGripSpace()},this.getHand=function(ne){let _e=E[ne];return _e===void 0&&(_e=new xr,E[ne]=_e),_e.getHandSpace()};function Z(ne){let _e=M.indexOf(ne.inputSource);if(_e===-1)return;let fe=E[_e];fe!==void 0&&(fe.update(ne.inputSource,ne.frame,c||a),fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",B);for(let ne=0;ne<E.length;ne++){let _e=M[ne];_e!==null&&(M[ne]=null,E[ne].disconnect(_e))}D=null,O=null,g.reset();for(let ne in p)delete p[ne];if(e.setRenderTarget(S),f=null,d=null,u=null,s=null,y=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),I!==null){let ne=I.camera;ne.fov=I.fov,ne.zoom=I.zoom,ne.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Me=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?Zi:Bi,Me=_.stencil?Vs:hi);let Fe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Zn(d.textureWidth,d.textureHeight,{format:ei,type:Wn,depthTexture:new Hi(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Zn(f.framebufferWidth,f.framebufferHeight,{format:ei,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(ne){for(let _e=0;_e<ne.removed.length;_e++){let fe=ne.removed[_e],Me=M.indexOf(fe);Me>=0&&(M[Me]=null,E[Me].disconnect(fe))}for(let _e=0;_e<ne.added.length;_e++){let fe=ne.added[_e],Me=M.indexOf(fe);if(Me===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=M.length){M.push(fe),Me=Fe;break}else if(M[Fe]===null){M[Fe]=fe,Me=Fe;break}if(Me===-1)break}let ye=E[Me];ye&&ye.connect(fe)}}function k(ne,_e){_e===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(_e.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let _e=ne.near,fe=ne.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),j.near=U.near=C.near=_e,j.far=U.far=C.far=fe,(D!==j.near||O!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),D=j.near,O=j.far),j.layers.mask=ne.layers.mask|6,C.layers.mask=j.layers.mask&-5,U.layers.mask=j.layers.mask&-3;let Me=ne.parent,ye=j.cameras;k(j,Me);for(let Fe=0;Fe<ye.length;Fe++)k(ye[Fe],Me);j.projectionMatrix.copy(C.projectionMatrix),j.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&ne.isPerspectiveCamera&&(I={camera:ne,fov:ne.fov,zoom:ne.zoom}),Y(ne,j,Me)};function Y(ne,_e,fe){fe===null?ne.matrix.copy(_e.matrixWorld):(ne.matrix.copy(fe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(_e.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(_e.projectionMatrix),ne.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ts*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function(ne){return p[ne]};let ie=null;function te(ne,_e){if(h=_e.getViewerPose(c||a),m=_e,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Me=!1;fe.length!==j.cameras.length&&(j.cameras.length=0,Me=!0);for(let Te=0;Te<fe.length;Te++){let tt=fe[Te],ve=null;if(f!==null)ve=f.getViewport(tt);else{let Ve=u.getViewSubImage(d,tt);ve=Ve.viewport,Te===0&&(e.setRenderTargetTextures(y,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(y))}let me=X[Te];me===void 0&&(me=new hn,me.layers.enable(Te),me.viewport=new zt,X[Te]=me),me.matrix.fromArray(tt.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(tt.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ve.x,ve.y,ve.width,ve.height),Te===0&&(j.matrix.copy(me.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Me===!0&&j.cameras.push(me)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Te=u.getDepthInformation(fe[0]);Te&&Te.isValid&&Te.texture&&g.init(Te,s.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Te=0;Te<fe.length;Te++){let tt=fe[Te].camera;if(tt){let ve=p[tt];ve||(ve=new ua,p[tt]=ve);let me=u.getCameraImage(tt);ve.sourceTexture=me}}}}for(let fe=0;fe<E.length;fe++){let Me=M[fe],ye=E[fe];Me!==null&&ye!==void 0&&ye.update(Me,_e,c||a)}ie&&ie(ne,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),m=null}let xe=new Wf;xe.setAnimationLoop(te),this.setAnimationLoop=function(ne){ie=ne},this.dispose=function(){}}},oy=new Qe,ep=new ht;ep.set(-1,0,0,0,1,0,0,0,1);function ly(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,yh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,S,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=e.get(p),S=_.envMap,y=_.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ep),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cy(i,e,t,n){let s={},r={};function a(_,S){let y=S.program;n.uniformBlockBinding(_,y,s[_.id])}function o(_,S){let y=s[_.id];y===void 0&&(m(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",g));let E=S.program;n.updateUBOMapping(_,E);let M=e.render.frame;r[_.id]!==M&&(c(_),r[_.id]=M)}function l(_){let S=i.createBuffer(),y=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(_){let S=s[_.id],y=_.uniforms,E=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let M=0,x=y.length;M<x;M++){let b=y[M];if(Array.isArray(b))for(let I=0,C=b.length;I<C;I++)h(b[I],M,I,E);else h(b,M,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,S,y,E){if(d(_,S,y,E)===!0){let M=_.__offset,x=_.value;if(Array.isArray(x)){let b=0;for(let I=0;I<x.length;I++){let C=x[I],U=v(C,!0);u(C,_.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function u(_,S,y){typeof _=="number"||typeof _=="boolean"?S[y]=_:_.isMatrix3?(S[y]=_.elements[0],S[y+1]=_.elements[1],S[y+2]=_.elements[2],S[y+3]=0,S[y+4]=_.elements[3],S[y+5]=_.elements[4],S[y+6]=_.elements[5],S[y+7]=0,S[y+8]=_.elements[6],S[y+9]=_.elements[7],S[y+10]=_.elements[8],S[y+11]=0):ArrayBuffer.isView(_)?S.set(_.subarray(0,S.length-y),y):_.toArray(S,y)}function d(_,S,y,E){let M=_.value,x=S+"_"+y;if(Array.isArray(M)){E[x]===void 0&&(E[x]=[]);let b=E[x],I=!1;for(let C=0;C<M.length;C++)f(M[C],b,C)===!0&&(I=!0);return I}return f(M,E,x)}function f(_,S,y){if(S[y]===void 0)return typeof _=="number"||typeof _=="boolean"?S[y]=_:ArrayBuffer.isView(_)?S[y]=_.slice():S[y]=_.clone(),!0;{let E=S[y];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return S[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function m(_){let S=_.uniforms,y=0,E=16;for(let x=0,b=S.length;x<b;x++){let I=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,U=I.length;C<U;C++){let X=I[C],j=Array.isArray(X.value)?X.value:[X.value],D=Array.isArray(S[x])||Array.isArray(X.value),O=y;for(let q=0,B=j.length;q<B;q++){let k=j[q],Y=v(k,D),ie=y%E,te=ie%Y.boundary,xe=ie+te;y+=te,xe!==0&&E-xe<Y.storage&&(y+=E-xe),q===0&&(O=y),y+=Y.storage}let Z=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new Z((y-O)/Float32Array.BYTES_PER_ELEMENT),X.__offset=O}}let M=y%E;return M>0&&(y+=E-M),_.__size=y,_.__cache={},this}function v(_,S){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):je("WebGLRenderer: Unsupported uniform value type.",_),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(_){let S=_.target;S.removeEventListener("dispose",g),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:p}}var hy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function uy(){return wi===null&&(wi=new vr(hy,16,16,hs,ui),wi.name="DFG_LUT",wi.minFilter=un,wi.magFilter=un,wi.wrapS=zn,wi.wrapT=zn,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Hl=class{constructor(e={}){let{canvas:t=mf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Wn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let v=f,g=new Set([il,nl,tl]),p=new Set([Wn,hi,Ir,Vs,jo,Qo]),_=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,M=null,x=[],b=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,X=null,j=null,D=null,O=null;this._outputColorSpace=qt;let Z=0,q=0,B=null,k=-1,Y=null,ie=new zt,te=new zt,xe=null,ne=new Ee(0),_e=0,fe=t.width,Me=t.height,ye=1,Fe=null,Ye=null,Te=new zt(0,0,fe,Me),tt=new zt(0,0,fe,Me),ve=!1,me=new as,Ve=new Lo,Ge=!1,We=!1,ke=new Qe,dt=new z,bt=new zt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nn=!1;function gt(){return B===null?ye:1}let Q=n;function Zt(R,K){return t.getContext(R,K)}let Ut,Ct,we,Ot,$e,it,N,w,re,Se,pe,Ae,Re,A,W,se,L,$,J,le,T,P,H;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),Q===null){let K="webgl2";if(Q=Zt(K,R),Q===null)throw Zt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}G()}catch(R){throw t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),lt("WebGLRenderer: "+R.message),R}function G(){Ut=new Sx(Q),Ut.init(),T=new sy(Q,Ut),Ct=new ux(Q,Ut,e,T),we=new ny(Q,Ut),Ct.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),j=Q.createFramebuffer(),D=Q.createFramebuffer(),O=Q.createFramebuffer(),Ot=new wx(Q),$e=new G_,it=new iy(Q,Ut,we,$e,Ct,T,Ot),N=new Mx(C),w=new A0(Q),P=new cx(Q,w),re=new bx(Q,w,Ot,P),Se=new Ax(Q,re,w,P,Ot),$=new Tx(Q,Ct,it),W=new dx($e),pe=new H_(C,N,Ut,Ct,P,W),Ae=new ly(C,$e),Re=new W_,A=new J_(Ut),L=new lx(C,N,we,Se,m,l),se=new ty(C,Se,Ct),H=new cy(Q,Ot,Ct,we),J=new hx(Q,Ut,Ot),le=new Ex(Q,Ut,Ot),Ot.programs=pe.programs,C.capabilities=Ct,C.extensions=Ut,C.properties=$e,C.renderLists=Re,C.shadowMap=se,C.state=we,C.info=Ot}v!==Wn&&(I=new Cx(v,t.width,t.height,o,s,r));let F=new Oh(C,Q);this.xr=F,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let R=Ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(R){R!==void 0&&(ye=R,this.setSize(fe,Me,!1))},this.getSize=function(R){return R.set(fe,Me)},this.setSize=function(R,K,ue=!0){if(F.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=R,Me=K,t.width=Math.floor(R*ye),t.height=Math.floor(K*ye),ue===!0&&(t.style.width=R+"px",t.style.height=K+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(fe*ye,Me*ye).floor()},this.setDrawingBufferSize=function(R,K,ue){fe=R,Me=K,ye=ue,t.width=Math.floor(R*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,R,K)},this.setEffects=function(R){if(v===Wn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let K=0;K<R.length;K++)if(R[K].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ie)},this.getViewport=function(R){return R.copy(Te)},this.setViewport=function(R,K,ue,ae){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,K,ue,ae),we.viewport(ie.copy(Te).multiplyScalar(gt()).round())},this.getScissor=function(R){return R.copy(tt)},this.setScissor=function(R,K,ue,ae){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,K,ue,ae),we.scissor(te.copy(tt).multiplyScalar(gt()).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(R){we.setScissorTest(ve=R)},this.setOpaqueSort=function(R){Fe=R},this.setTransparentSort=function(R){Ye=R},this.getClearColor=function(R){return R.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ue=!0){let ae=0;if(R){let oe=!1;if(B!==null){let Ne=B.texture.format;oe=g.has(Ne)}if(oe){let Ne=B.texture.type,qe=p.has(Ne),Le=L.getClearColor(),ze=L.getClearAlpha(),Je=Le.r,ut=Le.g,Et=Le.b;qe?(_[0]=Je,_[1]=ut,_[2]=Et,_[3]=ze,Q.clearBufferuiv(Q.COLOR,0,_)):(S[0]=Je,S[1]=ut,S[2]=Et,S[3]=ze,Q.clearBufferiv(Q.COLOR,0,S))}else ae|=Q.COLOR_BUFFER_BIT}K&&(ae|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ae|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Q.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),X=R},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),L.dispose(),Re.dispose(),A.dispose(),it.dispose(),$e.dispose(),N.dispose(),Se.dispose(),re.dispose(),P.dispose(),H.dispose(),pe.dispose(),F.dispose(),F.removeEventListener("sessionstart",Ou),F.removeEventListener("sessionend",Bu),ps.stop()};function ee(R){R.preventDefault(),ta("WebGLRenderer: Context Lost."),U=!0}function he(){ta("WebGLRenderer: Context Restored."),U=!1;let R=Ot.autoReset,K=se.enabled,ue=se.autoUpdate,ae=se.needsUpdate,oe=se.type;G(),Ot.autoReset=R,se.enabled=K,se.autoUpdate=ue,se.needsUpdate=ae,se.type=oe}function ce(R){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ie(R){let K=R.target;K.removeEventListener("dispose",Ie),He(K)}function He(R){ft(R),$e.remove(R)}function ft(R){let K=$e.get(R).programs;K!==void 0&&(K.forEach(function(ue){pe.releaseProgram(ue)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ue,ae,oe,Ne){K===null&&(K=Nt);let qe=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Le=vm(R,K,ue,ae,oe);we.setMaterial(ae,qe);let ze=ue.index,Je=1;if(ae.wireframe===!0){if(ze=re.getWireframeAttribute(ue),ze===void 0)return;Je=2}let ut=ue.drawRange,Et=ue.attributes.position,Ze=ut.start*Je,wt=(ut.start+ut.count)*Je;Ne!==null&&(Ze=Math.max(Ze,Ne.start*Je),wt=Math.min(wt,(Ne.start+Ne.count)*Je)),ze!==null?(Ze=Math.max(Ze,0),wt=Math.min(wt,ze.count)):Et!=null&&(Ze=Math.max(Ze,0),wt=Math.min(wt,Et.count));let on=wt-Ze;if(on<0||on===1/0)return;P.setup(oe,ae,Le,ue,ze);let Wt,Gt=J;if(ze!==null&&(Wt=w.get(ze),Gt=le,Gt.setIndex(Wt)),oe.isMesh)ae.wireframe===!0?(we.setLineWidth(ae.wireframeLinewidth*gt()),Gt.setMode(Q.LINES)):Gt.setMode(Q.TRIANGLES);else if(oe.isLine){let Sn=ae.linewidth;Sn===void 0&&(Sn=1),we.setLineWidth(Sn*gt()),oe.isLineSegments?Gt.setMode(Q.LINES):oe.isLineLoop?Gt.setMode(Q.LINE_LOOP):Gt.setMode(Q.LINE_STRIP)}else oe.isPoints?Gt.setMode(Q.POINTS):oe.isSprite&&Gt.setMode(Q.TRIANGLES);if(oe.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Gt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let Sn=oe._multiDrawStarts,Ke=oe._multiDrawCounts,Pn=oe._multiDrawCount,Ft=ze?w.get(ze).bytesPerElement:1,ms=$e.get(ae).currentProgram.getUniforms();for(let bn=0;bn<Pn;bn++)ms.setValue(Q,"_gl_DrawID",bn),Gt.render(Sn[bn]/Ft,Ke[bn])}else if(oe.isInstancedMesh)Gt.renderInstances(Ze,on,oe.count);else if(ue.isInstancedBufferGeometry){let Sn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ke=Math.min(ue.instanceCount,Sn);Gt.renderInstances(Ze,on,Ke)}else Gt.render(Ze,on)};function Vt(R,K,ue,ae){X!==null&&R.isNodeMaterial&&X.setObject(ae,R),Ge===!0&&W.setState(R,ue,!1),R.transparent===!0&&R.side===rn&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,Hr(R,K,ae),R.side=Si,R.needsUpdate=!0,Hr(R,K,ae),R.side=rn):Hr(R,K,ae)}this.compile=function(R,K,ue=null){ue===null&&(ue=R),X!==null&&X.renderStart(R,K,ue),M=A.get(ue),M.init(K),b.push(M),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(K.layers)&&(M.pushLight(oe),oe.castShadow&&M.pushShadow(oe))}),R!==ue&&R.traverseVisible(function(oe){oe.isLight&&oe.layers.test(K.layers)&&(M.pushLight(oe),oe.castShadow&&M.pushShadow(oe))}),M.setupLights(),X!==null&&X.updateLights(M.state.lightsArray),We=this.localClippingEnabled,Ge=W.init(this.clippingPlanes,We),Ge===!0&&W.setGlobalState(this.clippingPlanes,K),X!==null&&se.render(M.state.shadowsArray,ue,K);let ae=new Set;return R.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let Ne=oe.material;if(Ne)if(Array.isArray(Ne))for(let qe=0;qe<Ne.length;qe++){let Le=Ne[qe];Vt(Le,ue,K,oe),ae.add(Le)}else Vt(Ne,ue,K,oe),ae.add(Ne)}),M=b.pop(),X!==null&&X.renderEnd(),ae},this.compileAsync=function(R,K,ue=null){let ae=this.compile(R,K,ue);return new Promise(oe=>{function Ne(){if(ae.forEach(function(qe){let ze=$e.get(qe).currentProgram;(ze===void 0||ze.isReady())&&ae.delete(qe)}),ae.size===0){oe(R);return}setTimeout(Ne,10)}Ut.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let an=null;function cc(R){an&&an(R)}function Ou(){ps.stop()}function Bu(){ps.start()}let ps=new Wf;ps.setAnimationLoop(cc),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(R){an=R,F.setAnimationLoop(R),R===null?ps.stop():ps.start()},F.addEventListener("sessionstart",Ou),F.addEventListener("sessionend",Bu),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;X!==null&&X.renderStart(R,K);let ue=F.enabled===!0&&F.isPresenting===!0,ae=I!==null&&(B===null||ue)&&I.begin(C,B);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(F.cameraAutoUpdate===!0&&F.updateCamera(K),K=F.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,K,B),M=A.get(R,b.length),M.init(K),M.state.textureUnits=it.getTextureUnits(),b.push(M),ke.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),K.isArrayCamera?Ve.setFromArrayCamera(K):me.setFromProjectionMatrix(ke,Qn,K.reversedDepth),We=this.localClippingEnabled,Ge=W.init(this.clippingPlanes,We),E=Re.get(R,x.length),E.init(),x.push(E),this.info.render.frame++,F.enabled===!0&&F.isPresenting===!0){let qe=C.xr.getDepthSensingMesh();qe!==null&&hc(qe,K,-1/0,C.sortObjects)}hc(R,K,0,C.sortObjects),E.finish(),X!==null&&X.updateLights(M.state.lightsArray),C.sortObjects===!0&&E.sort(Fe,Ye),nn=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,nn&&L.addToRenderList(E,R),this.info.autoReset===!0&&this.info.reset(),Ge===!0&&W.beginShadows();let oe=M.state.shadowsArray;if(se.render(oe,R,K),Ge===!0&&W.endShadows(),(ae&&I.hasRenderPass())===!1){let qe=E.opaque,Le=E.transmissive;if(M.setupLights(),K.isArrayCamera){let ze=K.cameras;if(Le.length>0)for(let Je=0,ut=ze.length;Je<ut;Je++){let Et=ze[Je];ku(qe,Le,R,Et)}nn&&L.render(R);for(let Je=0,ut=ze.length;Je<ut;Je++){let Et=ze[Je];zu(E,R,Et,Et.viewport)}}else Le.length>0&&ku(qe,Le,R,K),nn&&L.render(R),zu(E,R,K)}B!==null&&q===0&&(it.updateMultisampleRenderTarget(B),it.updateRenderTargetMipmap(B)),ae&&I.end(C),R.isScene===!0&&R.onAfterRender(C,R,K),P.resetDefaultState(),k=-1,Y=null,b.pop(),b.length>0?(M=b[b.length-1],it.setTextureUnits(M.state.textureUnits),Ge===!0&&W.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,X!==null&&X.renderEnd()};function hc(R,K,ue,ae){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){let qe=K.isArrayCamera?Ve:me;if(!R.frustumCulled||R.intersectsFrustum(qe)){ae&&bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ke);let Le=Se.update(R),ze=R.material;ze.visible&&E.push(R,Le,ze,ue,bt.z,null,K)}}else if(R.isMesh||R.isLine||R.isPoints){let qe=K.isArrayCamera?Ve:me;if(!R.frustumCulled||R.intersectsFrustum(qe)){let Le=Se.update(R),ze=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),bt.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),bt.copy(Le.boundingSphere.center)),bt.applyMatrix4(R.matrixWorld).applyMatrix4(ke)),Array.isArray(ze)){let Je=Le.groups;for(let ut=0,Et=Je.length;ut<Et;ut++){let Ze=Je[ut],wt=ze[Ze.materialIndex];wt&&wt.visible&&E.push(R,Le,wt,ue,bt.z,Ze,K)}}else ze.visible&&E.push(R,Le,ze,ue,bt.z,null,K)}}}let Ne=R.children;for(let qe=0,Le=Ne.length;qe<Le;qe++)hc(Ne[qe],K,ue,ae)}function zu(R,K,ue,ae){let{opaque:oe,transmissive:Ne,transparent:qe}=R;M.setupLightsView(ue),Ge===!0&&W.setGlobalState(C.clippingPlanes,ue),ae&&we.viewport(ie.copy(ae)),oe.length>0&&Xa(oe,K,ue),Ne.length>0&&Xa(Ne,K,ue),qe.length>0&&Xa(qe,K,ue),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ku(R,K,ue,ae){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[ae.id]===void 0){let Ze=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[ae.id]=new Zn(1,1,{generateMipmaps:!0,type:Ze?ui:Wn,minFilter:Vn,samples:Math.max(4,Ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let Ne=M.state.transmissionRenderTarget[ae.id],qe=ae.viewport||ie;Ne.setSize(qe.z*C.transmissionResolutionScale,qe.w*C.transmissionResolutionScale);let Le=C.getRenderTarget(),ze=C.getActiveCubeFace(),Je=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(ne),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),nn&&L.render(ue);let ut=C.toneMapping;C.toneMapping=bi;let Et=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),M.setupLightsView(ae),Ge===!0&&W.setGlobalState(C.clippingPlanes,ae),Xa(R,ue,ae),it.updateMultisampleRenderTarget(Ne),it.updateRenderTargetMipmap(Ne),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let wt=0,on=K.length;wt<on;wt++){let Wt=K[wt],{object:Gt,geometry:Sn,material:Ke,group:Pn}=Wt;if(Ke.side===rn&&Gt.layers.test(ae.layers)){let Ft=Ke.side;Ke.side=Mn,Ke.needsUpdate=!0,Hu(Gt,ue,ae,Sn,Ke,Pn),Ke.side=Ft,Ke.needsUpdate=!0,Ze=!0}}Ze===!0&&(it.updateMultisampleRenderTarget(Ne),it.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Le,ze,Je),C.setClearColor(ne,_e),Et!==void 0&&(ae.viewport=Et),C.toneMapping=ut}function Xa(R,K,ue){let ae=K.isScene===!0?K.overrideMaterial:null;for(let oe=0,Ne=R.length;oe<Ne;oe++){let qe=R[oe],{object:Le,geometry:ze,group:Je}=qe,ut=qe.material;ut.allowOverride===!0&&ae!==null&&(ut=ae),Le.layers.test(ue.layers)&&Hu(Le,K,ue,ze,ut,Je)}}function Hu(R,K,ue,ae,oe,Ne){X!==null&&oe.isNodeMaterial&&X.setObject(R,oe),R.onBeforeRender(C,K,ue,ae,oe,Ne),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),oe.onBeforeRender(C,K,ue,ae,R,Ne),oe.transparent===!0&&oe.side===rn&&oe.forceSinglePass===!1?(oe.side=Mn,oe.needsUpdate=!0,C.renderBufferDirect(ue,K,ae,oe,R,Ne),oe.side=Si,oe.needsUpdate=!0,C.renderBufferDirect(ue,K,ae,oe,R,Ne),oe.side=rn):C.renderBufferDirect(ue,K,ae,oe,R,Ne),R.onAfterRender(C,K,ue,ae,oe,Ne)}function Gu(R){let K=0;for(let ue of R)ue.texture!==null&&K++;return K}function Hr(R,K,ue){K.isScene!==!0&&(K=Nt);let ae=$e.get(R),oe=M.state.lights,Ne=M.state.shadowsArray,qe=oe.state.version,Le=pe.getParameters(R,oe.state,Ne,K,ue,M.state.lightProbeGridArray),ze=pe.getProgramCacheKey(Le),Je=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?K.environment:null,ae.fog=K.fog;let ut=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=N.get(R.envMap||ae.environment,ut),ae.envMapRotation=ae.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",Ie),Je=new Map,ae.programs=Je,ae.programVariants=new Map);let Et=Je.get(ze);if(Et!==void 0){if(ae.currentProgram===Et&&ae.lightsStateVersion===qe)return Wu(R,Le),Et}else Le.uniforms=pe.getUniforms(R),X!==null&&R.isNodeMaterial&&X.build(R,ue,Le),R.onBeforeCompile(Le,C),Et=pe.acquireProgram(Le,ze),Je.set(ze,Et),ae.uniforms=Le.uniforms;let Ze=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=W.uniform),Wu(R,Le),ae.needsLights=Sm(R),ae.lightsStateVersion=qe,ae.needsLights&&(Ze.ambientLightColor.value=oe.state.ambient,Ze.lightProbe.value=oe.state.probe,Ze.sunLights.value=oe.state.sun,Ze.sunLightShadows.value=oe.state.sunShadow,Ze.directionalLights.value=oe.state.directional,Ze.directionalLightShadows.value=oe.state.directionalShadow,Ze.spotLights.value=oe.state.spot,Ze.spotLightShadows.value=oe.state.spotShadow,Ze.rectAreaLights.value=oe.state.rectArea,Ze.ltc_1.value=oe.state.rectAreaLTC1,Ze.ltc_2.value=oe.state.rectAreaLTC2,Ze.pointLights.value=oe.state.point,Ze.pointLightShadows.value=oe.state.pointShadow,Ze.hemisphereLights.value=oe.state.hemi,Ze.sunShadowMatrix.value=oe.state.sunShadowMatrix,Ze.sunShadowCascade.value=oe.state.sunShadowCascade,Ze.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ze.spotLightMatrix.value=oe.state.spotLightMatrix,Ze.spotLightMap.value=oe.state.spotLightMap,Ze.pointShadowMatrix.value=oe.state.pointShadowMatrix),ae.numLightProbeGrids=Gu(M.state.lightProbeGridArray),ae.currentProgram=Et,ae.uniformsList=null,Et}function ym(R,K,ue,ae,oe){let Ne=$e.get(R),qe=Ne.currentProgram.id+","+ae+","+oe,Le=Ne.programVariants.get(qe);return Le===void 0?(Le=Hr(R,K,ue),Ne.programVariants.set(qe,Le)):(Ne.currentProgram=Le,Ne.uniformsList=null,Ne.outputColorSpace=ae,Ne.toneMapping=oe),Le}function Vu(R){if(R.uniformsList===null){let K=R.currentProgram.getUniforms();R.uniformsList=Pr.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Wu(R,K){let ue=$e.get(R);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function vm(R,K,ue,ae,oe){K.isScene!==!0&&(K=Nt),it.resetTextureUnits();let Ne=K.fog,qe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?K.environment:null,Le=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:xt.workingColorSpace,ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Je=N.get(ae.envMap||qe,ze),ut=ae.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Et=!!ue.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ze=!!ue.morphAttributes.position,wt=!!ue.morphAttributes.normal,on=!!ue.morphAttributes.color,Wt=bi;ae.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Wt=C.toneMapping);let Gt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Sn=Gt!==void 0?Gt.length:0,Ke=$e.get(ae),Pn=M.state.lights;if(Ge===!0&&(We===!0||R!==Y)){let jt=R===Y&&ae.id===k;W.setState(ae,R,jt)}let Ft=!1,ms=!1;ae.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==Pn.state.version||oe.isBatchedMesh&&Ke.batching===!1||!oe.isBatchedMesh&&Ke.batching===!0||oe.isBatchedMesh&&Ke.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&Ke.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&Ke.instancing===!1||!oe.isInstancedMesh&&Ke.instancing===!0||oe.isSkinnedMesh&&Ke.skinning===!1||!oe.isSkinnedMesh&&Ke.skinning===!0||oe.isInstancedMesh&&Ke.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ke.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ke.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ke.instancingMorph===!1&&oe.morphTexture!==null||Ke.envMap!==Je||ae.fog===!0&&Ke.fog!==Ne||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==W.numPlanes||Ke.numIntersection!==W.numIntersection)||Ke.vertexAlphas!==ut||Ke.vertexTangents!==Et||Ke.morphTargets!==Ze||Ke.morphNormals!==wt||Ke.morphColors!==on||Ke.morphTargetsCount!==Sn||Ke.numLightProbeGrids!==Gu(M.state.lightProbeGridArray)?Ft=!0:(Ke.outputColorSpace!==Le||Ke.toneMapping!==Wt)&&(ms=!0):(Ft=!0,Ke.__version=ae.version);let bn=Ke.currentProgram;(Ft===!0||ms===!0)&&(bn=ms===!0?ym(ae,K,oe,Le,Wt):Hr(ae,K,oe),X&&ae.isNodeMaterial&&X.onUpdateProgram(ae,bn,Ke));let qa=!1,$i=!1,gs=!1,Lt=bn.getUniforms(),yn=Ke.uniforms;if(we.useProgram(bn.program)&&(qa=!0,$i=!0,gs=!0),ae.id!==k&&(k=ae.id,$i=!0),qa||Y!==R){we.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Lt.setValue(Q,"projectionMatrix",R.projectionMatrix),Lt.setValue(Q,"viewMatrix",R.matrixWorldInverse);let gn=Lt.map.cameraPosition;gn!==void 0&&gn.setValue(Q,dt.setFromMatrixPosition(R.matrixWorld)),Ct.logarithmicDepthBuffer&&Lt.setValue(Q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Lt.setValue(Q,"isOrthographic",R.isOrthographicCamera===!0),Y!==R&&(Y=R,$i=!0,gs=!0)}if(Ke.needsLights&&(Pn.state.sunShadowMap.length>0&&Lt.setValue(Q,"sunShadowMap",Pn.state.sunShadowMap,it),Pn.state.directionalShadowMap.length>0&&Lt.setValue(Q,"directionalShadowMap",Pn.state.directionalShadowMap,it),Pn.state.spotShadowMap.length>0&&Lt.setValue(Q,"spotShadowMap",Pn.state.spotShadowMap,it),Pn.state.pointShadowMap.length>0&&Lt.setValue(Q,"pointShadowMap",Pn.state.pointShadowMap,it)),oe.isSkinnedMesh){Lt.setOptional(Q,oe,"bindMatrix"),Lt.setOptional(Q,oe,"bindMatrixInverse");let jt=oe.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Lt.setValue(Q,"boneTexture",jt.boneTexture,it))}oe.isBatchedMesh&&(Lt.setOptional(Q,oe,"batchingTexture"),Lt.setValue(Q,"batchingTexture",oe._matricesTexture,it),Lt.setOptional(Q,oe,"batchingIdTexture"),Lt.setValue(Q,"batchingIdTexture",oe._indirectTexture,it),Lt.setOptional(Q,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Lt.setValue(Q,"batchingColorTexture",oe._colorsTexture,it));let ii=ue.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&$.update(oe,ue,bn),($i||Ke.receiveShadow!==oe.receiveShadow)&&(Ke.receiveShadow=oe.receiveShadow,Lt.setValue(Q,"receiveShadow",oe.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&K.environment!==null&&(yn.envMapIntensity.value=K.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=uy()),$i){if(Lt.setValue(Q,"toneMappingExposure",C.toneMappingExposure),Ke.needsLights&&Mm(yn,gs),Ne&&ae.fog===!0&&Ae.refreshFogUniforms(yn,Ne),Ae.refreshMaterialUniforms(yn,ae,ye,Me,M.state.transmissionRenderTarget[R.id]),Ke.needsLights&&Ke.numLightProbeGrids>0){let jt=y,gn=0;for(let Ii of M.state.lightProbeGridArray)Ii.texture!==null&&(jt.textures[gn]=Ii.texture,jt.min[gn]=Ii.boundingBox.min,jt.max[gn]=Ii.boundingBox.max,jt.resolution[gn]=Ii.resolution,gn++);for(let Ii in jt)jt[Ii].length=gn;yn.probesSH.value=jt.textures,yn.probesMin.value=jt.min,yn.probesMax.value=jt.max,yn.probesResolution.value=jt.resolution}Pr.upload(Q,Vu(Ke),yn,it)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Pr.upload(Q,Vu(Ke),yn,it),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Lt.setValue(Q,"center",oe.center),Lt.setValue(Q,"modelViewMatrix",oe.modelViewMatrix),Lt.setValue(Q,"normalMatrix",oe.normalMatrix),Lt.setValue(Q,"modelMatrix",oe.matrixWorld),ae.uniformsGroups!==void 0){let jt=ae.uniformsGroups;for(let gn=0,Ii=jt.length;gn<Ii;gn++){let qu=jt[gn];H.update(qu,bn),H.bind(qu,bn)}}return bn}function Mm(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.sunLights.needsUpdate=K,R.sunLightShadows.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Sm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,K,ue){let ae=$e.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),$e.get(R.texture).__webglTexture=K,$e.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ue,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){let ue=$e.get(R);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,ue=0){B=R,Z=K,q=ue;let ae=null,oe=!1,Ne=!1;if(R){let Le=$e.get(R);if(Le.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(Q.FRAMEBUFFER,Le.__webglFramebuffer),ie.copy(R.viewport),te.copy(R.scissor),xe=R.scissorTest,we.viewport(ie),we.scissor(te),we.setScissorTest(xe),k=-1;return}else if(Le.__webglFramebuffer===void 0)it.setupRenderTarget(R);else if(Le.__hasExternalTextures)it.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ut=R.depthTexture;if(Le.__boundDepthTexture!==ut){if(ut!==null&&$e.has(ut)&&(R.width!==ut.image.width||R.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(R)}}let ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ne=!0);let Je=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[K])?ae=Je[K][ue]:ae=Je[K],oe=!0):R.samples>0&&it.useMultisampledRTT(R)===!1?ae=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?ae=Je[ue]:ae=Je,ie.copy(R.viewport),te.copy(R.scissor),xe=R.scissorTest}else ie.copy(Te).multiplyScalar(ye).floor(),te.copy(tt).multiplyScalar(ye).floor(),xe=ve;if(ue!==0&&(ae=j),we.bindFramebuffer(Q.FRAMEBUFFER,ae)&&we.drawBuffers(R,ae),we.viewport(ie),we.scissor(te),we.setScissorTest(xe),oe){let Le=$e.get(R.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Le.__webglTexture,ue)}else if(Ne){let Le=K;for(let ze=0;ze<R.textures.length;ze++){let Je=$e.get(R.textures[ze]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+ze,Je.__webglTexture,ue,Le)}}else if(R!==null&&ue!==0){let Le=$e.get(R.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Le.__webglTexture,ue)}k=-1};function Xu(R){let K=$e.get(R);return(K.__readFormat!==R.format||K.__readType!==R.type)&&(K.__readFormat=R.format,K.__readType=R.type,K.__formatReadable=Ct.textureFormatReadable(R.format),K.__typeReadable=Ct.textureTypeReadable(R.type)),K}this.readRenderTargetPixels=function(R,K,ue,ae,oe,Ne,qe,Le=0){if(!(R&&R.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&(ze=ze[qe],Array.isArray(ze)&&(ze=ze[0])),ze){we.bindFramebuffer(Q.FRAMEBUFFER,ze);try{let Je=R.textures[Le],ut=Je.format,Et=Je.type;R.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Le);let Ze=Xu(Je);if(Ze.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ae&&ue>=0&&ue<=R.height-oe&&Q.readPixels(K,ue,ae,oe,T.convert(ut),T.convert(Et),Ne)}finally{let Je=B!==null?$e.get(B).__webglFramebuffer:null;we.bindFramebuffer(Q.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(R,K,ue,ae,oe,Ne,qe,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&(ze=ze[qe],Array.isArray(ze)&&(ze=ze[0])),ze)if(K>=0&&K<=R.width-ae&&ue>=0&&ue<=R.height-oe){we.bindFramebuffer(Q.FRAMEBUFFER,ze);let Je=R.textures[Le],ut=Je.format,Et=Je.type;R.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Le);let Ze=Xu(Je);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,wt),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ne.byteLength,Q.STREAM_READ),Q.readPixels(K,ue,ae,oe,T.convert(ut),T.convert(Et),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);let on=B!==null?$e.get(B).__webglFramebuffer:null;we.bindFramebuffer(Q.FRAMEBUFFER,on);let Wt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await xf(Q,Wt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,wt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ne),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(wt),Q.deleteSync(Wt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ue=0){let ae=Math.pow(2,-ue),oe=Math.floor(R.image.width*ae),Ne=Math.floor(R.image.height*ae),qe=K!==null?K.x:0,Le=K!==null?K.y:0;it.setTexture2D(R,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ue,0,0,qe,Le,oe,Ne),we.unbindTexture()},this.copyTextureToTexture=function(R,K,ue=null,ae=null,oe=0,Ne=0){let qe,Le,ze,Je,ut,Et,Ze,wt,on,Wt=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(ue!==null)qe=ue.max.x-ue.min.x,Le=ue.max.y-ue.min.y,ze=ue.isBox3?ue.max.z-ue.min.z:1,Je=ue.min.x,ut=ue.min.y,Et=ue.isBox3?ue.min.z:0;else{let Lt=Math.pow(2,-oe);qe=Math.floor(Wt.width*Lt),Le=Math.floor(Wt.height*Lt),R.isDataArrayTexture?ze=Wt.depth:R.isData3DTexture?ze=Math.floor(Wt.depth*Lt):ze=1,Je=0,ut=0,Et=0}ae!==null?(Ze=ae.x,wt=ae.y,on=ae.z):(Ze=0,wt=0,on=0);let Gt=T.convert(K.format),Sn=T.convert(K.type),Ke;K.isData3DTexture?(it.setTexture3D(K,0),Ke=Q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(it.setTexture2DArray(K,0),Ke=Q.TEXTURE_2D_ARRAY):(it.setTexture2D(K,0),Ke=Q.TEXTURE_2D),we.activeTexture(Q.TEXTURE0),we.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,K.flipY),we.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),we.pixelStorei(Q.UNPACK_ALIGNMENT,K.unpackAlignment);let Pn=we.getParameter(Q.UNPACK_ROW_LENGTH),Ft=we.getParameter(Q.UNPACK_IMAGE_HEIGHT),ms=we.getParameter(Q.UNPACK_SKIP_PIXELS),bn=we.getParameter(Q.UNPACK_SKIP_ROWS),qa=we.getParameter(Q.UNPACK_SKIP_IMAGES);we.pixelStorei(Q.UNPACK_ROW_LENGTH,Wt.width),we.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Wt.height),we.pixelStorei(Q.UNPACK_SKIP_PIXELS,Je),we.pixelStorei(Q.UNPACK_SKIP_ROWS,ut),we.pixelStorei(Q.UNPACK_SKIP_IMAGES,Et);let $i=R.isDataArrayTexture||R.isData3DTexture,gs=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){let Lt=$e.get(R),yn=$e.get(K),ii=$e.get(Lt.__renderTarget),jt=$e.get(yn.__renderTarget);we.bindFramebuffer(Q.READ_FRAMEBUFFER,ii.__webglFramebuffer),we.bindFramebuffer(Q.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let gn=0;gn<ze;gn++)$i&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,$e.get(R).__webglTexture,oe,Et+gn),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,$e.get(K).__webglTexture,Ne,on+gn)),Q.blitFramebuffer(Je,ut,Je+qe,ut+Le,Ze,wt,Ze+qe,wt+Le,Q.DEPTH_BUFFER_BIT,Q.NEAREST);we.bindFramebuffer(Q.READ_FRAMEBUFFER,null),we.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(oe!==0||R.isRenderTargetTexture||$e.has(R)){let Lt=$e.get(R),yn=$e.get(K);we.bindFramebuffer(Q.READ_FRAMEBUFFER,D),we.bindFramebuffer(Q.DRAW_FRAMEBUFFER,O);for(let ii=0;ii<ze;ii++)$i?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Lt.__webglTexture,oe,Et+ii):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Lt.__webglTexture,oe),gs?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,yn.__webglTexture,Ne,on+ii):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,yn.__webglTexture,Ne),oe!==0?Q.blitFramebuffer(Je,ut,Je+qe,ut+Le,Ze,wt,Ze+qe,wt+Le,Q.COLOR_BUFFER_BIT,Q.NEAREST):gs?Q.copyTexSubImage3D(Ke,Ne,Ze,wt,on+ii,Je,ut,qe,Le):Q.copyTexSubImage2D(Ke,Ne,Ze,wt,Je,ut,qe,Le);we.bindFramebuffer(Q.READ_FRAMEBUFFER,null),we.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else gs?R.isDataTexture||R.isData3DTexture?Q.texSubImage3D(Ke,Ne,Ze,wt,on,qe,Le,ze,Gt,Sn,Wt.data):K.isCompressedArrayTexture?Q.compressedTexSubImage3D(Ke,Ne,Ze,wt,on,qe,Le,ze,Gt,Wt.data):Q.texSubImage3D(Ke,Ne,Ze,wt,on,qe,Le,ze,Gt,Sn,Wt):R.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Ne,Ze,wt,qe,Le,Gt,Sn,Wt.data):R.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Ne,Ze,wt,Wt.width,Wt.height,Gt,Wt.data):Q.texSubImage2D(Q.TEXTURE_2D,Ne,Ze,wt,qe,Le,Gt,Sn,Wt);we.pixelStorei(Q.UNPACK_ROW_LENGTH,Pn),we.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ft),we.pixelStorei(Q.UNPACK_SKIP_PIXELS,ms),we.pixelStorei(Q.UNPACK_SKIP_ROWS,bn),we.pixelStorei(Q.UNPACK_SKIP_IMAGES,qa),Ne===0&&K.generateMipmaps===!0&&K.mipmapsAutoUpdate===!0&&Q.generateMipmap(Ke),we.unbindTexture()},this.initRenderTarget=function(R){$e.get(R).__webglFramebuffer===void 0&&it.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?it.setTextureCube(R,0):R.isData3DTexture?it.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?it.setTexture2DArray(R,0):it.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){Z=0,q=0,B=null,we.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var tp=new z,dy=new Pt,np=new z,Wl=class extends It{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Ai=new Qe,fy=new Qe,Xl=class{constructor(e={}){let t=this,n,s,r,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:s}},this.render=function(g,p){let _=p.projectionMatrix.elements[5]*a;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(n/p.view.width)}px, ${-p.view.offsetY*(s/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let S,y;p.isOrthographicCamera&&(S=-(p.right+p.left)/2,y=(p.top+p.bottom)/2);let E=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,M=p.isOrthographicCamera?`scale( ${E} )scale(`+_+")translate("+u(S)+"px,"+u(y)+"px)"+d(p.matrixWorldInverse):`scale( ${E} )translateZ(`+_+"px)"+d(p.matrixWorldInverse),b=(p.isPerspectiveCamera?"perspective("+_+"px) ":"")+M+"translate("+r+"px,"+a+"px)";o.camera.style!==b&&(h.style.transform=b,o.camera.style=b),v(g,g,p,M)},this.setSize=function(g,p){n=g,s=p,r=n/2,a=s/2,l.style.width=g+"px",l.style.height=p+"px",c.style.width=g+"px",c.style.height=p+"px",h.style.width=g+"px",h.style.height=p+"px"};function u(g){return Math.abs(g)<1e-10?0:g}function d(g){let p=g.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function f(g){let p=g.elements;return"translate(-50%,-50%)"+("matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")")}function m(g){g.isCSS3DObject&&(g.element.style.display="none");for(let p=0,_=g.children.length;p<_;p++)m(g.children[p])}function v(g,p,_,S){if(g.visible===!1){m(g);return}if(g.isCSS3DObject){let y=g.layers.test(_.layers)===!0,E=g.element;if(E.style.display=y===!0?"":"none",y===!0){g.onBeforeRender(t,p,_);let M;g.isCSS3DSprite?(Ai.copy(_.matrixWorldInverse),Ai.transpose(),g.rotation2D!==0&&Ai.multiply(fy.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(tp,dy,np),Ai.setPosition(tp),Ai.scale(np),Ai.elements[3]=0,Ai.elements[7]=0,Ai.elements[11]=0,Ai.elements[15]=1,M=f(Ai)):M=f(g.matrixWorld);let x=o.objects.get(g);if(x===void 0||x.style!==M){E.style.transform=M;let b={style:M};o.objects.set(g,b)}E.parentNode!==h&&h.appendChild(E),g.onAfterRender(t,p,_)}}for(let y=0,E=g.children.length;y<E;y++)v(g.children[y],p,_,S)}}};var be={eyeHeight:395,slideFraction:.86,towerSlideFraction:.55,towerEye:1e3,towerPitchDeg:-6,stopPitchDeg:12,sideAngleDeg:54,yawFollow:.3,walkSpeed:450,rampSeconds:1.2,bob:{amplitude:4.5,lateral:2.5,stride:230},look:{maxYaw:1.7,maxPitch:.75,sensitivity:.0032,returnRate:2.2},turnOutSeconds:1.4,turnInSeconds:2.4,skipSeconds:.9,fadeOut:.22,fadeIn:.35,free:{speed:1800,fast:6500},durations:{inside:8,towerElevator:6.5,"hell>earth":19.5,"earth>apocalypse":17,"apocalypse>tower":18.5,overrides:{}},transitionLength:{"hell>earth":12e3,"earth>apocalypse":6100},tower:{half:2200,floorHeight:1500,firstStopFloorY:1500,stopRise:3e3,approachLength:3600,elevatorSpeed:450},layout:{zig:1100,bypass:1750},stageHeight:190,maxCharacters:46,hellY:-2400,valleyDepth:1750,zombieness:{towerStops:[0,.45,1,1],override:null},characters:{devil:{scale:300,walkSpeed:150,intruders:2,actionEvery:[3.5,7.5],actions:["peekSide","leanIn","waveJump","climbTop","peekTop","runAcross","knock","waveCam"],runSpeed:900,runDistance:300},human:{scale:300,walkSpeed:120,intruders:2,actionEvery:[3.5,8],actions:["peekSide","leanIn","waveJump","peekTop","runAcross","knock","waveCam"],runSpeed:800,runDistance:300},zombie:{scale:300,walkSpeed:70,intruders:3,actionEvery:[3,7],actions:["peekSide","leanIn","climbTop","peekTop","waveJump","knock","waveCam"],runSpeed:520,runDistance:300},designer:{scale:330,walkSpeed:90,intruders:2,actionEvery:[3.5,8],actions:["peekSide","leanIn","waveJump","peekTop","knock","waveCam"],runSpeed:700,runDistance:300}},intruder:{activeDistance:9e3,scale:.9,duoChance:.28,runSkip:.7,behindZ:-260,sideGap:90,durations:{peekSide:4.2,leanIn:3.6,waveJump:3.6,climbTop:8.5,peekTop:4.4,runAcross:4.8,knock:4.6,waveCam:4.4,tug:9.5,shove:6.5}},shadows:{enabled:!0,mapSize:2048,radius:1900},bloom:!1,ambient:{activeDistance:9e3},moods:{hell:{top:"#9a2418",mid:"#c0401a",horizon:"#e05a1a",fog:"#8a2a14",fogNear:4e3,fogFar:26e3,hemiSky:"#d27a60",hemiGround:"#ff9a3a",hemi:2.8,sun:"#ffb070",sunI:1.6,dir:[.5,.5,.6]},earth:{top:"#4aaedc",mid:"#86cfe6",horizon:"#d6f0e2",fog:"#cdeee2",fogNear:9e3,fogFar:44e3,hemiSky:"#e8f6ff",hemiGround:"#a8d890",hemi:1.35,sun:"#fff4dc",sunI:1.5,dir:[.45,1,.55]},apocalypse:{top:"#62666a",mid:"#9a9ea0",horizon:"#c4c6c4",fog:"#b0b4b4",fogNear:4500,fogFar:26e3,hemiSky:"#c4c8cc",hemiGround:"#6e7260",hemi:1.7,sun:"#e8e4d8",sunI:1,dir:[.4,.9,.5]},tower:{top:"#7ea6c8",mid:"#a8c4d8",horizon:"#d0dce4",fog:"#b8ccd8",fogNear:5e3,fogFar:24e3,hemiSky:"#e4eef8",hemiGround:"#b8c4d2",hemi:2.4,sun:"#fff8ee",sunI:1,dir:[.3,1,.6]}}};function Nr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Rt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=ip(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let m=ip(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function ip(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Tt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let v=h.getComponent(d,m);o.setComponent(d+u,m,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Bh(i,e){if(e===ch)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Lr||e===Ca){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Lr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ur={plaster:0,brick:1,roof:2,wood:3,concrete:4,rock:5,bark:6,grass:7,dirt:8,cloth:9,metal:10,carpet:11,leaves:12,ash:13,skin:14,tile:15},ql={plaster:520,brick:340,roof:300,wood:360,concrete:700,rock:800,bark:260,grass:460,dirt:300,cloth:90,metal:400,carpet:500,leaves:360,ash:900,skin:120,tile:420},Xs={cell:{plaster:"#f0ece4",brick:"#c8765a",roof:"#9a5a48",wood:"#b88a52",concrete:"#a4a8ae",rock:"#9a9aa2",bark:"#8a5c3a",grass:"#8ad060",dirt:"#d8b680",cloth:"#ffffff",metal:"#a8aeb8",carpet:"#c4d0de",leaves:"#6cc050",ash:"#9a9c98",skin:"#ffffff",tile:"#c4d2e2"}};Xs.terrain={hell:["#6a1f2c","#92343a"],hellHigh:"#34101a",hellPath:"#3e2630",earth:["#76d24e","#8ede5e"],earthPatch:"#5cbc40",apoc:["#9ea098","#7e8868"],mount:"#6c7c58",city:["#aebac8","#8c9aac"],hill:["#6a4a44","#8a6a5a"]};var en={look:"lowpoly",characters:"models",atlas:{size:1024,cells:4},body:{torsoProfile:[[.001,.49],[.075,.495],[.088,.53],[.072,.585],[.066,.62],[.082,.68],[.094,.735],[.088,.78],[.06,.815],[.001,.83]],torsoR:.078,torsoLen:.2,torsoScale:[1.75,1,1.3],hipR:.078,headR:.088,headScale:[.96,1.07,1],neckR:.03,upperArmR:.033,foreArmR:.028,handR:.034,thighR:.056,shinR:.042,footR:.04,segsRadial:6,segsCap:1,latheSegs:7,ballDetailMax:0,skinDetail:1,headBoneScale:1.75,legScale:[1.3,.62,1.3],armScale:[1.35,.7,1.35],legDrop:0},chars:{devil:{skin:"#d9382c",skinDark:"#a82219",cloth:"#2a0f0c",trim:"#ffb030",horn:"#241a14",eye:"#ffd23f",hoof:"#241a14",fork:"#5a5a5a",tail:"#c8291f"},human:{skin:"#e5b58f",pants:"#46506b",shoe:"#3a2a20",eye:"#2a2a2a",shirts:["#d9534f","#4f8bd9","#e8c547","#5fae6b","#b36fd1","#e88a3a"],hairs:["#4a3321","#d9b45a","#2a2a2a","#8a4a2a"]},zombie:{skin:"#7ac45a",skinDark:"#5fa846",shirt:"#6a6354",shirt2:"#4a4438",pants:"#4a4a52",shoe:"#3a3a36",eye:"#d8d8c0",eyeHole:"#1a1a1a",mouth:"#2a1515",hair:"#3b3b34"},designer:{skin:"#e5b58f",pants:"#2d3340",shoe:"#e8e8e8",eye:"#2a2a2a",hair:"#2c2a2e",frame:"#1c1c24",phones:"#e04a4a",tie:"#2a8fd0",shirts:["#f4f4f4","#dbe9f7","#f7e3da","#e3f3e6","#ececec"]}},zombieSkinTint:[.62,.86,.6],zombieShirtTint:[.62,.68,.58]};var Ri=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},Bn=(i,e,t)=>{let n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)},St=(i,e,t)=>Math.max(e,Math.min(t,i)),Pe=i=>(i=St(i,0,1),i*i*(3-2*i)),ct=(i,e,t)=>i+(e-i)*t,de=i=>new Ee(i),et=(i,e,t)=>i.clone().lerp(e,t);function zh(i,e,t=0){let n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=Bn(n,s,t),l=Bn(n+1,s,t),c=Bn(n,s+1,t),h=Bn(n+1,s+1,t),u=r*r*(3-2*r),d=a*a*(3-2*a);return o+(l-o)*u+(c-o)*d+(o-l-c+h)*u*d}var In=(i,e,t=0)=>zh(i,e,t)*.55+zh(i*2.1,e*2.1,t+3)*.3+zh(i*4.3,e*4.3,t+7)*.15;function kh(i,e,t,n=0){let s=i.attributes.position;for(let r=0;r<s.count;r++){let a=s.getX(r),o=s.getY(r),l=s.getZ(r),c=Math.round(a),h=Math.round(o),u=Math.round(l);s.setXYZ(r,a+(Bn(c+n,h,u)-.5)*2*e,o+(Bn(c,h+n+7,u+3)-.5)*2*t,l+(Bn(c+5,h+1,u+n+11)-.5)*2*e)}}var nt=(i=0,e=0,t=0,n=0,s=0,r=0,a=1,o=a,l=a)=>new Qe().compose(new z(i,e,t),new Pt().setFromEuler(new cn(n,s,r,"YXZ")),new z(a,o,l)),ge=i=>[Ur[i],ql[i]],py=Object.keys(Ur).map(i=>new Ee(Xs.cell[i])),_t=en.look==="lowpoly";function Hh(i,e){let t=i.attributes.position,n=i.attributes.normal,s=t.count,r=new Float32Array(s*2),a=new Float32Array(s).fill(e[0]),o=i.index,l=o?o.count:s;for(let c=0;c<s;c++){let h=Math.abs(n.getX(c)),u=Math.abs(n.getY(c)),d=Math.abs(n.getZ(c)),f=t.getX(c),m=t.getY(c),v=t.getZ(c),g,p;u>=h&&u>=d?(g=f,p=v):h>=d?(g=v,p=m):(g=f,p=m),r[c*2]=g/e[1],r[c*2+1]=p/e[1]}i.setAttribute("uv",new Tt(r,2)),i.setAttribute("aCell",new Tt(a,1))}var mt=class{constructor(e=1){this.parts=[],this.r=Ri(e)}add(e,t,n,s=ge("plaster")){let r=e.index?e.toNonIndexed():e.clone();r.deleteAttribute("uv");let a=r.attributes.position,o=a.count,l=new Float32Array(o*3),c=_t?py[s[0]]:null;for(let h=0;h<o;h+=3){let u=_t?.9+this.r()*.2:.94+this.r()*.1;for(let d=0;d<3;d++){let f=h+d,m=typeof t=="function"?t(a.getX(f),a.getY(f),a.getZ(f)):t;l[f*3]=m.r*u*(c?c.r:1),l[f*3+1]=m.g*u*(c?c.g:1),l[f*3+2]=m.b*u*(c?c.b:1)}}r.setAttribute("color",new Tt(l,3)),n&&r.applyMatrix4(n),r.computeVertexNormals(),Hh(r,s),this.parts.push(r)}addRaw(e,t=ge("grass")){e.computeVertexNormals();let n=e.attributes.position,s=n.count,r=new Float32Array(s*2);for(let a=0;a<s;a++)r[a*2]=n.getX(a)/t[1],r[a*2+1]=n.getZ(a)/t[1];e.setAttribute("uv",new Tt(r,2)),e.setAttribute("aCell",new Tt(new Float32Array(s).fill(t[0]),1)),this.parts.push(e)}empty(){return!this.parts.length}geometry(){return Nr(this.parts)}mesh(e){return new Mt(this.geometry(),e)}};var Gh=45,Ua=1920,Ji=1080,rp=Math.PI/180,Yl=Math.tan(Gh*rp/2),Zl=Ji/2/(Yl*be.slideFraction),my=Ji/2/(Yl*be.towerSlideFraction);function ap(i,e=be.slideFraction){return Math.max(Ji/2/(Yl*e),Ua/2/(Yl*i*.92))}var gy=(i,e)=>{if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++)if(e<=i[t][0]){let n=i[t-1],s=i[t];return ct(n[1],s[1],Pe((e-n[0])/Math.max(1,s[0]-n[0])))}return i[i.length-1][1]};function xy(i){let e=i.length,t=i.map(o=>o[0]),n=i.map(o=>o[1]),s=[],r=[],a=new Array(e).fill(0);for(let o=0;o<e-1;o++)s[o]=Math.max(.001,t[o+1]-t[o]),r[o]=(n[o+1]-n[o])/s[o];for(let o=1;o<e-1;o++)if(r[o-1]*r[o]<=0)a[o]=0;else{let l=2*s[o]+s[o-1],c=s[o]+2*s[o-1];a[o]=(l+c)/(l/r[o-1]+c/r[o])}return o=>{if(o<=t[0])return n[0];if(o>=t[e-1])return n[e-1];let l=0,c=e-1;for(;c-l>1;){let f=l+c>>1;t[f]<=o?l=f:c=f}let h=(o-t[l])/s[l],u=h*h,d=u*h;return(2*d-3*u+1)*n[l]+(d-2*u+h)*s[l]*a[l]+(-2*d+3*u)*n[l+1]+(d-u)*s[l]*a[l+1]}}function sp(i,e){let t=i[e].zone,n=i[e+1].zone,s=be.durations;return s.overrides[e]!=null?s.overrides[e]:t===n?t==="tower"?s.towerElevator:s.inside:s[t+">"+n]||s.inside}function op(i){let e=i.length,t=be.eyeHeight,n=be.tower,s=new Array(e).fill(0),r=0,a=0,o=0,l=-1;for(let O=0;O<e&&i[O].zone!=="tower";O++){if(l=O,O===0)continue;let Z=i[O-1].zone,q=i[O].zone;s[O]=s[O-1]+(Z===q?sp(i,O-1)*be.walkSpeed:be.transitionLength[Z+">"+q]||6e3)}r=(l>=0?s[l]:0)+n.approachLength,a=r+2*n.half-700,o=-(r+n.half);let h=O=>i.map((Z,q)=>Z.zone===O?q:-1).filter(Z=>Z>=0),u=h("hell"),d=h("earth"),f=h("apocalypse"),m=h("tower"),v={hellEnd:u.length?s[u[u.length-1]]:0,earthStart:d.length?s[d[0]]:0,earthEnd:d.length?s[d[d.length-1]]:0,apocStart:f.length?s[f[0]]:0,apocEnd:f.length?s[f[f.length-1]]:0};v.stairA=v.hellEnd+4200,v.stairB=v.earthStart-3600;let g=[[-4e3,be.hellY],[v.stairA,be.hellY],[v.stairB,0]];if(d.forEach((O,Z)=>g.push([s[O],Z===0?0:(Bn(O,3,1)-.5)*260])),f.length){g.push([v.apocStart-2200,0]);let O=f.findIndex(Z=>i[Z].code==="R-12h");O<0&&(O=Math.floor(f.length/2)),f.forEach((Z,q)=>{let B=q<=O?Pe(q/Math.max(1,O)):1-.7*Pe((q-O)/Math.max(1,f.length-1-O+.6));g.push([s[Z],-be.valleyDepth*B])})}g.push([r-500,0],[r+9e3,0]),g.sort((O,Z)=>O[0]-Z[0]);let p=O=>gy(g,O),_=[];for(let O=0;O<e&&i[O].zone!=="tower";O++)_.push(O);let S=be.layout.zig,y=be.layout.bypass,E=_.map((O,Z)=>(Z%2===0?-1:1)*S),M=[[-4e3,E[0]],[0,E[0]]];_.forEach((O,Z)=>{M.push([s[O],E[Z]]);let q=_[Z+1],B=-Math.sign(E[Z]);if(M.push([s[O]+Zl+80,E[Z]+B*y]),q===void 0)M.push([r-600,0]);else if(i[O].zone==="hell"&&i[q].zone==="earth"){let k=E[Z+1];M.push([v.stairA-600,k],[v.stairB+300,k],[s[q]-1300,E[Z+1]])}else M.push([s[q]-1300,E[Z+1]])}),M.push([r+9e3,0]),M.sort((O,Z)=>O[0]-Z[0]);let x=xy(M),b=O=>{let Z=(x(O+20)-x(O-20))/40;return Math.atan2(-Z,1)},I=O=>{let q=(x(O+400)-x(O-400))/800;return Math.atan2(-q,1)},C=[],U=0;for(let O=0;O<e;O++){let Z=i[O],q=Z.zone==="tower",B={i:O,zone:Z.zone,code:Z.code,tower:q};q?(B.floorY=n.firstStopFloorY+U*n.stopRise,B.towerK=U++,B.u=a,B.gy=B.floorY,B.P=new z(0,B.floorY+be.towerEye,-a),B.yawTan=0,B.side=0,B.yaw=Math.PI):(B.u=s[O],B.gy=p(B.u),B.P=new z(x(B.u),B.gy+t,-B.u),B.yawTan=b(B.u),B.side=-Math.sign(E[_.indexOf(O)]),B.yaw=B.yawTan),B.pitch=(q?be.towerPitchDeg:be.stopPitchDeg)*rp,B.viewDir=new z(-Math.sin(B.yaw)*Math.cos(B.pitch),Math.sin(B.pitch),-Math.cos(B.yaw)*Math.cos(B.pitch)),B.D0=q?my:Zl,B.frac=q?be.towerSlideFraction:be.slideFraction,B.B=B.P.clone().addScaledVector(B.viewDir,B.D0),B.right=new z(Math.cos(B.yaw),0,-Math.sin(B.yaw)),B.toCam=new z(Math.sin(B.yaw),0,Math.cos(B.yaw)),C.push(B)}let X=[];for(let O=0;O<e-1;O++){let Z=C[O],q=C[O+1],B=sp(i,O),k={from:O,to:O+1,dur:B,pieces:[]};!Z.tower&&!q.tower?k.pieces.push({kind:"walk",u0:Z.u,u1:q.u,w:(q.u-Z.u)/be.walkSpeed}):!Z.tower&&q.tower?(k.pieces.push({kind:"walk",u0:Z.u,u1:r,w:(r-Z.u)/be.walkSpeed}),k.pieces.push({kind:"lobby",u0:r,u1:a,w:(a-r)/be.walkSpeed}),k.pieces.push({kind:"lift",y0:p(r)+t,y1:q.P.y,w:(q.P.y-t)/n.elevatorSpeed})):k.pieces.push({kind:"lift",y0:Z.P.y,y1:q.P.y,w:(q.P.y-Z.P.y)/n.elevatorSpeed,yaw:Math.PI});let Y=k.pieces.reduce((te,xe)=>te+xe.w,0),ie=0;k.pieces.forEach(te=>{te.t0=ie/Y,ie+=te.w,te.t1=ie/Y}),X.push(k)}let j={pos:new z,yaw:0,pitch:0,kind:"walk"};function D(O,Z){Z=St(Z,0,1);let q=O.pieces[O.pieces.length-1];for(let k of O.pieces)if(Z<=k.t1){q=k;break}let B=St((Z-q.t0)/Math.max(1e-6,q.t1-q.t0),0,1);if(j.kind=q.kind,q.kind==="walk"){let k=ct(q.u0,q.u1,B);j.pos.set(x(k),p(k)+t,-k),j.yaw=I(k)*be.yawFollow,j.pitch=St(Math.atan((p(k+80)-p(k-80))/160)*.9,-.4,.5)}else if(q.kind==="lobby"){let k=ct(q.u0,q.u1,B);j.pos.set(x(k),p(r)+t,-k),j.yaw=0,j.pitch=0}else j.pos.set(0,ct(q.y0,q.y1,Pe(B)*.35+B*.65),-a),j.yaw=q.yaw??0,j.pitch=-.4*Pe(Math.min(1,B*4))*Pe(Math.min(1,(1-B)*4));return j}return{N:e,stops:C,segs:X,sec:v,groundY:p,px:x,yawTan:b,sample:D,doorU:r,cabinU:a,towerCz:o,eye:t,infos:i,towerHeight:be.tower.firstStopFloorY+Math.max(0,m.length-1)*be.tower.stopRise+1600}}var fi=(i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296};function $n(i,e,t,n){let s=Math.floor(i),r=Math.floor(e),a=i-s,o=e-r,l=(s%t+t)%t,c=(l+1)%t,h=(r%t+t)%t,u=(h+1)%t,d=a*a*(3-2*a),f=o*o*(3-2*o),m=fi(l,h,n),v=fi(c,h,n),g=fi(l,u,n),p=fi(c,u,n);return m+(v-m)*d+(g-m)*f+(m-v-g+p)*d*f}var Ln=(i,e,t,n,s=3)=>{let r=0,a=.55,o=t,l=0;for(let c=0;c<s;c++)r+=$n(i*o,e*o,o,n+c*7)*a,l+=a,a*=.5,o*=2;return r/l};function Kl(i,e,t,n){let s=i*t,r=e*t,a=Math.floor(s),o=Math.floor(r),l=9,c=9;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){let d=a+u,f=o+h,m=(d%t+t)%t,v=(f%t+t)%t,g=d+fi(m,v,n),p=f+fi(m,v,n+5),_=Math.hypot(g-s,p-r);_<l?(c=l,l=_):_<c&&(c=_)}return[l,c]}var di=i=>i<0?0:i>1?1:i,us=(i,e,t)=>{let n=di((t-i)/(e-i));return n*n*(3-2*n)},_y=[(i,e)=>.84+.16*Ln(i,e,6,1)-.07*$n(i*96,e*96,96,4),(i,e)=>{let t=Math.floor(e*8),n=t%2*.125,s=(i+n)%1,r=Math.floor(s*4),a=s*4%1,o=e*8%1;return a<.05||o<.08?.6+.06*$n(i*64,e*64,64,3):.8+.16*fi(r,t,7)+.08*Ln(i,e,16,2)},(i,e)=>{let t=Math.floor(e*8),n=e*8%1,s=(i*6+t%2*.5)%1,r=Math.min(n,1-n,Math.abs(s-.5)*.3);return .62+.38*us(0,.12,n)*(1-.25*us(.7,1,n))-.06*fi(Math.floor(i*6+t%2*.5),t,9)+0*r},(i,e)=>{let t=Math.floor(i*5),n=i*5%1;return n<.03||n>.98?.5:.78+.12*Math.sin(e*70+Ln(i,e,8,t+3)*9+fi(t,0,1)*6)+.1*fi(t,1,2)},(i,e)=>{let[t,n]=Kl(i,e,5,11);return .8+.12*Ln(i,e,8,5)-.25*(1-us(0,.035,n-t))*.5-.05*$n(i*120,e*120,120,8)},(i,e)=>{let[t,n]=Kl(i,e,4,21),s=1-us(0,.06,n-t);return .55+.45*Ln(i,e,5,8,4)-.32*s},(i,e)=>.6+.4*$n(i*22,e*3,22,12)*(.7+.3*$n(i*5,e*2,5,13)),(i,e)=>.72+.28*Ln(i,e,18,14)+.12*($n(i*80,e*12,80,15)-.5),(i,e)=>{let[t]=Kl(i,e,14,31);return .7+.2*Ln(i,e,10,16)+.12*(t<.15?1:0)-.08*$n(i*120,e*120,120,17)},(i,e)=>.9+.06*Math.sin(i*256*Math.PI)*Math.sin(e*256*Math.PI)+.06*Ln(i,e,6,18),(i,e)=>.55+.45*Ln(i,e,7,19)*(.8+.2*$n(i*60,e*4,60,20)),(i,e)=>.82+.1*$n(i*128,e*128,128,21)+.06*Ln(i,e,4,22),(i,e)=>.5+.5*Ln(i,e,14,23)*(.75+.25*$n(i*40,e*40,40,24)),(i,e)=>.65+.3*Ln(i,e,5,25)+.08*$n(i*110,e*110,110,26),(i,e)=>.94+.06*Ln(i,e,12,27),(i,e)=>{let t=i*4%1,n=e*4%1;return t<.03||n<.03?.6:.9+.08*Ln(i,e,6,28)+.03*fi(Math.floor(i*4),Math.floor(e*4),29)}];function lp(){let i=en.atlas.size,e=en.atlas.cells,t=i/e,n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(t,t),a=r.data;for(let l=0;l<e*e;l++){for(let c=0;c<t;c++)for(let h=0;h<t;h++){let u=di(_y[l](h/t,c/t))*255,d=(c*t+h)*4;a[d]=a[d+1]=a[d+2]=u,a[d+3]=255}s.putImageData(r,l%e*t,Math.floor(l/e)*t)}let o=new ki(n);return o.colorSpace=qt,o.wrapS=o.wrapT=zn,o.anisotropy=4,o.generateMipmaps=!0,o.minFilter=Vn,o}function Jl(i,e={}){if(en.look==="lowpoly")return new An(Object.assign({vertexColors:!0,flatShading:!0},e));let t=new An(Object.assign({vertexColors:!0,map:i},e));return t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aCell;
varying float vCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vCell = aCell;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vCell;`).replace("#include <map_fragment>",`
      #ifdef USE_MAP
      float cI = floor(vCell + 0.5);
      vec2 cellO = vec2(mod(cI, 4.0), 3.0 - floor(cI / 4.0));
      vec2 fuv = fract(vMapUv);
      vec2 auv = (cellO + fuv * 0.94 + 0.03) / 4.0;
      vec4 sampledDiffuseColor = textureGrad(map, auv, dFdx(vMapUv) * 0.235, dFdy(vMapUv) * 0.235);
      diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"atlas-mat",t}function Vh(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");t(r,i,e);let a=new ki(s);return a.colorSpace=qt,n.repeat&&(a.wrapS=a.wrapT=Tn),a}function Wh(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d"),a=r.createImageData(i,e),o=a.data;for(let c=0;c<e;c++)for(let h=0;h<i;h++){let u=t(h/i,c/e),d=(c*i+h)*4;o[d]=u[0],o[d+1]=u[1],o[d+2]=u[2],o[d+3]=u[3]===void 0?255:u[3]}r.putImageData(a,0,0);let l=new ki(s);return l.colorSpace=qt,n.repeat&&(l.wrapS=l.wrapT=Tn),l}function cp(){return Wh(512,512,(i,e)=>{let[t,n]=Kl(i,e,7,41),s=1-us(0,.09,n-t);if(en.look==="lowpoly"){let h=Ln(i,e,6,42,3),u=us(.08,.3,n-t),d=di(u*(.35+.9*h));return[Fr(255,170,d),Fr(150+100*s,45,d),Fr(30+30*s,24,d)]}let r=Ln(i,e,6,42,3),a=di(s*1.3+.15*r),o=Fr(40,255,a),l=Fr(8,70+95*a*a,a),c=Fr(4,14+26*a*a*a,a);return[o*(.7+.5*r),l*(.8+.4*r),c]},{repeat:!0})}var Fr=(i,e,t)=>i+(e-i)*di(t);function hp(){return Wh(128,256,(i,e)=>{let t=1-e,n=(1-t)*.5+.08,s=Math.abs(i-.5)/(n*.9+.02),r=di(1-s)*di(t*6)*di(1.05-t),a=$n(i*6,e*8,8,50)*.35,o=di(r*(1.1+a)-.1),l=di(1-s*1.6)*di(1-t*1.4);return[255,120+135*l+60*o,20+190*l*l,o*255]})}function up(){return Vh(64,64,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)})}function dp(){return Vh(64,64,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(0,0,0,.34)"),n.addColorStop(.6,"rgba(0,0,0,.12)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)})}function fp(){return Wh(128,256,(i,e)=>{let t=us(.02,0,Math.abs((i*1.2+e*.5)%1-.3))*.5+us(.04,0,Math.abs((i*1.2+e*.5)%1-.75))*.25,n=.16+t*.55;return[190+60*t,215+40*t,235,n*255]},{repeat:!0})}function pp(){return Vh(128,96,(i,e,t)=>{i.fillStyle="#0d2a52",i.fillRect(0,0,e,t),i.fillStyle="#2f7fd8",i.fillRect(6,6,e-12,10),i.fillStyle="#e8f1ff",i.fillRect(10,24,46,30),i.fillStyle="#ff7a59",i.fillRect(62,24,52,14),i.fillStyle="#7dd87d",i.fillRect(62,42,30,12),i.fillStyle="#9bbcf0";for(let n=0;n<6;n++)i.fillRect(10,62+n*5,60+n*17%40,2)})}var mp=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Fa=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var $l=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],Yh=i=>Math.hypot(i[0],i[1],i[2]);function gp(i,e,t){let n=$l(t,e),s=$l(i,e),r=Math.max(0,Math.min(1,(s[0]*n[0]+s[1]*n[1]+s[2]*n[2])/(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]||1)));return Yh([i[0]-e[0]-n[0]*r,i[1]-e[1]-n[1]*r,i[2]-e[2]-n[2]*r])}var xp=(()=>{let i=[],e=(n,s,r,a)=>i.push({id:n,k:"cap",a:s,b:r,r:a}),t=(n,s,r)=>i.push({id:n,k:"ell",c:s,rad:r});t("head",[0,.985,.005],[.132,.138,.13]),e("neck",[0,.845,0],[0,.9,0],.04),t("torso",[0,.66,0],[.086,.15,.096]),t("pelvis",[0,.515,0],[.118,.07,.092]);for(let n of[1,-1])e("arm"+n,[n*.17,.76,0],[n*.17,.64,0],.046),e("fore"+n,[n*.17,.64,0],[n*.17,.52,.01],.043),t("hand"+n,[n*.17,.49,.012],[.048,.054,.044]),e("thigh"+n,[n*.07,.49,0],[n*.07,.27,0],.056),e("shin"+n,[n*.07,.27,0],[n*.07,.06,0],.049),t("foot"+n,[n*.07,.035,.04],[.054,.038,.098]);return i})();function _p(i,e){if(i.k==="cap")return gp(e,i.a,i.b)-i.r;let t=[(e[0]-i.c[0])/i.rad[0],(e[1]-i.c[1])/i.rad[1],(e[2]-i.c[2])/i.rad[2]];return(Yh(t)-1)*Math.min(i.rad[0],i.rad[1],i.rad[2])}var Xh=.022;function qs(i){let e=1e9;for(let t of xp){let n=_p(t,i),s=Math.max(Xh-Math.abs(e-n),0)/Xh;e=Math.min(e,n)-s*s*Xh*.25}return e}function yp(i){let e=null,t=1e9;for(let n of xp){let s=_p(n,i)+(n.id==="torso"||n.id==="pelvis"?.012:0);s<t&&(t=s,e=n.id)}return e}var Jt=(i,e,t=0)=>[i,e,t],vp=[["pelvis",Jt(0,.5),Jt(0,.56)],["spine",Jt(0,.56),Jt(0,.7)],["chest",Jt(0,.7),Jt(0,.83)],["neck",Jt(0,.83),Jt(0,.875)],["head",Jt(0,.875),Jt(0,1.12)]];for(let[i,e]of[[1,"L"],[-1,"R"]])vp.push(["clav"+e,Jt(i*.045,.76),Jt(i*.14,.79)],["arm"+e,Jt(i*.14,.79),Jt(i*.14,.64)],["fore"+e,Jt(i*.14,.64),Jt(i*.14,.5)],["hand"+e,Jt(i*.14,.5),Jt(i*.14,.42)],["thigh"+e,Jt(i*.065,.48),Jt(i*.065,.255)],["shin"+e,Jt(i*.065,.255),Jt(i*.065,.035)],["foot"+e,Jt(i*.065,.035),Jt(i*.065,.03,.1)]);var ds={head:{head:0,neck:.02},neck:{neck:0,head:.01,chest:.02},torso:{spine:0,chest:0,pelvis:.01,clavL:.05,clavR:.05,neck:.04},pelvis:{pelvis:0,spine:.01,thighL:.03,thighR:.03}};for(let i of["L","R"]){let e=i==="L"?1:-1;ds["arm"+e]={["arm"+i]:0,["clav"+i]:.03,chest:.06,["fore"+i]:.02},ds["fore"+e]={["fore"+i]:0,["arm"+i]:.02,["hand"+i]:.02},ds["hand"+e]={["hand"+i]:0,["fore"+i]:.02},ds["thigh"+e]={["thigh"+i]:0,pelvis:.03,["shin"+i]:.02},ds["shin"+e]={["shin"+i]:0,["thigh"+i]:.02,["foot"+i]:.02},ds["foot"+e]={["foot"+i]:0,["shin"+i]:.02}}function Mp(i,e){let t=ds[e]||ds.torso,n=[];for(let[c,h,u]of vp)t[c]!==void 0&&n.push([Xe[c],gp(i,h,u)+t[c]]);let s=Math.min(...n.map(c=>c[1])),r=n.map(([c,h])=>[c,Math.exp(-(h-s)/.022)]).sort((c,h)=>h[1]-c[1]).slice(0,4),a=r.reduce((c,h)=>c+h[1],0),o=r.map(([c,h])=>[c,h/a]),l=e.startsWith("arm")?e.endsWith("-1")?-1:1:e==="torso"?i[0]>=0?1:-1:0;if(l){let c=l===1?"L":"R",h=Yh([i[0]-l*.14,i[1]-.77,i[2]]),u=Xe["arm"+c],d=Xe.chest;if(e.startsWith("arm")){let f=Math.min(1,Math.max(0,h/.14)),m=f*f*(3-2*f);o=[[u,m],[d,(1-m)*.75],[Xe["clav"+c],(1-m)*.25]]}else{let f=1-Math.min(1,Math.max(0,h/.13)),m=f*f*(3-2*f)*.45;o=o.map(([v,g])=>[v,g*(1-m)]),o.push([u,m]),o=o.sort((v,g)=>g[1]-v[1]).slice(0,4)}}return o.flatMap(([c,h])=>[c,h])}var Oa=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],yy=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],qh=null;function Sp(){if(qh)return qh;let i=.033,e=-.27,t=-.02,n=-.2,s=Math.ceil(.54/i),r=Math.ceil(1.2/i),a=Math.ceil(.42/i),o=new Float32Array((s+1)*(r+1)*(a+1)),l=(d,f,m)=>(m*(r+1)+f)*(s+1)+d;for(let d=0;d<=a;d++)for(let f=0;f<=r;f++)for(let m=0;m<=s;m++)o[l(m,f,d)]=qs([e+m*i,t+f*i,n+d*i]);let c=[],h=new Array(12);for(let d=0;d<a;d++)for(let f=0;f<r;f++)for(let m=0;m<s;m++){let v=0,g=[];for(let _=0;_<8;_++){let S=o[l(m+Oa[_][0],f+Oa[_][1],d+Oa[_][2])];g.push(S),S<0&&(v|=1<<_)}let p=mp[v];if(p){for(let _=0;_<12;_++)if(p&1<<_){let[S,y]=yy[_],E=g[S]/(g[S]-g[y]),M=Oa[S],x=Oa[y];h[_]=[e+(m+M[0]+(x[0]-M[0])*E)*i,t+(f+M[1]+(x[1]-M[1])*E)*i,n+(d+M[2]+(x[2]-M[2])*E)*i]}for(let _=v<<4,S=0;Fa[_+S]!==-1;S+=3){let y=[h[Fa[_+S]],h[Fa[_+S+1]],h[Fa[_+S+2]]],E=$l(y[1],y[0]),M=$l(y[2],y[0]),x=[E[1]*M[2]-E[2]*M[1],E[2]*M[0]-E[0]*M[2],E[0]*M[1]-E[1]*M[0]],b=(y[0][0]+y[1][0]+y[2][0])/3,I=(y[0][1]+y[1][1]+y[2][1])/3,C=(y[0][2]+y[1][2]+y[2][2])/3,U=.01,X=[qs([b+U,I,C])-qs([b-U,I,C]),qs([b,I+U,C])-qs([b,I-U,C]),qs([b,I,C+U])-qs([b,I,C-U])],D=x[0]*X[0]+x[1]*X[1]+x[2]*X[2]<0?[y[0],y[2],y[1]]:y;for(let O of D)c.push(O[0],O[1],O[2])}}}let u=new Rt;return u.setAttribute("position",new st(c,3)),u.computeVertexNormals(),qh=u}var vy=Object.fromEntries(Object.keys(Ur).map(i=>[i,new Ee(Xs.cell[i])])),My=new Ee(1,1,1),jl=["root","pelvis","spine","chest","neck","head","clavL","armL","foreL","handL","clavR","armR","foreR","handR","thighL","shinL","footL","thighR","shinR","footR","tail1","tail2","tail3","tail4"],Xe=Object.fromEntries(jl.map((i,e)=>[i,e])),bp={pelvis:"root",spine:"pelvis",chest:"spine",neck:"chest",head:"neck",clavL:"chest",armL:"clavL",foreL:"armL",handL:"foreL",clavR:"chest",armR:"clavR",foreR:"armR",handR:"foreR",thighL:"pelvis",shinL:"thighL",footL:"shinL",thighR:"pelvis",shinR:"thighR",footR:"shinR",tail1:"pelvis",tail2:"tail1",tail3:"tail2",tail4:"tail3"},Sy={pelvis:[0,.5,0],spine:[0,.06,0],chest:[0,.14,0],neck:[0,.13,0],head:[0,.045,0],clavL:[.045,.06,0],armL:[.095,.03,0],foreL:[0,-.15,0],handL:[0,-.14,0],clavR:[-.045,.06,0],armR:[-.095,.03,0],foreR:[0,-.15,0],handR:[0,-.14,0],thighL:[.065,-.02,0],shinL:[0,-.225,0],footL:[0,-.22,0],thighR:[-.065,-.02,0],shinR:[0,-.225,0],footR:[0,-.22,0],tail1:[0,-.03,-.07],tail2:[0,0,-.08],tail3:[0,0,-.08],tail4:[0,0,-.08]},wp=1.03;function by(){let i=jl.map(e=>{let t=new rs;t.name=e;let n=Sy[e];return n&&t.position.set(n[0],n[1],n[2]),t});return jl.forEach((e,t)=>{bp[e]&&i[Xe[bp[e]]].add(i[t])}),i}function Ey(i){if(i<.56)return[Xe.pelvis,1];if(i<.64){let e=Pe((i-.56)/.08);return[Xe.pelvis,1-e,Xe.spine,e]}if(i<.74){let e=Pe((i-.64)/.1);return[Xe.spine,1-e,Xe.chest,e]}return[Xe.chest,1]}var Ql=class{constructor(){this.parts=[],this.zf=null,this.zfn=null,this.flat=!1}add(e,t,n,s,r="cloth"){let a=e.index?e.toNonIndexed():e.clone();a.applyMatrix4(t);for(let m of Object.keys(a.attributes))m!=="position"&&m!=="normal"&&a.deleteAttribute(m);let o=_t?vy[r]:My,l=a.attributes.position,c=l.count,h=new Float32Array(c*3),u=new Uint16Array(c*4),d=new Float32Array(c*4);for(let m=0;m<c;m++){let v=l.getX(m),g=l.getY(m),p=l.getZ(m),_;if(typeof n!="function")_=n;else if(this.flat){let y=m-m%3;_=n((l.getX(y)+l.getX(y+1)+l.getX(y+2))/3,(l.getY(y)+l.getY(y+1)+l.getY(y+2))/3,(l.getZ(y)+l.getZ(y+1)+l.getZ(y+2))/3)}else _=n(v,g,p);h[m*3]=_.r*o.r,h[m*3+1]=_.g*o.g,h[m*3+2]=_.b*o.b;let S=typeof s=="function"?s(v,g,p):[s,1];for(let y=0;y<S.length/2&&y<4;y++)u[m*4+y]=S[y*2],d[m*4+y]=S[y*2+1]}let f=new Float32Array(c).fill(this.zf??(r==="skin"?1:0));if(this.zfn)for(let m=0;m<c;m++)f[m]=this.zfn(l.getX(m),l.getY(m),l.getZ(m));a.setAttribute("aZ",new Tt(f,1)),a.setAttribute("color",new Tt(h,3)),a.setAttribute("skinIndex",new Tt(u,4)),a.setAttribute("skinWeight",new Tt(d,4)),Hh(a,[Ur[r],ql[r]]),this.parts.push(a)}geometry(){return Nr(this.parts)}},Ue=(i=0,e=0,t=0,n=1,s=n,r=n,a=0,o=0,l=0)=>new Qe().compose(new z(i,e,t),new Pt().setFromEuler(new cn(a,o,l)),new z(n,s,r));function wy(i,e,t){let n=en.chars[i],s=new Ql,r=E=>de(E),a=r(n.skin),o=i==="devil"?a:r(i==="zombie"?n.shirt:n.shirts[e%n.shirts.length]),l=i==="zombie"?r(n.shirt2):o,c=i==="zombie"?r(n.skinDark):a,h=r(i==="devil"?n.cloth:n.pants),u=i==="devil"?r(n.skinDark):h,d=r(i==="devil"?n.hoof:n.shoe),f="",m="",v=(E,M,x)=>{let b=E+","+M+","+x;return b!==f&&(f=b,m=yp([E,M,x])),m},g=(E,M,x)=>{let b=v(E,M,x),I=b.replace(/[-0-9]/g,"");return I==="head"||I==="neck"?i==="devil"?a:c:I==="torso"?i==="zombie"&&(Math.floor(E*22)+Math.floor(M*22)*3+Math.floor(x*22))%6===0?c:o:I==="pelvis"?h:I==="arm"?M>.7?l:c:I==="fore"||I==="hand"?c:I==="thigh"||I==="shin"?u:d};s.zfn=(E,M,x)=>{let b=v(E,M,x),I=b.replace(/[-0-9]/g,"");return I==="head"||I==="neck"||I==="fore"||I==="hand"||I==="arm"&&M<=.7?1:0},s.flat=!0,s.add(Sp(),Ue(),g,(E,M,x)=>Mp([E,M,x],v(E,M,x)),"cloth"),s.zfn=null,s.flat=!1;let p=Xe.head,_=E=>new fn(E,6,4),S=r(i==="zombie"?n.eyeHole:i==="devil"?"#ffe04a":n.eye);for(let E of[-1,1])s.add(_(i==="zombie"?.03:.024),Ue(E*.052,1,.118,1,1.15,.6),S,p,"skin");if((i==="zombie"||i==="devil")&&s.add(new Oe(.06,.02,.012),Ue(0,.935,.124),r(i==="zombie"?n.mouth:"#4a0f08"),p,"skin"),i==="human"&&s.add(new fn(.143,8,5,0,Math.PI*2,0,Math.PI*.46),Ue(0,1,-.012),r(n.hairs[e%n.hairs.length]),p,"cloth"),i==="zombie"&&s.add(new fn(.141,8,5,0,Math.PI*2,0,Math.PI*.42),Ue(.01,1,-.02),r(n.hair),p,"cloth"),i==="designer"){if(s.add(new fn(.143,8,5,0,Math.PI*2,0,Math.PI*.46),Ue(0,1,-.012),r(n.hair),p,"cloth"),t==="head"){for(let E of[-1,1])s.add(new ci(.034,.006,5,10),Ue(E*.052,1,.126),r(n.frame),p,"metal");s.add(new Oe(.024,.006,.006),Ue(0,1.005,.128),r(n.frame),p,"metal")}else{s.add(new ci(.142,.01,5,14,Math.PI),Ue(0,.99,0),r(n.frame),p,"metal");for(let E of[-1,1])s.add(new Qt(.04,.04,.03,8),Ue(E*.142,.99,0,1,1,1,0,0,Math.PI/2),r(n.phones),p,"metal")}s.zf=2;for(let E of[-1,1])s.add(_(.036),Ue(E*.052,.99,.105,1.05,1.15,.45),r("#26202a"),p,"skin");s.add(new Oe(.04,.03,.014),Ue(0,.935,.122),r("#1c0f10"),p,"skin"),s.zf=3;for(let E=0;E<3;E++)s.add(new Oe(.05,.08+E%2*.04,.01),Ue(-.06+E*.06,.56,.092,1,1,1,.1,0,(E-1)*.12),r("#7a8a6a"),Xe.pelvis,"cloth");s.add(new Oe(.05,.09,.01),Ue(-.05,.68,.1,1,1,1,.1,0,.3),r("#6a7a5c"),Xe.chest,"cloth"),s.zf=null}if(i==="devil"){for(let b of[-1,1])s.add(new Kt(.03,.1,4),Ue(b*.075,1.13,0,1,1,1,0,0,-b*.4),r(n.horn),p,"skin");let E=[Xe.tail1,Xe.tail2,Xe.tail3,Xe.tail4];for(let b=0;b<4;b++)s.add(new yi(.022-b*.003,.05,1,5),Ue(0,.5,-.1-b*.08,1,1,1,Math.PI/2),r(n.tail),E[b],"skin");s.add(new Kt(.04,.08,3),Ue(0,.5,-.45,1,1,1,-Math.PI/2),r(n.tail),Xe.tail4,"skin");let M=r(n.fork),x=-.15;s.add(new Qt(.009,.009,.8,5),Ue(x,.52,.05),r("#4a3a2a"),Xe.handR,"wood"),s.add(new Oe(.12,.014,.014),Ue(x,.92,.05),M,Xe.handR,"metal");for(let b of[-.052,0,.052])s.add(new Kt(.011,.1,4),Ue(x+b,.98,.05),M,Xe.handR,"metal")}let y=s.geometry();return y.computeBoundingSphere(),y}function Tp(i,e=0,t="head"){if(_t)return wy(i,e,t);let n=en.body,s=en.chars[i],r=new Ql,a=n.segsRadial,o=n.segsCap,l=(M,x)=>new yi(M,Math.max(.001,x),o,a),c=(M,x=1)=>new Kn(M,_t?Math.min(x,n.ballDetailMax):x),h=M=>_t?new fn(M,6,4):new fn(M,8,6),u=M=>de(M),d=u(s.skin),f=u(s.skinDark||s.skin),m,v,g;i==="devil"?(m=u(s.skin),v=u(s.cloth),g=u(s.hoof)):i==="zombie"?(m=u(s.shirt),v=u(s.pants),g=u(s.shoe)):(m=u(s.shirts[e%s.shirts.length]),v=u(s.pants),g=u(s.shoe));let p=u("#ffffff"),_=new fa(n.torsoProfile.map(M=>new ot(M[0],M[1])),n.latheSegs);r.add(_,Ue(0,0,0,...n.torsoScale),(M,x)=>x>.565?i==="devil"?d:m:v,(M,x)=>Ey(x),i==="devil"?"skin":"cloth"),r.add(c(n.hipR,1),Ue(0,.515,0,1.55,.85,1.05),v,Xe.pelvis),r.add(new Qt(.108,.108,.02,14),Ue(0,.548,0,1.45,1,.95),u(i==="devil"?s.trim:"#2a2a2a"),Xe.pelvis),r.add(new Qt(n.neckR,n.neckR*1.1,.075,8),Ue(0,.845,0),d,(M,x)=>x>.85?[Xe.head,1]:[Xe.neck,1],"skin"),r.add(c(n.headR,n.skinDetail),Ue(0,.945,0,...n.headScale),d,Xe.head,"skin");let S=Xe.head,y=u(i==="zombie"?s.eyeHole:"#ffffff");for(let M of _t?[]:[-1,1])i==="devil"?(r.add(h(.019),Ue(M*.034,.955,.074,1,.8,.6),u(s.eye),S,"skin"),r.add(h(.008),Ue(M*.034,.955,.084,.5,2.2,.5),u("#1a0a08"),S,"skin"),r.add(new Kt(.02,.07,5),Ue(M*.09,.96,0,1,1,1,0,0,-M*1.2),f,S,"skin"),r.add(new Kt(.02,.1,6),Ue(M*.052,1.03,0,1,1,1,0,0,-M*.42),u(s.horn),S,"skin"),r.add(new Oe(.04,.009,.01),Ue(M*.034,.984,.084,1,1,1,0,0,M*.35),u("#2a0f0c"),S,"skin")):i==="zombie"?(r.add(h(.021),Ue(M*.034,.955,.07,1,1.1,.55),y,S,"skin"),M>0&&r.add(h(.011),Ue(M*.034,.952,.082),u(s.eye),S,"skin"),r.add(new Oe(.04,.009,.01),Ue(M*.034,.985,.084,1,1,1,0,0,-M*.3),u(s.hair),S,"skin"),r.add(h(.02),Ue(M*.088,.94,0),f,S,"skin")):(r.add(h(.019),Ue(M*.034,.955,.074,1,1.1,.6),p,S,"skin"),r.add(h(.0105),Ue(M*.034,.955,.085,1,1,.5),u(s.eye),S,"skin"),r.add(new Oe(.038,.008,.01),Ue(M*.034,.985,.084,1,1,1,0,0,M*.12),u(i==="designer"?s.hair:s.hairs[e%s.hairs.length]),S,"skin"),r.add(h(.02),Ue(M*.088,.94,0),d,S,"skin"));if(_t){let M=u(i==="zombie"?s.eyeHole:i==="devil"?"#ffe04a":s.eye);for(let x of[-1,1])r.add(h(i==="zombie"?.026:.02),Ue(x*.037,.955,.076,1,1.1,.6),M,S,"skin");if((i==="zombie"||i==="devil")&&r.add(new Oe(.05,.018,.01),Ue(0,.908,.083),u(i==="zombie"?s.mouth:"#4a0f0c"),S,"skin"),i==="devil")for(let x of[-1,1])r.add(new Kt(.024,.085,4),Ue(x*.058,1.035,0,1,1,1,0,0,-x*.4),u(s.horn),S,"skin")}else r.add(h(.014),Ue(0,.933,.088,1,1,.9),i==="devil"?f:d,S,"skin"),r.add(new Oe(i==="zombie"?.05:.046,i==="zombie"?.022:.008,.01),Ue(0,.905,.083),u(i==="zombie"?s.mouth:"#7a2a2a"),S,"skin");if(i==="zombie"&&!_t&&(r.add(new Oe(.008,.01,.01),Ue(-.014,.912,.088),u("#d8d8c0"),S,"skin"),r.add(new Oe(.008,.01,.01),Ue(.016,.912,.088),u("#d8d8c0"),S,"skin")),i==="human"&&r.add(new fn(.094,14,8,0,Math.PI*2,0,Math.PI*.4),Ue(0,.95,-.006,1,1.05,1.04),u(s.hairs[e%s.hairs.length]),S,"cloth"),i==="designer"){if(r.add(new fn(.094,14,8,0,Math.PI*2,0,Math.PI*.4),Ue(0,.952,-.006,1,1.02,1.04),u(s.hair),S,"cloth"),t==="head"){for(let M of[-1,1])r.add(new ci(.024,.0045,6,14),Ue(M*.034,.955,.089),u(s.frame),S,"metal");r.add(new Oe(.02,.004,.004),Ue(0,.96,.09),u(s.frame),S,"metal")}else{r.add(new ci(.098,.008,6,18,Math.PI),Ue(0,.945,0),u(s.frame),S,"metal");for(let M of[-1,1])r.add(new Qt(.03,.03,.024,10),Ue(M*.099,.945,0,1,1,1,0,0,Math.PI/2),u(s.phones),S,"metal")}r.zf=2;for(let M of[-1,1])r.add(h(.029),Ue(M*.034,.946,.066,1.05,1.15,.45),u("#26202a"),S,"skin");r.add(new Oe(.034,.026,.012),Ue(0,.903,.087),u("#1c0f10"),S,"skin"),r.zf=3;for(let M=0;M<3;M++)r.add(new Oe(.05,.08+M%2*.04,.008),Ue(-.07+M*.07,.46,.092-M%2*.18,1,1,1,.2,0,(M-1)*.12),u("#7a8a6a"),Xe.pelvis,"cloth");r.add(new Oe(.05,.09,.008),Ue(-.07,.66,.1,1,1,1,.1,0,.3),u("#6a7a5c"),Xe.chest,"cloth"),r.zf=null,r.add(new Oe(.03,.16,.008),Ue(0,.67,.098),u(s.tie),Xe.chest,"cloth");for(let M of[-1,1])r.add(new Oe(.05,.02,.03),Ue(M*.03,.825,.06,1,1,1,.3,0,M*-.5),u("#ffffff"),Xe.chest,"cloth")}i==="zombie"&&r.add(new fn(.09,10,6,0,Math.PI*2,0,Math.PI*.35),Ue(.012,.96,-.012,1,1,1.02),u(s.hair),S,"cloth"),i==="devil"&&r.add(new Kt(.016,.05,5),Ue(0,.875,.07,1,1,1,Math.PI*.85),u(s.horn),S,"skin");for(let M of[-1,1]){let x=M>0?Xe.armL:Xe.armR,b=M>0?Xe.foreL:Xe.foreR,I=M>0?Xe.handL:Xe.handR,C=M>0?Xe.clavL:Xe.clavR,U=i==="devil"?d:i==="zombie"?u(s.shirt2):m;r.add(l(.04,.06),Ue(M*.092,.79,0,1,1,1,0,0,Math.PI/2),U,[Xe.chest,.6,C,.4],i==="devil"?"skin":"cloth"),r.add(h(.046),Ue(M*.14,.785,0),U,[C,.5,x,.5],i==="devil"?"skin":"cloth"),r.add(l(n.upperArmR,.15-2*n.upperArmR),Ue(M*.14,.715,0),(Z,q)=>i!=="devil"&&q>.69?U:i==="zombie"?f:d,x,i==="devil"?"skin":"cloth"),r.add(l(n.foreArmR,.14-2*n.foreArmR),Ue(M*.14,.57,0),i==="zombie"?f:d,b,"skin"),r.add(h(.036),Ue(M*.14,.64,0),d,[x,.5,b,.5],"skin"),r.add(c(n.handR,1),Ue(M*.14,.485,.008,1,1.25,.8),d,I,"skin"),r.add(l(.012,.03),Ue(M*.115,.49,.03,1,1,1,.5,0,M*.3),d,I,"skin");let X=M>0?Xe.thighL:Xe.thighR,j=M>0?Xe.shinL:Xe.shinR,D=M>0?Xe.footL:Xe.footR,O=i==="devil"?u(s.skinDark):v;r.add(l(n.thighR,.225-2*n.thighR),Ue(M*.065,.3675,0),O,X,i==="devil"?"skin":"cloth"),r.add(h(.052),Ue(M*.065,.255,0),O,[X,.5,j,.5],"cloth"),r.add(l(n.shinR,.22-2*n.shinR),Ue(M*.065,.145,0),i==="zombie"?f:O,j,i==="zombie"?"skin":"cloth"),r.add(c(n.footR,1),Ue(M*.065,.03,.028,1,.7,1.9),g,D,"cloth")}if(i==="zombie"){for(let M=0;M<4;M++)r.add(new Oe(.05,.09+M%2*.04,.008),Ue(-.09+M*.06,.45,.09-M%2*.18,1,1,1,.2,0,(M-1.5)*.1),u(s.shirt2),Xe.pelvis,"cloth");r.add(c(.04,1),Ue(.05,.68,.07,1,1,.4),u("#6a3a3a"),Xe.chest,"skin");for(let M of[-1,1])r.add(new Oe(.045,.11,.008),Ue(M*.065,.3,.06,1,1,1,.1,0,M*.08),u(s.shirt2),M>0?Xe.thighL:Xe.thighR,"cloth"),r.add(new Oe(.04,.08,.008),Ue(M*.14,.6,.045,1,1,1,0,0,M*.1),u(s.shirt),M>0?Xe.foreL:Xe.foreR,"cloth")}if(i==="devil"){let M=[Xe.tail1,Xe.tail2,Xe.tail3,Xe.tail4];for(let I=0;I<4;I++)r.add(l(.016-I*.0025,.06),Ue(0,.47,-.1-I*.08,1,1,1,Math.PI/2),u(s.tail),M[I],"skin");r.add(new Kt(.034,.07,3),Ue(0,.47,-.45,1,1,1,-Math.PI/2),u(s.tail),Xe.tail4,"skin");let x=u(s.fork),b=-.14;r.add(new Qt(.007,.007,.78,6),Ue(b,.52,.045),u("#4a3a2a"),Xe.handR,"wood"),r.add(new Oe(.11,.012,.012),Ue(b,.9,.045),x,Xe.handR,"metal");for(let I of[-.048,0,.048])r.add(new Kt(.009,.09,5),Ue(b+I,.955,.045),x,Xe.handR,"metal")}let E=r.geometry();return E.computeBoundingSphere(),E}function Ap(i,e,t="human"){let n=by(),s=new Cs(i,e);s.add(n[0]),s.updateMatrixWorld(!0);let r=new Is(n);return s.bind(r),s.frustumCulled=!1,{mesh:s,bones:n}}var Ba=jl.length,za=class{constructor(){this.r=new Float32Array(Ba*3),this.ry=0,this.rr=[0,0,0],this.sq=0}clear(){this.r.fill(0),this.ry=0,this.rr[0]=this.rr[1]=this.rr[2]=0,this.sq=0}},V=(i,e,t=0,n=0,s=0)=>{let r=Xe[e]*3;i.r[r]+=t,i.r[r+1]+=n,i.r[r+2]+=s},Ce=Math.sin,Zh=Math.cos,Or=Math.abs,ti=Math.max;var Ys=Math.PI,pi=(i,e,t,n,s)=>i<=e?0:i<t?Pe((i-e)/(t-e)):i<=n?1:i<s?1-Pe((i-n)/(s-n)):0,Kh=(i,e,t=1,n=5)=>{for(let s=1;s<=4;s++)V(i,"tail"+s,Ce(e*n-s*.7)*.22*t,Ce(e*n*.8-s*.9)*.5*t,0)},Zs=(i,e=1)=>{V(i,"thighL",-1.5*e),V(i,"thighR",-1.5*e),V(i,"shinL",1.5*e),V(i,"shinR",1.5*e)},mi={idle(i,e,t){let n=Ce(e*1.7),s=Ce(e*.6);V(i,"chest",.025*n),V(i,"spine",-.01*n),V(i,"armL",0,0,.09+.02*n),V(i,"armR",0,0,-.09-.02*n),V(i,"foreL",-.14),V(i,"foreR",-.14),V(i,"pelvis",0,0,s*.05),V(i,"thighL",0,0,-s*.02),V(i,"thighR",0,0,-s*.02),i.ry-=Or(s)*.004,V(i,"head",Ce(e*.37)*.08,Ce(e*.5)*.5*Ce(e*.13+1),Ce(e*.29)*.07);let r=ti(0,Ce(e*.45+1))**10;V(i,"thighL",-r*.35),V(i,"shinL",r*.55)},walk(i,e,t){let n=e*6.4,s=Ce(n),r=Zh(n);V(i,"thighL",-s*.62*t),V(i,"thighR",s*.62*t),V(i,"shinL",.08+ti(0,Ce(n+1.3))*.95*t),V(i,"shinR",.08+ti(0,Ce(n+1.3+Ys))*.95*t),V(i,"footL",s*.25*t),V(i,"footR",-s*.25*t),V(i,"armL",s*.55*t,0,.06),V(i,"armR",-s*.55*t,0,-.06),V(i,"foreL",-.2-ti(0,-s)*.4*t),V(i,"foreR",-.2-ti(0,s)*.4*t),V(i,"pelvis",0,s*.15*t,r*.04),V(i,"spine",.03,-s*.11*t,-r*.02),V(i,"chest",0,-s*.05,0),V(i,"head",0,s*.06,-r*.02),i.ry+=Or(r)*.018*t},run(i,e,t){let n=e*9.5,s=Ce(n),r=Zh(n);V(i,"thighL",-s*1.05*t),V(i,"thighR",s*1.05*t),V(i,"shinL",.2+ti(0,Ce(n+1))*1.7*t),V(i,"shinR",.2+ti(0,Ce(n+1+Ys))*1.7*t),V(i,"armL",s*1*t,0,.1),V(i,"armR",-s*1*t,0,-.1),V(i,"foreL",-1.5),V(i,"foreR",-1.5),V(i,"spine",.26),V(i,"chest",.08,-s*.2),V(i,"pelvis",0,s*.2),V(i,"head",-.22,s*.05),i.ry+=Or(Ce(n))*.055*t,i.sq-=Or(r)*.05},wave(i,e,t){mi.idle(i,e,t),V(i,"armR",0,0,-2.45-.12*Ce(e*7)+.09),V(i,"foreR",0,0,-.55*Ce(e*9)-.15),V(i,"handR",0,0,Ce(e*9)*.3),V(i,"armL",0,0,.45-.09),V(i,"foreL",-1.7+.14),V(i,"chest",0,0,.05),V(i,"head",0,0,-.18)},waveBoth(i,e,t){mi.idle(i,e,t),V(i,"armR",0,0,-2.5-.09),V(i,"foreR",0,0,-.5*Ce(e*10)),V(i,"armL",0,0,2.5-.09),V(i,"foreL",0,0,.5*Ce(e*10+Ys)),V(i,"head",-.12+Ce(e*4)*.1)},jump(i,e,t){let n=e*1.1%1,s=pi(n,0,.2,.24,.3),r=pi(n,.3,.4,.66,.74),a=pi(n,.7,.76,.8,.95),o=s+a*.8;V(i,"thighL",-.95*o+-.35*r),V(i,"thighR",-.95*o-.35*r),V(i,"shinL",1.5*o+.6*r),V(i,"shinR",1.5*o+.6*r),V(i,"spine",.38*o),V(i,"head",-.2*o),V(i,"armL",.9*s-2.7*r+.2*a,0,.3*r),V(i,"armR",.9*s-2.7*r+.2*a,0,-.3*r),i.sq+=.26*o-.22*r,i.ry+=Ce(St((n-.3)/.4,0,1)*Ys)*.3*t*(n>.3&&n<.7?1:0)},dance(i,e,t){let n=Or(Ce(e*4.2)),s=Ce(e*4.2),r=Ce(e*8.4);V(i,"thighL",-.38*n-.1*s),V(i,"thighR",-.38*n+.1*s),V(i,"shinL",.7*n),V(i,"shinR",.7*n),V(i,"pelvis",0,s*.35,s*.16),V(i,"spine",.05,-s*.3,-s*.12),V(i,"chest",0,-s*.2),V(i,"armL",-2.5+r*.45,0,.3),V(i,"armR",-2.5-r*.45,0,-.3),V(i,"foreL",-1.2-r*.4),V(i,"foreR",-1.2+r*.4),V(i,"head",r*.12,s*.3,s*.15),i.ry+=n*.045,i.sq+=n*.06-.02,Kh(i,e,1.4,6.5)},stab(i,e,t){let n=e*.75%1,s=pi(n,0,.35,.45,.5),r=pi(n,.45,.55,.62,.85);V(i,"armR",-.5*s-1.55*r,0,-.1),V(i,"foreR",-.9*s-.2*r),V(i,"armL",-.9*r,0,.6-.3*r),V(i,"foreL",-.7),V(i,"spine",.08+.35*r-.15*s,.5*s-.65*r),V(i,"chest",0,.25*s-.3*r),V(i,"thighL",-.5*r),V(i,"thighR",.3*r+.2*s),V(i,"shinR",.4*r),i.ry-=.02*r,V(i,"head",.1*r,0,Ce(e*3)*.1),Kh(i,e,1,4.5)},hop(i,e,t){let n=e*2%1,s=pi(n,0,.15,.2,.3);V(i,"thighL",-.5*s),V(i,"thighR",-.5*s),V(i,"shinL",.9*s),V(i,"shinR",.9*s),i.ry+=Ce(St((n-.25)/.6,0,1)*Ys)*.07,i.sq+=.18*s-.1*pi(n,.3,.4,.7,.8),V(i,"armL",-.95),V(i,"armR",-.95),V(i,"foreL",-1.9),V(i,"foreR",-1.9),V(i,"handL",0,Ce(e*14)*.5),V(i,"handR",0,-Ce(e*14)*.5),V(i,"spine",.2),V(i,"head",.15,Ce(e*3)*.4,Ce(e*6)*.15),Kh(i,e,1.6,8)},shamble(i,e,t){let n=e*3.6,s=Ce(n),r=Zh(n);V(i,"thighL",-s*.48*t),V(i,"shinL",ti(0,Ce(n+1.2))*.7*t),V(i,"footL",s*.2),V(i,"thighR",-.05+s*.1),V(i,"shinR",.04),V(i,"footR",.55+s*.1),V(i,"armL",-1.35+Ce(n*.5)*.14,0,.06),V(i,"armR",-1.5+Ce(n*.5+1)*.14,0,-.06),V(i,"foreL",-.35),V(i,"foreR",-.18),V(i,"handL",.5),V(i,"handR",.6),V(i,"spine",.2),V(i,"chest",.12,-s*.16),V(i,"pelvis",0,s*.2,r*.08);let a=ti(0,Ce(e*1.3+1.7)-.93)*14;V(i,"head",.25,a*.9,.32+Ce(n*.5)*.08),i.ry+=-.012+Or(r)*.01},zidle(i,e,t){let n=Ce(e*1.1);V(i,"armL",-1.25+Ce(e*1.3)*.12,0,.1),V(i,"armR",-1.35+Ce(e*1.1+1)*.12,0,-.1),V(i,"foreL",-.3),V(i,"foreR",-.25),V(i,"handL",.5),V(i,"handR",.5),V(i,"spine",.2,0,n*.08),V(i,"chest",.1),V(i,"pelvis",0,0,n*.05),V(i,"thighL",-n*.08),V(i,"thighR",n*.08);let s=ti(0,Ce(e*1.7+.6)-.9)*10;V(i,"head",.3,s*1+Ce(e*.5)*.25,.3+Ce(e*.6)*.15)},reach(i,e,t){let n=Ce(e*2.2);mi.zidle(i,e,t),V(i,"armL",-.4-.5*n),V(i,"armR",-.4+.5*n),V(i,"foreL",.2),V(i,"foreR",.2),V(i,"handL",-.7),V(i,"handR",-.7),V(i,"spine",.08)},stumble(i,e,t){let n=St(e/1.8,0,1),s=pi(n,0,.3,.5,.95);V(i,"spine",.75*s),V(i,"chest",.2*s),V(i,"armL",-2.3*s+Ce(e*14)*.5*s),V(i,"armR",-2.3*s-Ce(e*14)*.5*s),V(i,"thighL",-.9*s),V(i,"shinL",1*s),V(i,"thighR",.5*s),V(i,"head",-.45*s),i.ry-=.05*s,i.rr[0]+=.25*s},sit(i,e,t){Zs(i),V(i,"spine",-.05)},type(i,e,t){Zs(i),V(i,"spine",.13),V(i,"chest",.08),V(i,"armL",-.95),V(i,"armR",-.95),V(i,"foreL",-1.35),V(i,"foreR",-1.35),V(i,"handL",Ce(e*17)*.3+.2),V(i,"handR",Ce(e*15+1)*.3+.2),V(i,"armL",Ce(e*11)*.04),V(i,"armR",Ce(e*9.4)*.04),V(i,"head",.25+Ce(e*1.3)*.03,Ce(e*.5)*.08)},click(i,e,t){Zs(i),V(i,"spine",.1),V(i,"armL",-.85),V(i,"foreL",-1.3),V(i,"handL",.2);let n=ti(0,Ce(e*2.7))**6;V(i,"armR",-.9-.12*Ce(e*1.1),0,-.12+Ce(e*.9)*.1),V(i,"foreR",-1.2+n*.1),V(i,"handR",.2+n*.3),V(i,"head",.22,Ce(e*.7)*.15)},stretch(i,e,t){let n=St(e/3.2,0,1),s=pi(n,0,.25,.7,1);Zs(i),V(i,"armL",-3*s,0,.4*s),V(i,"armR",-3*s,0,-.4*s),V(i,"spine",-.25*s),V(i,"chest",-.2*s),V(i,"head",-.4*s+Ce(e*9)*.02*s)},drink(i,e,t){Zs(i);let n=e*.45%1,s=pi(n,0,.25,.6,.8);V(i,"spine",.05),V(i,"armR",-.5-.5*s),V(i,"foreR",-1.1-1.2*s),V(i,"handR",-.5*s),V(i,"armL",-.5),V(i,"foreL",-1.3),V(i,"head",.1-.4*s)},talk(i,e,t){mi.idle(i,e,t),V(i,"armL",-.5+Ce(e*2.3)*.35,0,.25),V(i,"foreL",-.6+Ce(e*3.1)*.3),V(i,"armR",-.3+Ce(e*1.7)*.25,0,-.2),V(i,"foreR",-.7+Ce(e*2.4)*.3),V(i,"head",.05,Ce(e*.8)*.35)},hang(i,e,t){V(i,"armL",-2.8,0,.12),V(i,"armR",-2.8,0,-.12),V(i,"foreL",-.3),V(i,"foreR",-.3),V(i,"thighL",-.8*Ce(e*7)),V(i,"thighR",.8*Ce(e*7)),V(i,"shinL",.6+.6*Ce(e*7+1)),V(i,"shinR",.6-.6*Ce(e*7+1)),V(i,"spine",.1),V(i,"head",-.4,Ce(e*3)*.3)},dangle(i,e,t){Zs(i,1),V(i,"shinL",.2*-1+Ce(e*3.2)*.55),V(i,"shinR",-.2+Ce(e*3.2+Ys)*.55),V(i,"spine",.05),V(i,"armL",0,0,.12),V(i,"armR",0,0,-.12),V(i,"foreL",-.2),V(i,"foreR",-.2),V(i,"head",Ce(e*1.1)*.1,Ce(e*.7)*.4)},knock(i,e,t){let n=Ce(e*11);mi.idle(i,e,t),V(i,"armR",-1.45+n*.3,0,-.1),V(i,"foreR",-.45-n*.25),V(i,"armL",-2.6,0,.2-.09),V(i,"foreL",-.4),V(i,"chest",n*.05),V(i,"spine",.12-n*.05),V(i,"head",-.1)},shove(i,e,t){let n=e*1.2%1,s=pi(n,.2,.35,.5,.7);V(i,"armL",-.6-1*s),V(i,"armR",-.6-1*s),V(i,"foreL",-.9+.6*s),V(i,"foreR",-.9+.6*s),V(i,"spine",.15+.3*s),V(i,"thighL",-.4*s),V(i,"thighR",.35*s+.1),V(i,"shinR",.3*s),V(i,"head",.1)},flail(i,e,t){V(i,"armL",Ce(e*13)*2-1,0,.4),V(i,"armR",Ce(e*13+Ys)*2-1,0,-.4),V(i,"foreL",-.6),V(i,"foreR",-.6),V(i,"spine",-.35+Ce(e*9)*.1),V(i,"thighL",-.5*Ce(e*8)),V(i,"thighR",.5*Ce(e*8)),V(i,"head",-.3+Ce(e*10)*.15,0,Ce(e*7)*.2)},shrug(i,e,t){mi.idle(i,e,t),V(i,"clavL",0,0,.25),V(i,"clavR",0,0,-.25),V(i,"armL",0,0,.5),V(i,"armR",0,0,-.5),V(i,"foreL",-1.2),V(i,"foreR",-1.2),V(i,"head",0,0,.25)},zsit(i,e,t){Zs(i),V(i,"spine",.18),V(i,"armL",-1.2+Ce(e*1.3)*.1),V(i,"armR",-1.3+Ce(e*1.1)*.1),V(i,"foreL",-.5),V(i,"foreR",-.4),V(i,"handL",.5),V(i,"handR",.5);let n=ti(0,Ce(e*1.5+.6)-.9)*10;V(i,"head",.35,n+Ce(e*.5)*.3,.3)},point(i,e,t){mi.idle(i,e,t),V(i,"armR",0,0,-1.55+Ce(e*4)*.1),V(i,"foreR",-.1),V(i,"spine",.05),V(i,"head",0,.3)}},Ty=[["clavL","clavR"],["armL","armR"],["foreL","foreR"],["handL","handR"],["thighL","thighR"],["shinL","shinR"],["footL","footR"]];function Ay(i){let e=new za;return(t,n,s)=>{e.clear(),i(e,n,s);let r=new Set;for(let[a,o]of Ty){let l=Xe[a]*3,c=Xe[o]*3;r.add(l),r.add(c),t.r[l]+=e.r[c],t.r[l+1]-=e.r[c+1],t.r[l+2]-=e.r[c+2],t.r[c]+=e.r[l],t.r[c+1]-=e.r[l+1],t.r[c+2]-=e.r[l+2]}for(let a=0;a<Ba;a++){let o=a*3;r.has(o)||(t.r[o]+=e.r[o],t.r[o+1]-=e.r[o+1],t.r[o+2]-=e.r[o+2])}t.ry+=e.ry,t.sq+=e.sq,t.rr[0]+=e.rr[0],t.rr[1]-=e.rr[1],t.rr[2]-=e.rr[2]}}for(let i of["wave","point","knock","drink"])mi[i+"M"]=Ay(mi[i]);var xb=Object.keys(mi),Ep=["head","handL","handR","foreL","foreR","neck"].map(i=>Xe[i]),ec=class{constructor(e){this.bones=e,this.w={},this.tg={},this.rate={},this.t={},this.sp={},this.amp={},this.tmp=new za,this.fin=new za,this.sqP=0,this.sqV=0,this.spP=new Float32Array(Ba*3),this.spV=new Float32Array(Ba*3),this.current=null,this.time=Math.random()*20}play(e,t=.3,n=1,s=1,r=!1){if(this.current===e&&!r){this.sp[e]=n,this.amp[e]=s;return}for(let a of Object.keys(this.tg))this.tg[a]=0,this.rate[a]=1/Math.max(.05,t);this.tg[e]=1,this.rate[e]=1/Math.max(.05,t),this.sp[e]=n,this.amp[e]=s,this.w[e]===void 0&&(this.w[e]=0),(r||this.t[e]===void 0||this.w[e]<.02)&&(this.t[e]=r?0:this.t[e]||Math.random()*10),this.current=e}mix(e,t=1,n=6){this.current=null;for(let s of Object.keys(this.tg))e[s]===void 0&&(this.tg[s]=0,this.rate[s]=n);for(let s of Object.keys(e))this.w[s]===void 0&&(this.w[s]=0,this.t[s]=Math.random()*10),this.tg[s]=e[s],this.rate[s]=n,this.sp[s]=t,this.amp[s]=1}update(e){let t=this.fin;t.clear();let n=0;for(let l of Object.keys(this.w)){let c=this.tg[l]||0,h=this.w[l];h+=St(c-h,-e*this.rate[l],e*this.rate[l]),this.w[l]=h,!(h<=.001&&c===0)&&(this.t[l]+=e*(this.sp[l]||1),n+=h)}let s=this.tmp;for(let l of Object.keys(this.w)){let c=this.w[l];if(c<=.001)continue;s.clear(),mi[l](s,this.t[l],this.amp[l]||1);let h=c/Math.max(n,1e-4);for(let u=0;u<t.r.length;u++)t.r[u]+=s.r[u]*h;t.ry+=s.ry*h,t.sq+=s.sq*h;for(let u=0;u<3;u++)t.rr[u]+=s.rr[u]*h}let r=Math.max(1,Math.ceil(e/.012)),a=e/r;for(let l=0;l<r;l++){for(let c of Ep)for(let h=0;h<3;h++){let u=c*3+h,d=140,f=11;this.spV[u]+=((t.r[u]-this.spP[u])*d-this.spV[u]*f)*a,this.spP[u]+=this.spV[u]*a}this.sqV+=((t.sq-this.sqP)*190-this.sqV*12)*a,this.sqP+=this.sqV*a}for(let l of Ep)for(let c=0;c<3;c++){let h=l*3+c;this.spP[h]=St(this.spP[h],-3,3),t.r[h]=this.spP[h]}this.sqP=St(this.sqP,-.6,.6);let o=this.bones;for(let l=1;l<Ba;l++)o[l].rotation.set(t.r[l*3],t.r[l*3+1],t.r[l*3+2]);o[0].position.y=t.ry,o[0].rotation.set(t.rr[0],t.rr[1],t.rr[2]),o[0].scale.set(1-this.sqP*.5,1-this.sqP,1-this.sqP*.5)}};function tc(i){let e=new Map,t=new Map,n=i.clone();return Rp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Rp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Rp(i.children[n],e.children[n],t)}var Ha=class extends Mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new nc(t,yt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new nc(t,yt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=qi.extractUrlBase(e);a=qi.resolveURL(c,this.path)}else a=qi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new br(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Dp){try{a[yt.KHR_BINARY_GLTF]=new xu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[yt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Eu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case yt.KHR_MATERIALS_UNLIT:a[u]=new eu;break;case yt.KHR_DRACO_MESH_COMPRESSION:a[u]=new _u(r,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:a[u]=new yu;break;case yt.KHR_MESH_QUANTIZATION:a[u]=new vu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Ry(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function tn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qh=class{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ee(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Nn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new cs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Os(h),c.distance=u;break;case"spot":c=new ya(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},eu=class{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ht}extendParams(e,t,n){let s=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Nn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,qt))}return Promise.all(s)}},tu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},nu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return tn(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ot(r,r)}return Promise.all(s)}},iu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return tn(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},su=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ru=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return tn(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},au=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){return tn(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Nn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,qt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ou=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},lu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){return tn(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(r[0],r[1],r[2],Nn),Promise.all(s)}},cu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},hu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(r[0],r[1],r[2],Nn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,qt)),Promise.all(s)}},uu=class{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){return tn(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},du=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return tn(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},fu=class{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},pu=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},mu=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},nc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},gu=class{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ni.TRIANGLES&&c.mode!==ni.TRIANGLE_STRIP&&c.mode!==ni.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let v=new Qe,g=new z,p=new Pt,_=new z(1,1,1),S=new vn(m.geometry,m.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,E),l.SCALE&&_.fromBufferAttribute(l.SCALE,E),S.setMatrixAt(E,v.compose(g,p,_));let y=null;for(let E in l)if(E==="_COLOR_0"){let M=l[E];S.instanceColor=new zi(M.array,M.itemSize,M.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(y===null){let x=S.geometry;y=new Rt,y.name=x.name;for(let b in x.attributes)y.setAttribute(b,x.attributes[b]);for(let b in x.morphAttributes)y.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(let b of x.groups)y.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),S.geometry=y}let M=l[E];y.setAttribute(E,new zi(M.array,M.itemSize,M.normalized))}It.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Dp="glTF",ka=12,Cp={JSON:1313821514,BIN:5130562},xu=class{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ka),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ka,r=new DataView(e,ka),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Cp.JSON){let c=new Uint8Array(e,ka+a,o);this.content=n.decode(c)}else if(l===Cp.BIN){let c=ka+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_u=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Su[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Su[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Br[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let v=f.attributes[m],g=l[m];g!==void 0&&(v.normalized=g)}u(f)},o,c,Nn,d)})})}},yu=class{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},vu=class{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}},ic=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,v=m-c,g=-2*f+3*d,p=f-d,_=1-g,S=p-d+u;for(let y=0;y!==o;y++){let E=a[v+y+o],M=a[v+y+l]*h,x=a[m+y+o],b=a[m+y]*h;r[y]=_*E+S*M+g*x+p*b}return r}},Cy=new Pt,Mu=class extends ic{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Cy.fromArray(r).normalize().toArray(r),r}},ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ip={9728:Yt,9729:un,9984:Jo,9985:Cr,9986:Gs,9987:Vn},Lp={33071:zn,33648:dr,10497:Tn},Jh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Su={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iy={CUBICSPLINE:void 0,LINEAR:ws,STEP:Es},$h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ly(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ns({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),i.DefaultMaterial}function Ks(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Py(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Dy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ny(i){let e,t=i.extensions&&i.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jh(t.attributes):e=i.indices+":"+jh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+jh(i.targets[n]);return e}function jh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function bu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Uy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Fy=new Qe,Eu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ry,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new ga(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new va(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new br(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ks(r,o,s),Ci(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(qi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Jh[s.type],o=Br[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Tt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Jh[s.type],c=Br[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,v,g;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,S=t.cache.get(_);S||(v=new c(o,p*f,s.count*f/h),S=new _r(v,f/h),t.cache.add(_,S)),g=new yr(S,l,d%f/h,m)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),g=new Tt(v,l,m);if(s.sparse!==void 0){let p=Jh.SCALAR,_=Br[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,E=new _(a[1],S,s.sparse.count*p),M=new c(a[2],y,s.sparse.count*l);o!==null&&(g=new Tt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let x=0,b=E.length;x<b;x++){let I=E[x];if(g.setX(I,M[x*l]),l>=2&&g.setY(I,M[x*l+1]),l>=3&&g.setZ(I,M[x*l+2]),l>=4&&g.setW(I,M[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ip[d.magFilter]||un,h.minFilter=Ip[d.minFilter]||Vn,h.wrapS=Lp[d.wrapS]||Tn,h.wrapT=Lp[d.wrapT]||Tn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Yt&&h.minFilter!==un,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,m){t.parse(d,f,m)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,m){let v=f;t.isImageBitmapLoader===!0&&(v=function(g){let p=new dn(g);p.needsUpdate=!0,f(p)}),t.load(qi.resolveURL(d,r.path),v,void 0,m)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),Ci(d,a),d.userData.mimeType=a.mimeType||Uy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[yt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Sr,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Mr,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ns}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[yt.KHR_MATERIALS_UNLIT]){let u=s[yt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Nn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,qt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=rn);let h=r.alphaMode||$h.OPAQUE;if(h===$h.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===$h.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ht&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ot(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ht&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ht){let u=r.emissiveFactor;o.emissive=new Ee().setRGB(u[0],u[1],u[2],Nn)}return r.emissiveTexture!==void 0&&a!==Ht&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,qt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ks(s,u,r),u})}createUniqueName(e){let t=kt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Pp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Ny(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Pp(new Rt,c,t),c.mode===ni.TRIANGLE_STRIP?d=d.then(f=>Bh(f,Ca)):c.mode===ni.TRIANGLE_FAN&&(d=d.then(f=>Bh(f,Lr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Ly(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let v=h[f],g=a[f],p,_=c[f];if(g.mode===ni.TRIANGLES||g.mode===ni.TRIANGLE_STRIP||g.mode===ni.TRIANGLE_FAN||g.mode===void 0){let S=r.isSkinnedMesh===!0,y=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");S&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&y?new Cs(v,_):new Mt(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===ni.LINES)p=new oa(v,_);else if(g.mode===ni.LINE_STRIP)p=new Ls(v,_);else if(g.mode===ni.LINE_LOOP)p=new la(v,_);else if(g.mode===ni.POINTS)p=new Ps(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Dy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ci(p,r),g.extensions&&Ks(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ks(s,u[0],r),u[0];let d=new sn;r.extensions&&Ks(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new hn(Ol.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Bs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Qe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Is(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],v=f.target,g=v.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,_=s.parameters!==void 0?s.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(m),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let S=0,y=d.length;S<y;S++){let E=d[S],M=f[S],x=m[S],b=v[S],I=g[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let C=n._createAnimationTracks(E,M,x,b,I);if(C)for(let U=0;U<C.length;U++)p.push(C[U])}let _=new Us(r,void 0,p);return Ci(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Fy)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new z().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new rs:c.length>1?h=new sn:c.length===1?h=c[0]:h=new It,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ci(h,r),r.extensions&&Ks(n,h,r),r.matrix!==void 0){let u=new Qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new sn;n.name&&(r.name=s.createUniqueName(n.name)),Ci(r,n),n.extensions&&Ks(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(tc(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Fn||d instanceof dn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}fs[r.path]===fs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(fs[r.path]){case fs.weights:h=Vi;break;case fs.rotation:h=Wi;break;case fs.translation:case fs.scale:h=ls;break;default:n.itemSize===1?h=Vi:h=ls;break}let u=s.interpolation!==void 0?Iy[s.interpolation]:ws,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){let v=new h(l[f]+"."+fs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Wi?Mu:ic;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Oy(i,e,t){let n=e.attributes,s=new Un;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),o.normalized){let h=bu(Br[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new z,l=new z;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let v=bu(Br[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new kn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Pp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Su[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return xt.workingColorSpace!==Nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),Ci(i,e),Oy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Py(i,e.targets,t):i})}var zr={},Up=i=>{let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer},wu={},Fp={},Tu={},By=new An({vertexColors:!0}),zy=new Ee("#7a2630"),ky=new Ee(.62,.64,.6);function Np(i,e,t){let n=i.color.clone(),s=n.r*.3+n.g*.59+n.b*.11;if(e==="hell")return i.name==="water"?new Ee(3.2,1.3,.25):zy.clone().multiplyScalar(.5+s*.9);if(e==="apoc")return ky.clone().multiplyScalar(.45+s*.9);if(!e&&i.name){let r=[...t].reduce((o,l)=>o+l.charCodeAt(0),0)%3,a=i.name;if(/^leafs/.test(a)&&!/fall/i.test(a))return new Ee(["#4fae3a","#3f9a34","#62b843"][r]).multiplyScalar(/Dark/.test(a)?.78:1);if(/^woodBark/.test(a))return new Ee("#7a5230");if(a==="grass")return new Ee(["#5bbf3f","#4cae38","#6ac84a"][r]);if(a==="dirt")return new Ee("#8a6a44")}return n}function Au(i){if(wu[i])return wu[i];let[e,t]=i.split("@"),n=Fp[e];if(!n)return null;n.updateMatrixWorld(!0);let s=[],r=[],a=null;n.traverse(u=>{if(!u.isMesh)return;let d=u.geometry.clone();d.applyMatrix4(u.matrixWorld),d.index&&(d=d.toNonIndexed());let f=Array.isArray(u.material)?u.material:[u.material];if(f[0].map){a=f[0].map;for(let _ of Object.keys(d.attributes))_!=="position"&&_!=="normal"&&_!=="uv"&&d.deleteAttribute(_);r.push(d);return}for(let _ of Object.keys(d.attributes))_!=="position"&&_!=="normal"&&d.deleteAttribute(_);let m=d.attributes.position.count,v=new Float32Array(m*3),g=Np(f[0],t,i),p=d.groups&&d.groups.length?d.groups:[{start:0,count:m,materialIndex:0}];for(let _ of p){let S=Np(f[_.materialIndex||0]||f[0],t,i);for(let y=_.start;y<_.start+_.count;y++)v[y*3]=S.r,v[y*3+1]=S.g,v[y*3+2]=S.b}d.setAttribute("color",new Tt(v,3)),d.clearGroups(),s.push(d)});let o=r.length>0,l=Nr(o?r:s);l.computeBoundingBox();let c=l.boundingBox;if(l.translate(-(c.min.x+c.max.x)/2,-c.min.y,-(c.min.z+c.max.z)/2),l.computeBoundingBox(),o){let u=e.startsWith("ken:building")?"kenbld":e.startsWith("city:")||e.startsWith("hall:")||e.startsWith("furn:")?e.split(":")[0]:e;Tu[u]||(a.magFilter=Yt,Tu[u]=new An({map:a})),l.userData.mat=Tu[u]}else l.userData.mat=By;let h=l.boundingBox;return wu[i]={geo:l,size:[h.max.x-h.min.x,h.max.y,h.max.z-h.min.z]}}function Hy(i){let[e]=i.split(":"),t=window.__PROPS[i],n=new Ha;return new Promise((s,r)=>{let a=o=>{Fp[i]=o.scene,s()};if(t.glb)n.parse(Up(t.glb),"",a,r);else{let o=JSON.parse(t);o.images&&o.images.forEach(l=>{l.uri=window.__PROPTEX[e]}),n.parse(JSON.stringify(o),"",a,r)}})}function Op(){let i=window.__MODELS||{},e=new Ha,t=Object.keys(window.__PROPS||{}).sort((n,s)=>(n.startsWith("city")?0:1)-(s.startsWith("city")?0:1));return Promise.all(t.map(Hy).concat(Object.keys(i).map(n=>new Promise((s,r)=>e.parse(Up(i[n]),"",a=>{a.scene.updateMatrixWorld(!0);let o=new Un().setFromObject(a.scene,!0);zr[n]={scene:a.scene,anims:a.animations,height:o.max.y-o.min.y,minY:o.min.y,hip:0},s()},r)))))}var Gp=i=>i.split("|").pop().replace(/\.001$/,""),Gy=i=>"#"+i.map(e=>e.toString(16).padStart(2,"0")).join(""),Ru={};function Vy(i,e,t){let n=i+"|"+t;if(Ru[n])return Ru[n];let s=zr[i].scene,r=null;s.traverse(d=>{d.isMesh&&d.material.map&&(r=d.material.map)});let a=r.image,o=document.createElement("canvas");o.width=a.width,o.height=a.height;let l=o.getContext("2d");l.drawImage(a,0,0);let c=l.getImageData(0,0,o.width,o.height),h=c.data;for(let d=0;d<h.length;d+=4){let f=Gy([h[d],h[d+1],h[d+2]]),m=e[f];if(m){let v=new Ee(m).convertLinearToSRGB();h[d]=Math.round(v.r*255),h[d+1]=Math.round(v.g*255),h[d+2]=Math.round(v.b*255)}}l.putImageData(c,0,0);let u=new ki(o);return u.flipY=!1,u.colorSpace=qt,u.magFilter=u.minFilter=Yt,u.generateMipmaps=!1,Ru[n]=u}function Vp(i,e){if(i==="devil")return{key:"demon_c",swaps:{"#7d250e":"#ff4426","#ad9865":"#ffd060","#cca425":"#2a1a14","#44423a":"#8a2012"},tag:"devil"};if(i==="zombie"){let l=e%3;return{key:"zombie_c",swaps:l===1?{"#74861c":"#5aa04a"}:l===2?{"#74861c":"#8aa040"}:{},tag:"zombie"+l}}let t=e%2===1,n=t?"cube_woman":"cube_guy",s=Bp[(e>>1)%Bp.length],r=t?"#695140":"#cfa78b";if(i==="designer"){let l=["#f4f4f6","#dbe9f7","#e9f0f8"][e%3];return{key:n,skin:s,swaps:t?{"#b9822a":l,"#375a71":"#2d3340",[r]:s}:{"#cf9f41":l,"#375a71":"#2d3340",[r]:s},tag:"des"+e%3+n+s}}let a=["#d9534f","#4f8bd9","#e8c547","#5fae6b","#b36fd1","#e88a3a"],o=a[(e>>1)%a.length];return{key:n,skin:s,swaps:t?{"#b9822a":o,[r]:s}:{"#cf9f41":o,[r]:s},tag:"hum"+(e>>1)%a.length+n+s}}var Ib=new Ee("#cfa78b"),Bp=["#cfa78b","#e8c3a0","#a8765a","#8a5a40"],zp={idle:["Idle",1],walk:["Walk",1],run:["Run",1],jump:["Jump",1],hop:["Jump",1.1],dance:["Run",.8],stab:["Attack",1],knock:["Punch",.75],shove:["Punch",.75],hang:["Jump_Idle",1],dangle:["Jump_Idle",1],flail:["Jump_Idle",1.4],shamble:["Walk",.55],zidle:["Idle",.8],reach:["Idle",.8,"reach"],stumble:["HitRecieve",1],wave:["Wave",1,"raiseR"],waveM:["Wave",1,"raiseL"],waveBoth:["Idle",1,"raiseBoth"],point:["Idle_Hold",1,"raiseR"],pointM:["Idle_Hold",1,"raiseL"],shrug:["Idle",1],talk:["Idle",1],type:["Idle",1],click:["Idle",1],drink:["Idle",1],stretch:["Idle",1],zsit:["Idle",.8]},Wy=/^(Arm|UpperArm|LowerArm|Leg|UpperLeg|LowerLeg)[LR]$/,Cu=new Pt,Iu=new Pt,sc=(i,e,t)=>{let n=i.evaluate(e);return t.set(n[0],n[1],n[2],n[3]),t},kp=new Map;function Lu(i){let e=kp.get(i);if(e)return e;let t=i.tracks.filter(n=>n.name.endsWith(".quaternion")).map(n=>({bone:Gp(n.name.split(".")[0]),it:n.createInterpolant()}));kp.set(i,e={tr:t,rate:0});for(let{bone:n,it:s}of t)if(Wy.test(n)){let r=Math.max(2,Math.round(i.duration*60)),a=sc(s,0,Cu).clone();for(let o=1;o<=r;o++){let l=sc(s,Math.min(i.duration,o/60),Iu);e.rate=Math.max(e.rate,2*Math.acos(Math.min(1,Math.abs(a.dot(l))))*60),a.copy(l)}}return e}var Hp=new Map;function Xy(i,e,t){let n=i.uuid+e.uuid,s=Hp.get(n);if(s!==void 0)return s;let r=Lu(i),a=Lu(e);s=!1;for(let o of r.tr){let l=a.tr.find(c=>c.bone===o.bone);if(l)for(let c=0;c<=16&&!s;c++){sc(o.it,i.duration*c/16,Cu).clone();let h=Cu.clone();for(let u=0;u<=4;u++)if(sc(l.it,Math.min(e.duration,t*u/4),Iu),2*Math.acos(Math.min(1,Math.abs(h.dot(Iu))))>2.5){s=!0;break}}}return Hp.set(n,s),s}var qy={},Yy=17,Ga=class{constructor(e,t){let n=zr[t.key];this.m=n,this.key=t.key,this.cube=t.key.startsWith("cube"),this.group=new sn,this.group.rotation.order="YXZ",this.root=tc(n.scene),this.group.add(this.root);let s=Vy(t.key,t.swaps,t.tag);this.mat=new An({map:s}),this.mat.userData.uZ={value:0},this.mat.userData.uSkin={value:new Ee(t.skin||"#cfa78b")},this.mat.onBeforeCompile=r=>{r.uniforms.uZ=this.mat.userData.uZ,r.uniforms.uSkin=this.mat.userData.uSkin,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uZ;
uniform vec3 uSkin;`).replace("#include <color_fragment>",`#include <color_fragment>
        if (uZ > 0.01 && distance(diffuseColor.rgb, uSkin) < 0.045) { float l = dot(diffuseColor.rgb, vec3(0.33)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.26, 0.58, 0.18) * (0.55 + 0.9 * l), clamp(uZ, 0.0, 1.0) * 0.95); }`)},this.mat.customProgramCacheKey=()=>"modelchar",this.mats=[],this.root.traverse(r=>{r.isMesh&&(r.material=this.mat,r.castShadow=r.receiveShadow=be.shadows.enabled,r.frustumCulled=!1)}),this.mixer=new Ma(this.root),this.act={};for(let r of n.anims){let a=Gp(r.name);this.act[a]||(this.act[a]=this.mixer.clipAction(r))}this.cube&&this.act.Jump&&this.act.Jump.setLoop(Nl,1/0),this.cur=null,this.curName="",this.touched=[],this.clean={},this.seen={},this.pend=null,this.tSwitch=-9,this.dwell=1.5,this.viaIdle=!1,this.st={raiseL:0,raiseR:0,fwd:0,sit:0,type:0,climb:0},this.tg={raiseL:0,raiseR:0,fwd:0,sit:0,type:0,climb:0},this.bone={},this.root.traverse(r=>{r.isBone&&(this.bone[r.name]=r)}),this.addProps(t),this.t=Math.random()*10,this.c=e,this.scaleOf=()=>be.characters[e.type].scale*e.scaleMul/n.height,this.playClip("Idle",.01,1),this.tSwitch=-9}addProps(e){let t=this.bone,n=new An({color:2763314});if(this.key==="demon_c"&&t.ArmR){let s=new sn,r=t.ArmR_end?Math.abs(t.ArmR_end.position.y):1,a=new Mt(new Qt(.035,.035,2.6,6),new An({color:4864554}));a.position.y=-1;let o=new Mt(new Oe(.5,.06,.06),n);o.position.y=-2.3,s.add(a,o);for(let d of[-.2,0,.2]){let f=new Mt(new Kt(.055,.45,5),n);f.position.set(d,-2.55,0),f.rotation.z=Math.PI,s.add(f)}this.root.updateMatrixWorld(!0);let l=new z,c=new z,h=new Pt;t.ArmR.matrixWorld.decompose(c,h,l);let u=new sn;u.scale.setScalar(1/l.x),s.position.set(0,r,0),s.traverse(d=>{d.isMesh&&(d.castShadow=be.shadows.enabled)}),u.add(s),t.ArmR.add(u),this.fork=u}if(e.skin&&t.Head){this.rings=[],this.root.updateMatrixWorld(!0);let s=new z;t.Head.matrixWorld.decompose(new z,new Pt,s);let r=new sn;r.scale.setScalar(1/s.x);for(let a of[-1,1]){let o=new Mt(new fn(.15,6,4),new An({color:1840416}));o.scale.set(1,.75,.35),o.position.set(a*.2,.4,.36),o.visible=!1,r.add(o),this.rings.push(o)}t.Head.add(r)}}playClip(e,t,n){let s=this.act[e]||this.act.Idle;if(s){if(n=Math.min(n,(qy[e]||Yy)/Math.max(.001,Lu(s.getClip()).rate)),this.cur===s){s.timeScale=n,this.pend=null;return}if(this.cur&&this.t-this.tSwitch<this.dwell){this.pend=[e,t,n];return}this._switch(s,t,n)}}_switch(e,t,n){let s=this.act.Idle;this.cur&&s&&e!==s&&this.cur!==s&&Xy(this.cur.getClip(),e.getClip(),.3)?(this.pend=[e.getClip().name.split("|").pop().replace(/\.001$/,""),t,n],e=s,n=1,this.viaIdle=!0):this.viaIdle=!1,e.reset().setEffectiveTimeScale(n).setEffectiveWeight(1).play(),this.cur&&this.cur.crossFadeTo(e,Math.min(.3,Math.max(.2,t)),!1);let r=this.pend;this.cur=e,this.tSwitch=this.t,this.pend=this.viaIdle?r:null,this.dwell=this.viaIdle?.45:1.5}play(e,t=.3,n=1){let s=zp[e]||zp.idle,r=this.c;this.playClip(s[0],t,n*s[1]);let a=this.tg;a.raiseL=a.raiseR=a.fwd=0,this.cube&&(e==="wave"||e==="waveM"||e==="point"||e==="pointM")||(s[2]==="raiseR"?a.raiseR=1:s[2]==="raiseL"?a.raiseL=1:s[2]==="raiseBoth"?a.raiseL=a.raiseR=1:s[2]==="reach"&&(a.fwd=1)),e==="hang"||e==="dangle"||e==="flail"?a.climb=1:a.climb=0,a.sit=0,a.type=0}mix(e,t=1){let n=0,s=0;for(let l of["type","click","drink","stretch","zsit"])n+=e[l]||0;for(let l of Object.keys(e))s+=e[l];let r=(e.shamble||0)/Math.max(s,.001),a=(e.talk||0)/Math.max(s,.001);this.tg.sit=n/Math.max(s,.001)>.5?1:0,this.tg.type=(e.type||e.click||0)>.3?1:0;let o=this.c.zi||0;this.tg.fwd=o>.4?1:0,this.tg.raiseL=this.tg.raiseR=0,this.tg.climb=0,this.tg.sit?this.playClip("Idle",.4,.6):r>.4?this.playClip("Walk",.4,.5+(t-.9)):this.playClip(a>.4?"Idle_Hold":"Idle",.4,o>.4?.6:1)}update(e){if(!be.debugNoRestore)for(let o of this.touched)this.bone[o].quaternion.copy(this.clean[o]);if(this.mixer.update(e),this.t+=e,this.pend&&this.t-this.tSwitch>=this.dwell){let[o,l,c]=this.pend;this.pend=null;let h=this.act[o]||this.act.Idle;h&&h!==this.cur&&this._switch(h,l,c)}this.touched.length=0,this.seen={};let t=1-Math.exp(-e*6),n=this.st,s=this.tg;for(let o of Object.keys(n))n[o]+=(s[o]-n[o])*t;this.additive();let r=this.scaleOf()*(this.c.pose.sc||1);this.group.scale.setScalar(r),this.sitY=0;let a=this.c.pose;if(this.st.sit>.01&&a.gy!=null){let o=.67*r+(a.y-a.gy);this.sitY=(Zy-o)*this.st.sit}}rot(e,t,n,s){let r=this.bone[e];r&&(this.seen[e]||(this.seen[e]=1,(this.clean[e]||(this.clean[e]=new Pt)).copy(r.quaternion),this.touched.push(e)),r.quaternion.premultiply(Ky.setFromEuler(Jy.set(t,n,s))))}additive(){let e=this.st,t=this.cube,n=t?"UpperArmL":"ArmL",s=t?"UpperArmR":"ArmR",r=this.c.zi||0,a=Math.max(e.fwd,0)*(1-.5*e.sit);if(a>.01&&(this.rot(n,-1.5*a,0,0),this.rot(s,-1.5*a,0,0)),r>.4&&this.rot("Head",.05*Math.min(1,r),0,.04*Math.min(1,r)),this.rings){let o=r>.5;for(let l of this.rings)l.visible=o}if(e.raiseR>.01&&this.rot(s,0,0,-2.6*e.raiseR*(1+.12*Math.sin(this.t*9))),e.raiseL>.01&&this.rot(n,0,0,2.6*e.raiseL*(1+.12*Math.sin(this.t*9))),e.climb>.01&&(this.rot(n,0,0,2.8*e.climb),this.rot(s,0,0,-2.8*e.climb)),e.sit>.01&&(this.rot(t?"UpperLegL":"LegL",-1.5*e.sit,0,0),this.rot(t?"UpperLegR":"LegR",-1.5*e.sit,0,0),t&&(this.rot("LowerLegL",1.5*e.sit,0,0),this.rot("LowerLegR",1.5*e.sit,0,0)),e.type>.01)){this.rot(n,-.9*e.type,0,0),this.rot(s,-.9*e.type,0,0);let o=Math.sin(this.t*14)*.25*e.type;this.rot("LowerArmL",-.7*e.type+o,0,0),this.rot("LowerArmR",-.7*e.type-o,0,0)}}},Zy=105,Ky=new Pt,Jy=new cn;var $y=()=>({x:0,y:0,z:0,yaw:0,lean:0,tilt:0,sc:1,vis:1,gy:null}),jy=i=>{i.x=i.y=i.z=i.yaw=i.lean=i.tilt=0,i.sc=1,i.vis=1,i.gy=null};function Wp(i,e,t){let n=[],s={},r=(m,v,g)=>{let p=m+"|"+(m==="devil"||m==="zombie"?v%3:v%6)+"|"+g;return s[p]||(s[p]=Tp(m,v,g))},a=be.maxCharacters,o=new vn(new os(1,14).rotateX(-Math.PI/2),new Ht({map:t,transparent:!0,depthWrite:!1,fog:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a+4);o.frustumCulled=!1,o.count=0,o.renderOrder=2,o.visible=!be.shadows.enabled,i.add(o);let l=new It,c={drawn:0};function h(m,v={}){let g={type:m,variant:v.variant??0,head:v.head||"head",scaleMul:v.scaleMul||1,pose:$y(),update:v.update||null,data:v.data||{},wpos:new z,kind:v.kind||"ambient",anim:null,group:null,want:null,zi:0,dist:0};return g.play=(p,_,S,y,E)=>{g.anim?g.anim.play(p,_,S,y,E):g.want={name:p,fade:_,speed:S,amp:y,rs:E}},g.mix=(p,_,S)=>{g.anim?g.anim.mix(p,_,S):g.want={map:p,speed:_,rate:S}},v.pos&&g.wpos.copy(v.pos),n.push(g),g}function u(m){if(m.anim)return;if(en.characters==="models"){let S=Vp(m.type,m.variant);if(zr[S.key]){let y=new Ga(m,S);m.anim=y,m.group=y.group,m.mat=y.mat,m.mesh=y.root,i.add(m.group);let E=m.want;m.want=null,E&&(E.map?y.mix(E.map,E.speed,E.rate):y.play(E.name,E.fade,E.speed));return}}let v=m.type==="designer"?e.clone():e;if(m.type==="designer"){let S=e.onBeforeCompile;v.userData.uZ={value:0},v.onBeforeCompile=function(y,E){S.call(this,y,E),y.uniforms.uZ=this.userData.uZ,y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
attribute float aZ;
varying float vZ;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vZ = aZ;`),y.fragmentShader=y.fragmentShader.replace("#include <common>",`#include <common>
varying float vZ;
uniform float uZ;`).replace("#include <color_fragment>",`#include <color_fragment>
          float zz = clamp((uZ - 0.3) / 0.45, 0.0, 1.0);
          if (vZ > 1.5) { if (uZ < 0.5) discard; if (vZ < 2.5) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.10, 0.07, 0.11), 0.9); }
          else if (vZ > 0.5) { float l = dot(diffuseColor.rgb, vec3(0.33)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.30, 0.62, 0.22) * (0.5 + 0.5 * l), zz * 0.95); }
          else { diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.78, 0.9, 0.7), zz * 0.7); }`)},v.customProgramCacheKey=()=>"designerZ"}let{mesh:g,bones:p}=Ap(r(m.type,m.variant,m.head),v,m.type);m.group=new sn,m.group.rotation.order="YXZ",m.group.add(g),m.mesh=g,g.castShadow=g.receiveShadow=be.shadows.enabled,g.frustumCulled=!1,m.mat=v,i.add(m.group),m.anim=new ec(p);let _=m.want;m.want=null,_&&(_.map?m.anim.mix(_.map,_.speed,_.rate):m.anim.play(_.name,_.fade,_.speed,_.amp,_.rs))}let d=[];function f(m,v,g,p){d.length=0;let _=be.ambient.activeDistance*be.ambient.activeDistance;for(let y of n){if(y.dist=g.distanceToSquared(y.wpos),y.kind!=="intruder"&&y.dist>(y.active?_*1.32:_)){y.active=!1,y.group&&(y.group.visible=!1);continue}y.active=!0,jy(y.pose),y.update&&y.update(y,m,v,p);let E=y.pose;if(E.vis&&y.wpos.set(E.x,E.y,E.z),!E.vis){y.group&&(y.group.visible=!1);continue}y.dist=g.distanceToSquared(y.wpos),d.push(y)}d.sort((y,E)=>y.dist-E.dist);let S=0;for(let y=0;y<d.length;y++){let E=d[y],M=y<a-6?!0:y<a+8?!!E.shown:!1;if(E.shown=M,!M){E.group&&(E.group.visible=!1),E.yawS=void 0;continue}u(E);let x=E.pose,b=be.characters[E.type].scale*E.scaleMul*x.sc/wp,I=E.anim instanceof Ga;E.group.visible=!0,E.group.position.set(x.x,x.y-(!I&&_t&&E.type!=="designer"?en.body.legDrop*b:0)+(I&&E.anim.sitY||0),x.z);{if(E.yawS===void 0)E.yawS=x.yaw;else{let C=((x.yaw-E.yawS+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;E.yawS+=St(C,-4*v,4*v)}E.group.rotation.set(x.tilt,E.yawS,x.lean)}I||E.group.scale.setScalar(b),E.anim.update(v),(I||E.type==="designer")&&(E.mat.userData.uZ.value=E.zi),!be.shadows.enabled&&(l.position.set(x.x,(x.gy??x.y)+3,x.z),l.scale.setScalar(be.characters[E.type].scale*.33*(x.sc>.2?1:x.sc)),l.updateMatrix(),o.setMatrixAt(S++,l.matrix))}o.count=S,o.instanceMatrix.needsUpdate=!0,c.drawn=S}return{add:h,update:f,list:n,stats:c}}function Xp(i,e){let{stops:t,sec:n}=i,s=i.towerCz,r=p=>n.apocStart>n.earthEnd?Pe((p-n.earthEnd)/(n.apocStart-n.earthEnd)):p>n.earthEnd?1:0,a=p=>Pe((p-(n.apocStart-1800))/2500)*(1-Pe((p-(n.apocEnd+300))/3200)),o=t.filter(p=>!p.tower).map(p=>({x:p.zone==="hell"?p.B.x:(p.P.x+p.B.x)/2,z:p.zone==="hell"?p.B.z+300:(p.P.z+p.B.z)/2,y:p.gy,hell:p.zone==="hell"})),l=new Ee,c=en.look==="lowpoly",h=Xs.terrain;function u(p,_){let S=-_,y=i.groundY(S),E=Math.abs(p-i.px(S)),M=1-Pe((S-(n.stairA-700))/900),x=Pe((S-(n.stairB+500))/1400);return{u:S,gy:y,ad:E,wH:M,wE:x,wHill:Math.max(0,1-M-x)}}function d(p,_,S){let{u:y,gy:E,ad:M}=p,x=0;if(p.wH>0){let U=E-200,X=In(_*8e-4,S*8e-4,5),j=U-130,O=ct(E,j+0,Pe((M-330)/420)),Z=E-30+(In(_*.004,S*.004,2)-.5)*220+Math.max(0,X-.5)*700;O=ct(O,Z,Pe((M-3e3)/450)),O+=Pe((M-4300)/900)*9500+Pe((-y-1200)/900)*9500,x+=p.wH*O}if(p.wHill>0){let U=E+1900*Pe((M-440)/260)+(In(_*.002,S*.002,4)-.5)*260*Pe((M-600)/400);U+=Pe((M-5500)/1500)*2500,x+=p.wHill*U}if(p.wE>0){let U=r(y),X=E+(In(_*45e-5,S*45e-5,9)-.38)*900*Pe((M-500)/1500)+(In(_*.004,S*.004,1)-.5)*70*Pe((M-250)/500)+(In(_*.012,S*.012,12)-.5)*26;X+=a(y)*2800*Pe((M-1500)/3300),X-=U*Math.max(0,In(_*.0012,S*.0012,21)-.55)*900*Pe((M-700)/600),X+=Pe((M-5e3)/1500)*(1500+1500*In(_*.001,S*.001,30)),x+=p.wE*X}for(let U of o){if(Math.abs(U.z-S)>2200)continue;let X=U.hell?1-Pe((Math.hypot(_-U.x,S-U.z)-1150)/300):1-Pe((Math.hypot(_-U.x,S-U.z)-1200)/900);X>0&&(x=ct(x,U.y,X))}let b=Math.max(Math.abs(_),Math.abs(S-s)),I=1-Pe((b-3300)/1500);I>0&&(x=ct(x,0,I));let C=1-Pe((b-8500)/3e3);return C>0&&y>i.doorU-1500&&(x=ct(x,(In(_*.002,S*.002,60)-.5)*160,C)),x}function f(p,_,S,y,E){let{u:M,gy:x,ad:b}=p,I=In(_*.003,S*.003,7),C=E.set(0,0,0),U=l,X=O=>{C.r+=U.r*O,C.g+=U.g*O,C.b+=U.b*O};if(p.wH>0&&(c?(U.copy(et(de(h.hell[0]),de(h.hell[1]),I)),y>x+800&&U.lerp(de(h.hellHigh),St((y-x-800)/3e3,0,.8)),U.lerp(de(h.hellPath),1-Pe((b-300)/100))):(U.copy(et(de("#4a1812"),de("#8a3a22"),I)),y>x+800&&U.lerp(de("#2a0c0a"),St((y-x-800)/4e3,0,.7)),U.lerp(de("#b0714a"),(1-Pe((b-300)/100))*.7)),X(p.wH)),p.wHill>0&&(U.copy(et(de(c?h.hill[0]:"#4a3a38"),de(c?h.hill[1]:"#6a5a56"),I)),U.lerp(de("#8a6a50"),1-Pe((b-380)/120)),X(p.wHill)),p.wE>0){let O=r(M),Z=a(M);U.copy(et(de(c?h.earth[0]:"#79bd66"),de(c?h.earth[1]:"#8ecb6e"),I)),U.lerp(de(c?h.earthPatch:"#5b9552"),Pe((In(_*7e-4,S*7e-4,13)-.45)*6)),U.lerp(et(de(c?h.apoc[0]:"#b0aa98"),de(c?h.apoc[1]:"#827e72"),I),O*.92),U.lerp(de(c?h.mount:"#8e8a82"),Z*Pe((y-x)/1500)*.6),X(p.wE)}let j=Math.max(Math.abs(_),Math.abs(S-s)),D=1-Pe((j-8500)/3e3);return D>0&&M>i.doorU-1500&&C.lerp(et(de(c?h.city[0]:"#7c7a74"),de(c?h.city[1]:"#5a5852"),I),D*.85),C}let m=[];function v(p,_){let x=s-14500,b=Math.ceil(19e3/300)+1,I=Math.ceil((3600-x)/300)+1,C=new Float32Array(b*I),U=new Float32Array(b*I*3),X=new Float32Array(b*I),j=new Float32Array(b*I),D=new Ee;for(let Z=0;Z<I;Z++)for(let q=0;q<b;q++){let B=Z*b+q,k=Math.abs(-9500+q*300-i.px(-(3600-Z*300))),Y=en.look==="lowpoly"?Pe((k-250)/300)*.42*300:0;X[B]=(Bn(q,5,Z)-.5)*2*Y,j[B]=(Bn(q,9,Z+4)-.5)*2*Y;let ie=-9500+q*300+X[B],te=3600-Z*300+j[B],xe=u(ie,te),ne=d(xe,ie,te);C[Z*b+q]=ne,f(xe,ie,te,ne,D);let _e=(Z*b+q)*3;U[_e]=D.r,U[_e+1]=D.g,U[_e+2]=D.b}let O=20;for(let Z=0;Z<I-1;Z+=O){let q=[],B=[],k=Math.min(I-1,Z+O),Y=(Ye,Te)=>{let tt=Te*b+Ye;return[-9500+Ye*300+X[tt],C[tt],3600-Te*300+j[tt],U[tt*3],U[tt*3+1],U[tt*3+2]]},ie=en.look==="lowpoly",te=(Ye,Te,tt)=>{let ve=ie?.9+e()*.2:.95+e()*.08,me=(Ye[3]+Te[3]+tt[3])/3,Ve=(Ye[4]+Te[4]+tt[4])/3,Ge=(Ye[5]+Te[5]+tt[5])/3;for(let We of[Ye,Te,tt])q.push(We[0],We[1],We[2]),ie?B.push(me*ve,Ve*ve,Ge*ve):B.push(We[3]*ve,We[4]*ve,We[5]*ve)};for(let Ye=Z;Ye<k;Ye++)for(let Te=0;Te<b-1;Te++){let tt=Y(Te,Ye),ve=Y(Te+1,Ye),me=Y(Te,Ye+1),Ve=Y(Te+1,Ye+1);Bn(Te,1,Ye)>.5?(te(tt,ve,me),te(ve,Ve,me)):(te(tt,Ve,me),te(tt,ve,Ve))}let xe=new Rt;xe.setAttribute("position",new st(q,3)),xe.setAttribute("color",new st(B,3));let ne=3600-(Z+O/2)*300,_e=-ne,fe=Math.abs(ne-s),Me="grass";_e<n.stairB+500?Me="rock":fe<7500&&_e>i.doorU-2e3?Me="concrete":r(_e)>.5&&(Me="ash");let ye=new mt(1);ye.addRaw(xe,ge(Me));let Fe=new Mt(ye.parts[0],_);p.add(Fe),m.push(Fe)}}function g(p,_){let S=(y,E,M,x,b,I)=>{let C=new mt(5),U=[],X=[],j=[],D=0;for(let B=y;B<=E;B+=100){let k=i.px(B),Y=-B,ie=(i.px(B+20)-i.px(B-20))/40,te=Math.hypot(ie,1),xe=1/te,ne=ie/te,_e=M*(.9+.2*Bn(Math.floor(B/100),3,4));for(let fe of[-1,1]){let Me=k+fe*xe*_e,ye=Y+fe*ne*_e;U.push(Me,d(u(Me,ye),Me,ye)+5,ye);let Fe=1-Pe(1-Math.abs(fe)*0),Ye=Bn(Math.floor(B/100),fe,7),Te=et(de(b),de(I),Ye);X.push(Te.r,Te.g,Te.b)}if(D>0){let fe=(D-1)*2;j.push(fe,fe+1,fe+2,fe+1,fe+3,fe+2)}D++}let O=new Rt;O.setAttribute("position",new st(U,3)),O.setAttribute("color",new st(X,3)),O.setIndex(j);let Z=O.toNonIndexed();C.addRaw(Z,ge(x));let q=new Mt(C.parts[0],_);q.renderOrder=0,p.add(q)};if(n.earthStart>0)if(en.look==="lowpoly"){let y=(n.earthEnd+n.apocStart)/2;S(n.stairB+600,y,135,"dirt","#d8b678","#c6a266"),S(y-200,i.doorU-100,240,"concrete","#46494e","#3c3f44")}else S(n.stairB+600,i.doorU-100,95,"dirt","#8a6c48","#6e563a");S(-1500,n.stairA-600,150,"rock",en.look==="lowpoly"?"#4a2c36":"#9a6a4a",en.look==="lowpoly"?"#3a2029":"#7a5238")}return{terrainY:(p,_)=>d(u(p,_),p,_),colorAt:(p,_)=>{let S=u(p,_);return f(S,p,_,d(S,p,_),new Ee).getHexString()},ap:r,vm:a,build:v,buildPath:g,parts:u,plazas:o}}var qp={},$t=(i,e)=>qp[i]||(qp[i]=(()=>{let t=e();return t.name=i,t})()),De=i=>de(i);function Pu(i,e,t){return kh(i,e,e*.6,t),i}var kr=(i,e,t,n,s,r,a,o,l=6,c=0,h=0,u=0)=>i.add(new Kt(e,t,l),a,nt(n,s,r,c,h,u),o),Xn=(i,e,t,n,s,r,a,o,l,c=7,h=0,u=0,d=0)=>i.add(new Qt(t,e,n,c),o,nt(s,r,a,h,u,d),l),Dt=(i,e,t,n,s,r,a,o,l,c=0,h=0,u=0)=>i.add(new Oe(e,t,n),o,nt(s,r,a,c,h,u),l),At={pineA:()=>$t("pineA",()=>{let i=new mt(101),e=ge("bark"),t=ge("leaves");Xn(i,34,22,360,0,180,0,De("#6b4a2e"),e);for(let n=0;n<5;n++){let s=330-n*58;kr(i,s,400-n*20,0,200+n*190,0,et(De("#2f7a48"),De("#4e9a58"),n/5),t,8,0,n*.6,0)}return i.geometry()}),pineB:()=>$t("pineB",()=>{let i=new mt(102),e=ge("bark"),t=ge("leaves");Xn(i,26,16,300,0,150,0,De("#5a3f28"),e);for(let n=0;n<6;n++){let s=230-n*34;kr(i,s,360,0,190+n*170,0,et(De("#26623e"),De("#3f8650"),n/6),t,7,0,n,0)}return i.geometry()}),oak:()=>$t("oak",()=>{let i=new mt(103),e=ge("bark"),t=ge("leaves");return Xn(i,66,42,400,0,200,0,De("#6b4a2e"),e,8),Xn(i,26,14,260,80,420,20,De("#6b4a2e"),e,6,0,0,-.8),Xn(i,26,14,260,-80,410,-20,De("#6b4a2e"),e,6,0,0,.8),[[0,640,0,330],[210,560,40,250],[-210,570,-30,260],[30,780,120,230],[0,560,-210,240]].forEach(([s,r,a,o],l)=>i.add(Pu(new Kn(o,1),22,l),et(De("#3f8f4c"),De("#62ac55"),l%3/3),nt(s,r,a,0,l,0,1,.82,1),t)),i.geometry()}),birch:()=>$t("birch",()=>{let i=new mt(104),e=ge("bark"),t=ge("leaves");return i.add(new Qt(20,30,700,7),(n,s)=>Math.floor(s/70)%2===0?De("#e8e4da"):De("#bdb8aa"),nt(0,350,0),e),[[0,760,0,190],[100,640,30,150],[-100,690,-30,160],[20,880,20,130]].forEach(([n,s,r,a],o)=>i.add(Pu(new Kn(a,1),14,o+9),et(De("#8fc060"),De("#b6d070"),o/4),nt(n,s,r,0,o,0,1,.85,1),t)),i.geometry()}),dead:()=>$t("dead",()=>{let i=new mt(105),e=ge("bark");Xn(i,38,12,560,0,280,0,De("#4a3d34"),e,6,0,0,.05);for(let t=0;t<5;t++){let n=t*1.3+.4;kr(i,14,240,Math.cos(n)*60,330+t*60,Math.sin(n)*60,De("#3a322c"),e,5,Math.sin(n)*1,0,-Math.cos(n)*1)}return i.geometry()}),tuft:()=>$t("tuft",()=>{let i=new mt(106),e=ge("grass");for(let t=0;t<7;t++){let n=t*.9;kr(i,7,70+t%3*30,Math.cos(n)*16,40,Math.sin(n)*16,et(De("#5fa04a"),De("#9ac86a"),t%3/3),e,3,Math.sin(n)*.3,0,-Math.cos(n)*.3)}return i.geometry()}),flower:()=>$t("flower",()=>{let i=new mt(107),e=ge("grass");Xn(i,3,2,80,0,40,0,De("#4f8a3c"),e,4);for(let t=0;t<6;t++){let n=t*1.047;i.add(new Kn(11,0),De("#ffffff"),nt(Math.cos(n)*12,82,Math.sin(n)*12,0,0,0,1,.5,1),ge("plaster"))}return i.add(new Kn(8,0),De("#ffd23f"),nt(0,84,0),ge("plaster")),i.geometry()}),rock:(i=0)=>$t("rock"+i,()=>{let e=new mt(110+i);return e.add(Pu(new Ds(100,1),22+i*6,i+3),(t,n)=>et(De("#6e6a66"),De("#9a948a"),St(n/160+.4,0,1)),nt(0,55,0,0,i,0,1+i*.2,.72,1-i*.1),ge("rock")),e.geometry()}),spire:(i=0)=>$t("spire"+i,()=>{let e=new mt(120+i),t=new Kt(160+i*40,1e3,6+i,4);return kh(t,26,40,i+1),e.add(t,(n,s)=>_t?et(De("#7a2630"),De("#d0583a"),St(s/1e3+.5,0,1)):et(De("#3a120e"),De("#9a4a2a"),St(s/1e3+.5,0,1)),nt(0,460,0),ge("rock")),e.geometry()}),fence:()=>$t("fence",()=>{let i=new mt(130),e=ge("wood");for(let t of[-150,0,150])Dt(i,16,120,16,t,60,0,De("#8a6a46"),e);return Dt(i,300,12,10,0,95,0,De("#9a7a54"),e),Dt(i,300,12,10,0,55,0,De("#9a7a54"),e),i.geometry()}),crops:()=>$t("crops",()=>{let i=new mt(131),e=ge("grass");for(let t=0;t<9;t++)kr(i,22,90,-140+t*35,45,0,et(De("#6aa650"),De("#9ac04a"),t%3/3),e,5,0,0,(t%2-.5)*.2);return i.geometry()}),hay:()=>$t("hay",()=>{let i=new mt(132);return Xn(i,70,70,110,0,70,0,De("#d8b45a"),ge("dirt"),10,0,0,Math.PI/2),i.geometry()}),bench:()=>$t("bench",()=>{let i=new mt(133),e=ge("wood");Dt(i,200,14,50,0,48,0,De("#9a7a54"),e),Dt(i,200,40,10,0,85,-22,De("#9a7a54"),e);for(let t of[-80,80])Dt(i,12,48,44,t,24,0,De("#5a4a3a"),e);return i.geometry()}),car:()=>$t("car",()=>{let i=new mt(134),e=ge("metal");Dt(i,400,80,170,0,70,0,De(_t?"#e8e8e8":"#7a5a48"),e),Dt(i,200,70,150,-20,140,0,De(_t?"#d4d4d4":"#6a5042"),e),Dt(i,190,50,140,-20,145,0,De("#2a3238"),ge("plaster"));for(let[t,n]of[[-130,80],[130,80],[-130,-80],[130,-80]])Xn(i,34,34,28,t,36,n,De("#1c1c1c"),ge("metal"),10,Math.PI/2);return i.geometry()}),rubble:()=>$t("rubble",()=>{let i=new mt(135),e=Ri(7);for(let t=0;t<7;t++){let n=30+e()*80;Dt(i,n,n*(.4+e()*.6),n*(.6+e()*.6),(e()-.5)*200,n*.25,(e()-.5)*200,et(De("#6e6a66"),De("#3a3634"),e()),ge(t%2?"concrete":"brick"),e(),e()*3,e())}return i.geometry()}),lamp:()=>$t("lamp",()=>{let i=new mt(136),e=ge("metal");return Xn(i,14,10,520,0,260,0,De("#4a4e56"),e,6),Dt(i,90,14,30,30,530,0,De("#4a4e56"),e),Dt(i,40,10,24,60,520,0,De("#d8d0b0"),ge("plaster")),i.geometry()}),chain:()=>$t("chain",()=>{let i=new mt(137),e=ge("metal");for(let t=0;t<15;t++)i.add(new ci(15,4.5,4,6),De("#3a3a3e"),nt(0,-t*44,0,0,t%2?Math.PI/2:0,0,1.5,3,1.5),e);return i.geometry()}),cauldron:()=>$t("cauldron",()=>{let i=new mt(138),e=ge("metal");i.add(new fn(120,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55),De("#2a2a2e"),nt(0,190,0,0,0,0,1,1,1),e),i.add(new ci(112,12,6,14),De("#3a3a3e"),nt(0,214,0,Math.PI/2),e),i.add(new Qt(98,98,6,12),De("#e86a1a"),nt(0,208,0),ge("plaster"));for(let t=0;t<3;t++){let n=t*2.094;Xn(i,10,8,200,Math.cos(n)*90,100,Math.sin(n)*90,De("#3a3a3e"),e,5,Math.sin(n)*.25,0,-Math.cos(n)*.25)}return i.geometry()}),bridge:()=>$t("bridge",()=>{let i=new mt(139),e=ge("wood");for(let t=0;t<14;t++)Dt(i,220,14,36,0,0,-250+t*38,De("#5a3f2a"),e);for(let t of[-105,105]){Dt(i,10,10,560,t,90,0,De("#3a2a20"),e);for(let n=0;n<5;n++)Dt(i,10,100,10,t,40,-250+n*125,De("#3a2a20"),e)}return i.geometry()}),plant:()=>$t("plant",()=>{let i=new mt(140);Xn(i,34,28,54,0,27,0,De("#c8b8a0"),ge("concrete"),8);for(let e=0;e<7;e++){let t=e*.9;kr(i,14,130,Math.cos(t)*14,100,Math.sin(t)*14,et(De("#3f8f4c"),De("#62ac55"),e%3/3),ge("leaves"),4,Math.sin(t)*.5,0,-Math.cos(t)*.5)}return i.geometry()}),desk:()=>$t("desk",()=>{let i=new mt(141),e=ge("wood"),t=ge("metal");Dt(i,360,22,170,0,175,0,De(_t?"#fbfbfd":"#d6c19a"),_t?ge("plaster"):e),_t&&(Dt(i,380,130,12,0,250,-96,De("#6f9ed8"),ge("cloth")),Dt(i,12,130,190,-196,250,-4,De("#6f9ed8"),ge("cloth")),Dt(i,110,150,150,120,80,0,De("#f2f2f6"),ge("plaster")));for(let[n,s]of[[-160,-70],[160,-70],[-160,70],[160,70]])Dt(i,18,164,18,n,82,s,De("#6a6a70"),t);Dt(i,100,8,34,0,190,38,De("#2a2a30"),ge("plaster")),Dt(i,20,6,28,70,190,40,De("#2a2a30"),ge("plaster")),Dt(i,16,40,10,0,205,-52,De("#1c1c20"),t),Dt(i,150,100,10,0,262,-60,De("#14161a"),t),Dt(i,130,8,70,-100,190,-20,De("#e8e4da"),ge("plaster")),Xn(i,10,10,20,110,196,10,De("#b8442e"),ge("plaster"),8),Dt(i,110,14,110,0,108,170,De(_t?"#3f6fb8":"#38404a"),ge("cloth")),Dt(i,110,120,14,0,172,226,De(_t?"#3f6fb8":"#38404a"),ge("cloth")),Xn(i,10,10,90,0,52,170,De("#4a4a52"),t,6);for(let n=0;n<5;n++){let s=n*1.2566;Dt(i,70,8,12,Math.cos(s)*36,6,170+Math.sin(s)*36,De("#4a4a52"),t,0,s,0)}return i.geometry()}),screen:()=>$t("screen",()=>{let i=new _n(136,86);return i.translate(0,262,-54),i}),bld:(i=0)=>$t("bld"+i,()=>{let e=new mt(150+i),t=Ri(i+4),n=[520,700,460,840,600,380][i],s=[520,620,480,700,560,420][i],r=[1700,2600,1400,3400,2100,1100][i],a=et(De("#7a7872"),De("#5a5852"),t());return Dt(e,n,r,s,0,r/2,0,a,ge("tile")),i%2?Dt(e,n*.6,r*.22,s*.6,n*.1,r+r*.09,0,a,ge("concrete"),0,.3,.12):(Dt(e,n*1.05,30,s*1.05,0,r+15,0,De("#4a4844"),ge("concrete")),Dt(e,80,220,80,n*.25,r+140,s*.2,De("#6a6862"),ge("concrete"))),i>=3&&Dt(e,n*.5,r*.5,s*1.04,-n*.35,r*.3,0,De("#3a3834"),ge("concrete"),0,0,.05),e.geometry()}),tinyZombie:()=>$t("tinyZ",()=>{let i=new mt(160),e=ge("plaster");return i.add(new yi(26,90,3,6),De("#6a6354"),nt(0,110,0),e),i.add(new Kn(26,0),De("#8fa383"),nt(0,205,0),e),i.add(new yi(10,70,2,5),De("#8fa383"),nt(-30,150,30,1.2,0,.2),e),i.add(new yi(10,70,2,5),De("#8fa383"),nt(30,150,30,1.2,0,-.2),e),i.geometry()})},rt=i=>{let e=Au(i);return e?e.geo:null},Xt=(i,e,t="max")=>{let n=Au(i).size;return e/(t==="h"?n[1]:t==="l"?Math.max(n[0],n[2]):Math.max(...n))},rc=class{constructor(e=5e3){this.map=new Map,this.bin=e,this.count=0}add(e,t,n){let s=e(),r=s.uuid,a=Math.floor(-t.elements[14]/this.bin),o=r+"|"+a,l=this.map.get(o);l||(l={g:s,items:[]},this.map.set(o,l)),l.items.push([t,n]),this.count++}build(e,t){let n=[];for(let s of this.map.values()){let r=new vn(s.g,s.g.userData.mat||t,s.items.length),a=new Ee(1,1,1);if(s.g.userData.mat){s.g.computeBoundingBox();let o=s.g.boundingBox,l=s.g.attributes.position.count/3;r.receiveShadow=!0,r.castShadow=o.max.y>320&&l<1800}s.items.forEach(([o,l],c)=>{r.setMatrixAt(c,o),r.setColorAt(c,l||a)}),r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),e.add(r),n.push(r)}return n}},qb=new Qe,Yp=new Pt,Zp=new cn,Qy=new z,ev=new z;function at(i,e,t,n=1,s=0,r=0,a=0,o=n){return Zp.set(r,s,a,"YXZ"),Yp.setFromEuler(Zp),new Qe().compose(Qy.set(i,e,t),Yp,ev.set(n,o,n))}function Kp(i,e){let t=[],n=[],s=new _n(1,1).translate(0,.5,0),r=s.clone().rotateY(Math.PI/2),a=s.clone().rotateY(Math.PI/4),o=tv([s,r,a]),l=null,c=new It,h=new Ee,u=["#ffffff","#ffd9a0","#ffc080"];function d(v,g,p,_=1,S=!0){t.push({x:v,y:g,z:p,s:_,ph:Math.random()*6,k:t.length%3}),t.push({x:v+14*_,y:g,z:p-8*_,s:_*.7,ph:Math.random()*6,k:1}),t.push({x:v-12*_,y:g,z:p+10*_,s:_*.55,ph:Math.random()*6,k:2}),S&&n.push({x:v,y:g+150*_,z:p,s:_})}function f(){l=new vn(o,new Ht({map:e,transparent:!0,depthWrite:!1,blending:Sa,side:rn,fog:!0}),Math.max(1,t.length)),t.forEach((v,g)=>l.setColorAt(g,h.set(u[v.k]))),l.count=t.length,l.frustumCulled=!1,l.renderOrder=3,i.add(l)}function m(v){if(l){for(let g=0;g<t.length;g++){let p=t[g],_=.8+.3*Math.sin(v*9+p.ph)+.15*Math.sin(v*17+p.ph*2),S=Math.sin(v*3.1+p.ph)*.1;c.position.set(p.x,p.y+10*p.s,p.z),c.rotation.set(S,v*.6+p.ph,Math.sin(v*2.3+p.ph)*.08),c.scale.set(150*p.s*(1.1-.15*_),360*p.s*_,150*p.s*(1.1-.15*_)),c.updateMatrix(),l.setMatrixAt(g,c.matrix)}l.instanceMatrix.needsUpdate=!0}}return{add:d,build:f,update:m,sites:n,count:()=>t.length}}function tv(i){let e=[],t=[],n=[],s=0;for(let a of i){let o=a.attributes.position,l=a.attributes.uv;for(let c=0;c<o.count;c++)e.push(o.getX(c),o.getY(c),o.getZ(c)),t.push(l.getX(c),l.getY(c));for(let c=0;c<a.index.count;c++)n.push(a.index.getX(c)+s);s+=o.count}let r=new Rt;return r.setAttribute("position",new st(e,3)),r.setAttribute("uv",new st(t,2)),r.setIndex(n),r}function Jp(i,e,t=4){let n=[];for(let r=0;r<t;r++){let a=new Os(16742960,0,2600,1.4);i.add(a),n.push(a)}let s=[];return{update(r,a,o){s.length=0;for(let l of e){let c=l.x-r.x,h=l.y-r.y,u=l.z-r.z,d=c*c+h*h+u*u;d<9e6&&s.push([d,l])}s.sort((l,c)=>l[0]-c[0]),n.forEach((l,c)=>{let h=s[c];if(!h){l.intensity=0;return}l.position.set(h[1].x,h[1].y,h[1].z),l.intensity=o*(6+1.6*Math.sin(a*11+c*3)+.8*Math.sin(a*23+c))*Math.min(1.4,h[1].s)})}}}function $p(i,e,t=520){let n=new Float32Array(t*3),s=new Float32Array(t*4),r=new Float32Array(t),a=new Float32Array(t*3),o=new Float32Array(t),l=new Uint8Array(t),c=new Float32Array(t),h=new Rt;h.setAttribute("position",new Tt(n,3)),h.setAttribute("color",new Tt(s,4)),h.setAttribute("size",new Tt(r,1));let u=new Hn({uniforms:{map:{value:e},scale:{value:700}},transparent:!0,depthWrite:!1,vertexShader:"attribute float size; attribute vec4 color; varying vec4 vC; uniform float scale; void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*scale/max(1.0,-mv.z); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform sampler2D map; varying vec4 vC; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC.rgb, vC.a*t.a); if(gl_FragColor.a<0.01) discard; }"}),d=new Ps(h,u);d.frustumCulled=!1,d.renderOrder=4,i.add(d);for(let g=0;g<t;g++)o[g]=-1,c[g]=Math.random()*6;let f=2800;function m(g,p,_){let S=Math.random(),y=_.hell+_.earth+_.apoc+1e-6,E,M=S*y;M<_.hell?E=Math.random()<.55?0:1:M<_.hell+_.earth?E=Math.random()<.6?2:3:E=Math.random()<.8?4:Math.random()<.5?1:0,l[g]=E;{let I=Math.random()*6.283,C=(E===1?1900:150)+Math.random()*(f-(E===1?1900:150));n[g*3]=p.x+Math.cos(I)*C,n[g*3+2]=p.z+Math.sin(I)*C}n[g*3+1]=p.y+(E===0||E===1?-500+Math.random()*900:-300+Math.random()*1700),o[g]=4+Math.random()*6;let x=s,b=g*4;if(E===0)a[g*3]=(Math.random()-.5)*60,a[g*3+1]=120+Math.random()*160,a[g*3+2]=(Math.random()-.5)*60,r[g]=5+Math.random()*5,x[b]=1,x[b+1]=.5+Math.random()*.3,x[b+2]=.12,x[b+3]=.9;else if(E===1){a[g*3]=(Math.random()-.5)*40,a[g*3+1]=50+Math.random()*60,a[g*3+2]=(Math.random()-.5)*40,r[g]=70+Math.random()*70;let I=.12+Math.random()*.12;x[b]=I*1.1,x[b+1]=I,x[b+2]=I,x[b+3]=.22}else if(E===2)a[g*3]=30+Math.random()*40,a[g*3+1]=5+Math.random()*20,a[g*3+2]=(Math.random()-.5)*30,r[g]=3.5+Math.random()*3,x[b]=1,x[b+1]=.95,x[b+2]=.7,x[b+3]=.75;else if(E===3){a[g*3]=40+Math.random()*40,a[g*3+1]=-30-Math.random()*30,a[g*3+2]=(Math.random()-.5)*40,r[g]=7+Math.random()*5;let I=Math.random()<.5;x[b]=I?.85:.45,x[b+1]=I?.5:.65,x[b+2]=I?.15:.2,x[b+3]=.85}else{a[g*3]=30+Math.random()*50,a[g*3+1]=-35-Math.random()*45,a[g*3+2]=(Math.random()-.5)*40,r[g]=6+Math.random()*6;let I=.55+Math.random()*.25;x[b]=I,x[b+1]=I*.97,x[b+2]=I*.92,x[b+3]=.7}}function v(g,p,_,S){for(let y=0;y<t;y++){o[y]<=0&&m(y,_,S),o[y]-=p;let E=l[y],M=Math.sin(g*(E===3?3:1.5)+c[y]);n[y*3]+=(a[y*3]+M*(E===3?40:15))*p,n[y*3+1]+=a[y*3+1]*p,n[y*3+2]+=(a[y*3+2]+Math.cos(g*1.3+c[y])*12)*p;let x=n[y*3]-_.x,b=n[y*3+2]-_.z;(x*x+b*b>f*f*1.2||Math.abs(n[y*3+1]-_.y)>2400)&&(o[y]=0);let I=St(Math.min(o[y],1.2)/1.2,0,1)*(E===1?.6:1);s[y*4+3]=(E===0?.95:E===1?.32:E===2?.7:E===3?.85:.65)*I}h.attributes.position.needsUpdate=!0,h.attributes.color.needsUpdate=!0,h.attributes.size.needsUpdate=!0}return{update:v,mesh:d}}function jp(i){let e=[],t=[],n=[];function s(a,o,l,c){let h=e.length/3;e.push(a-c,o+4,l-c,a+c,o+4,l-c,a+c,o+4,l+c,a-c,o+4,l+c),t.push(0,0,1,0,1,1,0,1),n.push(h,h+2,h+1,h,h+3,h+2)}function r(a){if(!e.length)return;let o=new Rt;o.setAttribute("position",new st(e,3)),o.setAttribute("uv",new st(t,2)),o.setIndex(n);let l=new Mt(o,new Ht({map:i,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,fog:!0}));l.renderOrder=1,a.add(l)}return{add:s,build:r}}function Qp(i,e,t,n,s,r){let o=Math.ceil(s*2/450),l=Math.ceil((n-t)/450),c=new _n(s*2,n-t,o,l);c.rotateX(-Math.PI/2),c.translate(0,r,-(t+n)/2),c.setAttribute("color",new Tt(new Float32Array(c.attributes.position.count*3).fill(1),3));let h=e.clone();h.wrapS=h.wrapT=Tn,h.repeat.set(s*2/800,(n-t)/800),h.needsUpdate=!0;let u=new Mt(c,new Ht({map:h,vertexColors:!0,fog:!0}));i.add(u);let d=c.attributes.color,f=c.attributes.position;return{mesh:u,update(m,v){if(h.offset.set(m*.006,-m*.012),v.z>-(n+2500)&&v.y<r+3500){for(let g=0;g<f.count;g++){let p=.78+.3*Math.sin(f.getX(g)*.004+m*.6)*Math.sin(f.getZ(g)*.003-m*.5)+.12*Math.sin(f.getX(g)*.011-f.getZ(g)*.008+m*1.4);d.setXYZ(g,p,p*.92,p*.85)}d.needsUpdate=!0}}}}function em(i,e,t,n,s,r,a,o){let l=e.clone();l.wrapS=l.wrapT=Tn,l.repeat.set(r/800,s/800),l.needsUpdate=!0;let c=new Mt(new _n(r,s),new Ht({map:l,fog:!0,side:rn}));return c.position.set(t,a-s/2,n),c.rotation.y=o,i.add(c),{update(h){l.offset.y=h*.22}}}var Va=Math.PI*2,gi=(i,e,t,n,s)=>i<=e?0:i<t?Pe((i-e)/(t-e)):i<=n?1:i<s?1-Pe((i-n)/(s-n)):0,nv=(i,e)=>((e-i+Math.PI)%Va+Va)%Va-Math.PI,Du=(i,e,t,n,s=6)=>(i[e]===void 0&&(i[e]=t),i[e]+=nv(i[e],t)*Math.min(1,n*s),i[e]);function Nu(i,e,t){let n=["dance","dance","stab","hop"];return(s,r,a)=>{let o=s.data,l=s.pose;o.next===void 0&&(o.next=r+e%3,o.mode="dance",o.spd=.8+e%1*.5,s.play("dance",.3,o.spd)),r>o.next&&(o.mode=n[Math.random()*n.length|0],o.next=r+3+Math.random()*4,s.play(o.mode,.35,o.spd*(o.mode==="stab"?.9:1))),l.x=i.x,l.z=i.z,l.y=i.y,l.yaw=Math.atan2(t.x-i.x,t.z-i.z)+Math.sin(r*.5+e)*.5}}function tm(i,e){return(t,n,s)=>{t.play(i,.3,St(s/e,.35,1.6),.9)}}function ac(i,e,t,n,s="walk",r=0){let a=Math.hypot(e.x-i.x,e.z-i.z),o=new z(e.x-i.x,0,e.z-i.z).normalize(),l=tm(s==="shamble"?"shamble":"walk",s==="shamble"?70:330);return(c,h,u)=>{let d=c.data,f=c.pose;d.s===void 0&&(d.s=r%1*a,d.f=1,d.pause=0),d.pause>0?(d.pause-=u,c.play(s==="shamble"?"zidle":"idle",.4)):(d.s+=d.f*t*u,d.s>a?(d.s=a,d.f=-1,d.pause=2+Math.random()*2):d.s<0&&(d.s=0,d.f=1,d.pause=2+Math.random()*2),l(c,u,t)),f.x=i.x+o.x*d.s,f.z=i.z+o.z*d.s,f.y=n(f.x,f.z),f.yaw=Du(d,"yaw",Math.atan2(o.x*d.f,o.z*d.f),u)}}function oc(i,e,t,n,s="shamble",r=0){let a=tm(s==="shamble"?"shamble":"walk",s==="shamble"?70:330);return(o,l,c)=>{let h=o.data,u=o.pose;h.a===void 0&&(h.a=r*Va),h.a+=t/e*c,a(o,c,t),u.x=i.x+Math.cos(h.a)*e,u.z=i.z+Math.sin(h.a)*e,u.y=n(u.x,u.z),u.yaw=Math.atan2(-Math.sin(h.a),Math.cos(h.a))}}function Wa(i,e,t,n=0){return(s,r,a)=>{let o=s.data,l=s.pose;if(o.next===void 0||r>o.next){o.next=r+3+Math.random()*5;let c=Math.random();s.play(c<.55?"talk":c<.8?"idle":"wave",.45,.85+n%1*.4)}l.x=i.x,l.z=i.z,l.y=t(l.x,l.z),l.yaw=e+Math.sin(r*.4+n)*.3}}function Uu(i,e,t,n=0){return(s,r,a)=>{let o=s.data,l=s.pose;if(o.next===void 0||r>o.next){o.next=r+3+Math.random()*5;let c=Math.random();c<.25?(s.play("stumble",.15,1,1,!0),o.next=r+2.1):c<.55?s.play("reach",.5,.9+n%1*.3):s.play("zidle",.5,.8+n%1*.4)}l.x=i.x,l.z=i.z,l.y=t(l.x,l.z),l.yaw=e+Math.sin(r*.35+n)*.5}}function nm(i,e,t,n,s,r){let o=["type","type","click","drink","stretch"];return(l,c,h,u)=>{let d=l.pose,f=be.characters.designer.scale*l.scaleMul,m=l.data,v=Pe((u.Z-(n-.18))/.36);l.zi=v;let g=1-Pe((v-.62)/.28),p=1-g;m.a===void 0&&(m.a=s*Va,m.yaw=e,m.hum="type",m.next=c+2+s%3),c>m.next&&v<.5&&(m.hum=o[Math.random()*o.length|0],m.next=c+(m.hum==="stretch"?3.3:3+Math.random()*5),m.hum==="stretch"?l.anim&&(l.anim.t.stretch=0):m.hum==="stretch"&&(m.hum="type"));let _=Pe(p);m.a+=h*.16*p;let S=r?ct(i.x,r.x,_):i.x,y=i.z+(r?r.len*(.5-.5*Math.cos(m.a)):0)*_;d.x=S,d.z=y,d.y=t+g*(125-.5*f),d.gy=t;let E=Math.sin(m.a),M=p>.15?r&&Math.abs(S-r.x)>60?Math.atan2(r.x-i.x,0):E>0?0:Math.PI:e;d.yaw=Du(m,"yaw",M,h,3);let x={};g>0&&(x[m.hum]=(1-v)*g,x.zsit=v*g),p>0&&(x.shamble=p),l.mix(x,.9+s%1*.3,5),d.tilt=0}}function im(i,e,t,n,s){return(r,a,o,l)=>{let c=r.pose,h=r.data,u=Pe((l.Z-(n-.18))/.36);r.zi=u,r.mix({talk:1-u,shamble:u*.55,zidle:u*.45},.9+s%1*.3,4),h.a===void 0&&(h.a=s),h.a+=o*.4*u,c.x=i.x+Math.cos(h.a)*90*u,c.z=i.z+Math.sin(h.a)*90*u,c.y=t(c.x,c.z),c.yaw=Du(h,"yaw",u>.3?Math.atan2(-Math.sin(h.a),Math.cos(h.a)):e+Math.sin(a*.4+s)*.3,o,3),r.mix({talk:1-u,shamble:u*.55,zidle:u*.45},.9,4)}}function sm(i,e,t,n){let s=Ri(n),r=be.characters[e],a=be.intruder,o=r.scale*a.scale,l=t.B.y-t.gy,c=t.pitch,h=be.stageHeight,u=l+540*Math.cos(c),d=540*Math.sin(c)+10,f=996,m=t.B.x,v=t.B.z,g=t.right,p=t.toCam,_=a.activeDistance*a.activeDistance,S={duo:null,ints:[]},y=B=>B%2===0?1:-1,E=B=>B>0?"waveM":"wave",M=B=>B>0?"point":"pointM";function x(B,k,Y,ie,te=0){let xe=B.pose;xe.x=m+g.x*k+p.x*ie,xe.z=v+g.z*k+p.z*ie,xe.y=t.gy+Y,xe.yaw=t.yaw+te}let b=h,I={peekSide(B,k,Y,ie){let te=gi(k,0,.22,.78,1),xe=B.pose;x(B,ie*(930+te*(a.sideGap*.4+76)),0,a.behindZ,-ie*.3*te),xe.lean=-ie*.14*te,B.play(te>.6?E(ie):"idle",.3,1.1)},leanIn(B,k,Y,ie){let te=gi(k,0,.27,.8,1),xe=B.pose;x(B,ie*(1010+(1-te)*140),ct(0,b,Pe(te)),ct(a.behindZ,60,Pe(te)),ie*.55*te),xe.lean=ie*.3*te,B.play(te>.5?M(ie):"idle",.3,1)},waveJump(B,k,Y,ie){let te=gi(k,0,.27,.8,1);x(B,ie*(930-70*te),ct(0,b,Pe(te)),ct(a.behindZ,150,Pe(te)),0),B.play(te>.5?"jump":"run",.25,te>.5?.9+(B.data.v||0)*.3:.6)},waveCam(B,k,Y,ie){let te=gi(k,0,.26,.8,1);x(B,ie*(880-40*te),ct(0,b,Pe(te)),ct(a.behindZ,250,Pe(te)),Math.sin(Y*1.5)*.12*te),B.play(k<.6?"waveBoth":"shrug",.35,1)},knock(B,k,Y,ie){let te=gi(k,0,.22,.8,1),xe=gi(k,0,.15,.6,.76);x(B,ie*(800-20*te),ct(0,b,Pe(te)),ct(a.behindZ,40,Pe(te)),Math.PI*xe),B.play(k<.68?"knock":"shrug",.25,1)},peekTop(B,k,Y,ie){let te=gi(k,0,.3,.72,1),xe=ie*(330+160*Math.sin(B.data.ph||0));x(B,xe,0,a.behindZ,0),B.pose.y=t.gy+ct(u-o*1.22,u-o*.8,te),B.play(te>.85?E(ie):"hang",.3,1)},climbTop(B,k,Y,ie){U(B,k,Y,ie*430,0)},runAcross(B,k,Y,ie){let te=B.data.dir||1,xe=1450,ne=-te*xe+te*2*xe*k;x(B,ne,b,r.runDistance*.6,te*Math.PI/2),B.play("run",.2,r.runSpeed/360,1)}};function C(){return u+8-.5*o}function U(B,k,Y,ie,te){let xe=u-o*1.25,ne=u-o*.8,_e=C(),fe=B.pose,Me,ye=a.behindZ,Fe="hang",Ye=0;if(k<.16)Me=ct(xe,ne,Pe(k/.16));else if(k<.4)Me=ct(ne,ne+o*.22,Pe((k-.16)/.24));else if(k<.54){let Te=Pe((k-.4)/.14);Me=ct(ne+o*.22,_e,Te),ye=ct(a.behindZ,d,Te),Fe=Te>.6?"dangle":"hang"}else if(k<.8)Me=_e,ye=d,Fe="dangle",ie+=Math.sin((k-.54)/.26*Math.PI*2)*110;else if(k<.94){let Te=Pe((k-.8)/.14);Me=ct(_e,xe,Te),ye=ct(d,a.behindZ,Te),Fe="flail"}else Me=xe;x(B,ie,0,ye,0),fe.y=t.gy+Me,fe.lean=Ye,B.play(Fe==="dangle"&&k>.56&&k<.78&&Math.sin(Y*2)>0?"dangle":Fe,.3,1)}let X={tug(B,k,Y,ie,te){let xe=te*430,ne=xe+te*300,_e=Math.sin(.08/.26*Math.PI*2)*110;if(Y<.5)U(B,St(Y/.5,0,1)*.62,ie,xe,0);else if(Y<.7)U(B,.62,ie,xe,0);else if(Y<.86){let Fe=(Y-.7)/.16;j(B,Fe,ie,xe+_e*(1-Pe(Fe)))}else B.pose.vis=0;let fe=u-o*1.25,Me=u-o*.8,ye=C();if(Y<.42)k.pose.vis=0;else if(Y<.62){let Fe=Pe((Y-.42)/.2);x(k,ne,0,a.behindZ),k.pose.y=t.gy+ct(fe,Me,Fe),k.play("hang",.3,1.2)}else if(Y<.74){let Fe=Pe((Y-.62)/.12);x(k,ct(ne,xe,Fe),0,ct(a.behindZ,d,Fe)),k.pose.y=t.gy+ct(Me,ye,Fe),k.play("shove",.2,1.2)}else if(Y<.94)x(k,xe,0,d),k.pose.y=t.gy+ye,k.play(Y<.8?"dangle":E(te),.3,1.2);else{let Fe=Pe((Y-.94)/.06);x(k,xe,0,ct(d,a.behindZ,Fe)),k.pose.y=t.gy+ct(ye,fe,Fe),k.play("flail",.2,1)}},shove(B,k,Y,ie,te){let xe=te*850,ne=te*1e3,_e=gi(Y,.1,.22,.3,.42),fe=gi(Y,.42,.52,.6,.72),Me=gi(Y,.72,.8,.86,.92),ye=xe-te*(110*_e-60*fe+80*Me),Fe=ne+te*(-20*_e+120*fe-20*Me),Ye=gi(Y,0,.08,.92,1),Te=ct(a.behindZ,90,Pe(Ye));x(B,ye,ct(0,b,Pe(Ye)),Te,-te*.6),x(k,Fe,ct(0,b,Pe(Ye)),Te,-te*.6+Math.PI*.1),B.pose.lean=te*.12*_e,k.pose.lean=-te*.12*fe,B.play(_e>.1?"flail":fe>.1?"shove":Me>.1?"flail":"idle",.15,1.1),k.play(_e>.1?"shove":fe>.1?"flail":Y>.9?E(-te):"idle",.15,1.1),Y>.92&&(B.pose.vis=Y<.97?1:0)}};function j(B,k,Y,ie){let te=u-o*1.25,xe=C();x(B,ie,0,ct(d,a.behindZ,Pe(k))),B.pose.y=t.gy+ct(xe,te,Pe(k)),B.play("flail",.15,1.2)}let D=B=>{let k={action:null,nextAt:.8+B*1.3,t0:0,T:1,last:"",dir:1,first:!0},Y=i.add(e,{kind:"intruder",scaleMul:a.scale,variant:s()*6|0,head:s()<.5?"head":"headB",pos:t.B,update:(ie,te,xe,ne)=>q(B,ie,k,te,xe,ne)});if(Y.data.v=s(),Y.data.ph=s()*6,Y.data.st=k,Y.baseVar=Y.variant,e==="designer"){let ie=Y.play,te={idle:"zidle",wave:"reach",waveM:"reach",point:"reach",pointM:"reach",knock:"reach",talk:"zidle",run:"shamble"};Y.play=(xe,ne,_e,fe,Me)=>ie(Y.zi>.5&&te[xe]||xe,ne,_e,fe,Me)}return Y},O=[];for(let B=0;B<r.intruders;B++)O.push(D(B));let Z=.2+s()*.55;function q(B,k,Y,ie,te,xe){let ne=k.pose;if(ne.vis=0,t.B.distanceToSquared(xe.cam)>_){Y.action=null,S.duo&&S.duo.chars.includes(B)&&(S.duo=null),Y.nextAt<ie&&(Y.nextAt=ie+1+s()*3);return}if(e==="designer"&&(k.zi=Pe((xe.Z-(Z-.18))/.36)),S.duo){if(!S.duo.chars.includes(B))return;if(S.duo.lastFrame!==xe.frame){S.duo.lastFrame=xe.frame;let fe=(ie-S.duo.t0)/S.duo.T;if(fe>=1){S.duo=null,O.forEach(Me=>{Me.data.st.action=null,Me.data.st.nextAt=ie+r.actionEvery[0]+s()*(r.actionEvery[1]-r.actionEvery[0])});return}O[0].pose.vis=O[1].pose.vis=1,X[S.duo.name](O[0],O[1],fe,ie-S.duo.t0,S.duo.s)}return}if(!Y.action){if(ie<Y.nextAt)return;if(!Y.first&&B===0&&O.length>1&&!O[1].data.st.action&&!O[1].data.st.first&&s()<a.duoChance){let ye=s()<.5?"tug":"shove";S.duo={name:ye,t0:ie,T:a.durations[ye],chars:[0,1],s:s()<.5?1:-1,lastFrame:-1};return}let fe=(e==="designer"&&k.zi>.6?["climbTop","leanIn","peekTop","waveCam","waveJump"]:r.actions).filter(ye=>ye!==Y.last),Me=fe[s()*fe.length|0];if(Y.first&&(Y.first=!1,Me="peekSide"),Me==="runAcross"&&s()<a.runSkip){Y.nextAt=ie+.5;return}Y.action=Me,Y.last=Me,Y.t0=ie,Y.dir=s()<.5?1:-1,k.data.dir=Y.dir,Y.T=Me==="runAcross"?2900/r.runSpeed:a.durations[Me]||4}let _e=(ie-Y.t0)/Y.T;if(_e>=1){Y.action=null,Y.nextAt=ie+r.actionEvery[0]+s()*(r.actionEvery[1]-r.actionEvery[0]);return}ne.vis=1,I[Y.action](k,_e,ie-Y.t0,y(B))}return O}function am(i){let{scene:e,route:t,R:n,chars:s,atlasMat:r,tex:a,inst:o,flames:l,terrainY:c}=i,h=t.towerCz,u=be.tower,d=u.floorHeight,f=u.half,m=Math.max(2,Math.round(t.towerHeight/d)),v=be.eyeHeight,g=h-f+700,p=new mt(501),_=new mt(502),S=(ve,me,Ve,Ge,We,ke,dt,bt=ge("concrete"),Nt=p)=>Nt.add(new Oe(ve,me,Ve),de(dt),nt(Ge,We,ke),bt),y=(ve,me,Ve,Ge,We,ke=ge("carpet"))=>p.add(new Oe(me-ve,50,Ge-Ve),(dt,bt)=>bt>0?de("#9a9ca2"):de("#7d8086"),nt((ve+me)/2,We-25,(Ve+Ge)/2),ke),E=t.stops.filter(ve=>ve.tower).map(ve=>ve.floorY),M=[],x=[],b=[],I=[[2650,1600],[3450,1900]];for(let ve=0;ve<=m;ve++){let me=ve*d;if(ve===0){y(-f-300,f+300,h-f-300,h+f+300,0,ge("concrete"));continue}if(y(-f,f,h-f+950,h+f,me),y(-f,-250,h-f,h-f+950,me),y(250,f,h-f,h-f+950,me),ve===m)continue;if(E.includes(me))for(let We=0;We<15;We++)for(let ke=0;ke<4;ke++)S(280,5,280,-420+ke*280,me+3,h-f+1100+We*280,(We+ke)%2?"#e4ebf3":"#c6d2e0",ge("tile"));let Ve=E.includes(me),Ge=0;if(Ve)for(let We of[-1,1])for(let[ke,dt]of I){let bt=We*dt,Nt=g+ke,nn=Math.PI;if(rt("ken:desk")){let gt=Xt("ken:desk",360,"l"),Q=at(bt,me+Ge,Nt,1,nn),Zt=(Ut,Ct,we,Ot,$e=0,it=1)=>o.add(()=>rt(Ut),Q.clone().multiply(at(Ct,we,Ot,gt*it,$e)),null);Zt("ken:desk",0,0,0),Zt("ken:chairDesk",0,0,175,Math.PI),Zt("ken:computerScreen",0,175,-40),Zt("ken:computerKeyboard",0,175,40),Zt("ken:computerMouse",90,175,45)}else o.add(()=>At.desk(),at(bt,me+Ge,Nt,1,nn),null);x.push([bt,me+Ge,Nt,nn]),M.push({x:bt,z:Nt-175,y:me+Ge,yaw:0,lane:{x:We*1340,len:220}})}for(let We of[-1500,0,1500])for(let ke of[-200,700,1500])b.push([We,me+d-55,h+ke]);for(let[We,ke]of[[-f+150,h+f-150],[f-150,h+f-150],[-f+150,h-f+1200],[f-150,h-f+1200],[-700,h+1200],[700,h+1200]])o.add(()=>At.plant(),at(We,me,ke,1,n()*6),null)}for(let ve of[-1,1])for(let me of[-1,1])S(150,m*d+100,150,ve*f,(m*d+100)/2,h+me*f,"#8a909a",ge("concrete"));for(let ve of[-1,1])for(let me=-f+500;me<f;me+=500)S(34,m*d,34,me,m*d/2,h+ve*f,"#aeb4ba",ge("metal"));for(let ve of[-1,1])for(let me=h-f+500;me<h+f;me+=500)S(34,m*d,34,ve*f,m*d/2,me,"#aeb4ba",ge("metal"));for(let[ve,me]of[[-262,g-250],[262,g-250],[-262,g+250],[262,g+250]])S(26,m*d,26,ve,m*d/2,me,"#5a606a",ge("metal"));let C=h+f+30;S(f-300,1500,60,-(f+300)/2,750,C,"#cfd2d6"),S(f-300,1500,60,(f+300)/2,750,C,"#cfd2d6"),S(600,940,60,0,1030,C,"#cfd2d6"),S(40,560,40,-310,280,C,"#6a6e76",ge("metal")),S(40,560,40,310,280,C,"#6a6e76",ge("metal")),S(900,280,420,-1e3,140,h+f-700,"#2d3340",ge("wood")),S(900,280,420,1e3,140,h+f-700,"#2d3340",ge("wood")),S(600,200,180,0,100,h+f-1300,"#8a7a60",ge("wood")),_.add(new Oe(560,90,8),de("#ffb44a"),nt(0,1100,h+f-20)),y(-f-100,f+100,h-f-100,h+f+100,m*d+50,ge("concrete")),S(60,1800,60,0,m*d+950,h,"#c8ccd2",ge("metal")),_.add(new Oe(160,160,160),de("#ff3a3a"),nt(0,m*d+1900,h)),M.forEach((ve,me)=>{s.add("designer",{variant:me,head:me%2?"headB":"head",pos:new z(ve.x,ve.y,ve.z),update:nm(new z(ve.x,0,ve.z),ve.yaw,ve.y,me%5===0?.22+n()*.08:.42+n()*.36,n()*6,ve.lane)})}),e.add(p.mesh(r)),e.add(_.mesh(new Ht({vertexColors:!0})));let U=At.screen(),X=new vn(U,new Ht({map:a.screen,fog:!0}),x.length);x.forEach(([ve,me,Ve,Ge],We)=>X.setMatrixAt(We,at(ve,me,Ve,1,Ge))),e.add(X);let j=new _n(520,220).rotateX(Math.PI/2),D=new vn(j,new Ht({color:16773324,fog:!0}),b.length),O=new Qe;b.forEach(([ve,me,Ve],Ge)=>{O.makeTranslation(ve,me,Ve),D.setMatrixAt(Ge,O)}),e.add(D);let Z=m*d,q=new Ht({map:a.glass,transparent:!0,depthWrite:!1,side:rn,fog:!0}),B=(ve,me,Ve,Ge)=>{let We=a.glass.clone();We.wrapS=We.wrapT=Tn,We.repeat.set(ve/1400,Z/1500),We.needsUpdate=!0;let ke=new Mt(new _n(ve,Z),q.clone());return ke.material.map=We,ke.position.set(me,Z/2,Ve),ke.rotation.y=Ge,ke.renderOrder=6,e.add(ke),ke};B(2*f,0,h-f,0),B(2*f,0,h+f,0),B(2*f,-f,h,Math.PI/2),B(2*f,f,h,Math.PI/2);let k=new mt(503),Y=(ve,me,Ve,Ge,We,ke,dt,bt=ge("metal"))=>k.add(new Oe(ve,me,Ve),de(dt),nt(Ge,We,ke),bt);Y(520,20,520,0,-10,g,"#2e3238"),Y(520,16,520,0,1150,g,"#3a3e46");for(let ve of[-1,1])for(let me of[-1,1])Y(22,1150,22,ve*256,575,g+me*256,"#2a2e34");Y(300,8,300,0,1138,g,"#fff6dc",ge("plaster"));let ie=new sn;ie.add(k.mesh(r));let te=[],xe=new Ht({color:12114160,transparent:!0,opacity:.14,depthWrite:!1,side:rn});for(let ve of[-1,1]){let me=new Mt(new _n(512,1130),xe);me.rotation.y=Math.PI/2,me.position.set(ve*256,565,g),me.renderOrder=6,ie.add(me),te.push(me)}e.add(ie);let ne=Ri(777),_e=[];for(let ve=-8800;ve<=8800;ve+=1050)for(let me=h-14e3;me<=h+1800;me+=1050){if(Math.max(Math.abs(ve),Math.abs(me-h))<4300||ne()<.15||me>h-600&&Math.abs(ve)<2600)continue;let Ve=ve+(ne()-.5)*300,Ge=me+(ne()-.5)*300,We=ne()*6|0,ke=c(Ve,Ge);{let dt="city:building_"+"ABCDEFGH"[We+(ne()<.4?2:0)],bt=[1700,2600,1400,3400,2100,1100][We]*(.9+ne()*.5);Math.hypot(Ve,Ge-h)<9e3&&rt(dt)?o.add(()=>rt(dt),at(Ve,ke-120,Ge,Xt(dt,bt,"h")*1.25,(ne()*4|0)*Math.PI/2+(ne()-.5)*.12,0,(ne()-.5)*.08),et(de("#ffffff"),de("#8c8c8a"),ne()*.5+.25)):o.add(()=>At.bld(We),at(Ve,ke,Ge,1,(ne()*4|0)*Math.PI/2+(ne()-.5)*.12,0,(ne()-.5)*(We>=3?.06:.02)),et(de("#ffffff"),de("#9a9892"),ne()*.6))}if(ne()<.1&&o.add(()=>At.rubble(),at(Ve+500,ke,Ge+400,1.8,ne()*6),null),ne()<.16&&(l.add(Ve,ke+1200+ne()*1200,Ge,2.2,!1),_e.push([Ve,ke+1500,Ge])),ne()<.12){let dt="city:car_"+["sedan","taxi","police","hatchback"][ne()*4|0];rt(dt)?o.add(()=>rt(dt),at(Ve-450,ke+4,Ge-500,Xt(dt,440,"l"),ne()*6,0,(ne()-.5)*.3),et(de("#ffffff"),de("#6a6a68"),.5)):o.add(()=>At.car(),at(Ve-450,ke,Ge-500,1.1,ne()*6),null)}}let fe=new Ht({color:2763308,transparent:!0,opacity:.34,depthWrite:!1,fog:!0,side:rn});_e.forEach(([ve,me,Ve])=>{let Ge=new Mt(new Kt(330,3600,9,1,!0),fe);Ge.position.set(ve,me+1800,Ve),Ge.rotation.z=Math.PI,Ge.renderOrder=5,e.add(Ge)});let Me=90,ye=At.tinyZombie(),Fe=new vn(ye,r,Me),Ye=[];for(let ve=0;ve<Me;ve++){let me=ne()*6.28,Ve=4700+ne()*6500;Ye.push({cx:Math.cos(me)*Ve,cz:h-2500+Math.sin(me)*Ve*.9,rad:120+ne()*380,sp:(.05+ne()*.08)*(ne()<.5?1:-1),ph:ne()*6}),Fe.setColorAt(ve,new Ee(1,1,1))}Fe.frustumCulled=!1,e.add(Fe);let Te=new It;function tt(ve,me){let Ve=v+(be.towerEye-v)*St((ve.y-v)/u.firstStopFloorY,0,1);ie.position.y=Math.max(0,ve.y-Ve);let Ge=E.some(We=>Math.abs(ve.y-Ve-We)<30)||ve.y<v+20;if(te.forEach(We=>{We.visible=!Ge}),ve.z<h+4200&&ve.z>h-16e3){for(let We=0;We<Me;We++){let ke=Ye[We],dt=me*ke.sp+ke.ph,bt=ke.cx+Math.cos(dt)*ke.rad,Nt=ke.cz+Math.sin(dt)*ke.rad;Te.position.set(bt,c(bt,Nt),Nt),Te.rotation.set(0,-dt*Math.sign(ke.sp)+1.6,0),Te.scale.setScalar(1.1),Te.updateMatrix(),Fe.setMatrixAt(We,Te.matrix)}Fe.instanceMatrix.needsUpdate=!0}}return{update:tt,desks:[-1,1].flatMap(ve=>I.map(([me,Ve])=>[ve*Ve,g+me]))}}function iv(i,e,t){let n=i/2+38,s=e/2+34,r=[[-n,0,s],[n,0,s],[0,t,s],[-n,0,-s],[n,0,-s],[0,t,-s]],a=[[0,1,2],[5,4,3],[0,2,5],[0,5,3],[1,4,5],[1,5,2],[0,3,4],[0,4,1]],o=[];for(let c of a)for(let h of c)o.push(...r[h]);let l=new Rt;return l.setAttribute("position",new st(o,3)),l}var om=["#ecd9b4","#dba57c","#cbd9b2","#e6cdcd","#cdd7e3","#e3c98f"].map(de),lm=["#b0502f","#8a4030","#566878","#9a6a3a","#6a4a60"].map(de),cm=de("#2e2a28"),hm=["#6e6a66","#4a4642","#8a5a48","#3a3634","#7d7770"].map(de),um=["#f2b134","#3fb8af","#ff6f91","#845ec2","#ff9671","#a6cc4c","#8d9aa6","#e85d75","#4d8fd6"].map(de);function Fu(i,e,t,n,s,r,a,o,l,c,h){let u=new Qe().compose(new z(e,t,n),new Pt().setFromEuler(new cn(0,s,0)),new z(1,1,1)),d=(x,b,I,C,U,X=0,j=0,D=0,O)=>i.add(x,b,u.clone().multiply(nt(I,C,U,X,j,D)),O),f=c()<.35,m=f?ge("brick"):ge("plaster"),v=_t?de("#8c867a"):cm,g=et(f?de("#b0654a"):om[c()*om.length|0],v,l*(_t?.95:.8)),p=et(lm[c()*lm.length|0],v,l*(_t?.9:.75)),_=et(de("#e8e0d0"),cm,l*.7),S=de("#27303a");d(new Oe(r+70,26,a+70),de("#6f6a62"),0,13,0,0,0,0,ge("concrete"));let y=[{w:r,h:o,d:28,x:0,z:a/2,rotY:0,front:!0},{w:r,h:o,d:28,x:0,z:-a/2,rotY:0,side:!0},{w:a,h:o,d:28,x:-r/2,z:0,rotY:Math.PI/2,side:!0},{w:a,h:o,d:28,x:r/2,z:0,rotY:Math.PI/2,side:!0}],E=0;if(y.forEach(x=>{let b=x.h,I=0;if(!(l>.3&&c()<l*.55&&E>=1)&&(l>.45&&c()<l*.6&&(b=x.h*(.3+c()*.5),I=(c()-.5)*.18),E++,d(new Oe(x.w,b,x.d),g,x.x,26+b/2,x.z,0,x.rotY,I,m),b>o*.75)){let C=x.front?2:1,U=x.z+(x.front?18:0);for(let X=0;X<C;X++){let j=x.front?X?r*.28:-r*.28:0,D=x.front?j:0,O=x.front?U:0;x.front&&(d(new Oe(r*.2,o*.24,10),S,D,26+o*.62,O,0,0,0,ge("plaster")),d(new Oe(r*.24,o*.045,14),_,D,26+o*.62-o*.13,O+2,0,0,0,ge("plaster")),l<.5&&(d(new Oe(r*.05,o*.26,8),de("#5a7a4a"),D-r*.13,26+o*.62,O+6,0,0,0,ge("wood")),d(new Oe(r*.05,o*.26,8),de("#5a7a4a"),D+r*.13,26+o*.62,O+6,0,0,0,ge("wood"))))}x.front&&(d(new Oe(r*.17,o*.56,10),de("#5a3a24"),0,26+o*.28,U,0,0,0,ge("wood")),d(new Oe(r*.22,o*.08,14),_,0,26+o*.58,U+2,0,0,0,ge("plaster")),d(new Oe(r*.3,14,50),de("#8a857c"),0,33,U+28,0,0,0,ge("concrete")))}}),l<.72){let x=l>.25?(c()-.5)*l*.7:0,b=o*.6;_t?d(iv(r,a,b*.8),p,l>.25?(c()-.5)*40:0,26+o,0,0,0,x,ge("roof")):d(new Kt(Math.max(r,a)*.76,b,4),p,l>.25?(c()-.5)*40:0,26+o+b/2,0,0,Math.PI/4,x,ge("roof")),d(new Qt(r*.06,r*.07,o*.45,6),de("#8a6a58"),r*.25,26+o+o*.32,-a*.15,0,0,l>.4?.25:0,ge("brick")),d(new Oe(r*.12,10,r*.12),de("#3a3430"),r*.25,26+o+o*.56,-a*.15,0,0,0,ge("concrete")),l<.3&&d(new Oe(r*.2,o*.14,r*.2),p,-r*.15,26+o+o*.45,a*.1,0,Math.PI/4,0,ge("roof"))}else for(let x=0;x<5;x++)d(new Oe(18,18,Math.max(r,a)*.8),de("#4a3a2a"),(x-2)*r*.2,26+o*.75+c()*60,0,(c()-.5)*.8,(c()-.5)*1.2,(c()-.5)*.8,ge("wood"));let M=Math.floor(l*10);for(let x=0;x<M;x++){let b=30+c()*90,I=c()*6.28,C=Math.max(r,a)*(.45+c()*.6);d(new Oe(b,b*(.4+c()*.6),b*(.6+c()*.6)),hm[c()*hm.length|0],Math.cos(I)*C,14+b*.25,Math.sin(I)*C,c(),c()*3,c(),ge(x%2?"concrete":"brick"))}return h&&l>.6&&c()<.55&&h.add(new Oe(r*.25,40,a*.25),de("#ff5a10"),u.clone().multiply(nt((c()-.5)*r*.4,30,(c()-.5)*a*.4))),Math.max(r,a)*.9}function dm(i,e,t,n,s){let r=6+(s()*5|0);for(let a=0;a<r;a++){let o=80+s()*170,l=70+s()*150,c=80+s()*160;i.add(new Oe(o,l,c),um[s()*um.length|0],nt(e+(s()-.5)*340,t+l/2+(s()<.4?110:0),n+(s()-.5)*340,(s()-.5)*.8,s()*3,(s()-.5)*.8),ge(s()<.5?"plaster":"metal"))}}var fm=["#58a058","#c0443e","#4a64a8","#d0a848","#8a8f98"].map(i=>new Ee(i)),pm=["city:car_sedan","city:car_hatchback","city:car_taxi","city:car_police","city:car_stationwagon"],sv="ABCDEFGH".split("").map(i=>"city:building_"+i),rv=["#7a7a76","#6a6e72","#8a7a68","#6a7a68","#7a6a6a"].map(i=>new Ee(i)),lc=["ken:tree_default","ken:tree_oak","ken:tree_detailed","ken:tree_fat","ken:tree_pineDefaultA","ken:tree_pineRoundA","ken:tree_pineTallA","ken:tree_tall"],mm=["ken:rock_largeA","ken:rock_largeB","ken:stone_largeA","ken:stone_largeB","ken:rock_smallA","ken:stone_smallA"],av=i=>fm[i()*fm.length|0],gm={hell:"devil",earth:"human",apocalypse:"zombie",tower:"designer"};function xm(i){let e=Ri(20261119),t=new As,{stops:n,sec:s}=i,r=n.length,a=be.eyeHeight,o=be.stageHeight,l={t0:performance.now()},c=A=>{l[A]=Math.round(performance.now()-l.t0)},h=lp(),u={lava:cp(),flame:hp(),dot:up(),blob:dp(),glass:fp(),screen:pp()},d=Jl(h),f=Jl(h,{polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),m=Jl(h,{side:rn});c("textures");let v=Wp(t,d,u.blob),g=new Ht({color:0,opacity:0,blending:Yi,fog:!1}),p=new Ht({color:15855334,fog:!1}),_=new Ht({vertexColors:!0}),S=new xa(16777215,8947848,1);t.add(S);let y=new cs(16777215,1);y.position.set(.5,1,.35),t.add(y);let E=new z(.5,1,.35).normalize();if(be.shadows.enabled){let A=be.shadows,W=y.shadow.camera;y.castShadow=!0,y.shadow.mapSize.set(A.mapSize,A.mapSize),y.shadow.radius=4,y.shadow.bias=-4e-4,y.shadow.normalBias=6,W.left=W.bottom=-A.radius,W.right=W.top=A.radius,W.near=100,W.far=16e3,t.add(y.target)}let M=new cs(10139903,0);M.position.set(-.6,.5,-.7),t.add(M),t.fog=new sa(16777215,3e3,2e4);let x={top:{value:new Ee},mid:{value:new Ee},horizon:{value:new Ee}},b=new Mt(new fn(6e4,20,14),new Hn({uniforms:x,side:Mn,depthWrite:!1,fog:!1,vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; varying float vY; void main(){ float y = vY; vec3 c = y < 0.0 ? horizon : mix(horizon, mid, smoothstep(0.0, 0.3, y)); c = mix(c, top, smoothstep(0.3, 0.95, y)); gl_FragColor = linearToOutputTexel(vec4(c, 1.0)); }"}));b.renderOrder=-10,b.frustumCulled=!1,t.add(b);let I={};for(let A of Object.keys(be.moods)){let W=be.moods[A];I[A]={top:de(W.top),mid:de(W.mid),horizon:de(W.horizon),fog:de(W.fog),fogNear:W.fogNear,fogFar:W.fogFar,hemiSky:de(W.hemiSky),hemiGround:de(W.hemiGround),hemi:W.hemi,sun:de(W.sun),sunI:W.sunI,dir:new z(...W.dir).normalize()}}let C={top:new Ee,mid:new Ee,horizon:new Ee,fog:new Ee,hemiSky:new Ee,hemiGround:new Ee,sun:new Ee};function U(A,W,se){let L=I[A],$=I[W];for(let J of["top","mid","horizon","fog","hemiSky","hemiGround","sun"])C[J].copy(L[J]).lerp($[J],se);x.top.value.copy(C.top),x.mid.value.copy(C.mid),x.horizon.value.copy(C.horizon),t.fog.color.copy(C.fog),t.fog.near=ct(L.fogNear,$.fogNear,se),t.fog.far=ct(L.fogFar,$.fogFar,se),S.color.copy(C.hemiSky),S.groundColor.copy(C.hemiGround),S.intensity=ct(L.hemi,$.hemi,se),y.color.copy(C.sun),y.intensity=ct(L.sunI,$.sunI,se),E.copy(L.dir).lerp($.dir,se).normalize()}function X(A){let W=St(Math.floor(A),0,r-1),se=A-W,L=n[W].zone,$=n[Math.min(r-1,W+1)].zone;if(L===$)return[L,L,0];let J=L==="hell"?Pe((se-.55)/.45):L==="earth"?Pe((se-.1)/.9):Pe((se-.55)/.45);return[L,$,J]}let j=Xp(i,e),{terrainY:D,ap:O,vm:Z}=j;j.build(t,d),j.buildPath(t,f),c("terrain");let q={},B={},k=A=>Math.floor(-A/5e3),Y=A=>q[k(A)]||(q[k(A)]=new mt(k(A)+3)),ie=A=>B[k(A)]||(B[k(A)]=new mt(k(A)+91)),te=new rc,xe=Kp(t,u.flame),ne=jp(u.blob),_e=[];for(let A=-2500;A<=i.cabinU+200;A+=150)_e.push({x:i.px(A),z:-A});function fe(A,W,se){let L=Math.floor((-W+2500)/150);for(let $=Math.max(0,L-8);$<=Math.min(_e.length-1,L+8);$++){let J=_e[$];if((J.x-A)**2+(J.z-W)**2<(se+380)**2)return!1}for(let $ of n){if($.tower||Math.abs($.P.z-W)>3500)continue;let J=$.P.x,le=$.P.z,T=$.B.x,P=$.B.z,H=T-J,G=P-le,F=St(((A-J)*H+(W-le)*G)/(H*H+G*G),0,1);if(Math.hypot(A-(J+H*F),W-(le+G*F))<se+800+500*(1-F)||Math.hypot(A-$.B.x-$.toCam.x*200,W-$.B.z-$.toCam.z*200)<se+1500)return!1}return!0}let Me=(A,W)=>Math.abs(A)<3800&&Math.abs(W-i.towerCz)<3800,ye=(A,W)=>D(A,W),Fe=(A,W,se,L,$=e()*6)=>at(A,W,se,L,$);function Ye(A,W,se,L=1,$=!0){let J=Y(se),le=ge("rock");if(rt("ken:campfire_stones")){te.add(()=>rt("ken:campfire_stones"),at(A,W,se,Xt("ken:campfire_stones",260*L,"l"),e()*6),et(de("#ffffff"),de("#9a8a82"),.4)),te.add(()=>rt("ken:campfire_logs"),at(A,W+8,se,Xt("ken:campfire_logs",220*L,"l"),e()*6),null),ie(se).add(new os(60*L,10),de("#ff6a1a"),nt(A,W+10,se,-Math.PI/2)),xe.add(A,W+20*L,se,L,$);return}for(let T=0;T<7;T++){let P=T*.9;J.add(new Ds(42*L,0),de("#4a3a34"),nt(A+Math.cos(P)*105*L,W+25*L,se+Math.sin(P)*105*L,0,P,0,1,.8,1),le)}for(let T=0;T<3;T++)J.add(new Qt(14*L,14*L,190*L,6),de("#3a2a1c"),nt(A,W+50*L,se,T*1.05,T*2,.5),ge("wood"));ie(se).add(new os(60*L,10),de("#ff6a1a"),nt(A,W+10,se,-Math.PI/2)),xe.add(A,W+20*L,se,L,$)}function Te(A,W,se){let L=pm[e()*pm.length|0];if(!rt(L)){te.add(()=>At.car(),at(A,W,se,1.1,e()*6,(e()-.5)*.15,(e()-.5)*.3),_t?av(e):null);return}let $=e()<.15,J=Xt(L,440,"l");te.add(()=>rt(L),at(A,W+($?130:0),se,J,e()*6,(e()-.5)*.1,$?Math.PI+(e()-.5)*.2:(e()-.5)*.25),et(de("#ffffff"),rv[e()*5|0],.6+e()*.3))}let tt=be.hellY,ve=tt-200,me=null,Ve=[];{let W=s.stairA-300;me=Qp(t,u.lava,-2500,W,3500,ve);for(let G=0,F=500;F<W-400;G++,F+=1500){let ee=F+e()*300,he=G%2?-1:1;Ve.push(em(t,u.lava,i.px(ee)+he*4300,-ee,6400,560,tt+6500,he>0?-Math.PI/2:Math.PI/2))}let se=tt+6500,L=[],$=[],J=520,le=(G,F)=>se+(In(G*7e-4,F*7e-4,17)-.4)*1300;for(let G=2500;G>-W;G-=J)for(let F=-5200;F<5200;F+=J){let ee=(ft,Vt)=>[ft,le(ft,Vt),Vt],he=ee(F,G),ce=ee(F+J,G),Ie=ee(F,G-J),He=ee(F+J,G-J);for(let ft of[[he,ce,Ie],[ce,He,Ie]])for(let Vt of ft){L.push(...Vt);let an=In(Vt[0]*.002,Vt[2]*.002,3);_t?$.push(.46+an*.3,.12+an*.08,.12+an*.08):$.push(.3+an*.2,.1+an*.06,.07+an*.05)}}let T=new Rt;T.setAttribute("position",new st(L,3)),T.setAttribute("color",new st($,3));let P=new mt(2);P.addRaw(T,ge("rock")),t.add(new Mt(P.parts[0],m));let H=[["dung:pillar",700,"h"],["dung:barrel_large",260,"h"],["dung:barrel_small",180,"h"],["dung:torch_lit",380,"h"],["dung:banner_red",520,"h"],["dung:column",900,"h"],["hall:skull",38,"l"],["hall:bone_A",70,"l"],["hall:ribcage",80,"l"],["hall:post_skull",210,"h"],["hall:candle_triple",55,"h"],["dung:box_stacked",260,"h"]];if(rt("dung:pillar"))for(let G=-1e3;G<s.stairA-700;G+=300){let F=e()<.5?-1:1,ee=i.px(G)+F*(430+e()*160+(e()<.35?2700+e()*600:0)),he=-G+(e()-.5)*90,ce=H[e()*H.length|0];if(Math.abs(ee-i.px(G))<1e3||!fe(ee,he,60)&&Math.abs(ee-i.px(G))>800)continue;let Ie=D(ee,he);Ie<ve+40||te.add(()=>rt(ce[0]),at(ee,Ie,he,Xt(ce[0],ce[1],ce[2]),e()*6),ce[0].startsWith("hall:")&&!ce[0].includes("candle")?et(de("#e8dcc0"),de("#ffffff"),e()*.4):et(de("#ffffff"),de("#d09080"),e()*.5))}if(_t)for(let G=-1400;G<s.stairA-700;G+=230)for(let F=-1;F<=1;F++){let ee=i.px(G)+F*190+(e()-.5)*40,he=-G+(e()-.5)*40,ce=i.groundY(G);Y(he).add(new Oe(150+e()*50,34,175+e()*50),et(de("#7a5262"),de("#4e3040"),e()),nt(ee,ce+14,he,(e()-.5)*.08,(e()-.5)*.3,(e()-.5)*.08),ge("rock"))}for(let G=0;G<260;G++){let F=-2500+e()*(W- -2500),ee=(e()-.5)*8600,he=-F,ce=le(ee,he),Ie=e()*3|0;te.add(()=>At.spire(Ie),at(ee,ce+80,he,.4+e()*.9,e()*6,Math.PI,0,.5+e()*1.3),et(de("#9a5a40"),de("#ffffff"),e()*.5))}for(let G=0;G<34;G++){let F=-2500+e()*(W- -2500),ee=i.px(F)+(e()<.5?-1:1)*(300+e()*2200),he=-F;te.add(()=>At.chain(),at(ee,le(ee,he)+10,he,1.2+e()*2.2,e()*6,0,0),null)}for(let G=0;G<380;G++){let F=-2500+e()*(W- -2500+200),ee=e()<.5?-1:1,he=i.px(F)+ee*(900+e()*2600),ce=-F,Ie=D(he,ce),He=e()*3|0;if(!(Ie<ve+60||!fe(he,ce,1200)))if(rt("ken:rock_tallA")){let ft="ken:rock_tall"+"ABCD"[e()*4|0]+"@hell";te.add(()=>rt(ft),at(he,Ie-60,ce,Xt(ft,380+e()*400),e()*6,(e()-.5)*.1,(e()-.5)*.1),null)}else te.add(()=>At.spire(He),at(he,Ie-40,ce,.5+e()*1.1,e()*6,(e()-.5)*.1,(e()-.5)*.1,.5+e()*1.6),et(de("#ffffff"),de("#e0a080"),e()))}for(let G=600;G<s.stairA-400;G+=760+e()*500){let F=e()<.5?-1:1,ee=i.px(G)+F*(3150+e()*450),he=-G,ce=D(ee,he);if(!fe(ee,he,200))continue;let Ie=1+e()*.6;Ye(ee,ce,he,Ie),e()<.5&&te.add(()=>At.cauldron(),at(ee+3,ce,he,1.1*Ie,e()*6),null);let He=new z(ee,ce,he);for(let ft=0;ft<2+(e()*2|0);ft++){let Vt=ft*2.2+e(),an=new z(ee+Math.cos(Vt)*250,ce,he+Math.sin(Vt)*250);v.add("devil",{variant:ft,pos:an,update:Nu(an,e()*6,He)})}}for(let G=0;G<16;G++){let F=300+e()*(s.stairA-900),ee=e()<.5?-1:1,he=i.px(F)+ee*(3150+e()*500),ce=-F;fe(he,ce,250)&&(dm(Y(ce),he,D(he,ce),ce,e),e()<.6&&Ye(he+30,D(he,ce)+150,ce,.8,!1))}for(let G=0;G<6;G++){let F=500+e()*(s.stairA-1800),ee=e()<.5?-1:1,he=3300+e()*300,ce=new z(i.px(F)+ee*he,0,-F),Ie=new z(i.px(F+700)+ee*he,0,-(F+700));v.add("devil",{variant:G,pos:ce,update:ac(ce,Ie,be.characters.devil.walkSpeed,ye,"walk",e())})}}if(c("hell"),s.earthStart>0){let A=s.stairA-500,W=s.stairB+200,se=160,L=null,$=i.px(A);for(let P=A;P<W;P+=se){let H=i.groundY(P),G=-P,F=(P-A)/(W-A),ee=et(de("#4a1a14"),de("#6e6862"),Pe(F*1.2)),he=Y(G);if(he.add(new Oe(760,46,se+4),et(de("#8a6a5a"),de("#a29c92"),F),nt($,H-23,G),ge("concrete")),he.add(new Oe(130,1300,se+4),ee,nt($-410,H+560,G),ge("rock")),he.add(new Oe(130,1300,se+4),ee,nt($+410,H+560,G),ge("rock")),he.add(new Oe(960,160,se+4),ee,nt($,H+1180,G),ge("rock")),((P-A)/se|0)%5===2)for(let ce of[-1,1])ie(G).add(new Oe(30,50,30),de("#ffb030"),nt($+ce*335,H+520,G)),xe.add($+ce*335,H+540,G,.4,!1)}let J=-W,le=i.groundY(W),T=de("#5a5048");Y(J).add(new Oe(6400,2600,400),T,nt($,le+2450,J-200),ge("rock")),Y(J).add(new Oe(2800,2600,400),T,nt($-1900,le+1300,J-200),ge("rock")),Y(J).add(new Oe(2800,2600,400),T,nt($+1900,le+1300,J-200),ge("rock"))}c("tunnel");let Ge=s.stairB+700,We=Math.min(i.doorU+2e3,s.apocEnd+6e3);if(s.earthStart>0){let A=[()=>At.pineA(),()=>At.pineB(),()=>At.oak(),()=>At.birch()];for(let T=0;T<(rt("ken:tree_default")?2300:3600);T++){let P=Ge+e()*(We-Ge),H=e()<.5?-1:1,G=620+Math.pow(e(),1.5)*5600,F=i.px(P)+H*G,ee=-P,he=O(P);if(In(F*7e-4,ee*7e-4,13)<(G<1400?.6:.45)||P>s.apocStart&&e()<.55||Me(F,ee)||!fe(F,ee,380))continue;let Ie=D(F,ee),He=.65+e()*1,ft=e()<he,Vt=!ft&&rt("ken:tree_default")?lc[e()*lc.length|0]:null,an=ft&&rt("hall:tree_dead_large"),cc=Vt?()=>rt(Vt):ft?an?()=>rt(e()<.5?"hall:tree_dead_large":"hall:tree_dead_medium"):()=>At.dead():A[e()<.35?0:e()<.45?2:e()<.6?3:1];te.add(cc,at(F,Ie,ee,He*(an?Xt("hall:tree_dead_large",760,"h"):Vt?Xt(Vt,950,"h"):1),e()*6,(e()-.5)*.05,(e()-.5)*.05),an?et(de("#9a9088"),de("#6a625a"),e()):et(de("#ffffff"),de("#9a8e78"),he*.85)),ne.add(F,Ie,ee,130*He)}for(let T=0;T<4200;T++){let P=Ge+e()*(Math.min(We,s.apocEnd)-Ge),H=e()<.5?-1:1,G=130+Math.pow(e(),1.7)*2300,F=i.px(P)+H*G,ee=-P,he=O(P);e()<he*.7||!fe(F,ee,60)||Me(F,ee)||(rt("ken:grass")&&e()<.3?te.add(()=>rt(e()<.5?"ken:grass":"ken:grass_large"),at(F,D(F,ee),ee,Xt("ken:grass",90,"h")*(.7+e()*1.1),e()*6),et(de("#ffffff"),de("#b8a678"),he)):rt("ken:grass")||te.add(()=>At.tuft(),at(F,D(F,ee),ee,.7+e()*1.1,e()*6),et(de("#ffffff"),de("#b8a678"),he)))}let W=["#ff5a6a","#ffd23f","#b07aff","#ffffff","#ff9a4a"].map(de);for(let T=0;T<1100;T++){let P=Ge+e()*(s.earthEnd-Ge),H=e()<.5?-1:1,G=220+e()*1500,F=i.px(P)+H*G,ee=-P;if(fe(F,ee,60))if(rt("ken:flower_redA")&&e()<.4){let he=["ken:flower_redA","ken:flower_yellowA","ken:flower_purpleA"][e()*3|0];te.add(()=>rt(he),at(F,D(F,ee),ee,Xt(he,80,"h")*(.9+e()*.7),e()*6),null)}else rt("ken:flower_redA")||te.add(()=>At.flower(),at(F,D(F,ee),ee,.9+e()*.7,e()*6),W[e()*5|0])}for(let T=0;T<320;T++){let P=Ge+e()*(We-Ge),H=e()<.5?-1:1,G=i.px(P)+H*(300+e()*4500),F=-P,ee=e()*3|0;if(!(!fe(G,F,140)||Me(G,F)))if(rt("ken:rock_largeA")){let he=mm[e()*mm.length|0];te.add(()=>rt(he),at(G,D(G,F)-10,F,Xt(he,230,"l")*(.6+e()*1.6),e()*6),et(de("#ffffff"),de("#8a8478"),O(P)))}else te.add(()=>At.rock(ee),at(G,D(G,F)-10,F,.6+e()*1.6,e()*6),et(de("#ffffff"),de("#8a8478"),O(P)))}let se=Math.max(s.earthStart,s.earthEnd-5200),L=s.earthEnd+400;for(let T=se;T<s.earthEnd+2500;T+=280)for(let P of[-1,1]){let H=i.px(T)+P*340,G=-T;if(!fe(H,G,40))continue;let F=O(T),ee=e()<F*.8;ee&&e()<.5||(rt("ken:fence_simple")?te.add(()=>rt("ken:fence_simple"),at(H,D(H,G),G,Xt("ken:fence_simple",300,"l"),Math.PI/2+(ee?(e()-.5)*.5:0),0,ee?(e()-.5)*.5:0),et(de("#ffffff"),de("#6a5a4a"),F)):te.add(()=>At.fence(),at(H,D(H,G),G,1,Math.PI/2+(ee?(e()-.5)*.5:0),0,ee?(e()-.5)*.5:0),et(de("#ffffff"),de("#6a5a4a"),F)))}for(let T=0;T<4;T++){let P=s.earthStart+900+e()*Math.max(900,se-s.earthStart-2e3),H=T%2?-1:1,G=i.px(P)+H*1700;if(fe(G,-P,500))for(let F=0;F<8;F++)for(let ee=0;ee<5;ee++){let he=G+(F-4)*90*H,ce=-P-750+ee*300;if(rt("ken:crops_cornStageD")){let Ie=(F+ee)%3===0?"ken:crop_pumpkin":F%2?"ken:crops_cornStageD":"ken:crops_wheatStageB";for(let He=0;He<3;He++)te.add(()=>rt(Ie),at(he+(He-1)*80,D(he,ce),ce+(e()-.5)*40,Xt(Ie,150,"h"),e()*6),null)}else te.add(()=>At.crops(),at(he,D(he,ce),ce,1,Math.PI/2),null)}}for(let T=0;T<14;T++){let P=se+e()*(L-se),H=e()<.5?-1:1,G=i.px(P)+H*(900+e()*900),F=-P;fe(G,F,80)&&te.add(()=>At.hay(),at(G,D(G,F),F,1+e()*.5,e()*6),null)}n.forEach(T=>{if(T.zone!=="earth")return;let P=T.P.x+T.right.x*(-T.side*1500),H=T.P.z+T.right.z*(-T.side*1500)+300;fe(P,H,60)&&te.add(()=>At.bench(),at(P,D(P,H),H,1.2,T.yaw),null)});let $=(T,P,H,G=1)=>{let F=i.px(T)+P*(950+e()*450),ee=-T;if(!fe(F,ee,420)||Me(F,ee))return;let he=(480+e()*260)*G,ce=(420+e()*200)*G,Ie=330+e()*120,He=P>0?-Math.PI/2+(e()-.5)*.3:Math.PI/2+(e()-.5)*.3;if(rt("ken:building-type-a")&&H<.9){let ft="ken:building-type-"+"abcdefgh"[e()*8|0];te.add(()=>rt(ft),at(F,D(F,ee)-H*120,ee,Xt(ft,560+e()*140,"h"),He+Math.PI,(e()-.5)*H*.35,(e()-.5)*H*.4),et(de("#ffffff"),de("#6a6862"),St(H*1.1,0,.9)))}else Fu(Y(ee),F,D(F,ee),ee,He,he,ce,Ie,H,e,ie(ee));ne.add(F,D(F,ee),ee,Math.max(he,ce)*.6)};for(let T=se;T<L;T+=1150)$(T,1,O(T)*.5),$(T+500,-1,O(T)*.5);for(let T=0;T<4;T++)$(s.earthStart+e()*(se-s.earthStart),e()<.5?-1:1,0,1.2);for(let T=L;T<s.apocStart;T+=1250)$(T,e()<.5?-1:1,.25+O(T)*.6);for(let T=s.apocStart;T<i.doorU-800;T+=850)$(T,1,.7+e()*.3),$(T+420,-1,.7+e()*.3);for(let T=se+400;T<L-400;T+=1800){let P=e()<.5?-1:1,H=i.px(T)+P*620,G=-T,F=D(H,G);if(!fe(H,G,150))continue;let ee=Y(G),he=O(T)*.6;ee.add(new Qt(115,120,120,10),de("#8a8680"),nt(H,F+60,G),ge("brick")),ee.add(new Oe(14,190,14),de("#6b4a2e"),nt(H-95,F+200,G),ge("wood")),ee.add(new Oe(14,190,14),de("#6b4a2e"),nt(H+95,F+200,G),ge("wood")),ee.add(new Kt(190,90,4),et(de("#a8452d"),de("#3a3430"),he),nt(H,F+340,G,0,Math.PI/4,0),ge("roof"))}let J=0;for(let T=Math.max(s.earthStart+600,se-2500);T<L&&J<22;T+=500+e()*400){let P=e()<.5?-1:1,H=1100+e()*250,G=new z(i.px(T)+P*H,0,-T),F=new z(i.px(T+600)+P*H,0,-(T+600));if(fe(G.x,G.z,100))if(J++,e()<.55)v.add("human",{variant:J,head:e()<.5?"head":"headB",pos:G,update:ac(G,F,be.characters.human.walkSpeed,ye,"walk",e())});else{v.add("human",{variant:J,pos:G,update:Wa(G,e()*6,ye,e()*6)});let ee=new z(G.x+130,0,G.z+50);v.add("human",{variant:J+2,head:"headB",pos:ee,update:Wa(ee,2.4,ye,e()*6)})}}for(let T=0;T<6;T++){let P=s.earthStart+800+e()*Math.max(1e3,se-s.earthStart-1500),H=e()<.5?-1:1,G=i.px(P)+H*(700+e()*800),F=-P;if(!fe(G,F,100))continue;let ee=new z(G,0,F);v.add("human",{variant:T+1,pos:ee,update:Wa(ee,e()*6,ye,e()*6)})}for(let T=0;T<70;T++){let P=s.earthEnd+1500+e()*(i.doorU-s.earthEnd-2e3),H=e()<.5?-1:1,G=i.px(P)+H*(350+e()*700),F=-P;if(!fe(G,F,200)||Me(G,F))continue;let ee=D(G,F);T%3===0?Te(G,ee,F):T%3===1?te.add(()=>At.lamp(),at(G,ee+20,F,1.1,e()*6,0,1.2+(e()-.5)*.4),null):te.add(()=>At.rubble(),at(G,ee,F,1+e(),e()*6),null)}let le=0;for(let T=0;T<900&&le<120;T++){let P=s.earthEnd+1500+e()*(i.doorU-s.earthEnd-2300),H=e()<.5?-1:1,G=i.px(P)+H*(900+e()*1500),F=-P;if(!fe(G,F,140)||Me(G,F)||e()>.3+O(P)*.7)continue;le++;let ee=new z(G,0,F),he=e(),ce=he<.38?oc(ee,140+e()*260,be.characters.zombie.walkSpeed,ye,"shamble",e()):he<.65?Uu(ee,e()*6,ye,e()*6):ac(ee,new z(G+(e()-.5)*900,0,F+(e()-.5)*900),be.characters.zombie.walkSpeed,ye,"shamble",e());v.add("zombie",{variant:le,pos:ee,update:ce})}for(let T=0;T<16;T++){let P=s.earthEnd+1200+e()*(i.doorU-s.earthEnd),H=e()<.5?-1:1,G=i.px(P)+H*(700+e()*1200),F=-P;fe(G,F,200)&&!Me(G,F)&&Ye(G,D(G,F),F,.6+e()*.5,T%2===0)}}c("decor");let ke=null;n.some(A=>A.tower)&&(ke=am({scene:t,route:i,R:e,chars:v,atlasMat:d,tex:u,inst:te,flames:xe,terrainY:D})),c("tower");let dt=(A,W,se)=>[A.B.x+A.right.x*W+A.toCam.x*se,A.B.z+A.right.z*W+A.toCam.z*se];n.forEach((A,W)=>{let se=gm[A.zone],L=()=>A.gy+o,$=()=>A.gy;if((A.tower?[[1060,120,!0],[-1060,120,!0]]:[[1180,-120,!1],[-1180,-120,!1],[1700,-420,!1],[-1700,-620,!1],[2e3,-820,!1]]).forEach(([le,T,P],H)=>{if(se==="human"&&H>2||A.tower&&H>1)return;let[G,F]=dt(A,le,T),ee=P?L():A.tower?A.gy:D(G,F),he=new z(G,ee,F),ce=P?L:A.tower?$:ye,Ie=Math.atan2(A.toCam.x,A.toCam.z)+(le>0?-.4:.4),He;se==="zombie"?He=H%2?Uu(he,Ie,ce,e()*6):oc(he,P?50:110,be.characters.zombie.walkSpeed*.6,ce,"shamble",e()):se==="devil"?He=Nu(he,e()*6,new z(A.B.x+A.toCam.x*200,ee,A.B.z+A.toCam.z*200)):se==="designer"?He=im(he,Ie,ce,.3+e()*.5,e()*6):He=Wa(he,Ie,ce,e()*6),v.add(se,{variant:H+W,head:H%2?"headB":"head",pos:he,scaleMul:P?.9:1,update:He})}),!A.tower){if(A.zone==="apocalypse")for(let le of[-1,1]){let[T,P]=dt(A,le*650,950),H=new z(T,D(T,P),P);v.add("zombie",{variant:W+le,pos:H,update:oc(H,120,be.characters.zombie.walkSpeed*.6,ye,"shamble",e())})}if(A.zone==="apocalypse"){let[le,T]=dt(A,-A.side*1700,-450);Ye(le,D(le,T),T,1,W%2===0);let[P,H]=dt(A,-A.side*2400,-700);Te(P,D(P,H),H);let[G,F]=dt(A,-A.side*3e3,-700);rt("ken:stone_largeA")?te.add(()=>rt("ken:stone_largeA@apoc"),at(G,D(G,F),F,Xt("ken:stone_largeA",220,"l"),e()*6),null):te.add(()=>At.rubble(),at(G,D(G,F),F,1.6,e()*6),null);for(let ee of[-1,1]){let[he,ce]=dt(A,ee*2500,-600),Ie="ken:building-type-"+"abcdefgh"[e()*8|0];rt(Ie)&&te.add(()=>rt(Ie),at(he,D(he,ce)-90,ce,Xt(Ie,600,"h"),ee>0?-Math.PI/2:Math.PI/2,(e()-.5)*.3,(e()-.5)*.35),et(de("#ffffff"),de("#6a6862"),.75));let[He,ft]=dt(A,ee*1600,450);Te(He,D(He,ft),ft);let[Vt,an]=dt(A,ee*2e3,-150);rt("hall:tree_dead_large")&&te.add(()=>rt("hall:tree_dead_medium"),at(Vt,D(Vt,an),an,Xt("hall:tree_dead_medium",800,"h"),e()*6),et(de("#9a9088"),de("#6a625a"),e()))}}else if(A.zone==="hell"){let[le,T]=dt(A,-A.side*1500,-500);if(Ye(le,A.gy,T,1,!1),rt("ken:cliff_waterfall_rock"))for(let P of[-1,1]){let[H,G]=dt(A,P*3700,-400-(P>0?300:0)),F="ken:cliff_waterfall_rock@hell";te.add(()=>rt(F),at(H,D(H,G)-40,G,Xt(F,1500),P>0?Math.PI/2:-Math.PI/2),null)}}}});let bt=[()=>At.pineA(),()=>At.pineB(),()=>At.oak(),()=>At.birch()];n.forEach((A,W)=>{let se=n[W+1];if(A.tower||!se||se.tower||se.zone!==A.zone)return;let L=A.u+Zl+1300,$=(A.P.x+se.P.x)/2-A.side*(A.zone==="apocalypse"?650:400),J=(le,T,P,H)=>{let G=$-le/2+(P+.5)*le/H+(e()-.5)*le/H*.5,F=-L+(e()-.5)*T;return[G,D(G,F),F]};if(A.zone==="hell")for(let le=0;le<12;le++){let[T,P,H]=J(1400,500,le,12);if(rt("ken:rock_tallA")){let G="ken:rock_tall"+"ABCD"[le%4]+"@hell";te.add(()=>rt(G),at(T,P-60,H,Xt(G,900+e()*500),e()*6),null)}else te.add(()=>At.spire(le%3),at(T,P-40,H,1+e()*.5,e()*6,0,0,1.5+e()*.9),et(de("#ffffff"),de("#e0a080"),e()))}else if(A.zone==="earth")for(let le=0;le<14;le++){let[T,P,H]=J(1400,500,le,14);if(rt("ken:tree_default")){let G=lc[e()*lc.length|0];te.add(()=>rt(G),at(T,P,H,Xt(G,1500+e()*500,"h"),e()*6),null)}else te.add(bt[e()*4|0],at(T,P,H,1.8+e()*.7,e()*6),null)}else if(A.zone==="apocalypse"){for(let le=0;le<4;le++){let[T,P,H]=J(800,300,le,4);{let G=sv[(le*2+1)%8];rt(G)?te.add(()=>rt(G),at(T,P-150,H,Xt(G,800+e()*200,"l"),e()*6,(e()-.5)*.1,(e()-.5)*.12),et(de("#ffffff"),de("#807c78"),.5+e()*.3)):te.add(()=>At.bld(1+le%3),at(T,P,H,.95+e()*.3,e()*6),et(de("#ffffff"),de("#a8a8a0"),e()))}}for(let le=0;le<4;le++){let[T,P,H]=J(1400,500,le,4);Fu(Y(H),T,P,H-500,0,700,650,700+e()*250,.5,e,ie(H))}for(let le=0;le<5;le++){let[T,P,H]=J(1400,700,le,5);rt("hall:tree_dead_large")?te.add(()=>rt("hall:tree_dead_medium"),at(T,P,H,Xt("hall:tree_dead_medium",900,"h"),e()*6),et(de("#9a9088"),de("#6a625a"),e())):te.add(()=>At.dead(),at(T,P,H,1.5+e()*.7,e()*6),null)}}});let Nt=[],nn=_t?{hell:["#24262c","#2c2f36","metal"],earth:["#24262c","#2c2f36","metal"],apocalypse:["#24262c","#2c2f36","metal"],tower:["#24262c","#2c2f36","metal"]}:{hell:["#2a1f1d","#c23a1c","rock"],earth:["#8a6a46","#b08a5a","wood"],apocalypse:["#5c4c42","#8a6a50","metal"],tower:["#d8dadf","#8a909a","plaster"]},gt=_t?{hell:["#7a4a34","wood"],earth:["#b8885a","wood"],apocalypse:["#8a7058","wood"],tower:["#c49a68","wood"]}:{hell:["#5a2c24","rock"],earth:["#a88458","wood"],apocalypse:["#74695c","concrete"],tower:["#6a7888","carpet"]},Q=new mt(601);n.forEach((A,W)=>{let se=nn[A.zone],L=de("#f4f1ea"),$=A.tower?Q:Y(A.B.z),J=nt(A.B.x,A.B.y,A.B.z,A.pitch,A.yaw,0),le=new Oe(Ua+72,Ji+72,26);le.translate(0,0,-22),$.add(le,(He,ft)=>Math.abs(He)>960||Math.abs(ft)>540?de(se[0]):L,J,ge(se[2]));let T=A.B.y-540*Math.cos(A.pitch)-10,P=A.gy+o;for(let He of[-1,1])$.add(new Qt(24,30,Math.max(20,T-P),8),de(se[1]),nt(A.B.x+A.right.x*He*740-A.toCam.x*80,P+(T-P)/2,A.B.z+A.right.z*He*740-A.toCam.z*80),ge(se[2]));if(_t)for(let He=0;He<17;He++){let ft=-1050+(He+.5)*2100/17,Vt=new Oe(4,2,470);Vt.translate(ft,o+1.5,0),$.add(Vt,de("#4a2c18"),nt(A.B.x+A.toCam.x*200,A.gy,A.B.z+A.toCam.z*200,0,A.yaw,0),ge("wood"))}if(_t)for(let He of[-560,0,560]){let ft=new Oe(120,46,70);ft.translate(He,Ji/2+62,50),ie(A.B.z).add(ft,de("#fff0b0"),J);let Vt=new Oe(14,50,14);Vt.translate(He,Ji/2+30,10),$.add(Vt,de("#24262c"),J,ge("metal"))}let H=gt[A.zone],G=A.B.x+A.toCam.x*200,F=A.B.z+A.toCam.z*200,ee=A.tower;if($.add(new Oe(ee?2500:2100,o,ee?300:480),de(H[0]),nt(ee?A.B.x+A.toCam.x*190:G,A.gy+o/2,ee?A.B.z+A.toCam.z*190:F,0,A.yaw,0),ge(H[1])),$.add(new Oe(A.tower?2540:2140,26,40),et(de(H[0]),de("#ffffff"),.25),nt(A.B.x+A.toCam.x*(A.tower?340:430),A.gy+o+6,A.B.z+A.toCam.z*430,0,A.yaw,0),ge(H[1])),_t)for(let He=0;He<2;He++)$.add(new Oe(560-He*80,o*(.5-He*.22),150),et(de(H[0]),de("#ffffff"),.12+He*.1),nt(A.B.x+A.toCam.x*(A.tower?400+He*110:470+He*150),A.gy+o*(.25-He*.1),A.B.z+A.toCam.z*(A.tower?400+He*110:470+He*150),0,A.yaw,0),ge(H[1]));let he=new sn;he.position.copy(A.B),he.rotation.set(A.pitch,A.yaw,0,"YXZ");let ce=new Mt(new _n(Ua,Ji),g);ce.renderOrder=-5,ce.visible=!1;let Ie=new Mt(new _n(Ua,Ji),p);he.add(ce,Ie),t.add(he),Nt.push({hole:ce,face:Ie})}),t.add(Q.mesh(d));for(let A of Object.keys(q))q[A].empty()||t.add(q[A].mesh(d));for(let A of Object.keys(B))B[A].empty()||t.add(B[A].mesh(_));te.build(t,d),ne.build(t),xe.build();let Zt=[];if(t.children.forEach(A=>{if(A.isMesh&&A.geometry&&A.geometry.attributes.position.count>60&&A!==b&&!A.isSkinnedMesh){A.geometry.boundingSphere||A.geometry.computeBoundingSphere();let W=A.isInstancedMesh?A.boundingSphere||(A.computeBoundingSphere(),A.boundingSphere):A.geometry.boundingSphere;W&&W.radius<4e4&&Zt.push([A,W])}}),c("boards"),_t&&s.earthStart>0){let A=(s.earthEnd+s.apocStart)/2,W=new mt(77);for(let se=A+300;se<i.doorU-300;se+=420){let L=i.px(se),$=-se,J=(i.px(se+20)-i.px(se-20))/40;W.add(new Oe(18,6,210),de("#f4f2ea"),nt(L,D(L,$)+12,$,0,-Math.atan(J),0),ge("plaster"))}t.add(W.mesh(f))}n.forEach((A,W)=>{sm(v,gm[A.zone]||"human",A,1e3+W*17)});let Ut=new mt(11);[[0,0,0,1],[1.2,-.15,.3,.8],[-1.1,-.1,-.2,.75],[.3,.3,-.4,.7]].forEach(([A,W,se,L])=>Ut.add(new Kn(300*L,1),de("#ffffff"),nt(A*300,W*300,se*300,0,0,0,1,.6,1)));let Ct=[];for(let A=0;A<130;A++){let W=-500+e()*(i.doorU+3e3),se=e()<.5?-1:1,L=i.px(W)+se*(900+e()*6500);if(W<s.stairB+500||Math.max(Math.abs(L),Math.abs(-W-i.towerCz))<be.tower.half+3800||_t&&W<s.earthEnd&&e()<.6)continue;let $=W>s.earthEnd,J=$?2600+e()*4500:2200+e()*2500;Ct.push({p:new z(L,i.groundY(W)+J,-W),sc:$?3+e()*4:1.6+e()*2.2,ph:e()*6,sp:.05+e()*.08,amp:150+e()*300,dir:e()*6.28,dark:Pe((O(W)-.05)/.5)})}let we=new vn(Ut.geometry(),new An({vertexColors:!0,flatShading:_t,emissive:_t?7370879:5593696}),Ct.length),Ot=new It,$e=new Ee;Ct.forEach((A,W)=>we.setColorAt(W,$e.set("#ffffff").lerp(de("#1c1d21"),A.dark))),we.frustumCulled=!1,t.add(we);let it=Jp(t,xe.sites,4),N=$p(t,u.dot);c("fx"),be.shadows.enabled&&t.traverse(A=>{if(!A.isMesh||A===b)return;let W=A.material;(W===d||W===f||W===m)&&(A.receiveShadow=!0,A.isInstancedMesh&&(A.castShadow=!0))});let w=n.filter(A=>A.tower).map(A=>A.i);function re(A){if(be.zombieness.override!=null)return be.zombieness.override;if(!w.length)return 0;let W=be.zombieness.towerStops,se=w[0],L=T=>W[Math.min(W.length-1,T)];if(A<=se)return L(0)*0;let $=A-se,J=Math.floor($),le=$-J;return ct(L(J),L(J+1),Pe(le))}let Se=0,pe=new z;function Ae(A,W,se,L,$){let J=se.position;if(Se++,b.position.copy(J),be.shadows.enabled){let F=y.shadow.camera.right*2/be.shadows.mapSize;pe.set(0,0,-1).applyQuaternion(se.quaternion),y.target.position.set(Math.round((J.x+pe.x*1500)/F)*F,Math.round((J.y+pe.y*1500)/F)*F,Math.round((J.z+pe.z*1500)/F)*F),y.position.copy(y.target.position).addScaledVector(E,8e3),y.target.updateMatrixWorld(),y.updateMatrixWorld()}else y.position.copy(E);let[le,T,P]=X(L);U(le,T,P);let H={hell:0,earth:0,apoc:0},G=(F,ee)=>{F==="hell"?H.hell+=ee:F==="earth"?H.earth+=ee:H.apoc+=ee};if(G(le,1-P),G(T,P),M.intensity=le==="apocalypse"||T==="apocalypse"?.7:0,M.position.set(Math.sin(A*.02)*.3-.6,.5,-.7),Se%4===0){let F=t.fog.far+2500;for(let[ee,he]of Zt){let ce=Math.hypot(he.center.x-J.x,he.center.y-J.y,he.center.z-J.z)-he.radius;ee.visible=ce<(ee.isInstancedMesh&&ee.geometry.userData.mat?Math.min(F,13e3):F),ee.isInstancedMesh&&ee.receiveShadow&&(ee.castShadow=be.shadows.enabled&&ce<be.shadows.radius*.7)}}me.update(A,J),Ve.forEach(F=>F.update(A)),xe.update(A),it.update(J,A,H.hell*1+H.apoc*.7),N.update(A,W,J,H),Ct.forEach((F,ee)=>{let he=Math.sin(A*F.sp+F.ph)*F.amp;Ot.position.set(F.p.x+Math.cos(F.dir)*he,F.p.y,F.p.z+Math.sin(F.dir)*he),Ot.rotation.set(0,0,0),Ot.scale.setScalar(F.sc),Ot.updateMatrix(),we.setMatrixAt(ee,Ot.matrix)}),we.instanceMatrix.needsUpdate=!0,ke&&ke.update(J,A),v.update(A,W,J,{cam:J,Z:$,frame:Se})}function Re(A,W){Nt[A].hole.visible=W,Nt[A].face.visible=!W}return{scene:t,update:Ae,deskPos:ke?ke.desks:[],boards:Nt,setBoardVisible:Re,zombieness:re,terrainY:D,colorAt:j.colorAt,chars:v,route:i,timing:l,atlas:h}}function _m(){let i=performance.now(),e=0,t=document.documentElement,n=Array.prototype.slice.call(document.querySelectorAll("#slides > .slide")),s=n.length,r=T=>Math.max(0,Math.min(s-1,T)),a=n.map(T=>{let P=T.previousSibling,H="";for(;P&&P.nodeType!==8&&P.nodeType!==1;)P=P.previousSibling;return P&&P.nodeType===8&&(H=P.textContent.trim()),{label:H,notes:T.getAttribute("data-notes")||""}}),o=n.map((T,P)=>({zone:T.dataset.zone||"earth",code:(a[P].label.match(/^R-[0-9a-z]+/i)||[""])[0]})),l=new URLSearchParams(location.hash.replace(/^#/,"")),c=r((parseInt(l.get("slide"),10)||1)-1),h=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)"),u=()=>!!(h&&h.matches);!u()&&!document.hidden&&t.classList.add("anim");let d;try{d=new Hl({canvas:document.getElementById("gl"),alpha:!0,antialias:window.devicePixelRatio<2,powerPreference:"high-performance"})}catch{location.replace("flat.html#slide="+(c+1));return}d.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),d.setClearColor(0,0),be.shadows.enabled&&(d.shadowMap.enabled=!0,d.shadowMap.type=zs);let f=new Xl({element:document.getElementById("css3d")}),m=new hn(Gh,1,30,9e4);m.rotation.order="YXZ";let v=op(o),g=xm(v),p=v.stops,_=new As,S=n.map((T,P)=>{let H=document.createElement("div");H.className="frame",T.replaceWith(H),H.appendChild(T);let G=new Wl(H);return G.rotation.order="YXZ",G.position.copy(p[P].B),G.rotation.set(p[P].pitch,p[P].yaw,0),G.visible=!1,_.add(G),{frame:H,slide:T,obj:G}}),y=document.getElementById("cur"),E=document.getElementById("tot"),M=document.getElementById("progress"),x=document.getElementById("hint"),b=document.getElementById("fade");E.textContent=s;let I=null;try{I=new BroadcastChannel("rellmo-deck")}catch{}let C=null,U=null,X=0,j=null,D=16/9,O=!1,Z=performance.now()/1e3,q=0,B=null,k=!1,Y=()=>B??performance.now()/1e3,ie=0,te=0,xe=!1,ne=0,_e=0,fe=new Set,Me=[],ye=0,Fe=new z,Ye=null,Te=0,tt=performance.now(),ve=0,me=()=>U??(C?C.j:c);function Ve(){let T=me();y.textContent=T+1,M.style.width=(T+1)/s*100+"%"}function Ge(T){if(!I)return;let P=T??me(),H=a[P],G=a[P+1]||{label:""};I.postMessage({type:"state",i:P,total:s,label:H.label,notes:H.notes,nextLabel:G.label})}let We=(T,P)=>((P-T+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,ke=(T,P,H)=>T+We(T,P)*H,dt=new z,bt=new z,Nt=T=>ap(D,T.frac);function nn(T,P){let H=p[T];return P.pos=H.P.clone().addScaledVector(H.viewDir,-(Nt(H)-H.D0+(be.debugBack||0))),P.pos.y+=be.debugUp||0,P.yaw=H.yaw,P.pitch=H.pitch,P}let gt={pos:new z,yaw:0,pitch:0,kind:"stop",progress:0};function Q(T,P){let H=Math.min(be.rampSeconds,P*.25),G=1/(P-H);if(T<=0)return 0;if(T>=P)return 1;if(T<H)return G*T*T/(2*H);if(T>P-H){let F=P-T;return 1-G*F*F/(2*H)}return G*(H/2+(T-H))}function Zt(T){return C.scrub!=null?C.scrub:C.fast?ct(C.tau0,1,Pe((T-C.fastT0)/be.skipSeconds)):Q(T-C.t0,C.dur)}function Ut(T){let P=p[C.i],H=p[C.j],G=v.sample(C.data,T),F=(P.tower?3.2:be.turnOutSeconds)/C.dur,ee=(H.tower?4.8:be.turnInSeconds)/C.dur,he=1-Pe(T/F),ce=Pe((T-(1-ee))/ee);gt.yaw=ke(ke(G.yaw,P.yaw,he),H.yaw,ce),gt.pitch=G.pitch+(P.pitch-G.pitch)*he+(H.pitch-G.pitch)*ce,gt.pos.copy(G.pos).addScaledVector(P.viewDir,-(Nt(P)-P.D0)*he).addScaledVector(H.viewDir,-(Nt(H)-H.D0)*ce),gt.kind=G.kind,gt.progress=C.i+T}function Ct(){let T=window.innerWidth,P=window.innerHeight;d.setSize(T,P),f.setSize(T,P),m.aspect=T/P,m.updateProjectionMatrix(),D=T/P}function we(T){C=null,c=T,S[T].slide.classList.add("in"),S.forEach((P,H)=>{H!==T&&P.frame.querySelectorAll("video").forEach(G=>{G.paused||G.pause()})}),Ge(T);try{history.replaceState(null,"","#slide="+(T+1))}catch{}Ve()}function Ot(T,P){let H=v.segs[T];C={i:T,j:P,t0:Y(),dur:H.dur,data:H,fast:!1,sent:!1,fastT0:0,tau0:0},Ve(),Me.push({from:T,to:P,start:Y()*1e3,end:null,fast:!1})}function $e(){let T=Me[Me.length-1];T&&T.end==null&&(T.end=Y()*1e3,T.sec=(T.end-T.start)/1e3)}function it(){if(C){let T=C.j;$e(),we(T)}}function N(){if(!j){if(le(),U!=null){U=Math.min(s-1,U+1),Ve();return}if(C){if(C.fast){let T=C.j;it(),T<s-1&&Ot(T,T+1)}else{let T=Y();C.tau0=Zt(T),C.fast=!0,C.fastT0=T;let P=Me[Me.length-1];P&&(P.fast=!0)}return}c<s-1&&(u()?we(c+1):Ot(c,c+1))}}function w(T){if(!j&&(T=r(T),!(T===me()&&U==null))){if(u()){$e(),we(T);return}U=T,Ve()}}let re=()=>{le(),w(me()-1)};function Se(){let T=U;U=null,$e(),C=null,ie=te=0,we(T)}function pe(){C&&it(),j={yaw:m.rotation.y,pitch:m.rotation.x},t.classList.add("free")}function Ae(){t.classList.remove("free");let T=0,P=1/0;if(p.forEach((H,G)=>{let F=m.position.distanceTo(nn(G,{}).pos);F<P&&(P=F,T=G)}),j=null,fe.clear(),xe=!1,u()){we(T);return}U=T,Ve()}let Re=new z,A=new z;function W(T){let P=(fe.has("Shift")?be.free.fast:be.free.speed)*T;Re.set(0,0,-1).applyQuaternion(m.quaternion),A.set(1,0,0).applyQuaternion(m.quaternion),fe.has("KeyW")&&m.position.addScaledVector(Re,P),fe.has("KeyS")&&m.position.addScaledVector(Re,-P),fe.has("KeyD")&&m.position.addScaledVector(A,P),fe.has("KeyA")&&m.position.addScaledVector(A,-P)}function se(){let T=p.map((H,G)=>[m.position.distanceTo(H.B),G]).sort((H,G)=>H[0]-G[0]),P=new Set;for(let H=0;H<6;H++)T[H][0]<16e3&&P.add(T[H][1]);P.add(c),C&&(P.add(C.i),P.add(C.j)),U!=null&&P.add(U),S.forEach((H,G)=>{let F=P.has(G);H.obj.visible!==F&&(H.obj.visible=F,g.setBoardVisible(G,F),F&&j&&H.slide.classList.add("in"))})}function L(){requestAnimationFrame(L),!k&&$(performance.now(),null,!0)}function $(T,P,H){let G=T/1e3,F=P??Math.min(1/20,G-Z);if(Z=G,q+=F,Te++,T-tt>=1e3&&(ve=Te*1e3/(T-tt),Te=0,tt=T,Ye)){let he=d.info.render;Ye.textContent="fps "+ve.toFixed(0)+" | calls "+he.calls+" | tris "+he.triangles}U!=null?(X=Math.min(1,X+F/be.fadeOut),X>=1&&Se()):X>0&&(X=Math.max(0,X-F/be.fadeIn)),b.style.opacity=X;let ee=c;if(j)W(F),ee=(()=>{let he=0,ce=1/0;return p.forEach((Ie,He)=>{let ft=m.position.distanceTo(Ie.B);ft<ce&&(ce=ft,he=He)}),he})();else{if(C){let Ie=Zt(G);Ut(Ie),ee=gt.progress,!C.sent&&Ie>=.55&&(C.sent=!0,Ge()),(Ie>=1||C.fast&&G-C.fastT0>=be.skipSeconds)&&it()}C||(nn(c,gt),gt.kind="stop",ee=c);let he=0,ce=0;if(C&&(gt.kind==="walk"||gt.kind==="lobby")){let Ie=Math.hypot(gt.pos.x-Fe.x,gt.pos.z-Fe.z)/Math.max(F,.001),He=St(Ie/280,0,1);ye+=Math.min(Ie,520)*F/be.bob.stride*Math.PI*2,he=Math.sin(ye)*be.bob.amplitude*He,ce=Math.sin(ye*.5)*be.bob.lateral*He}if(Fe.copy(gt.pos),!xe){let Ie=Math.exp(-F*be.look.returnRate);ie*=Ie,te*=Ie}if(m.position.copy(gt.pos),m.position.y+=he,m.position.x+=Math.cos(gt.yaw)*ce,m.position.z-=Math.sin(gt.yaw)*ce,m.rotation.set(gt.pitch+te,gt.yaw+ie,0),be.debugCam){let Ie=be.debugCam;m.position.set(Ie.x,Ie.y,Ie.z),m.rotation.set(Ie.pitch,Ie.yaw,0)}}m.updateMatrixWorld(),g.update(q,F,m,ee,g.zombieness(ee)),se(),H&&d.render(g.scene,m),e||(e=Math.round(performance.now()-i)),H&&f.render(_,m)}function J(){if(Ye){Ye.remove(),Ye=null;return}Ye=document.createElement("div"),Ye.style.cssText="position:fixed;left:.6rem;top:.6rem;z-index:70;pointer-events:none;font:12px/1.3 ui-monospace,Consolas,monospace;color:#fff;background:rgba(0,0,0,.6);padding:3px 8px;border-radius:4px",Ye.textContent="fps ... | calls ... | tris ...",document.body.appendChild(Ye)}function le(){O||(O=!0,x.style.opacity="0")}window.addEventListener("keydown",T=>{if(T.ctrlKey||T.metaKey||T.altKey)return;let P=T.key,H=P.length===1?P.toLowerCase():P;if(!(P===" "&&T.target&&T.target.tagName==="VIDEO")){if(H==="f"){T.preventDefault(),location.href="flat.html#slide="+(me()+1);return}if(H==="i"){J();return}if(H==="p"){window.open("presenter.html","rellmo-presenter","width=1280,height=800");return}if(H==="g"||P==="Escape"&&j){T.preventDefault(),j?Ae():pe();return}if(j){T.code&&fe.add(T.code),T.shiftKey&&fe.add("Shift"),T.preventDefault();return}["ArrowDown","ArrowRight","PageDown"," "].indexOf(P)>-1?(T.preventDefault(),N()):["ArrowUp","ArrowLeft","PageUp"].indexOf(P)>-1?(T.preventDefault(),re()):P==="Home"?(T.preventDefault(),w(0)):P==="End"&&(T.preventDefault(),w(s-1))}}),window.addEventListener("keyup",T=>{fe.delete(T.code),T.shiftKey||fe.delete("Shift")}),window.addEventListener("blur",()=>fe.clear()),window.addEventListener("pointerdown",T=>{T.target.closest&&T.target.closest("video")||(xe=!0,ne=T.clientX,_e=T.clientY)}),window.addEventListener("pointermove",T=>{if(!xe)return;let P=T.clientX-ne,H=T.clientY-_e;if(ne=T.clientX,_e=T.clientY,j){j.yaw-=P*be.look.sensitivity,j.pitch=St(j.pitch-H*be.look.sensitivity,-1.45,1.45),m.rotation.set(j.pitch,j.yaw,0);return}ie=St(ie-P*be.look.sensitivity,-be.look.maxYaw,be.look.maxYaw),te=St(te-H*be.look.sensitivity,-be.look.maxPitch,be.look.maxPitch)}),window.addEventListener("pointerup",()=>{xe=!1}),window.addEventListener("resize",Ct),I&&(I.onmessage=T=>{let P=T.data||{};P.type==="nav"?P.d>0?N():P.d<0&&re():P.type==="goto"?w(P.i):P.type==="ping"&&Ge()}),Ct(),nn(c,gt),m.position.copy(gt.pos),m.rotation.set(gt.pitch,gt.yaw,0),Ve(),L(),requestAnimationFrame(()=>requestAnimationFrame(()=>{S[c].slide.classList.add("in"),Ge(c)})),window.__deck={pause:T=>{k=T,T?B=performance.now()/1e3:(B=null,Z=performance.now()/1e3)},step:(T=1/60,P=1,H=!1)=>{B==null&&(B=performance.now()/1e3);for(let G=0;G<P;G++)B+=T,$(B*1e3,T,H&&G===P-1)},begin:T=>{U=null,X=0,C=null,we(T),N()},arriveAt:T=>{U=null,X=0,C=null,we(T)},next:N,prev:re,teleport:w,scrub:(T,P)=>{U=null;let H=v.segs[T];C={i:T,j:T+1,t0:0,dur:H.dur,data:H,fast:!1,sent:!0,fastT0:0,tau0:0,scrub:P}},state:()=>({at:c,seg:C?{i:C.i,j:C.j,fast:C.fast}:null,pending:U,free:!!j,fo:X}),firstFrame:()=>e,time:()=>q,info:()=>({calls:d.info.render.calls,tris:d.info.render.triangles,geoms:d.info.memory.geometries,tex:d.info.memory.textures}),buildTiming:g.timing,route:v,world:g,camera:m,timeline:Me,slideEl:T=>S[T].slide,fps:()=>ve,setZ:T=>{be.zombieness.override=T},config:be}}Op().then(_m).catch(i=>{console.error(i),en.characters="generated",_m()});})();
