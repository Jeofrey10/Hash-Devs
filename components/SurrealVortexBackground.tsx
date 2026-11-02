"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SurrealVortexBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1200
    );
    camera.position.z = 450;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const greenPointLight = new THREE.PointLight(0x3ddc57, 4.5, 600);
    greenPointLight.position.set(0, 0, 200);
    scene.add(greenPointLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(100, 200, 300);
    scene.add(dirLight);

    // 3. Create Custom Procedural Textures for Agency/Dev Icons
    const createIconTexture = (
      type: "hash" | "code" | "growth" | "target" | "palette" | "phone" | "gear"
    ) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      if (!ctx) return new THREE.Texture();

      // Rounded dark brutalist card background
      ctx.fillStyle = "#0A0B0A";
      ctx.fillRect(0, 0, 256, 256);

      // Border with Signal Green or hairline
      ctx.strokeStyle = type === "hash" ? "#3DDC57" : "rgba(255,255,255,0.22)";
      ctx.lineWidth = 8;
      ctx.strokeRect(6, 6, 244, 244);

      ctx.save();
      ctx.translate(128, 128);

      if (type === "hash") {
        // Slanted Hash brand mark
        ctx.lineWidth = 18;
        ctx.lineCap = "round";

        // Slanted slashes
        ctx.strokeStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.moveTo(-25, -60);
        ctx.lineTo(-45, 60);
        ctx.stroke();

        ctx.strokeStyle = "#3DDC57"; // Signal Green slash!
        ctx.beginPath();
        ctx.moveTo(35, -60);
        ctx.lineTo(15, 60);
        ctx.stroke();

        // Crossbars
        ctx.strokeStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.moveTo(-65, -20);
        ctx.lineTo(65, -20);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-65, 25);
        ctx.lineTo(65, 25);
        ctx.stroke();
      } else if (type === "code") {
        // </ > Code badge
        ctx.strokeStyle = "#3DDC57";
        ctx.lineWidth = 14;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(-40, -40);
        ctx.lineTo(-75, 0);
        ctx.lineTo(-40, 40);
        ctx.moveTo(40, -40);
        ctx.lineTo(75, 0);
        ctx.lineTo(40, 40);
        ctx.moveTo(15, -55);
        ctx.lineTo(-15, 55);
        ctx.stroke();
      } else if (type === "growth") {
        // Growth SEO metric bar chart + arrow
        ctx.fillStyle = "#3DDC57";
        ctx.fillRect(-60, 10, 24, 50);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(-20, -15, 24, 75);
        ctx.fillStyle = "#3DDC57";
        ctx.fillRect(20, -45, 24, 105);

        ctx.strokeStyle = "#3DDC57";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(-60, 0);
        ctx.lineTo(35, -55);
        ctx.stroke();
      } else if (type === "target") {
        // Meta Ads target
        ctx.strokeStyle = "#3DDC57";
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.arc(0, 0, 60, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(0, 0, 32, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "#3DDC57";
        ctx.beginPath();
        ctx.arc(0, 0, 14, 0, Math.PI * 2);
        ctx.fill();
      } else if (type === "palette") {
        // Design creative icon
        ctx.fillStyle = "#3DDC57";
        ctx.beginPath();
        ctx.arc(0, 0, 60, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#0A0B0A";
        ctx.beginPath();
        ctx.arc(-22, -18, 12, 0, Math.PI * 2);
        ctx.arc(18, -25, 12, 0, Math.PI * 2);
        ctx.arc(26, 12, 12, 0, Math.PI * 2);
        ctx.fill();
      } else if (type === "phone") {
        // Mobile App
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 10;
        ctx.strokeRect(-40, -65, 80, 130);
        ctx.fillStyle = "#3DDC57";
        ctx.beginPath();
        ctx.arc(0, 45, 8, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Gear / Engineering
        ctx.strokeStyle = "#3DDC57";
        ctx.lineWidth = 10;
        ctx.strokeRect(-45, -45, 90, 90);
        ctx.strokeStyle = "#FFFFFF";
        ctx.strokeRect(-25, -25, 50, 50);
      }

      ctx.restore();

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const iconTypes = [
      "hash",
      "code",
      "growth",
      "target",
      "palette",
      "phone",
      "gear",
    ] as const;

    const materials = iconTypes.map((t) => {
      const tex = createIconTexture(t);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.2,
        metalness: 0.4,
        side: THREE.DoubleSide,
      });
    });

    // 4. Create floating 3D objects arranged in the surreal orbital vortex (Agentcard style)
    const cardGeometry = new THREE.BoxGeometry(42, 42, 4.5);
    const objects: {
      mesh: THREE.Mesh;
      radius: number;
      angle: number;
      speed: number;
      orbitY: number;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
    }[] = [];

    const TOTAL_ITEMS = 64;
    for (let i = 0; i < TOTAL_ITEMS; i++) {
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(cardGeometry, mat);

      // Distance and vortex distribution
      const radius = 180 + Math.random() * 320;
      const angle = (i / TOTAL_ITEMS) * Math.PI * 2 + Math.random() * 0.4;
      const orbitY = (Math.random() - 0.5) * 360;
      const speed = (0.002 + Math.random() * 0.0035) * (Math.random() > 0.5 ? 1 : -1);

      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.y = orbitY;
      mesh.position.z = Math.sin(angle) * radius - 80;

      // Random tilts
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;

      scene.add(mesh);

      objects.push({
        mesh,
        radius,
        angle,
        speed,
        orbitY,
        rotSpeedX: 0.005 + Math.random() * 0.012,
        rotSpeedY: 0.008 + Math.random() * 0.015,
        rotSpeedZ: 0.004 + Math.random() * 0.01,
      });
    }

    // 5. Mouse Interaction Tracking (Physics tilt)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const halfX = window.innerWidth / 2;
      const halfY = window.innerHeight / 2;
      targetX = (event.clientX - halfX) * 0.4;
      targetY = (event.clientY - halfY) * 0.4;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 6. Resize Handling
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 7. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Camera smoothly follows cursor with spring damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      camera.position.x = mouseX * 0.6;
      camera.position.y = -mouseY * 0.6;
      camera.lookAt(0, 0, 0);

      // Orbit objects in the surreal swirl
      for (const obj of objects) {
        obj.angle += obj.speed;
        obj.mesh.position.x = Math.cos(obj.angle) * obj.radius;
        obj.mesh.position.z = Math.sin(obj.angle) * obj.radius - 80;
        obj.mesh.position.y =
          obj.orbitY + Math.sin(obj.angle * 2.5) * 25;

        obj.mesh.rotation.x += obj.rotSpeedX;
        obj.mesh.rotation.y += obj.rotSpeedY;
        obj.mesh.rotation.z += obj.rotSpeedZ;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
    />
  );
}

