import React, { Component } from 'react';

class LegacyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null
    };
    // Legacy generic binding simulation
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true, error: null });
    
    // Simulating API call
    setTimeout(() => {
      this.setState({
        data: { name: 'Demo User', role: 'Guest' },
        loading: false
      });
    }, 1500);
  }

  handleRefresh() {
    this.fetchData();
  }

  render() {
    return (
      <div style={{ border: '1px solid #e74c3c', padding: '15px', borderRadius: '4px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>React 17 (Legacy Class)</h3>
        
        {this.state.error && <p>Error: {this.state.error}</p>}
        
        {this.state.loading ? (
          <p>⏳ Loading data...</p>
        ) : (
          <div>
            <p><strong>Name:</strong> {this.state.data?.name}</p>
            <p><strong>Role:</strong> {this.state.data?.role}</p>
          </div>
        )}
        
        <button 
          onClick={this.handleRefresh}
          disabled={this.state.loading}
          style={{ marginTop: '10px', padding: '5px 10px' }}
        >
          Refresh Data
        </button>
      </div>
    );
  }
}

export default LegacyClassComponent;