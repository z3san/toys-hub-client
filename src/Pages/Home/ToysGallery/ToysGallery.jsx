import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMotionValue, useTransform , motion} from "framer-motion";

const ToysGallery = () => {
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 200], [-30, 30]);
  AOS.init();

  const toyVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  };

  const hoverVariants = {
    hover: { scale: 1.5 },
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toyImages = [
    "https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    "https://images.unsplash.com/photo-1526572202046-8b87644dce4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1616709622415-cf0c96a6595c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
    "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1678390210450-22bd7664dc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1650132707292-b0b39a77859a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
  ];

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-2">Toys Gallery</h2>
      <p className="text-center">EXPLORE THE BEST TOYS FOR YOUR KID</p>
      <motion.div
        className="w-full mx-auto md:w-[90%] md:h-[60vh]"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 rounded-lg p-4  h-full">
          {toyImages.map((imageUrl, index) => (
            <motion.div
              key={index}
              variants={toyVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="overflow-hidden rounded-lg shadow-md"
            >
              <motion.img
                src={imageUrl}
                alt={`Toy ${index + 1}`}
                className="w-full h-auto"
                variants={hoverVariants}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ToysGallery;
