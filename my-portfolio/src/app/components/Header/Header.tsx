import Image from "next/image";
import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Hi, I´m Samuel 👋</h1>
        <h2>Software Engineer</h2>
      </div>
      <Image
        src="/me.jpeg"
        alt="Vercel"
        width={280}
        height={280}
        priority
      />
    </div>
  )
}