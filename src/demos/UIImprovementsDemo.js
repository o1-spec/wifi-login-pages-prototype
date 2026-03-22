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

        <div
          className="device-toggle"
          style={{
            marginBottom: "20px",
            background: "#f8f9fa",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <strong>Simulate Viewport: </strong>
          <button
            onClick={() => setIsMobile(false)}
            style={{ fontWeight: !isMobile ? "bold" : "normal" }}
          >
            Desktop View
          </button>
          <button
            onClick={() => setIsMobile(true)}
            style={{ fontWeight: isMobile ? "bold" : "normal" }}
          >
            Mobile View
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <LegacyHeader isMobile={isMobile} />
          <UnifiedHeader isMobile={isMobile} />
        </div>
      </section>

      <section style={{ borderTop: "2px solid #ecf0f1", paddingTop: "30px" }}>
        <h3>2. Relocating Redirect Logic (#272)</h3>
        <p>
          Currently, `OrganizationWrapper` re-renders every time `setLoading()`
          is called, risking redundant HTTP requests. The solution moves
          redirects out of the wrapper and into specialized hooks/utilities.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            fontSize: "0.9em",
          }}
        >
          <div
            style={{
              background: "#c0392b",
              color: "white",
              padding: "15px",
              borderRadius: "4px",
            }}
          >
            <strong>🔴 Current: OrganizationWrapper.js</strong>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {`// Causes infinite loops/extra requests on re-render
if (this.props.needsPayment) {
  window.location.href = '/gateway';
}

render() {
  return children;
}`}
            </pre>
          </div>

          <div
            style={{
              background: "#27ae60",
              color: "white",
              padding: "15px",
              borderRadius: "4px",
            }}
          >
            <strong>🟢 Proposed: Individual Components</strong>
            <pre style={{ whiteSpace: "pre-wrap" }}>
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
