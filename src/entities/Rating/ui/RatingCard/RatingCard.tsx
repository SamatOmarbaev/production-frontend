import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedBackTitle?: string;
  hasFeedBack?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedBack?: string) => void;
  rate?: number;
}

export const RatingCard: FC<RatingCardProps> = (props) => {
  const {
    className, title, feedBackTitle, hasFeedBack, onCancel, onAccept, rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectedStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedBack) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedBack, onAccept]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedBackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
    </>
  );

  return (
    <Card max className={className}>
      <VStack align="center" gap="16">
        <Text title={starsCount ? t('Спасибо за оценку') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectedStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          {modalContent}
          <HStack max gap="8" justify="end">
            <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
              {t('Закрыть')}
            </Button>
            <Button onClick={acceptHandler}>
              {t('Отправить')}
            </Button>
          </HStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap="32">
            {modalContent}
            <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
};
