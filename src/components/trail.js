import React, { useState, useEffect } from 'react'
import { useTrail, a } from 'react-spring'
import './trail.css';

const Trail = ({ children, ...props }) => {
    const [open, setOpen] = useState(false);
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 15, tension: 1200, friction: 140 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 60 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })

    useEffect(() => {
        let timer = setTimeout(() => setOpen(!open), 1000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <div className="trails-main" {...props}>
          <div>
            {trail.map(({ x, height, ...rest }, index) => (
              <a.div
                key={items[index]}
                className="trails-text"
                style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                <a.div style={{ height }}>{items[index]}</a.div>
              </a.div>
            ))}
          </div>
        </div>
      )
}

export default Trail;