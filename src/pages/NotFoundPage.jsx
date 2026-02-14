import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="route-page">
            <section className="hero glass-card reveal is-visible" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className="hero-icon-wrap" style={{ marginBottom: '2rem' }}>
                    <span className="hero-icon" style={{ fontSize: '5rem', opacity: 0.5 }}>⚡</span>
                </div>
                <h1 className="glitch-title" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
                    404<span className="name-accent">_</span>
                </h1>
                <p className="subtitle" style={{ marginTop: '1rem' }}>
                    Section Connectivity Offline
                </p>
                <p className="hero-copy" style={{ marginTop: '2rem', maxWidth: '500px' }}>
                    The requested module is currently undergoing architectural maintenance.
                    Please check back later for the finalized project deployments.
                </p>
                <div className="hero-actions" style={{ marginTop: '3rem' }}>
                    <Link className="btn btn-primary" to="/">
                        Return to Core
                    </Link>
                </div>
            </section>
        </div>
    );
}
