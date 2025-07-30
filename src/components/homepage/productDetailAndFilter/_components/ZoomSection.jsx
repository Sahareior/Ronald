import { useEffect, useRef } from "react";
import Drift from "drift-zoom";

const ZoomSection = ({ img, zoomPaneRef }) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!triggerRef.current || !zoomPaneRef?.current) return;

    const driftInstance = new Drift(triggerRef.current, {
      paneContainer: zoomPaneRef.current,
      inlinePane: false,
      hoverBoundingBox: true,
      zoomFactor: 2,
    });

    return () => {
      driftInstance.disable();
    };
  }, [zoomPaneRef]);

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <img
        ref={triggerRef}
        src={img}
        data-zoom={img}
        alt="Zoomed Product"
        className="w-full h-[550px] object-cover rounded-md shadow-md"
      />
    </div>
  );
};

export default ZoomSection;
