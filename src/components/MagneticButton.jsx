import { useRef, useState } from 'react'

export default function MagneticButton({ children, onClick, href, className, style, type = "button" }) {
    const ref = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouse = (e) => {
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current.getBoundingClientRect()
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 })
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }

    const sharedStyle = {
        ...style,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0
            ? 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)'
            : 'transform 120ms ease-out',
        willChange: 'transform',
    }

    if (href) {
        return (
            <a
                ref={ref}
                href={href}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                className={className}
                style={sharedStyle}
            >
                {children}
            </a>
        )
    }

    return (
        <button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            className={className}
            style={sharedStyle}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
