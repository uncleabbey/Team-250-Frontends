import {
  faHandshake,
  faMoneyBill,
  faPhone,
  faSeedling,
  faSignOutAlt,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

export default [
  {
    href: '/profile',
    icon: faUserCircle,
    id: 1,
    name: 'Profile',
    Status: 'active'
  },
  {
    href: '/profile',
    icon: faSeedling,
    id: 2,
    name: 'Get Fertilizers',
    Status: 'Unactive'
  },
  {
    href: '/profile',
    icon: faHandshake,
    id: 3,
    name: 'Our Next Seminar',
    Status: 'Unactive'
  },
  {
    href: '/profile',
    icon: faPhone,
    id: 4,
    name: 'Contact Us',
    Status: 'Unactive'
  },
  {
    href: '/profile',
    icon: faMoneyBill,
    id: 5,
    name: 'Request for Loan',
    Status: 'unactive'
  },
  {
    href: '/profile',
    icon: faSignOutAlt,
    id: 6,
    name: 'Log Out',
    Status: 'Unactive'
  }
];
