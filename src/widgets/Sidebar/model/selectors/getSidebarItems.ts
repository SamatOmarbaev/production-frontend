import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

import MainIconDeprecated from '@/shared/assets/icons/deprecated/main.svg';
import AboutIconDeprecated from '@/shared/assets/icons/deprecated/about.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/deprecated/Profile.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/deprecated/articleIcon.svg';

import MainIcon from '@/shared/assets/icons/redesigned/home.svg';
import AboutIcon from '@/shared/assets/icons/redesigned/Info.svg';
import ProfileIcon from '@/shared/assets/icons/redesigned/avatar.svg';
import ArticlesIcon from '@/shared/assets/icons/redesigned/article.svg';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const SidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => MainIconDeprecated,
        on: () => MainIcon,
      }),
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
      text: 'О нас',
    },
  ];

  if (userData) {
    SidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticlesIconDeprecated,
          on: () => ArticlesIcon,
        }),
        text: 'Статьи',
        authOnly: true,
      },
    );
  }

  return SidebarItemsList;
});
