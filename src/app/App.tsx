import { FC, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />
  }

  const AppOldDesigned = <div className={classNames('app', {}, [theme])}>
    <Suspense fallback="">
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  </div>

  const AppRedesigned = <div className={classNames('app_redesigned', {}, [theme])}>
    <Suspense fallback="">
      <MainLayout
        header={<Navbar />}
        content={<AppRouter />}
        sidebar={<Sidebar />}
      />
    </Suspense>
  </div>

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={AppOldDesigned}
      on={AppRedesigned}
    />
  )
};
