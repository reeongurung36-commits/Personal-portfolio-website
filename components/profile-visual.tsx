import Image from "next/image";
import { isConfigured, siteConfig } from "@/lib/site-config";

export function ProfileVisual({ compact = false }: { compact?: boolean }) {
  const hasPhoto = isConfigured(siteConfig.profilePhoto);
  return (
    <div className={`profile-visual ${compact ? "compact" : ""}`}>
      <div className="portrait-frame">
        {hasPhoto ? (
          <Image src={siteConfig.profilePhoto} alt={`Portrait of ${siteConfig.name}`} fill sizes="(max-width: 768px) 90vw, 42vw" className="portrait-image" priority />
        ) : (
          <div className="portrait-placeholder" role="img" aria-label="Profile photo placeholder; update profilePhoto in the site configuration">
            <span className="portrait-monogram">RG</span>
            <span>Add your profile photo</span>
          </div>
        )}
      </div>
    </div>
  );
}
