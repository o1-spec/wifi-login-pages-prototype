import React, { useState } from "react";
import LegacyHeader from "../components/HeaderComparison/LegacyHeader";
import UnifiedHeader from "../components/HeaderComparison/UnifiedHeader";

function UIImprovementsDemo() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="demo-container">
      <h2>UI & Architecture Improvements</h2>

      <section style={{ marginBottom: "40px" }}>
        <h3>1. Eliminating HTML Redundancy (#314)</h3>
        <p>
          Toggle the view to see how the single-structure component adapts
          seamlessly compared to maintaining duplicate HTML.
        </p>

        <div className="controls-panel">
          <div className="control-group">
            <label>Simulate Viewport: </label>
            <div className="device-toggle">
              <button
                className={!isMobile ? "active" : ""}
                onClick={() => setIsMobile(false)}
              >
                Desktop View
              </button>
              <button
                className={isMobile ? "active" : ""}
                onClick={() => setIsMobile(true)}
              >
                Mobile View
              </button>
            </div>
          </div>
        </div>

        <div className="demo-grid">
          <LegacyHeader isMobile={isMobile} />
          <UnifiedHeader isMobile={isMobile} />
        </div>
      </section>

      <section className="architecture-info" style={{ paddingTop: "20px" }}>
        <h3>2. Relocating Redirect Logic (#272)</h3>
        <p>
          Currently, `OrganizationWrapper` re-renders every time `setLoading()`
          is called, risking redundant HTTP requests. The solution moves
          redirects out of the wrapper and into specialized hooks/utilities.
        </p>

        <div className="demo-grid">
          <div className="badge-danger">
            <span className="status-indicator legacy">🔴 Current: OrganizationWrapper.js</span>
            <pre>
              {`// Causes infinite loops/extra requests on re-render
if (this.props.needsPayment) {
  window.location.href = '/gateway';
}

render() {
  return children;
}`}
            </pre>
          </div>

          <div className="badge-success">
            <span className="status-indicator modern">🟢 Proposed: Individual Components</span>
            <pre>
              {`// Component calls utility ONLY when required
const handlePaymentRequired = () => {
  RedirectManager.toPaymentGateway();
};

// OrganizationWrapper stays lean & purely renders
render() {
   return children;
}`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UIImprovementsDemo;
