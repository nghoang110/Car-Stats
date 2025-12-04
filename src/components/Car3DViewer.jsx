import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'

// Component để tự động điều chỉnh camera
function AutoCamera({ groupRef }) {
  const { camera } = useThree()
  
  useEffect(() => {
    if (!groupRef.current) return
    
    const box = new THREE.Box3().setFromObject(groupRef.current)
    const size = box.getSize(new THREE.Vector3())
    
    // Tính toán distance phù hợp (model đã được center về 0,0,0)
    const maxDim = Math.max(size.x, size.y, size.z)
    const distance = maxDim > 0 ? maxDim * 2.5 : 5
    
    // Điều chỉnh camera (model đã ở 0,0,0 nên camera nhìn vào đó)
    camera.position.set(0, distance * 0.3, distance)
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
  }, [groupRef, camera])
  
  return null
}

// Component để load và hiển thị model 3D
function Model({ url }) {
  const groupRef = useRef()
  console.log('Loading 3D model from URL:', url)
  
  try {
    // GLTFLoader tự động resolve file .bin dựa trên base path của file .gltf
    // Với Vite, URL đã được resolve đúng, nên loader sẽ tự tìm file scene.bin
    const gltf = useLoader(GLTFLoader, url)
    
    console.log('Model loaded via useLoader:', gltf)
    
    if (!gltf || !gltf.scene) {
      console.error('Invalid GLTF data:', gltf)
      return null
    }
    
    // Tính bounding box để scale và center phù hợp
    const box = new THREE.Box3().setFromObject(gltf.scene)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    const scale = maxDim > 0 ? 2 / maxDim : 1
    
    console.log('Model scale:', scale, 'size:', size, 'center:', center)
    
    // Di chuyển model để center của nó ở (0,0,0)
    // Sau khi scale, cần điều chỉnh position để center về 0,0,0
    const offsetX = -center.x * scale
    const offsetY = -center.y * scale
    const offsetZ = -center.z * scale
    
    return (
      <>
        <group 
          ref={groupRef} 
          scale={scale}
          position={[offsetX, offsetY, offsetZ]}
        >
          <primitive object={gltf.scene} />
        </group>
        <AutoCamera groupRef={groupRef} />
      </>
    )
  } catch (error) {
    console.error('Error loading model with useLoader:', error)
    throw error // Throw để ErrorBoundary bắt được
  }
}

// Loading fallback component (for outside Canvas)
function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="text-center text-gray-500">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600 mx-auto mb-4"></div>
        <p className="text-sm">Đang tải mô hình 3D...</p>
      </div>
    </div>
  )
}

// Loading component for inside Canvas (Suspense fallback)
function CanvasLoading() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" wireframe />
    </mesh>
  )
}

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="text-center text-red-500">
        <p className="text-4xl mb-2">⚠️</p>
        <p className="text-sm font-medium">Không thể tải mô hình 3D</p>
        {error && <p className="text-xs mt-2 text-gray-500">{error.message || 'Lỗi không xác định'}</p>}
        <button
          onClick={resetErrorBoundary}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
        >
          Thử lại
        </button>
      </div>
    </div>
  )
}

// Error Boundary Component
class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Model Error:', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} resetErrorBoundary={this.resetError} />
    }

    return this.props.children
  }
}

// Component chính để hiển thị 3D viewer
export default function Car3DViewer({ modelPath }) {
  React.useEffect(() => {
    console.log('Car3DViewer modelPath changed:', modelPath)
  }, [modelPath])

  if (!modelPath) {
    return (
      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-4xl mb-2">🚗</p>
          <p className="text-sm">Chọn dòng xe để xem mô hình 3D</p>
        </div>
      </div>
    )
  }

  return (
    <ModelErrorBoundary>
      <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden relative">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={<CanvasLoading />}>
            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <directionalLight position={[-5, -5, -5]} intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            
            {/* Model */}
            <Model url={modelPath} />
            
            {/* Controls - target vào (0,0,0) vì model đã được center về đó */}
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              minDistance={1}
              maxDistance={20}
              autoRotate={false}
              target={[0, 0, 0]}
            />
          </Suspense>
        </Canvas>
      </div>
    </ModelErrorBoundary>
  )
}

