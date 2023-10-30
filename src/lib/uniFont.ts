import localFont from 'next/font/local';

export const uni = localFont({
  src: [
    {
      path: '../../public/fonts/UniNeue-Light.otf',
      weight: '300',
    },
    {
      path: '../../public/fonts/UniNeue-Book.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/UniNeue-Regular.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/UniNeue-Bold.otf',
      weight: '600',
    },
    {
      path: '../../public/fonts/UniNeue-Heavy.otf',
      weight: '800',
    },
    {
      path: '../../public/fonts/UniNeue-Black.otf',
      weight: '900',
    },
  ],
  variable: '--font-uni',
});
