import { InstagramIcon, MnetPlusIcon, NaverBlogIcon, YoutubeIcon } from '@/shared/icon';
import TextType from './ui/text-type';
import { YouTubeEmbed } from '@next/third-parties/google';
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

      <div className='w-full px-8'>
        <div className='w-full mx-auto'>
          <YouTubeEmbed videoid='tKERw3_ked0' />
        </div>
      </div>

      <div className='flex flex-col gap-8 mx-auto px-4'>
        <TextType
          className='text-4xl font-bold text-center'
          text={['한로로', 'HANRORO', '자몽살구클럽']}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter='|'
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
    </div>
  );
}
