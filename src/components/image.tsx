import { type ComponentProps, type ReactNode, useEffect, useRef, useState } from 'react'
import { cn } from '../lib/cn'

export function Image({ className, onLoad, onError, src, fallback, ...props }: Omit<ComponentProps<'img'>, 'children'> & { fallback?: ReactNode }) {
  const ref = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState<string | undefined>(undefined)
  useEffect(() => {
    const el = ref.current
    setLoaded(Boolean(el?.complete && el.naturalWidth))
  }, [src])
  if (fallback && src && failed === src) {
    return (
      <span className={cn('grid place-items-center bg-muted', className)}>
        {fallback}
      </span>
    )
  }
  return (
    <img
      ref={ref}
      src={src}
      onLoad={(e) => {
        setLoaded(true)
        onLoad?.(e)
      }}
      onError={(e) => {
        setFailed(src)
        onError?.(e)
      }}
      className={cn(loaded ? 'animate-image-in' : 'opacity-0', className)}
      {...props}
    />
  )
}
