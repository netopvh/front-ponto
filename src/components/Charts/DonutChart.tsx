import React, { CSSProperties, useEffect, useState } from 'react'

interface DonutChartProps {
  percentage: number
}

const DonutChart: React.FC<DonutChartProps> = ({ percentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0)

  useEffect(() => {
    // Reiniciar a animação
    setCurrentPercentage(0)

    const increment = percentage / 100 // Incremento pequeno para animação suave
    let current = 0

    const interval = setInterval(() => {
      current += increment
      if (current >= percentage) {
        setCurrentPercentage(percentage)
        clearInterval(interval)
      } else {
        setCurrentPercentage(current)
      }
    }, 10) // Ajuste o intervalo para controlar a velocidade da animação

    return () => clearInterval(interval)
  }, [percentage])

  const chartStyle: CSSProperties = {
    background: `conic-gradient(#16a34a 0% ${currentPercentage}%, #d1d5db ${currentPercentage}% 100%)`,
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    position: 'relative',
    transition: 'background 0.1s ease-in-out' // Adiciona a transição
  }

  const innerCircleStyle: CSSProperties = {
    background: 'white',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  const textStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1rem',
    fontWeight: 'bold'
  }

  return (
    <div style={chartStyle}>
      <div style={innerCircleStyle}></div>
      <span style={textStyle}>{Math.round(currentPercentage)}%</span>
    </div>
  )
}

export default DonutChart
