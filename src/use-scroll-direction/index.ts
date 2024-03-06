import { useState } from "react"
export function useScrollDirection() {
  const [dir, setDir] = useState(true);
  const [currentY, setCurrentY] = useState(0);
  const handleScroll = (event: any) => {
    if(event) {
      if(currentY > event.currentTarget.scrollY){
        setDir(true);
      } else {
        setDir(false);
      }
      setCurrentY(event.currentTarget.scrollY);      
    }
    
  };
  window.addEventListener('scroll', handleScroll);

  return dir === true ? "up" : "down";
}