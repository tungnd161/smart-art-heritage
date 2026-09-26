"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
    const loader = new THREE.TextureLoader();
    const addPhoto = (url: string, width: number, height: number, position: [number, number, number], rotationY = 0, name = "Ảnh tư liệu") => {
      loader.load(url, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        const frame = new THREE.Mesh(new THREE.BoxGeometry(width + .16, height + .16, .12), new THREE.MeshStandardMaterial({ color: 0xf5ecdc, roughness: .8 })); frame.name = `${name} · khung ảnh`; frame.position.set(...position); frame.rotation.y = rotationY; scene.add(frame);
        const photo = new THREE.Mesh(new THREE.PlaneGeometry(width, height), new THREE.MeshBasicMaterial({ map: texture })); photo.name = name; photo.position.set(position[0] + Math.sin(rotationY) * .071, position[1], position[2] + Math.cos(rotationY) * .071); photo.rotation.y = rotationY; scene.add(photo);
      }, undefined, () => setStatus("Không thể nạp ảnh tư liệu. Vui lòng thử lại."));
    };
    addPhoto("/heritages/pho-hien/02.jpg", 5.4, 3.62, [0, 2.35, 0], 0, "Cổng Tam Quan · mặt chính");
    addPhoto("/heritages/pho-hien/04.jpg", 3.25, 2.42, [-2.75, 2.05, -1.85], Math.PI / 2.75, "Cổng Tam Quan · góc chéo");
    addPhoto("/heritages/pho-hien/13.jpg", 3.35, 2.34, [2.85, 2.1, -1.85], -Math.PI / 2.75, "Cổng Tam Quan · mặt chính");
    addPhoto("/heritages/pho-hien/08.jpg", 4.3, 1.87, [0, 1.27, -2.9], Math.PI, "Không gian di sản Phố Hiến");
    setStatus("Kéo để xoay · Cuộn để phóng to · Ảnh thật được bố trí theo không gian 3D");
    let frame = 0; const render = () => { frame = requestAnimationFrame(render); controls.update(); renderer.render(scene, camera); }; render();
    const resize = () => { if (!host) return; camera.aspect = host.clientWidth / host.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(host.clientWidth, host.clientHeight); }; const observer = new ResizeObserver(resize); observer.observe(host);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); controls.dispose(); renderer.dispose(); host.removeChild(renderer.domElement); };
  }, []);
  return <main className="three-page"><header className="shell nav"><Link className="brand" href="/">SMART ART HERITAGE · V1.0</Link><Link className="button ghost" href="/di-san/pho-hien">Hồ sơ Phố Hiến</Link></header><section className="three-hero"><div className="shell"><div className="kicker">Mẫu duyệt 3D / AR · Phố Hiến</div><h1>Kiến trúc Phố Hiến<br/><em>trong không gian 3D.</em></h1><p className="lead">Mẫu không gian 3D được dựng từ ảnh tư liệu thật của Phố Hiến — tập trung vào cụm cổng Tam Quan để duyệt hướng trải nghiệm trực quan.</p></div></section><section className="three-content"><div className="shell three-layout"><div className="three-viewer"><div ref={holder} className="three-canvas" /><p className="three-status">◉ {status}</p></div><aside className="three-note"><div className="kicker">Ghi chú duyệt mẫu</div><h2>Phố Hiến — không gian ảnh 3D</h2><p>Mẫu này dùng <b>ảnh tư liệu thật trong kho Phố Hiến</b> để tạo trải nghiệm xoay quanh cụm cổng Tam Quan. Đây là bản dựng <b>2.5D</b>: có chiều sâu và góc nhìn không gian, nhưng chưa phải mô hình photogrammetry đo đạc chính xác.</p><ul><li>04 ảnh thật được đặt trên các mặt phẳng không gian</li><li>Trọng tâm: cổng Tam Quan và bối cảnh Phố Hiến</li><li>Bước tiếp theo: chụp 60–120 ảnh chồng phủ để dựng mesh 3D thật và AR</li></ul><Link className="button" href="/di-san/pho-hien">Về hồ sơ di sản <span>→</span></Link></aside></div></section></main>;
}
