import { FiGithub } from 'react-icons/fi';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function Example() {
  return (
    <div className='mx-auto max-w-screen-md overflow-hidden rounded-2xl border p-10'>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'>
        <Card className='sm:col-span-2'>
          <CardHeader className='pb-3'>
            <CardTitle>Your Orders</CardTitle>
            <CardDescription className='max-w-lg text-balance leading-relaxed'>
              Introducing Our Dynamic Orders Dashboard for Seamless Management
              and Insightful Analysis.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Create New Order</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardDescription>This Week</CardDescription>
            <CardTitle className='text-4xl'>$1329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-xs text-muted-foreground'>
              +25% from last week
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={25} aria-label='25% increase' />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardDescription>This Month</CardDescription>
            <CardTitle className='text-3xl'>$5,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-xs text-muted-foreground'>
              +10% from last month
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={12} aria-label='12% increase' />
          </CardFooter>
        </Card>
        <div className='col-start-2 col-end-4 flex justify-center'>
          <FiGithub size='50px' />
        </div>
      </div>
    </div>
  );
}
