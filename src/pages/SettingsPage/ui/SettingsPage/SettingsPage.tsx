
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/redesigned/Text';
import { PageWrapper } from '@/widgets/PageWrapper';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';


const SettingsPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            <VStack gap='16'>
                <Text title={t("Settings page")} />
                <UiDesignSwitcher />
            </VStack>
        </PageWrapper>
    );
}

export default SettingsPage