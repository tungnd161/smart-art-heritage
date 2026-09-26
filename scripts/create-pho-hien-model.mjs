import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

class NodeFileReader {
  readAsArrayBuffer(blob) { blob.arrayBuffer().then((result) => { this.result = result; this.onloadend?.(); }); }
  readAsDataURL(blob) { blob.arrayBuffer().then((buffer) => { this.result = `data:${blob.type || "application/octet-stream"};base64,${Buffer.from(buffer).toString("base64")}`; this.onloadend?.(); }); }
}
globalThis.FileReader = NodeFileReader;
import { writeFile, mkdir } from "node:fs/promises";

const scene = new THREE.Scene();
scene.name = "Pho Hien Pavilion — conceptual study model";
const wood = new THREE.MeshStandardMaterial({ color: 0x71462d, roughness: 0.78, metalness: 0.02 });
const darkWood = new THREE.MeshStandardMaterial({ color: 0x3f291d, roughness: 0.82 });
const roof = new THREE.MeshStandardMaterial({ color: 0x9f3e2e, roughness: 0.92 });
const gold = new THREE.MeshStandardMaterial({ color: 0xc79842, roughness: 0.45, metalness: 0.18 });
const stone = new THREE.MeshStandardMaterial({ color: 0xaaa08e, roughness: 0.9 });
const addBox = (name, size, pos, material, bevel = 0.04) => {
  const geometry = new THREE.BoxGeometry(...size);
  if (bevel) geometry.translate(0, 0, 0);
  const mesh = new THREE.Mesh(geometry, material); mesh.name = name; mesh.position.set(...pos); scene.add(mesh); return mesh;
};
const addRoof = (name, width, depth, y, material) => {
  const shape = new THREE.Shape(); shape.moveTo(-width / 2, 0); shape.lineTo(0, 0.76); shape.lineTo(width / 2, 0); shape.lineTo(-width / 2, 0);
  const geometry = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false }); geometry.translate(0, y, -depth / 2);
  const mesh = new THREE.Mesh(geometry, material); mesh.name = name; scene.add(mesh);
  const ridge = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, depth + 0.15, 10), gold); ridge.name = `${name} ridge`; ridge.rotation.x = Math.PI / 2; ridge.position.set(0, y + 0.76, 0); scene.add(ridge);
};
// Plinth
addBox("Stone plinth", [5.8, 0.28, 4.5], [0, 0.14, 0], stone, 0);
addBox("Upper plinth", [5.15, 0.24, 3.85], [0, 0.4, 0], wood, 0);
// Lower wooden hall and columns
addBox("Lower hall", [4.65, 1.38, 3.3], [0, 1.12, 0], wood, 0);
for (const x of [-2.05, 2.05]) for (const z of [-1.42, 1.42]) {
  const col = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 2.35, 12), darkWood); col.name = "Wooden column"; col.position.set(x, 1.5, z); scene.add(col);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.22, 0.14, 12), gold); cap.position.set(x, 2.68, z); scene.add(cap);
}
// Door and ornamental front panel
addBox("Central entrance", [1.15, 1.04, 0.06], [0, 1.05, 1.68], darkWood, 0);
for (const x of [-1.2, 1.2]) addBox("Front window", [0.72, 0.7, 0.05], [x, 1.25, 1.68], gold, 0);
addRoof("Main curved roof", 5.35, 3.95, 2.54, roof);
// Upper pavilion
addBox("Upper pavilion", [2.7, 1.15, 2.1], [0, 3.15, 0], wood, 0);
for (const x of [-1.1, 1.1]) for (const z of [-0.78, 0.78]) {
  const col = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 1.55, 12), darkWood); col.name = "Upper wooden column"; col.position.set(x, 3.42, z); scene.add(col);
}
addRoof("Upper curved roof", 3.45, 2.65, 4.02, roof);
// Lantern / finial
const finial = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 10), gold); finial.name = "Roof finial"; finial.position.set(0, 4.95, 0); scene.add(finial);
scene.userData = { title: "Phố Hiến — Mô hình kiến trúc minh hoạ", note: "Mô hình khái niệm phục vụ duyệt hướng tạo hình; không phải bản đo vẽ khảo cổ." };
const exporter = new GLTFExporter();
const result = await new Promise((resolve, reject) => exporter.parse(scene, resolve, reject, { binary: true, onlyVisible: true }));
await mkdir("public/models", { recursive: true });
await writeFile("public/models/pho-hien-pavilion-concept.glb", Buffer.from(result));
console.log("Created public/models/pho-hien-pavilion-concept.glb");
