import type { SocialMediaButtonProps } from "../types/socialMediaButtonTypes";

const SocialMediaButton = ({ icon, href }: SocialMediaButtonProps) => {
  return (
    <div
      className="flex items-center justify-center h-8 w-8 bg-tertiary! rounded-full! cursor-pointer"
      role="button"
    >
      <a href={href} target="_blank">
        {icon}
      </a>
    </div>
  );
};

export default SocialMediaButton;
