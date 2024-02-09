import { StateSchema } from 'app/providers/StoreProvider';

export const getRecomendationsIsLoading = (state: StateSchema) => state.articlesDetailsPage?.recomendations.isLoading;
export const getRecomendationsError = (state: StateSchema) => state.articlesDetailsPage?.recomendations.error;
