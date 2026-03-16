/*
=====================================================
NETWORK BACKGROUND
Simula una red tecnológica conectando nodos
=====================================================
*/

import { useEffect, useRef } from "react";

export default function NetworkBackground() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let nodes = [];

    for (let i = 0; i < 40; i++) {

      nodes.push({

        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,

        vx: (Math.random()-0.5)*0.4,
        vy: (Math.random()-0.5)*0.4

      });

    }

    function animate(){

      ctx.clearRect(0,0,canvas.width,canvas.height);

      nodes.forEach(node=>{

        node.x+=node.vx;
        node.y+=node.vy;

        ctx.beginPath();
        ctx.arc(node.x,node.y,2,0,Math.PI*2);
        ctx.fillStyle="rgba(30,144,255,0.7)";
        ctx.fill();

      });

      for(let i=0;i<nodes.length;i++){

        for(let j=i+1;j<nodes.length;j++){

          let dx=nodes[i].x-nodes[j].x;
          let dy=nodes[i].y-nodes[j].y;

          let dist=Math.sqrt(dx*dx+dy*dy);

          if(dist<120){

            ctx.beginPath();
            ctx.moveTo(nodes[i].x,nodes[i].y);
            ctx.lineTo(nodes[j].x,nodes[j].y);

            ctx.strokeStyle="rgba(30,144,255,0.15)";
            ctx.stroke();

          }

        }

      }

      requestAnimationFrame(animate);

    }

    animate();

  },[]);

  return (

    <canvas
      ref={canvasRef}
      className="network-canvas"
    />

  );

}