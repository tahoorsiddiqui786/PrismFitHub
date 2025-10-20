'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';
import { cn } from '@/utils/cn';

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  className?: string;
}

const NAVIGATION = {
  home: { href: '/', label: 'Home' },
  courses: { href: '/courses', label: 'Courses' },
  contact: { href: '/contact', label: 'Contact' },
} as const;

const COURSE_CATEGORIES: NavLink[] = [
  { href: '/courses/beginners-fitness-foundations', label: 'Beginner Fundamentals' },
  { href: '/courses/advanced-strength-training', label: 'Strength Training' },
  { href: '/courses/yoga-for-beginners', label: 'Yoga & Flexibility' },
  { href: '/courses/nutrition-meal-planning', label: 'Nutrition & Wellness' },
  { href: '/courses/hiit-workout-mastery', label: 'HIIT Training' },
  { href: '/courses', label: 'Explore All Courses' },
];

export default function Navbar({ className }: NavbarProps): React.ReactElement {
  const [active, setActive] = useState<string | null>(null);

  const handleMenuClose = useCallback(() => {
    setActive(null);
  }, []);

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-10 z-50 mx-auto max-w-4xl',
        className
      )}
      aria-label="Main navigation"
    >
      <Menu setActive={setActive}>
        <Link href={NAVIGATION.home.href} onClick={handleMenuClose}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={NAVIGATION.home.label}
          />
        </Link>

        <MenuItem
          setActive={setActive}
          active={active}
          item={NAVIGATION.courses.label}
        >
          <div className="flex flex-col space-y-3 text-sm">
            {COURSE_CATEGORIES.map((course) => (
              <HoveredLink
                key={course.href}
                href={course.href}
                onClick={handleMenuClose}
              >
                {course.label}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>

        <Link href={NAVIGATION.contact.href} onClick={handleMenuClose}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={NAVIGATION.contact.label}
          />
        </Link>
      </Menu>
    </nav>
  );
}