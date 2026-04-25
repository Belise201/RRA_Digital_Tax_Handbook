import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, FileText, ArrowRight } from 'lucide-react';
import { searchPages } from '../data/searchData';

const SearchResults = ({ searchQuery }) => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const queryFromUrl = urlParams.get('q') || '';
  const actualQuery = searchQuery || queryFromUrl;
  const searchResults = searchPages(actualQuery);

  return (
    <>
      <style>{`
        .search-results-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .search-header-panel {
          background: linear-gradient(135deg, var(--primary) 0%, #0a4d7a 100%);
          border-radius: 1rem;
          padding: 2.5rem 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 20px rgba(9, 62, 97, 0.2);
          color: white;
        }
        
        .search-header-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }
        
        .search-header-icon {
          color: rgba(255, 255, 255, 0.95);
        }
        
        .search-header-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
          color: white;
        }
        
        .search-results-count {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }
        
        .search-results-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .search-result-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        
        .search-result-card:hover {
          box-shadow: 0 8px 24px rgba(9, 62, 97, 0.12);
          transform: translateY(-2px);
          border-color: var(--primary);
        }
        
        .search-result-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
        }
        
        .search-result-badge {
          background: var(--primary);
          color: white;
          padding: 0.375rem 0.875rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .search-result-match {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        
        .search-result-body {
          padding: 1.5rem;
        }
        
        .search-result-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        
        .search-result-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        
        .search-result-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .search-result-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        
        .search-result-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 0.9375rem;
        }
        
        .search-result-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .search-tag {
          background: var(--primary-50);
          color: var(--primary);
          padding: 0.375rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.8125rem;
          font-weight: 500;
          border: 1px solid rgba(9, 62, 97, 0.1);
        }
        
        .no-results-container {
          text-align: center;
          padding: 4rem 2rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        
        .no-results-icon {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        
        .no-results-title {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .no-results-text {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }
        
        .search-tips-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
          max-width: 400px;
          margin: 0 auto;
        }
        
        .search-tips-list li {
          color: var(--text-secondary);
          padding-left: 1.5rem;
          position: relative;
        }
        
        .search-tips-list li::before {
          content: "•";
          color: var(--primary);
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        
        @media (max-width: 768px) {
          .search-header-panel {
            padding: 2rem 1.5rem;
          }
          
          .search-header-title {
            font-size: 1.75rem;
          }
          
          .search-result-top {
            padding: 0.875rem 1.25rem;
          }
          
          .search-result-body {
            padding: 1.25rem;
          }
        }
      `}</style>

      <div className="search-results-container">
        <div className="search-header-panel">
          <div className="search-header-content">
            <Search size={28} className="search-header-icon" />
            <h1 className="search-header-title">Search Results</h1>
          </div>
          <p className="search-results-count">
            {searchResults.length > 0
              ? `Found ${searchResults.length} result${searchResults.length === 1 ? '' : 's'} for: "${actualQuery}"`
              : `No results found for: "${actualQuery}"`
            }
          </p>
        </div>

        {searchResults.length > 0 ? (
          <div className="search-results-grid">
            {searchResults.map((result) => (
              <div key={result.id} className="search-result-card">
                <div className="search-result-top">
                  <span className="search-result-badge">{result.category}</span>
                  <span className="search-result-match">
                    {Math.round((result.score / 10) * 100)}% match
                  </span>
                </div>
                <Link to={result.path} className="search-result-link">
                  <div className="search-result-body">
                    <h3 className="search-result-title">
                      <FileText size={20} className="search-result-icon" />
                      {result.title}
                    </h3>
                    <p className="search-result-description">
                      {result.content}
                    </p>
                    <div className="search-result-tags">
                      {result.keywords.slice(0, 5).map((keyword, idx) => (
                        <span key={idx} className="search-tag">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results-container">
            <Search size={64} className="no-results-icon" />
            <h2 className="no-results-title">No Results Found</h2>
            <p className="no-results-text">
              We couldn't find any pages matching your search. Try:
            </p>
            <ul className="search-tips-list">
              <li>Using different keywords</li>
              <li>Checking your spelling</li>
              <li>Using more general terms</li>
              <li>Browsing the menu categories</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;
