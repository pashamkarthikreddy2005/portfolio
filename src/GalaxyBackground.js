import React, { useRef, useEffect } from "react";

const GalaxyBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 2 + 50;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const stars = [];
        const numStars = 1000;
        const staticStars = [];
        const numStaticStars = 1500;
        const rotationAngle = 335 * (Math.PI / 180);

        class Star {
            constructor(x, y, radius, speed, angle, opacity) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.speed = speed;
                this.angle = angle;
                this.opacity = opacity;
                this.fade = 0;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
                ctx.closePath();
            }

            update(centerX, centerY) {
                this.opacity += this.fade;
                if (this.opacity > 1 || this.opacity < 0) this.fade *= -1;
                this.angle += this.speed;
                this.x = centerX + Math.cos(this.angle) * 90 * (1 + this.radius);
                this.y = centerY + Math.sin(this.angle) * 25 * (1 + this.radius);
                this.draw();
            }
        }

        for (let i = 0; i < numStaticStars; i++) {
            const radius = Math.random() * 1.5;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const opacity = Math.random() * 0.5;
            staticStars.push(new Star(x, y, radius, 0, 0, opacity));
        }

        for (let i = 0; i < numStars; i++) {
            const radius = Math.random() * 2;
            const speed = Math.random() * 0.002;
            const angle = Math.random() * Math.PI * 100;
            stars.push(new Star(0, 0, radius, speed, angle, Math.random()));
        }

        const animate = () => {
            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                50,
                canvas.width / 2,
                canvas.height / 2,
                canvas.width / 2
            );
            gradient.addColorStop(0, "rgb(8, 8, 8)");
            gradient.addColorStop(1, "rgb(13, 12, 12)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            staticStars.forEach((star) => {
                star.draw();
            });

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            ctx.beginPath();
            ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();

            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(rotationAngle);
            ctx.translate(-centerX, -centerY);

            stars.forEach((star) => {
                star.update(centerX, centerY);
            });

            ctx.restore();
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />;
};

export default GalaxyBackground; 