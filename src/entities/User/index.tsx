export type { User, UserSchema } from './model/types/user';
export { UserRole } from './model/consts/consts';
export { userActions, userReducer } from './model/slice/UserSlice';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { isUserAdmin, isUserManager, getUserRole } from './model/selectors/roleSelector';
export { useJsonSettings } from './model/selectors/jsonSettings';
export { saveJsonSettings } from './model/services/saveJsonSettings';