import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Comunicado from './Comunicado';
import comunicados from './comunicados';
import styles from "./Deck.module.css";

const Deck = () => {

  const [width, setWidth] = useState(0);
  const refDeck = useRef(null);

  useEffect(() => {  
    const handleWidth = (e) => {
      let deck = refDeck.current;
      setWidth(deck.scrollWidth - deck.offsetWidth);
    };
    
    handleWidth();
  }, []);

  return (
    <motion.div 
      className={styles.deck} 
      ref={refDeck}
      whileTap={{cursor: "grabbing"}}
    >
      <motion.div 
        drag="x" 
        dragConstraints={{ right: 0, left: -width}} 
        className={styles.innerDeck}
      >
        {
          comunicados.map((comunicado, index) => {
            return (
              <Comunicado 
                key={index}
                src={comunicado}
                alt={index}
              />
            );
          })
        }
      </motion.div>
    </motion.div>
  )
}

export default function LazyDeck() {
  const [show, setShow] = useState(false);
  const elementRef = useRef(null);

  /**
   * @param {Array} entries
   **/ 
  const onChange = (entries, observer) => {
    const element = entries[0];
    if (element.isIntersecting) {
      setShow(true);
      observer.disconnect();
    }
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '150px'
    })
    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });

  return <div ref={elementRef}>
    { show ? <Deck /> : null}
  </div>
};