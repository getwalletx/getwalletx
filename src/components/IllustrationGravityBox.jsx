import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Body } from 'matter-js';
import Image from 'next/image';

import illustration1 from "../assets/illustrations/dapp-connection.png";
import illustration2 from "../assets/illustrations/gasless.png";
import illustration3 from "../assets/illustrations/multichain.png";
import illustration4 from "../assets/illustrations/smart-wallets.png";
import illustration5 from "../assets/illustrations/state-of-art.png";

const IllustrationGravityBox = () => {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isAnimating, setIsAnimating] = useState(true);
    const illustrations = [illustration1, illustration2, illustration3, illustration4, illustration5];

    const createShape = useCallback((x, y, illustration) => {
        const size = window.innerWidth > 768 ? 50 : 35;
        let shape = Bodies.rectangle(x, y, size, size, {
            chamfer: { radius: 2 },
            render: {
                sprite: {
                    texture: illustration.src,
                    xScale: window.innerWidth > 768 ? 0.075 : 0.045,
                    yScale: window.innerWidth > 768 ? 0.075 : 0.045,
                }
            }
        });

        shape.label = illustration === illustration2 ? 'square' :
            illustration === illustration4 ? 'triangle' : 'circle';

        Body.setMass(shape, 1);
        Body.set(shape, {
            restitution: 0.3,
            friction: 0.05,
            frictionAir: 0.001,
            slop: 0.02,
            timeScale: 1.2
        });

        return shape;
    }, []);

    useEffect(() => {
        const engine = Engine.create({
            gravity: { x: 0, y: 0 }, // Start with no gravity
            positionIterations: 12,
            velocityIterations: 10
        });

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background: 'transparent'
            }
        });

        const groundWidth = window.innerWidth;
        const ground = Bodies.rectangle(groundWidth / 2, window.innerHeight + 22, groundWidth, 60, {
            isStatic: true,
            render: { fillStyle: 'transparent' }
        });

        World.add(engine.world, [ground]);

        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        World.add(engine.world, mouseConstraint);

        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);

        engineRef.current = engine;

        const createAndAddIllustration = (wave = 0) => {
            const illustration = illustrations[Math.floor(Math.random() * illustrations.length)];
            const x = window.innerWidth + Math.random() * 400;
            const y = window.innerHeight - 50 + Math.random() * 40 - wave * 30;
            const shape = createShape(x, y, illustration);
            World.add(engine.world, shape);
            return shape;
        };

        const applyWaveForce = (shape, wave) => {
            const baseForce = -0.005 - Math.random() * 0.002;
            const waveForce = Math.sin(wave * Math.PI / 3) * (window.innerWidth > 768 ? 0.009 : 0.001);
            Body.applyForce(shape, shape.position, {
                x: baseForce - waveForce,
                y: -0.001 - Math.random() * 0.001 - (window.innerWidth > 768 ? 0.003 : 0.002)
            });
        };

        let initialIllustrations = [];
        setTimeout(() => {
            initialIllustrations = Array(window.innerWidth > 768 ? 100 : 30).fill().map(() => createAndAddIllustration());
        }, 2000); // 1 second delay

        const animateWave = (wave = 0) => {
            engine.world.gravity.y = 0.1 + wave * 0.1;

            initialIllustrations.forEach(shape => applyWaveForce(shape, wave));

            for (let i = 0; i < 15; i++) {
                const newShape = createAndAddIllustration(wave);
                applyWaveForce(newShape, wave);
                initialIllustrations.push(newShape);
            }

            if (wave < 2) {
                setTimeout(() => animateWave(wave + 1), 3000);
            } else {
                setTimeout(() => {
                    setIsAnimating(false);
                    engine.world.gravity.y = 0.5;
                }, 1500);
            }
        };

        // Delay the start of the animation
        setTimeout(() => {
            animateWave();
        }, 2000); // 1 second delay

        return () => {
            Render.stop(render);
            World.clear(engine.world);
            Engine.clear(engine);
            render.canvas.remove();
            render.canvas = null;
            render.context = null;
            render.textures = {};
            Runner.stop(runner);
        };
    }, [createShape]);

    const handleClick = useCallback((event) => {
        const clickArea = event.currentTarget.getBoundingClientRect();
        if (event.clientY < clickArea.bottom && event.clientY > clickArea.top) {
            const randomIllustration = illustrations[Math.floor(Math.random() * illustrations.length)];
            const shape = createShape(event.clientX, event.clientY, randomIllustration);
            World.add(engineRef.current.world, shape);
        }
    }, [createShape]);

    return (
        <>
            <div
                className="w-full h-[20%] md:h-[30%] relative cursor-pointer select-none"
                onClick={handleClick}
            >
            </div>
            <div ref={sceneRef} className="w-full h-full absolute top-0 left-0 pointer-events-none" />
            <div className="hidden">
                {illustrations.map((illustration, index) => (
                    <Image
                        key={index}
                        src={illustration}
                        alt={`Preloaded illustration ${index + 1}`}
                        width={100}
                        height={100}
                        priority
                    />
                ))}
            </div>
        </>
    );
};

export default IllustrationGravityBox;