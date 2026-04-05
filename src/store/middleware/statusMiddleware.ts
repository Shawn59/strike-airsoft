import { notificationOpen } from 'shared/ui';
import { StatusMiddlewareType } from './types';
import { statusList } from 'shared/api/baseService';

export const statusMiddleware: StatusMiddlewareType = () => (next) => (action) => {
  // @ts-ignore
  //console.log(action?.payload?.data?.message);
  if (
    typeof action === 'object' &&
    action !== null &&
    'payload' in action &&
    'type' in action &&
    ('error' in action || 'meta' in action)
  ) {
    const { internalServerError, forbidden, unauthorized, notFound } = statusList;
    const split = (action.type as string).split('/');
    if ('error' in action) {
      if (typeof action.payload === 'object' && action.payload !== null && 'status' in action.payload) {
        const message: string | undefined =
          'data' in action.payload &&
          typeof action.payload.data === 'object' &&
          action.payload.data !== null &&
          'message' in action.payload.data &&
          typeof action.payload.data.message === 'string'
            ? action.payload.data.message
            : undefined;

        if (action.payload.status === internalServerError) {
          notificationOpen(['сервера', message], 'error');
        } else if (action.payload.status === unauthorized) {
          notificationOpen(['авторизации', message], 'error');
        } else if (action.payload.status === forbidden) {
          notificationOpen(['доступа', message], 'error');
        } else if (action.payload.status === notFound) {
          notificationOpen(['адреса', message], 'error');
        }
      }
    } else if (!('error' in action) && split[split.length - 1] === 'fulfilled' && split[0] !== 'reviewsAPI') {
      notificationOpen(['Успешно'], 'success');
    }
  }
  return next(action);
};
