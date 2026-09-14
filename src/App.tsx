import SiteLayout from '@/components/layout/SiteLayout'
import Company from '@/pages/Company'
import Research from '@/pages/Research'
import Zora from '@/pages/Zora'

export const routes = [
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <Company /> },
      { path: 'research', element: <Research /> },
      { path: 'zora', element: <Zora /> },
    ],
  },
]
