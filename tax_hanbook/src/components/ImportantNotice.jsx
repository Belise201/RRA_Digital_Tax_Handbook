import './ImportantNotice.css';

const ImportantNotice = () => {
    return (
        <div className="important-notice" role="note" aria-label="Important Notice">
            <strong>Important Notice:</strong> For guidance only. See full <a className="important-link" href="/disclaimer">Disclaimer</a>.
        </div>
    );
};

export default ImportantNotice;

