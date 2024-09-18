import { Icons } from '@/components/theme/icons/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Login() {
  return (
    <section className='grid h-dvh w-full place-content-center'>
      <Card className='phone-small: flex h-dvh flex-col items-center justify-center p-4 drop-shadow-md phone:h-full phone:w-full phone:justify-between tablet:min-w-104'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col items-center justify-center'>
            <div>
              <Icons.logoNoBg className='h-20 w-20' />
            </div>
            <p className='bg-gradient-to-t from-gradient_light to-gradient_dark bg-clip-text text-4xl font-medium text-transparent'>
              CRWizard
            </p>
          </div>
          <h3 className='text-center text-xl'>
            Welcome to your AI Reviewer{' '}
            <span className='text-[#2fbd92]'>Wizard!</span>
          </h3>
          <p className='mb-4 text-center text-sm text-description'>
            Enhance your development with your Coder Review Assistant
          </p>
        </div>
        <div />
        <Button variant='outline' className='group flex gap-2'>
          Login with GitHib{' '}
          <span>
            <Icons.githubLogo
              fontSize='1.5rem'
              className='transition-color duration-100 group-hover:text-[#238e6d]'
            />
          </span>
        </Button>
      </Card>
    </section>
  );
}
