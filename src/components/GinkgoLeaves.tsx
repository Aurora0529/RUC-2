import { useEffect, useState } from 'react';

const GinkgoLeaves = () => {
  const [leaves, setLeaves] = useState<any[]>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 15 + Math.random() * 30,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 20,
      rotation: Math.random() * 360,
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-leaf-fall opacity-0"
          style={{
            left: `${leaf.left}vw`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${leaf.rotation}deg)` }}>
            <path d="M50 90C50 90 20 70 10 40C0 10 40 0 50 20C60 0 100 10 90 40C80 70 50 90 50 90Z" fill="#EAB308" opacity={0.6} />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default GinkgoLeaves;
