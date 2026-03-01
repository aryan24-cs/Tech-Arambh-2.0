"use client";

import { useEffect, useRef, useCallback } from "react";

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const initParticles = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let particles: Particle[] = [];

        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            speedX: number;
            opacity: number;
            color: string;
            life: number;
            maxLife: number;

            constructor(canvasW: number, canvasH: number) {
                this.x = Math.random() * canvasW;
                this.y = canvasH + Math.random() * 100;
                this.size = Math.random() * 3 + 1;
                this.speedY = -(Math.random() * 1.5 + 0.5);
                this.speedX = (Math.random() - 0.5) * 0.8;
                this.opacity = Math.random() * 0.6 + 0.2;
                this.life = 0;
                this.maxLife = Math.random() * 200 + 100;

                const colors = [
                    "255, 215, 0",    // gold
                    "201, 168, 76",   // muted gold
                    "255, 107, 0",    // ember
                    "255, 160, 50",   // orange
                    "200, 100, 20",   // dark ember
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX + Math.sin(this.life * 0.02) * 0.3;
                this.life++;
                const fadeStart = this.maxLife * 0.6;
                if (this.life > fadeStart) {
                    this.opacity *= 0.98;
                }
                this.size *= 0.999;
            }

            draw(c: CanvasRenderingContext2D) {
                c.beginPath();
                const gradient = c.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 2
                );
                gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`);
                gradient.addColorStop(1, `rgba(${this.color}, 0)`);
                c.fillStyle = gradient;
                c.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
                c.fill();
            }
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add new particles
            if (particles.length < 80 && Math.random() < 0.3) {
                particles.push(new Particle(canvas.width, canvas.height));
            }

            particles = particles.filter(
                (p) => p.life < p.maxLife && p.opacity > 0.01 && p.y > -50
            );

            for (const p of particles) {
                p.update();
                p.draw(ctx);
            }

            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    useEffect(() => {
        const cleanup = initParticles();
        return cleanup;
    }, [initParticles]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
        />
    );
}
