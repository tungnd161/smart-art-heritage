"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function ThreeArPreview() {
  const holder = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("Đang nạp mô hình 3D…");
  useEffect(() => {
    const host = holder.current; if (!host) return;
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0xe9efe5);
    const camera = new THREE.PerspectiveCamera(36, host.clientWidth / host.clientHeight, 0.1, 100); camera.position.set(7, 5.2, 8);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); renderer.setSize(host.clientWidth, host.clientHeight); renderer.shadowMap.enabled = true; host.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement); controls.target.set(0, 2.1, 0); controls.enableDamping = true; controls.minDistance = 5; controls.maxDistance = 14;
    scene.add(new THREE.HemisphereLight(0xfff8de, 0x345644, 2.6)); const key = new THREE.DirectionalLight(0xffedc0, 2.2); key.position.set(4, 8, 6); key.castShadow = true; scene.add(key);
    const ground = new THREE.Mesh(new THREE.CircleGeometry(5.7, 64), new THREE.MeshStandardMaterial({ color: 0xd9e3d3, roughness: 1 })); ground.rotation.x = -Math.PI / 2; ground.position.y = -0.01; scene.add(ground);
    const loader = new GLTFLoader(); loader.load("/models/pho-hien-pavilion-concept.glb", (gltf) => { scene.add(gltf.scene); setStatus("Kéo để xoay · Cuộn để phóng to"); }, undefined, () => setStatus("Không thể nạp mô hình. Vui lòng thử lại."));
    let frame = 0; const render = () => { frame = requestAnimationFrame(render); controls.update(); renderer.render(scene, camera); }; render();
    const resize = () => { if (!host) return; camera.aspect = host.clientWidth / host.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(host.clientWidth, host.clientHeight); }; const observer = new ResizeObserver(resize); observer.observe(host);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); controls.dispose(); renderer.dispose(); host.removeChild(renderer.domElement); };
  }, []);
  return <main className="three-page"><header className="shell nav"><Link className="brand" href="/">SMART ART HERITAGE · V1.0</Link><Link className="button ghost" href="/di-san/pho-hien">Hồ sơ Phố Hiến</Link></header><section className="three-hero"><div className="shell"><div className="kicker">Mẫu duyệt 3D / AR · Phố Hiến</div><h1>Kiến trúc Phố Hiến<br/><em>trong không gian 3D.</em></h1><p className="lead">Mô hình tạo hình minh hoạ mái nhiều tầng và kết cấu gỗ, phục vụ duyệt hướng trải nghiệm trước khi số hoá hiện vật/công trình thực tế.</p></div></section><section className="three-content"><div className="shell three-layout"><div className="three-viewer"><div ref={holder} className="three-canvas" /><p className="three-status">◉ {status}</p></div><aside className="three-note"><div className="kicker">Ghi chú duyệt mẫu</div><h2>Phố Hiến — đình/miếu minh hoạ</h2><p>Đây là <b>mô hình khái niệm</b>, không phải bản đo vẽ khảo cổ hay phục dựng chính xác. Mục tiêu là duyệt phong cách, thao tác xoay/phóng to và cách đặt nội dung học tập.</p><ul><li>01 file GLB tối ưu web: 76 KB</li><li>Kết cấu: bệ đá, cột gỗ, mái hai tầng</li><li>Bước tiếp theo: thêm hotspot và QR AR</li></ul><Link className="button" href="/di-san/pho-hien">Về hồ sơ di sản <span>→</span></Link></aside></div></section></main>;
}
