import { useState } from 'react';
import { X } from 'lucide-react';
import './ImageModal.css';

const ImageModal = ({ src, alt, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <div onClick={openModal} style={{ cursor: 'pointer', display: 'inline-block' }} className="image-modal-trigger">
                {children}
            </div>
            {isOpen && (
                <div className="image-modal-overlay" onClick={closeModal}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="image-modal-close" onClick={closeModal}>
                            <X size={24} />
                        </button>
                        <img src={src} alt={alt} className="image-modal-image" />
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageModal;

