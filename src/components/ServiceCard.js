// components/ServiceCard.js
import Link from 'next/link';

export default function ServiceCard({ title, description, icon = null, link = null }) {
  const cardContent = (
    <>
      {icon && <div className="text-gold mb-3 fs-3">{icon}</div>}
      <h3 className="card-title text-gold mb-3">{title}</h3>
      <p className="card-text text-white mb-4">{description}</p>
      {link && (
        <div className="mt-auto">
          <Link href={link} className="btn btn-outline-gold">
            Mehr erfahren <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <div className="card bg-black-custom h-100 service-card">
        <div className="card-body d-flex flex-column">
          {cardContent}
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-black-custom h-100 service-card">
      <div className="card-body d-flex flex-column">
        {cardContent}
      </div>
    </div>
  );
}