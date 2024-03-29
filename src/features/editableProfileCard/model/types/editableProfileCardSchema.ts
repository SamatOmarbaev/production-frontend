import { Profile } from '@/entities/Profile';
import { validateProfileErrors } from '../consts/consts';

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readOnly?: boolean;
    validateError?: validateProfileErrors[];
}
