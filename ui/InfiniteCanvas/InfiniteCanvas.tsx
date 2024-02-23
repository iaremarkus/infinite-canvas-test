import InfiniteCanvas from "ef-infinite-canvas";

export interface InfiniteCanvasProps {
  className?: string;
}

export async function InfiniteCanvas({
  className = "",
  ...props
}: InfiniteCanvasProps) {
  return <div className={className} {...props}></div>;
}
