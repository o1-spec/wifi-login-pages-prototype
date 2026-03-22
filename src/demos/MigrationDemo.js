import React from "react";
import LegacyClassComponent from "../components/React19Examples/LegacyClassComponent";
import ModernFunctionalComponent from "../components/React19Examples/ModernFunctionalComponent";

function MigrationDemo() {
  return (
    <div className="demo-container">
      <h2>React 19 Migration & Testing Strategy</h2>
      <p>
        This demonstrates the transition from legacy class-based components
        (React 17) to modern functional components using Hooks (React 19). This
        shift makes code smaller, easier to test, and enables concurrent
        features.
      </p>

      <div className="demo-grid">
        <LegacyClassComponent />
        <ModernFunctionalComponent />
      </div>

      <div className="explanation">
        <h3>Testing Framework Migration (Enzyme ➔ RTL)</h3>
        <p>
          As part of the React 19 upgrade, testing will shift to React Testing
          Library (RTL). Here is the visual difference in code structure:
        </p>

        <div className="demo-grid">
          <div className="code-sample">
            <span className="status-indicator legacy">Legacy Enzyme (Deprecated)</span>
            <pre>
              {`const wrapper = shallow(<Component />);
wrapper.setState({ loading: true });
expect(wrapper.find('.spinner').length).toBe(1);
// Tests implementation details (state)`}
            </pre>
          </div>
          <div className="code-sample">
            <span className="status-indicator modern">React Testing Library (Modern)</span>
            <pre>
              {`render(<Component />);
expect(screen.getByText('Loading...')).toBeInTheDocument();
// Tests user behavior properly`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MigrationDemo;
