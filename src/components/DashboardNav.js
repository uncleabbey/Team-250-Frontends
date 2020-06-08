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
    icon: faUserCircle,
    id: 1,
    name: 'Products',
    Status: 'active',
    to: '/products/farmer'
  },
  {
    icon: faSeedling,
    id: 2,
    name: 'Add Products',
    Status: 'Unactive',
    to: '/product/add'
  },
  {
    icon: faHandshake,
    id: 3,
    name: 'Orders',
    Status: 'Unactive',
    to: '/orders/farmer'
  },
  {
    icon: faPhone,
    id: 4,
    name: 'Get Fertilizers',
    Status: 'Unactive',
    to: '/fertilizer'
  },
  {
    icon: faMoneyBill,
    id: 5,
    name: 'Our next Seminar',
    Status: 'unactive',
    to: '/seminar'
  },
  {
    icon: faSignOutAlt,
    id: 6,
    name: 'Blog',
    Status: 'Unactive',
    to: '/blog'
  }
];
