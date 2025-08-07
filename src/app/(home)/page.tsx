import { InstagramIcon, MnetPlusIcon, NaverBlogIcon, YoutubeIcon } from '@/shared/icon';
import TextType from './ui/text-type';
import Image from 'next/image';

const SNS_LINKS = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCrDa_5OU-rhvXqWlPx5hgKQ',
    icon: YoutubeIcon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hanr0r0/?hl=ko',
    icon: InstagramIcon,
  },
  {
    name: 'Naver Blog',
    href: 'https://blog.naver.com/hanr0r0',
    icon: NaverBlogIcon,
  },
  {
    name: 'Mnet+',
    href: 'https://artist.mnetplus.world/main/stg/hanroro',
    icon: MnetPlusIcon,
  },
];

export default function Home() {
  return (
    <div className='flex min-h-dvh w-full items-center justify-center max-w-3xl flex-col mx-auto gap-12 py-12'>
      <Image className='rounded-full' src='/hanroro.jpg' alt='background' width={100} height={100} />

      <TextType
        className='text-xl md:text-4xl font-bold text-center whitespace-pre-line h-[154px] md:h-[280px] leading-[1.3]'
        text={`당신은 무엇 때문에 죽고 싶나요?\n 그 이유가 명확한 당신! 우리와 함께합시다\n 당신은 무엇을 위해 살아가고 있나요?\n 그 무엇을 모르는 당신! 우리가 필요합니다\n 가입을 원할 시, 뒷면의 "티켓"을 갖고\n 내일 오후 5시 "음악실"로 오세요`}
        typingSpeed={130}
        pauseDuration={500}
        showCursor={true}
        cursorCharacter='|'
        loop={false}
      />

      <div className='flex gap-6 justify-center'>
        {SNS_LINKS.map((link) => (
          <a
            key={link.name}
            className='group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110'
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={link.name}
          >
            <link.icon width={24} height={24} />
          </a>
        ))}
      </div>
    </div>
  );
}
