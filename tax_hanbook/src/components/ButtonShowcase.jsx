import React from 'react';
import { Download, AlertTriangle, Check, X, ExternalLink, Plus } from 'lucide-react';

const ButtonShowcase = () => {
    return (
        <div className="button-showcase">
            <h2>Button System Documentation</h2>

            {/* Call to Action Buttons */}
            <section className="button-section">
                <h3>Call to Action Buttons</h3>
                <p>Use for the most important task on a page. Only one CTA button per page.</p>
                <div className="button-examples">
                    <button className="btn btn-cta">
                        <Download size={20} />
                        Download Tax Guide
                    </button>
                    <button className="btn btn-cta btn-lg">
                        Start Registration Process
                    </button>
                </div>
            </section>

            {/* Primary and Secondary Buttons */}
            <section className="button-section">
                <h3>Primary and Secondary Buttons</h3>
                <p>Use when there are multiple buttons on a page to show hierarchy.</p>
                <div className="button-examples">
                    <button className="btn btn-primary">
                        <Check size={16} />
                        Submit Application
                    </button>
                    <button className="btn btn-secondary">
                        Save as Draft
                    </button>
                    <button className="btn btn-outline">
                        Cancel
                    </button>
                </div>
            </section>

            {/* Warning Buttons */}
            <section className="button-section">
                <h3>Warning Buttons</h3>
                <p>Use for cautionary or destructive actions that require user attention.</p>
                <div className="button-examples">
                    <button className="btn btn-warning">
                        <AlertTriangle size={16} />
                        Delete Application
                    </button>
                    <button className="btn btn-warning btn-sm">
                        Reset Form
                    </button>
                </div>
            </section>

            {/* Status Buttons */}
            <section className="button-section">
                <h3>Status Buttons</h3>
                <p>Use for actions that indicate specific states or outcomes.</p>
                <div className="button-examples">
                    <button className="btn btn-success">
                        <Check size={16} />
                        Approved
                    </button>
                    <button className="btn btn-error">
                        <X size={16} />
                        Rejected
                    </button>
                    <button className="btn btn-outline">
                        <ExternalLink size={16} />
                        View Details
                    </button>
                </div>
            </section>

            {/* Button Sizes */}
            <section className="button-section">
                <h3>Button Sizes</h3>
                <p>Different sizes for different contexts and importance levels.</p>
                <div className="button-examples">
                    <button className="btn btn-primary btn-sm">Small</button>
                    <button className="btn btn-primary">Default</button>
                    <button className="btn btn-primary btn-lg">Large</button>
                    <button className="btn btn-primary btn-xl">Extra Large</button>
                </div>
            </section>

            {/* Special Button Types */}
            <section className="button-section">
                <h3>Special Button Types</h3>
                <p>Specialized buttons for specific use cases.</p>
                <div className="button-examples">
                    <button className="btn btn-primary btn-icon">
                        <Plus size={16} />
                        Add New Item
                    </button>
                    <button className="btn btn-secondary btn-icon-only" title="Add">
                        <Plus size={16} />
                    </button>
                    <button className="btn btn-primary btn-full">
                        Full Width Button
                    </button>
                </div>
            </section>

            {/* Disabled States */}
            <section className="button-section">
                <h3>Disabled States</h3>
                <p>Buttons that are temporarily unavailable.</p>
                <div className="button-examples">
                    <button className="btn btn-primary" disabled>
                        Processing...
                    </button>
                    <button className="btn btn-secondary" disabled>
                        Not Available
                    </button>
                    <button className="btn btn-warning" disabled>
                        Cannot Delete
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ButtonShowcase;
